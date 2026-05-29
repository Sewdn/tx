export type { GittenbergPorts, GittenbergUiSeed, FileTreeNode } from "./ports.js"
export { MOBY_REPOSITORY_ID, FOUNDATION_REPOSITORY_ID, DEMO_USER_ID, DEFAULT_REPOSITORY_SLUG } from "./ports.js"
export { GITTENBERG_DEFAULT_STORAGE_NAMESPACE } from "./constants.js"

export type { GittenbergBackend, EntityStore, EntityTableName } from "./storage/types.js"
export { createEntityStore } from "./storage/create-entity-store.js"
export { createMemoryEntityStore } from "./storage/memory-store.js"
export { createLocalStorageEntityStore } from "./storage/local-storage-store.js"
export { createSqliteEntityStore } from "./storage/sqlite-store.js"

export { createPersistedCrudPort } from "./crud/create-crud-port.js"
export { createGittenbergPorts } from "./crud/create-ports.js"

export {
  gittenbergEntityDefinitions,
  repositoryDefinition,
  manuscriptFileDefinition,
  revisionDefinition,
  agentDefinition,
  literaryBuildDefinition,
  libraryEditionDefinition,
  activityEventDefinition,
  readerChapterDefinition,
  metricSnapshotDefinition,
  authorDefinition,
  patronDefinition,
  permawebAnchorDefinition,
  provenanceCertificateDefinition,
  membershipPlanDefinition,
  userMembershipDefinition,
  userCollectionDefinition,
  collectionItemDefinition,
  discoveryShelfDefinition,
  curatedCollectionDefinition,
  creativeStudioSessionDefinition,
  printProductDefinition,
  printOrderDefinition,
} from "./entities/entity-registry.js"

export {
  seedUi,
  seedRepositories,
  seedManuscriptFiles,
  seedRevisions,
  seedAgents,
  seedLiteraryBuilds,
  seedLibraryEditions,
  seedActivityEvents,
  seedReaderChapters,
  seedMetricSnapshots,
  seedAuthors,
  seedPatrons,
  seedPermawebAnchors,
  seedProvenanceCertificates,
  seedMembershipPlans,
  seedUserMemberships,
  seedUserCollections,
  seedCollectionItems,
  seedDiscoveryShelves,
  seedCuratedCollections,
  seedCreativeStudioSessions,
  seedPrintProducts,
  seedPrintOrders,
  editorSampleMarkdown,
} from "./seed/gittenberg-seed.js"
export { seedGittenbergStoreIfEmpty, resetAndSeedGittenbergStore } from "./seed/apply-seed.js"

export {
  AUTHOR_ASIMOV_ID,
  BUILD_FOUNDATION_ID,
  LIB_FOUNDATION_ID,
} from "./seed/gittenberg-seed-v2.js"

export type {
  GittenbergDataService,
  CreateGittenbergDataServiceOptions,
} from "./service/create-data-service.js"
export { createGittenbergDataService } from "./service/create-data-service.js"

/** @deprecated Use {@link createPersistedCrudPort} with {@link createMemoryEntityStore}. */
export { createPersistedCrudPort as createMockCrudPort } from "./crud/create-crud-port.js"
