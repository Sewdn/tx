import { Argument, Command, Flag } from "effect/unstable/cli";
import { Option } from "effect";
import { runFlyCommand, type FlyAction } from "../services/fly-operations-service.js";

function makeFlyActionCommand(action: FlyAction, description: string) {
  return Command.make(
    action,
    {
      targets: Argument.string("targets").pipe(Argument.withDefault("all")),
      flyArgs: Flag.optional(
        Flag.string("fly-args").pipe(
          Flag.withDescription(
            "Optional extra Fly arguments as a space-separated string, for example '--remote-only'",
          ),
        ),
      ),
    },
    ({ flyArgs, targets }) =>
      runFlyCommand({
        action,
        flyArgs: Option.isSome(flyArgs) ? flyArgs.value : undefined,
        targets,
      }),
  ).pipe(Command.withDescription(description));
}

export const flyDeployCommand = makeFlyActionCommand(
  "deploy",
  "Build and deploy one or more Fly components (`all`, `pt1`, `ui-storybook`, `ui-lib-storybook`, or comma-separated combinations). Static and Storybook targets build directly from workspace sources.",
);

export const flyLogsCommand = makeFlyActionCommand(
  "logs",
  "Show Fly logs for one or more components.",
);

export const flyStatusCommand = makeFlyActionCommand(
  "status",
  "Show Fly status for one or more components.",
);

export const flyOpenCommand = makeFlyActionCommand(
  "open",
  "Open one or more Fly apps in the browser.",
);

export const flySshCommand = makeFlyActionCommand(
  "ssh",
  "Open a Fly SSH console for one or more components.",
);

export const flyMachinesCommand = makeFlyActionCommand(
  "machines",
  "List Fly machines for one or more components.",
);

export const flyCommand = Command.make("fly").pipe(
  Command.withSubcommands([
    flyDeployCommand,
    flyLogsCommand,
    flyStatusCommand,
    flyOpenCommand,
    flySshCommand,
    flyMachinesCommand,
  ]),
  Command.withDescription("Fly.io deployment and operational tasks."),
);
