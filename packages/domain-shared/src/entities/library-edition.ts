import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for LibraryEdition.
 * Catalog entry in library of builds
 */
export class LibraryEdition extends Schema.Class<LibraryEdition>("LibraryEdition")({
  createdAt: IsoDateString,
  id: EntityId,
  title: Schema.String,
  author: Schema.String,
  genre: Schema.String,
  year: Schema.String,
  coverUrl: Schema.String,
  commit: Schema.String,
  formats: Schema.Json,
  badge: Schema.String,
  repositoryId: Schema.optional(Schema.String),
  primaryBuildId: Schema.optional(Schema.String),
  authorId: Schema.optional(Schema.String),
  heroImageUrl: Schema.optional(Schema.String),
  tagline: Schema.optional(Schema.String),
  lensLabel: Schema.optional(Schema.String),
  relatedEditionIds: Schema.Json,
  sortKey: Schema.optional(Schema.String),
  decadeLabel: Schema.optional(Schema.String),
  requiredTier: Schema.optional(Schema.String),
  anchorStatus: Schema.optional(Schema.String),
  arweaveTxId: Schema.optional(Schema.String),
  patronCreditName: Schema.optional(Schema.String),
  isEternal: Schema.Boolean,
  provenance: Schema.optional(Schema.Json),
  updatedAt: IsoDateString,
}
) { }

export const decodeLibraryEdition = Schema.decodeUnknownSync(LibraryEdition);
export const decodeLibraryEditionSync = decodeLibraryEdition;
export const encodeLibraryEdition = Schema.encodeSync(LibraryEdition);
export const CreateLibraryEditionInput = Schema.Struct({
  title: Schema.String,
  author: Schema.String,
  genre: Schema.String,
  year: Schema.String,
  coverUrl: Schema.String,
  commit: Schema.String,
  formats: Schema.Json,
  badge: Schema.String,
  repositoryId: Schema.optionalKey(Schema.String),
  primaryBuildId: Schema.optionalKey(Schema.String),
  authorId: Schema.optionalKey(Schema.String),
  heroImageUrl: Schema.optionalKey(Schema.String),
  tagline: Schema.optionalKey(Schema.String),
  lensLabel: Schema.optionalKey(Schema.String),
  relatedEditionIds: Schema.optionalKey(Schema.Json),
  sortKey: Schema.optionalKey(Schema.String),
  decadeLabel: Schema.optionalKey(Schema.String),
  requiredTier: Schema.optionalKey(Schema.String),
  anchorStatus: Schema.optionalKey(Schema.String),
  arweaveTxId: Schema.optionalKey(Schema.String),
  patronCreditName: Schema.optionalKey(Schema.String),
  isEternal: Schema.Boolean,
  provenance: Schema.optionalKey(Schema.Json),
});

export type CreateLibraryEditionInput = typeof CreateLibraryEditionInput.Type;

export const UpdateLibraryEditionInput = Schema.Struct({
  title: Schema.optionalKey(Schema.String),
  author: Schema.optionalKey(Schema.String),
  genre: Schema.optionalKey(Schema.String),
  year: Schema.optionalKey(Schema.String),
  coverUrl: Schema.optionalKey(Schema.String),
  commit: Schema.optionalKey(Schema.String),
  formats: Schema.optionalKey(Schema.Json),
  badge: Schema.optionalKey(Schema.String),
  repositoryId: Schema.optionalKey(Schema.String),
  primaryBuildId: Schema.optionalKey(Schema.String),
  authorId: Schema.optionalKey(Schema.String),
  heroImageUrl: Schema.optionalKey(Schema.String),
  tagline: Schema.optionalKey(Schema.String),
  lensLabel: Schema.optionalKey(Schema.String),
  relatedEditionIds: Schema.optionalKey(Schema.Json),
  sortKey: Schema.optionalKey(Schema.String),
  decadeLabel: Schema.optionalKey(Schema.String),
  requiredTier: Schema.optionalKey(Schema.String),
  anchorStatus: Schema.optionalKey(Schema.String),
  arweaveTxId: Schema.optionalKey(Schema.String),
  patronCreditName: Schema.optionalKey(Schema.String),
  isEternal: Schema.optionalKey(Schema.Boolean),
  provenance: Schema.optionalKey(Schema.Json),
});

export type UpdateLibraryEditionInput = typeof UpdateLibraryEditionInput.Type;

export const ListLibraryEditionInput = PaginationInput;

export type ListLibraryEditionInput = PaginationInputType;

export const libraryeditionPage = Page(LibraryEdition);

export type LibraryEditionPage = PageType<LibraryEdition>;

export interface LibraryEditionPort extends CrudPort<LibraryEdition, CreateLibraryEditionInput, UpdateLibraryEditionInput, ListLibraryEditionInput, EntityIdType, LibraryEditionPage> {
}
