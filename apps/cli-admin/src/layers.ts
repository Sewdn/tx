import * as BunChildProcessSpawner from "@effect/platform-bun/BunChildProcessSpawner"
import * as BunFileSystem from "@effect/platform-bun/BunFileSystem"
import * as BunPath from "@effect/platform-bun/BunPath"
import * as BunStdio from "@effect/platform-bun/BunStdio"
import * as BunTerminal from "@effect/platform-bun/BunTerminal"
import { Layer } from "effect"
import { DomainSchemaServiceLive } from "./services/domain-schema.js"

const platformLive = Layer.mergeAll(
  BunFileSystem.layer,
  BunPath.layer,
  BunStdio.layer,
  BunTerminal.layer,
  DomainSchemaServiceLive,
)

/**
 * CLI platform layers (subset of BunServices — excludes socket/http stacks).
 * Requires root override `@effect/platform-node-shared@4.0.0-beta.40` aligned with `effect`.
 */
export const CliAdminLive = BunChildProcessSpawner.layer.pipe(Layer.provideMerge(platformLive))
