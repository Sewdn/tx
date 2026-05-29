import { gittenbergEntityDefinitions } from "../entities/entity-registry.js"
import type { EntityStore } from "../storage/types.js"
import {
  seedActivityEvents,
  seedAgents,
  seedAuthors,
  seedCollectionItems,
  seedCreativeStudioSessions,
  seedCuratedCollections,
  seedDiscoveryShelves,
  seedLibraryEditions,
  seedLiteraryBuilds,
  seedManuscriptFiles,
  seedMembershipPlans,
  seedMetricSnapshots,
  seedPatrons,
  seedPermawebAnchors,
  seedPrintOrders,
  seedPrintProducts,
  seedProvenanceCertificates,
  seedReaderChapters,
  seedRepositories,
  seedRevisions,
  seedUserCollections,
  seedUserMemberships,
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
  author: seedAuthors,
  patron: seedPatrons,
  permaweb_anchor: seedPermawebAnchors,
  provenance_certificate: seedProvenanceCertificates,
  membership_plan: seedMembershipPlans,
  user_membership: seedUserMemberships,
  user_collection: seedUserCollections,
  collection_item: seedCollectionItems,
  discovery_shelf: seedDiscoveryShelves,
  curated_collection: seedCuratedCollections,
  creative_studio_session: seedCreativeStudioSessions,
  print_product: seedPrintProducts,
  print_order: seedPrintOrders,
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
