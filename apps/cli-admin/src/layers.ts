import { BunServices } from "@effect/platform-bun"
import { Layer } from "effect"
import { DomainSchemaServiceLive } from "./services/domain-schema.js"

/** Application layers merged for `Command.run` / `BunRuntime.runMain`. */
export const CliAdminLive = Layer.mergeAll(BunServices.layer, DomainSchemaServiceLive)
