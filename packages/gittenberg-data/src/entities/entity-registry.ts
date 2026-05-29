import type { EntityId } from "@tx/core-domain"
import {
  decodeActivityEvent,
  decodeAgent,
  decodeAuthor,
  decodeCollectionItem,
  decodeCreativeStudioSession,
  decodeCuratedCollection,
  decodeDiscoveryShelf,
  decodeLibraryEdition,
  decodeLiteraryBuild,
  decodeManuscriptFile,
  decodeMembershipPlan,
  decodeMetricSnapshot,
  decodePatron,
  decodePermawebAnchor,
  decodePrintOrder,
  decodePrintProduct,
  decodeProvenanceCertificate,
  decodeReaderChapter,
  decodeRepository,
  decodeRevision,
  decodeUserCollection,
  decodeUserMembership,
} from "@tx/domain-shared"
import type {
  ActivityEvent,
  Agent,
  Author,
  CollectionItem,
  CreateActivityEventInput,
  CreateAgentInput,
  CreateAuthorInput,
  CreateCollectionItemInput,
  CreateCreativeStudioSessionInput,
  CreateCuratedCollectionInput,
  CreateDiscoveryShelfInput,
  CreateLibraryEditionInput,
  CreateLiteraryBuildInput,
  CreateManuscriptFileInput,
  CreateMembershipPlanInput,
  CreateMetricSnapshotInput,
  CreatePatronInput,
  CreatePermawebAnchorInput,
  CreatePrintOrderInput,
  CreatePrintProductInput,
  CreateProvenanceCertificateInput,
  CreateReaderChapterInput,
  CreateRepositoryInput,
  CreateRevisionInput,
  CreateUserCollectionInput,
  CreateUserMembershipInput,
  CreativeStudioSession,
  CuratedCollection,
  DiscoveryShelf,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MembershipPlan,
  MetricSnapshot,
  Patron,
  PermawebAnchor,
  PrintOrder,
  PrintProduct,
  ProvenanceCertificate,
  ReaderChapter,
  Repository,
  Revision,
  UpdateActivityEventInput,
  UpdateAgentInput,
  UpdateAuthorInput,
  UpdateCollectionItemInput,
  UpdateCreativeStudioSessionInput,
  UpdateCuratedCollectionInput,
  UpdateDiscoveryShelfInput,
  UpdateLibraryEditionInput,
  UpdateLiteraryBuildInput,
  UpdateManuscriptFileInput,
  UpdateMembershipPlanInput,
  UpdateMetricSnapshotInput,
  UpdatePatronInput,
  UpdatePermawebAnchorInput,
  UpdatePrintOrderInput,
  UpdatePrintProductInput,
  UpdateProvenanceCertificateInput,
  UpdateReaderChapterInput,
  UpdateRepositoryInput,
  UpdateRevisionInput,
  UpdateUserCollectionInput,
  UpdateUserMembershipInput,
  UserCollection,
  UserMembership,
} from "@tx/domain-shared"
import type { EntityTableName, StoredRecord } from "../storage/types.js"

type TimedEntity = StoredRecord

export type EntityDefinition<
  TEntity extends TimedEntity,
  TCreate extends Record<string, unknown>,
  TUpdate extends Record<string, unknown>,
> = {
  readonly table: EntityTableName
  readonly decode: (value: unknown) => TEntity
  readonly build: (input: TCreate, id: EntityId, now: string) => TEntity
  readonly patch: (entity: TEntity, input: TUpdate, now: string) => TEntity
}

export const repositoryDefinition: EntityDefinition<
  Repository,
  CreateRepositoryInput,
  UpdateRepositoryInput
