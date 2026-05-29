import { mergeTypeDefs } from "@graphql-tools/merge"
import { buildASTSchema, parse, type GraphQLError } from "graphql"
import { Data, Effect, Layer, ServiceMap } from "effect"
import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { domainGraphqlDir } from "../lib/repo-root.js"

export type DomainSchemaValidation = {
  readonly moduleCount: number
  readonly typeCount: number
  readonly modules: readonly string[]
}

export class DomainSchemaError extends Data.TaggedError("DomainSchemaError")<{
  readonly message: string
}> {}

/**
 * DomainSchemaService — validates merged GraphQL SDL under `domain/graphql/`.
 */
export class DomainSchemaService extends ServiceMap.Service<
  DomainSchemaService,
  {
    readonly validate: () => Effect.Effect<DomainSchemaValidation, DomainSchemaError>
  }
>()("DomainSchemaService") {}

export function validateDomainGraphqlSchema(
  graphqlDir: string = domainGraphqlDir,
): DomainSchemaValidation {
  const files = readdirSync(graphqlDir)
    .filter((name) => name.endsWith(".graphql") && name !== "schema.graphql")
    .sort()

  const documents = files.map((name) =>
    parse(readFileSync(join(graphqlDir, name), "utf8")),
  )
  const merged = mergeTypeDefs(documents)
  const schema = buildASTSchema(merged, { assumeValid: true })

  const typeCount = Object.keys(schema.getTypeMap()).filter((name) => !name.startsWith("__")).length

  return { moduleCount: files.length, typeCount, modules: files }
}

export function createDomainSchemaService(graphqlDir: string = domainGraphqlDir) {
  return {
    validate: () =>
      Effect.try({
        try: () => validateDomainGraphqlSchema(graphqlDir),
        catch: (cause) =>
          new DomainSchemaError({ message: formatDomainSchemaError(cause) }),
      }),
  }
}

export type DomainSchemaServiceApi = ReturnType<typeof createDomainSchemaService>

export const DomainSchemaServiceLive = Layer.succeed(DomainSchemaService)(
  createDomainSchemaService(),
)

function formatDomainSchemaError(cause: unknown): string {
  if (cause && typeof cause === "object" && "message" in cause) {
    const message = String((cause as GraphQLError).message)
    const locations = (cause as GraphQLError).locations
    if (locations?.length) {
      const { line, column } = locations[0]!
      return `${message} (${line}:${column})`
    }
    return message
  }
  return "Domain GraphQL schema validation failed"
}
