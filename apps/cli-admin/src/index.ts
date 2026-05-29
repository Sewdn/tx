#!/usr/bin/env bun
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { Command } from "effect/unstable/cli"
import { Effect } from "effect"
import { rootCommand } from "./commands/subcommands.js"
import { CliAdminLive } from "./layers.js"

const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8")) as {
  version?: string
}

const program = Command.run(rootCommand, {
  version: pkg.version ?? "0.0.0",
}).pipe(Effect.provide(CliAdminLive))

const exit = await Effect.runPromiseExit(program)
if (exit._tag === "Failure") {
  console.error(exit.cause)
  process.exit(1)
}
