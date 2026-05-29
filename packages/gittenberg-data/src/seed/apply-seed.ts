import { gittenbergEntityDefinitions } from "../entities/entity-registry.js"
import type { EntityStore } from "../storage/types.js"
import {
  seedActivityEvents,
  seedAgents,
  seedLibraryEditions,
  seedLiteraryBuilds,
  seedManuscriptFiles,
  seedMetricSnapshots,
  seedReaderChapters,
  seedRepositories,
  seedRevisions,
} from "./gittenberg-seed.js"

const seedByTable = {
  repository: seedRepositories,
  manuscript_file: seedManuscriptFiles,
  revision: seedRevisions,
  agent: seedAgents,
  literary_build: seedLiteraryBuilds,
  library_edition: seedLibraryEditions,
  activity_event: seedActivityEvents,
  reader_chapter: seedReaderChapters,
  metric_snapshot: seedMetricSnapshots,
} as const

export async function seedGittenbergStoreIfEmpty(store: EntityStore) {
  for (const definition of gittenbergEntityDefinitions) {
    const count = await store.count(definition.table)
    if (count > 0) continue

    const rows = seedByTable[definition.table]
    for (const row of rows) {
      await store.upsert(definition.table, row)
    }
  }
}

export async function resetAndSeedGittenbergStore(store: EntityStore) {
  for (const definition of gittenbergEntityDefinitions) {
    const rows = await store.list(definition.table)
    for (const row of rows) {
      await store.remove(definition.table, row.id)
    }
    const seedRows = seedByTable[definition.table]
    for (const row of seedRows) {
      await store.upsert(definition.table, row)
    }
  }
}
