import type { GittenbergPorts } from "../ports.js"
import {
  activityEventDefinition,
  agentDefinition,
  libraryEditionDefinition,
  literaryBuildDefinition,
  manuscriptFileDefinition,
  metricSnapshotDefinition,
  readerChapterDefinition,
  repositoryDefinition,
  revisionDefinition,
} from "../entities/entity-registry.js"
import type { EntityStore } from "../storage/types.js"
import { createPersistedCrudPort } from "./create-crud-port.js"

export function createGittenbergPorts(store: EntityStore): GittenbergPorts {
  return {
    repository: createPersistedCrudPort(store, repositoryDefinition, "repo"),
    manuscriptFile: createPersistedCrudPort(store, manuscriptFileDefinition, "file"),
    revision: createPersistedCrudPort(store, revisionDefinition, "revision"),
    agent: createPersistedCrudPort(store, agentDefinition, "agent"),
    literaryBuild: createPersistedCrudPort(store, literaryBuildDefinition, "build"),
    libraryEdition: createPersistedCrudPort(store, libraryEditionDefinition, "lib"),
    activityEvent: createPersistedCrudPort(store, activityEventDefinition, "activity"),
    readerChapter: createPersistedCrudPort(store, readerChapterDefinition, "chapter"),
    metricSnapshot: createPersistedCrudPort(store, metricSnapshotDefinition, "metric"),
  }
}
