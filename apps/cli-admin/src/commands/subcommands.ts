import { Command } from "effect/unstable/cli";
import { domainCommand } from "./domain.js";
import { flyCommand } from "./fly.js";
import { helloCommand } from "./hello.js";

/**
 * Root command and Effect CLI subcommands. New commands are wired here by:
 *   scaffold cli add-command <name>
 */
export const rootCommand = Command.make("cli-admin").pipe(
  Command.withSubcommands([
    // Commands registered below (scaffold cli add-command)
    helloCommand,
    domainCommand,
    flyCommand,
  ]),
);
