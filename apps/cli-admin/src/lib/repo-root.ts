import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

/** Monorepo root (`tx/`), four levels above `src/commands/`. */
export const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "..")

export const domainGraphqlDir = join(repoRoot, "domain", "graphql")
