import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for Repository.
 * Literary repository
 */
export class Repository extends Schema.Class<Repository>("Repository")({
  createdAt: IsoDateString,
  id: EntityId,
  slug: Schema.String,
  title: Schema.String,
  subtitle: Schema.String,
  coverUrl: Schema.String,
  heroTitle: Schema.String,
  heroSubtitle: Schema.String,
  branchName: Schema.String,
  branchLabel: Schema.String,
  lastUpdate: Schema.String,
  tags: Schema.Json,
  metadata: Schema.Json,
  readmeExcerpt: Schema.String,
  authorId: Schema.optional(Schema.String),
  publicationYear: Schema.optional(Schema.Number),
  citationCount: Schema.optional(Schema.Number),
  provenanceStatus: Schema.optional(Schema.String),
  eternalAnchorId: Schema.optional(Schema.String),
  updatedAt: IsoDateString,
}
) { }

export const decodeRepository = Schema.decodeUnknownSync(Repository);
export const decodeRepositorySync = decodeRepository;
export const encodeRepository = Schema.encodeSync(Repository);
export const CreateRepositoryInput = Schema.Struct({
  slug: Schema.String,
  title: Schema.String,
  subtitle: Schema.String,
  coverUrl: Schema.String,
  heroTitle: Schema.String,
  heroSubtitle: Schema.String,
  branchName: Schema.String,
  branchLabel: Schema.String,
  lastUpdate: Schema.String,
  tags: Schema.Json,
  metadata: Schema.Json,
  readmeExcerpt: Schema.String,
  authorId: Schema.optionalKey(Schema.String),
  publicationYear: Schema.optionalKey(Schema.Number),
  citationCount: Schema.optionalKey(Schema.Number),
  provenanceStatus: Schema.optionalKey(Schema.String),
  eternalAnchorId: Schema.optionalKey(Schema.String),
});

export type CreateRepositoryInput = typeof CreateRepositoryInput.Type;

export const UpdateRepositoryInput = Schema.Struct({
  slug: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  subtitle: Schema.optionalKey(Schema.String),
  coverUrl: Schema.optionalKey(Schema.String),
  heroTitle: Schema.optionalKey(Schema.String),
  heroSubtitle: Schema.optionalKey(Schema.String),
  branchName: Schema.optionalKey(Schema.String),
  branchLabel: Schema.optionalKey(Schema.String),
  lastUpdate: Schema.optionalKey(Schema.String),
  tags: Schema.optionalKey(Schema.Json),
  metadata: Schema.optionalKey(Schema.Json),
  readmeExcerpt: Schema.optionalKey(Schema.String),
  authorId: Schema.optionalKey(Schema.String),
  publicationYear: Schema.optionalKey(Schema.Number),
  citationCount: Schema.optionalKey(Schema.Number),
  provenanceStatus: Schema.optionalKey(Schema.String),
  eternalAnchorId: Schema.optionalKey(Schema.String),
});

export type UpdateRepositoryInput = typeof UpdateRepositoryInput.Type;

export const ListRepositoryInput = PaginationInput;

export type ListRepositoryInput = PaginationInputType;

export const repositoryPage = Page(Repository);

export type RepositoryPage = PageType<Repository>;

export interface RepositoryPort extends CrudPort<Repository, CreateRepositoryInput, UpdateRepositoryInput, ListRepositoryInput, EntityIdType, RepositoryPage> {
}
