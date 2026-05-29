import { Command } from "effect/unstable/cli"
import { domainValidateSchemaCommand } from "./domain-validate-schema.js"

export const domainCommand = Command.make("domain").pipe(
  Command.withDescription("Gittenberg domain model (GraphQL SDL at repo domain/)"),
  Command.withSubcommands([domainValidateSchemaCommand]),
)
