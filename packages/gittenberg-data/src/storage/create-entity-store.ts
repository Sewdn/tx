import { createLocalStorageEntityStore } from "./local-storage-store.js"
import { createMemoryEntityStore } from "./memory-store.js"
import { createSqliteEntityStore } from "./sqlite-store.js"
import type { CreateEntityStoreOptions, EntityStore } from "./types.js"

export async function createEntityStore(
  options: CreateEntityStoreOptions,
): Promise<EntityStore> {
  const namespace = options.namespace ?? "gittenberg-prototype"

  switch (options.backend) {
    case "memory":
      return createMemoryEntityStore()
    case "localStorage":
      return createLocalStorageEntityStore(namespace)
    case "sqlite":
      return createSqliteEntityStore({ namespace, persist: true })
    default: {
      const exhaustive: never = options.backend
      throw new Error(`Unknown backend: ${exhaustive}`)
    }
  }
}
