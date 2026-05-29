import type { GittenbergPorts } from "../ports.js"
import {
  activityEventDefinition,
  agentDefinition,
  authorDefinition,
  collectionItemDefinition,
  creativeStudioSessionDefinition,
  curatedCollectionDefinition,
  discoveryShelfDefinition,
  libraryEditionDefinition,
  literaryBuildDefinition,
  manuscriptFileDefinition,
  membershipPlanDefinition,
  metricSnapshotDefinition,
  patronDefinition,
  permawebAnchorDefinition,
  printOrderDefinition,
  printProductDefinition,
  provenanceCertificateDefinition,
  readerChapterDefinition,
  repositoryDefinition,
  revisionDefinition,
  userCollectionDefinition,
  userMembershipDefinition,
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
    author: createPersistedCrudPort(store, authorDefinition, "author"),
    patron: createPersistedCrudPort(store, patronDefinition, "patron"),
    permawebAnchor: createPersistedCrudPort(store, permawebAnchorDefinition, "anchor"),
    provenanceCertificate: createPersistedCrudPort(
      store,
      provenanceCertificateDefinition,
      "cert",
    ),
    membershipPlan: createPersistedCrudPort(store, membershipPlanDefinition, "plan"),
    userMembership: createPersistedCrudPort(store, userMembershipDefinition, "membership"),
    userCollection: createPersistedCrudPort(store, userCollectionDefinition, "collection"),
    collectionItem: createPersistedCrudPort(store, collectionItemDefinition, "item"),
    discoveryShelf: createPersistedCrudPort(store, discoveryShelfDefinition, "shelf"),
    curatedCollection: createPersistedCrudPort(store, curatedCollectionDefinition, "curated"),
    creativeStudioSession: createPersistedCrudPort(store, creativeStudioSessionDefinition, "studio"),
    printProduct: createPersistedCrudPort(store, printProductDefinition, "print-product"),
    printOrder: createPersistedCrudPort(store, printOrderDefinition, "print-order"),
  }
}
