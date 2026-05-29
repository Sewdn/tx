import { Command } from "effect/unstable/cli"
import { Effect } from "effect"
import chalk from "chalk"
import { outro } from "@clack/prompts"
import { DomainSchemaService } from "../services/domain-schema.js"

export const domainValidateSchemaCommand = Command.make("validate-schema", {}, () =>
  Effect.gen(function* () {
    const domainSchema = yield* DomainSchemaService
    const result = yield* domainSchema.validate()
    console.log(
      chalk.green(
        `Domain GraphQL: validated ${result.moduleCount} modules (${result.typeCount} named types)`,
      ),
    )
    outro(chalk.dim(`domain/graphql — ${result.modules.join(", ")}`))
  }).pipe(
    Effect.catchTag("DomainSchemaError", (error) =>
      Effect.sync(() => {
        console.error(chalk.red(error.message))
        outro(chalk.red("Domain schema validation failed."))
        process.exitCode = 1
      }),
    ),
  ),
).pipe(Command.withDescription("Validate merged SDL under domain/graphql/"))
