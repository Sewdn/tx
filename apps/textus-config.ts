export type FlyBuildMode = "vite-static" | "storybook";

export type FlyHostedApp = {
  readonly appName: string;
  readonly host: string;
  readonly key: string;
  readonly operations: {
    readonly aliases: readonly string[];
    readonly allOrder: number;
    readonly appDir: string;
    readonly buildMode: FlyBuildMode;
    readonly configPath: string;
    readonly deployContext: string;
    readonly deployOrder: number;
  };
  readonly publicUrl: string;
};

export type FlyComponentRegistryEntry = {
  readonly aliases: readonly string[];
  readonly appDir: string;
  readonly appName: string;
  readonly buildMode: FlyBuildMode;
  readonly configPath: string;
  readonly deployContext: string;
  readonly key: string;
};

const baseDomain = "textus.dev";
const primaryRegion = "ams";

function toHttpsUrl(host: string): string {
  return `https://${host}`;
}

const flyAppDefinitions = [
  {
    key: "ui-storybook",
    appName: "textus-ui",
    host: `ui.${baseDomain}`,
    operations: {
      aliases: ["ui-storybook", "ui"],
      allOrder: 10,
      appDir: "packages/ui",
      buildMode: "storybook" as const,
      configPath: "apps/textus-static-ui-storybook/fly.toml",
      deployContext: "apps/textus-static-ui-storybook",
      deployOrder: 10,
    },
  },
  {
    key: "ui-lib-storybook",
    appName: "textus-ui-lib",
    host: `ui-lib.${baseDomain}`,
    operations: {
      aliases: ["ui-lib-storybook", "ui-lib"],
      allOrder: 20,
      appDir: "packages/ui-lib",
      buildMode: "storybook" as const,
      configPath: "apps/textus-static-ui-lib-storybook/fly.toml",
      deployContext: "apps/textus-static-ui-lib-storybook",
      deployOrder: 20,
    },
  },
  {
    key: "pt1",
    appName: "textus-pt1-prototype",
    host: `pt1.${baseDomain}`,
    operations: {
      aliases: ["pt1", "prototype", "frontend-pt1"],
      allOrder: 30,
      appDir: "apps/frontend-pt1",
      buildMode: "vite-static" as const,
      configPath: "apps/textus-static-pt1/fly.toml",
      deployContext: "apps/textus-static-pt1",
      deployOrder: 30,
    },
  },
] as const satisfies readonly Omit<FlyHostedApp, "publicUrl">[];

const flyHostedApps: readonly FlyHostedApp[] = flyAppDefinitions.map((app) => ({
  ...app,
  publicUrl: toHttpsUrl(app.host),
}));

export const flyDeploymentConfig = {
  baseDomain,
  primaryRegion,
  apps: Object.fromEntries(flyHostedApps.map((app) => [app.key, app])) as Record<
    (typeof flyAppDefinitions)[number]["key"],
    FlyHostedApp
  >,
  definitions: flyAppDefinitions,
} as const;

export const flyComponentRegistry = {
  components: flyHostedApps.map(
    (app): FlyComponentRegistryEntry => ({
      key: app.key,
      appName: app.appName,
      aliases: app.operations.aliases,
      appDir: app.operations.appDir,
      buildMode: app.operations.buildMode,
      configPath: app.operations.configPath,
      deployContext: app.operations.deployContext,
    }),
  ),
  deployOrder: flyHostedApps
    .slice()
    .sort((left, right) => left.operations.deployOrder - right.operations.deployOrder)
    .map((app) => app.key),
  allOrder: flyHostedApps
    .slice()
    .sort((left, right) => left.operations.allOrder - right.operations.allOrder)
    .map((app) => app.key),
} as const;

export const cliAdminConfig = {
  prototypeAppUrl: flyDeploymentConfig.apps.pt1.publicUrl,
  storybookUiOrigin: flyDeploymentConfig.apps["ui-storybook"].publicUrl,
  storybookUiLibOrigin: flyDeploymentConfig.apps["ui-lib-storybook"].publicUrl,
} as const;
