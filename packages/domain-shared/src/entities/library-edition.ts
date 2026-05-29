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
});

export type UpdateLibraryEditionInput = typeof UpdateLibraryEditionInput.Type;

export const ListLibraryEditionInput = PaginationInput;

export type ListLibraryEditionInput = PaginationInputType;

export const libraryeditionPage = Page(LibraryEdition);

export type LibraryEditionPage = PageType<LibraryEdition>;

export interface LibraryEditionPort extends CrudPort<LibraryEdition, CreateLibraryEditionInput, UpdateLibraryEditionInput, ListLibraryEditionInput, EntityIdType, LibraryEditionPage> {
}
