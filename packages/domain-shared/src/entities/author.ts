import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for Author.
 * Author profile for book detail and curated collections
 */
export class Author extends Schema.Class<Author>("Author")({
  createdAt: IsoDateString,
  id: EntityId,
  slug: Schema.String,
  name: Schema.String,
  birthYear: Schema.optional(Schema.Number),
  deathYear: Schema.optional(Schema.Number),
  portraitUrl: Schema.String,
  biography: Schema.String,
  collectionId: Schema.optional(Schema.String),
  updatedAt: IsoDateString,
}
) { }

export const decodeAuthor = Schema.decodeUnknownSync(Author);
export const decodeAuthorSync = decodeAuthor;
export const encodeAuthor = Schema.encodeSync(Author);
export const CreateAuthorInput = Schema.Struct({
  slug: Schema.String,
  name: Schema.String,
  birthYear: Schema.optionalKey(Schema.Number),
  deathYear: Schema.optionalKey(Schema.Number),
  portraitUrl: Schema.String,
  biography: Schema.String,
  collectionId: Schema.optionalKey(Schema.String),
});

export type CreateAuthorInput = typeof CreateAuthorInput.Type;

export const UpdateAuthorInput = Schema.Struct({
  slug: Schema.optionalKey(Schema.String),
  name: Schema.optionalKey(Schema.String),
  birthYear: Schema.optionalKey(Schema.Number),
  deathYear: Schema.optionalKey(Schema.Number),
  portraitUrl: Schema.optionalKey(Schema.String),
  biography: Schema.optionalKey(Schema.String),
  collectionId: Schema.optionalKey(Schema.String),
});

export type UpdateAuthorInput = typeof UpdateAuthorInput.Type;

export const ListAuthorInput = PaginationInput;

export type ListAuthorInput = PaginationInputType;

export const authorPage = Page(Author);

export type AuthorPage = PageType<Author>;

export interface AuthorPort extends CrudPort<Author, CreateAuthorInput, UpdateAuthorInput, ListAuthorInput, EntityIdType, AuthorPage> {
}
