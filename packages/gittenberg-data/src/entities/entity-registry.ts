import type { EntityId } from "@tx/core-domain"
import {
  decodeActivityEvent,
  decodeAgent,
  decodeLibraryEdition,
  decodeLiteraryBuild,
  decodeManuscriptFile,
  decodeMetricSnapshot,
  decodeReaderChapter,
  decodeRepository,
  decodeRevision,
} from "@tx/domain-shared"
import type {
  ActivityEvent,
  Agent,
  CreateActivityEventInput,
  CreateAgentInput,
  CreateLibraryEditionInput,
  CreateLiteraryBuildInput,
  CreateManuscriptFileInput,
  CreateMetricSnapshotInput,
  CreateReaderChapterInput,
  CreateRepositoryInput,
  CreateRevisionInput,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MetricSnapshot,
  ReaderChapter,
  Repository,
  Revision,
  UpdateActivityEventInput,
  UpdateAgentInput,
  UpdateLibraryEditionInput,
  UpdateLiteraryBuildInput,
  UpdateManuscriptFileInput,
  UpdateMetricSnapshotInput,
  UpdateReaderChapterInput,
  UpdateRepositoryInput,
  UpdateRevisionInput,
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
  build: (input, id, now) => ({ ...input, id, createdAt: now, updatedAt: now }),
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
] as const