> = {
  table: "repository",
  decode: decodeRepository,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const manuscriptFileDefinition: EntityDefinition<
  ManuscriptFile,
  CreateManuscriptFileInput,
  UpdateManuscriptFileInput
> = {
  table: "manuscript_file",
  decode: decodeManuscriptFile,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const revisionDefinition: EntityDefinition<
  Revision,
  CreateRevisionInput,
  UpdateRevisionInput
> = {
  table: "revision",
  decode: decodeRevision,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const agentDefinition: EntityDefinition<Agent, CreateAgentInput, UpdateAgentInput> = {
  table: "agent",
  decode: decodeAgent,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const literaryBuildDefinition: EntityDefinition<
  LiteraryBuild,
  CreateLiteraryBuildInput,
  UpdateLiteraryBuildInput
> = {
  table: "literary_build",
  decode: decodeLiteraryBuild,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const libraryEditionDefinition: EntityDefinition<
  LibraryEdition,
  CreateLibraryEditionInput,
  UpdateLibraryEditionInput
> = {
  table: "library_edition",
  decode: decodeLibraryEdition,
  build: (input, id, now) => ({
    ...input,
    relatedEditionIds: input.relatedEditionIds ?? [],
    id,
    createdAt: now,
    updatedAt: now,
  }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const activityEventDefinition: EntityDefinition<
  ActivityEvent,
  CreateActivityEventInput,
  UpdateActivityEventInput
> = {
  table: "activity_event",
  decode: decodeActivityEvent,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const readerChapterDefinition: EntityDefinition<
  ReaderChapter,
  CreateReaderChapterInput,
  UpdateReaderChapterInput
> = {
  table: "reader_chapter",
  decode: decodeReaderChapter,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const metricSnapshotDefinition: EntityDefinition<
  MetricSnapshot,
  CreateMetricSnapshotInput,
  UpdateMetricSnapshotInput
> = {
  table: "metric_snapshot",
  decode: decodeMetricSnapshot,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const authorDefinition: EntityDefinition<Author, CreateAuthorInput, UpdateAuthorInput> = {
  table: "author",
  decode: decodeAuthor,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const patronDefinition: EntityDefinition<Patron, CreatePatronInput, UpdatePatronInput> = {
  table: "patron",
  decode: decodePatron,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const permawebAnchorDefinition: EntityDefinition<
  PermawebAnchor,
  CreatePermawebAnchorInput,
  UpdatePermawebAnchorInput
> = {
  table: "permaweb_anchor",
  decode: decodePermawebAnchor,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const provenanceCertificateDefinition: EntityDefinition<
  ProvenanceCertificate,
  CreateProvenanceCertificateInput,
  UpdateProvenanceCertificateInput
> = {
  table: "provenance_certificate",
  decode: decodeProvenanceCertificate,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const membershipPlanDefinition: EntityDefinition<
  MembershipPlan,
  CreateMembershipPlanInput,
  UpdateMembershipPlanInput
> = {
  table: "membership_plan",
  decode: decodeMembershipPlan,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const userMembershipDefinition: EntityDefinition<
  UserMembership,
  CreateUserMembershipInput,
  UpdateUserMembershipInput
> = {
  table: "user_membership",
  decode: decodeUserMembership,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const userCollectionDefinition: EntityDefinition<
  UserCollection,
  CreateUserCollectionInput,
  UpdateUserCollectionInput
> = {
  table: "user_collection",
  decode: decodeUserCollection,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const collectionItemDefinition: EntityDefinition<
  CollectionItem,
  CreateCollectionItemInput,
  UpdateCollectionItemInput
> = {
  table: "collection_item",
  decode: decodeCollectionItem,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const discoveryShelfDefinition: EntityDefinition<
  DiscoveryShelf,
  CreateDiscoveryShelfInput,
  UpdateDiscoveryShelfInput
> = {
  table: "discovery_shelf",
  decode: decodeDiscoveryShelf,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const curatedCollectionDefinition: EntityDefinition<
  CuratedCollection,
  CreateCuratedCollectionInput,
  UpdateCuratedCollectionInput
> = {
  table: "curated_collection",
  decode: decodeCuratedCollection,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const creativeStudioSessionDefinition: EntityDefinition<
  CreativeStudioSession,
  CreateCreativeStudioSessionInput,
  UpdateCreativeStudioSessionInput
> = {
  table: "creative_studio_session",
  decode: decodeCreativeStudioSession,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const printProductDefinition: EntityDefinition<
  PrintProduct,
  CreatePrintProductInput,
  UpdatePrintProductInput
> = {
  table: "print_product",
  decode: decodePrintProduct,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const printOrderDefinition: EntityDefinition<
  PrintOrder,
  CreatePrintOrderInput,
  UpdatePrintOrderInput
> = {
  table: "print_order",
  decode: decodePrintOrder,
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
  patch: (entity, input, now) => ({ ...entity, ...input, updatedAt: now }),
}

export const gittenbergEntityDefinitions = [
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
] as const
