export type { GittenbergPorts, GittenbergUiSeed, FileTreeNode } from "./ports.js"
export { MOBY_REPOSITORY_ID, DEFAULT_REPOSITORY_SLUG } from "./ports.js"

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
  editorSampleMarkdown,
} from "./seed/gittenberg-seed.js"
export { seedGittenbergStoreIfEmpty, resetAndSeedGittenbergStore } from "./seed/apply-seed.js"

export type {
  GittenbergDataService,
  CreateGittenbergDataServiceOptions,
} from "./service/create-data-service.js"
export { createGittenbergDataService } from "./service/create-data-service.js"

/** @deprecated Use {@link createPersistedCrudPort} with {@link createMemoryEntityStore}. */
export { createPersistedCrudPort as createMockCrudPort } from "./crud/create-crud-port.js"
