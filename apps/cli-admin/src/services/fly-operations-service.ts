import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import {
  flyComponentRegistry,
  type FlyComponentRegistryEntry,
} from "../../../textus-config.js";
import { Effect } from "effect";
import { repoRoot } from "../lib/repo-root.js";

export type FlyAction = "deploy" | "logs" | "status" | "open" | "ssh" | "machines";

type FlyComponentConfig = FlyComponentRegistryEntry & {
  readonly appDir: string;
  readonly configPath: string;
  readonly deployContext: string;
};

export type FlyCommandOptions = {
  readonly action: FlyAction;
  readonly flyArgs?: string;
  readonly targets: string;
};

function getResolvedComponentConfigs(): readonly FlyComponentConfig[] {
  return flyComponentRegistry.components.map((component) => ({
    ...component,
    appDir: resolve(repoRoot, component.appDir),
    configPath: resolve(repoRoot, component.configPath),
    deployContext: resolve(repoRoot, component.deployContext),
  }));
}

function findComponent(
  target: string,
  componentConfigs: readonly FlyComponentConfig[],
): FlyComponentConfig | null {
  const normalized = target.trim().toLowerCase();
  return (
    componentConfigs.find(
      (component) => component.key === normalized || component.aliases.includes(normalized),
    ) ?? null
  );
}

function ensureFlyInstalled(): Effect.Effect<void, Error> {
  return Effect.sync(() => {
    if (Bun.which("fly")) {
      return;
    }
    throw new Error(
      "fly CLI not found. Install it from https://fly.io/docs/hands-on/install-flyctl/.",
    );
  });
}

function splitFlyArgs(raw?: string): readonly string[] {
  const value = raw?.trim() ?? "";
  if (value.length === 0) {
    return [];
  }
  return value.split(/\s+/).filter((part) => part.length > 0);
}

function formatKnownTargets(): string {
  return "all, pt1, ui-storybook, ui-lib-storybook";
}

function parseTargets(
  action: FlyAction,
  targetInput: string,
): Effect.Effect<readonly FlyComponentConfig[], Error> {
  return Effect.sync(() => {
    const componentConfigs = getResolvedComponentConfigs();
    const normalizedInput = targetInput.trim();
    const rawTargets =
      normalizedInput.length > 0
        ? normalizedInput
            .split(",")
            .map((part) => part.trim())
            .filter(Boolean)
        : ["all"];

    if (rawTargets.length === 0) {
      throw new Error("At least one Fly component target is required.");
    }

    if (rawTargets.includes("all")) {
      const order =
        action === "deploy" ? flyComponentRegistry.deployOrder : flyComponentRegistry.allOrder;
      return order.map((key) => componentConfigs.find((component) => component.key === key)!);
    }

    const resolved: FlyComponentConfig[] = [];
    for (const rawTarget of rawTargets) {
      const match = findComponent(rawTarget, componentConfigs);
      if (!match) {
        throw new Error(`Unknown target: ${rawTarget}. Use one of ${formatKnownTargets()}.`);
      }
      if (!resolved.some((component) => component.key === match.key)) {
        resolved.push(match);
      }
    }

    return resolved;
  });
}

function runProcess(command: readonly string[], cwd: string): Effect.Effect<void, Error> {
  return Effect.tryPromise({
    try: async () => {
      const subprocess = Bun.spawn([...command], {
        cwd,
        env: process.env,
        stdin: "inherit",
        stdout: "inherit",
        stderr: "inherit",
      });
      const exitCode = await subprocess.exited;
      if (exitCode !== 0) {
        throw new Error(`Command failed (${exitCode}): ${command.join(" ")} (cwd: ${cwd})`);
      }
    },
    catch: (error) => (error instanceof Error ? error : new Error(String(error))),
  });
}

function copyStorybookStaticToDeployDist(packageDir: string, deployContextDir: string): void {
  const source = resolve(packageDir, "storybook-static");
  const dest = resolve(deployContextDir, "dist");
  if (!existsSync(source)) {
    throw new Error(
      `Missing Storybook output: ${source}. Run \`bun run build-storybook\` in that package or fix build errors.`,
    );
  }
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(resolve(deployContextDir), { recursive: true });
  cpSync(source, dest, { recursive: true });
}

function copyViteDistToDeployDist(appDir: string, deployContextDir: string): void {
  const source = resolve(appDir, "dist");
  const dest = resolve(deployContextDir, "dist");
  if (!existsSync(source)) {
    throw new Error(
      `Missing Vite output: ${source}. Run \`bun run build\` in that app or fix build errors.`,
    );
  }
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(resolve(deployContextDir), { recursive: true });
  cpSync(source, dest, { recursive: true });
}

function buildForDeploy(component: FlyComponentConfig): Effect.Effect<void, Error> {
  switch (component.buildMode) {
    case "vite-static":
      return Effect.log(`Building ${component.key} (Vite static)...`).pipe(
        Effect.andThen(runProcess(["bun", "run", "build"], component.appDir)),
        Effect.andThen(
          Effect.sync(() => copyViteDistToDeployDist(component.appDir, component.deployContext)),
        ),
      );
    case "storybook":
      return Effect.log(`Building ${component.key} (Storybook)...`).pipe(
        Effect.andThen(runProcess(["bun", "run", "build-storybook"], component.appDir)),
        Effect.andThen(
          Effect.sync(() =>
            copyStorybookStaticToDeployDist(component.appDir, component.deployContext),
          ),
        ),
      );
  }
}

function buildFlyCommand(
  action: FlyAction,
  component: FlyComponentConfig,
  flyArgs: readonly string[],
): readonly string[] {
  switch (action) {
    case "deploy":
      return [
        "fly",
        "deploy",
        component.deployContext,
        "--config",
        component.configPath,
        ...flyArgs,
      ];
    case "logs":
      return ["fly", "logs", "--config", component.configPath, ...flyArgs];
    case "status":
      return ["fly", "status", "--config", component.configPath, ...flyArgs];
    case "open":
      return ["fly", "open", "--config", component.configPath, ...flyArgs];
    case "ssh":
      return ["fly", "ssh", "console", "--config", component.configPath, ...flyArgs];
    case "machines":
      return ["fly", "machines", "list", "--config", component.configPath, ...flyArgs];
  }
}

function describeAction(action: FlyAction, component: FlyComponentConfig): string {
  if (action === "deploy") {
    return `==> deploy: ${component.key} (${component.appName})`;
  }
  return `==> ${action}: ${component.key}`;
}

export function runFlyCommand(options: FlyCommandOptions): Effect.Effect<void, Error> {
  const flyArgs = splitFlyArgs(options.flyArgs);

  return ensureFlyInstalled().pipe(
    Effect.andThen(parseTargets(options.action, options.targets)),
    Effect.andThen((components) =>
      Effect.forEach(components, (component) =>
        Effect.log(describeAction(options.action, component)).pipe(
          Effect.andThen(
            options.action === "deploy" ? buildForDeploy(component) : Effect.void,
          ),
          Effect.andThen(runProcess(buildFlyCommand(options.action, component, flyArgs), repoRoot)),
        ),
      ),
    ),
    Effect.asVoid,
  );
}
