import { GITTENBERG_DEFAULT_STORAGE_NAMESPACE } from "../constants.js"
import { createGittenbergPorts } from "../crud/create-ports.js"
import type { GittenbergPorts, GittenbergUiSeed } from "../ports.js"
import { seedUi } from "../seed/gittenberg-seed.js"
import { resetAndSeedGittenbergStore, seedGittenbergStoreIfEmpty } from "../seed/apply-seed.js"
import { createEntityStore } from "../storage/create-entity-store.js"
import type { EntityStore, GittenbergBackend } from "../storage/types.js"

export type GittenbergDataService = {
  readonly backend: GittenbergBackend
  readonly namespace: string
  readonly store: EntityStore
  readonly ports: GittenbergPorts
  readonly ui: GittenbergUiSeed
  seedIfEmpty(): Promise<void>
  resetToSeed(): Promise<void>
  dispose(): Promise<void>
}

export type CreateGittenbergDataServiceOptions = {
  /** Persistence backend. Defaults to `sqlite` (WASM + localStorage snapshot). */
  backend?: GittenbergBackend
  /** Storage namespace to isolate prototype datasets. */
  namespace?: string
  /** When true (default), load demo seed data if tables are empty. */
  seedIfEmpty?: boolean
  /** sql.js WASM resolver for the `sqlite` backend (Vite apps use the default bundler URL). */
  locateFile?: (file: string) => string
}

export async function createGittenbergDataService(
  options: CreateGittenbergDataServiceOptions = {},
): Promise<GittenbergDataService> {
  const backend = options.backend ?? "sqlite"
  const namespace = options.namespace ?? GITTENBERG_DEFAULT_STORAGE_NAMESPACE
  const shouldSeed = options.seedIfEmpty ?? true

  const store = await createEntityStore({ backend, namespace, locateFile: options.locateFile })
  await store.init()

  const ports = createGittenbergPorts(store)

  const service: GittenbergDataService = {
    backend,
    namespace,
    store,
    ports,
    ui: seedUi,
    async seedIfEmpty() {
      await seedGittenbergStoreIfEmpty(store)
    },
    async resetToSeed() {
      await resetAndSeedGittenbergStore(store)
    },
    async dispose() {
      await store.dispose?.()
    },
  }

  if (shouldSeed) {
    await service.seedIfEmpty()
  }

  return service
}
