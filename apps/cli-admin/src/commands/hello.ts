import { Command } from "effect/unstable/cli";
import { Effect } from "effect";
import chalk from "chalk";
import { outro } from "@clack/prompts";
import Table from "cli-table3";

/**
 * Say hello
 * Example uses chalk, @clack/prompts, and cli-table3 inside an Effect-backed handler.
 */
export const helloCommand = Command.make("hello", {}, () =>
  Effect.sync(() => {
    const table = new Table({ head: [chalk.cyan("Key"), chalk.cyan("Value")] });
    table.push(
      ["Command", "hello"],
      ["Status", chalk.green("Ready")],
    );
    console.log(table.toString());
    outro(chalk.green("Say hello — done."));
  }),
).pipe(Command.withDescription("Say hello"));
