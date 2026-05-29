import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for CuratedCollection.
 * Curated collection within discovery shelves
 */
export class CuratedCollection extends Schema.Class<CuratedCollection>("CuratedCollection")({
  createdAt: IsoDateString,
  id: EntityId,
  slug: Schema.String,
  title: Schema.String,
  description: Schema.String,
  heroImageUrl: Schema.String,
  authorName: Schema.optional(Schema.String),
  parentShelfId: Schema.optional(Schema.String),
  editionIds: Schema.Json,
  filterDefaults: Schema.optional(Schema.Json),
  updatedAt: IsoDateString,
}
) { }

export const decodeCuratedCollection = Schema.decodeUnknownSync(CuratedCollection);
export const decodeCuratedCollectionSync = decodeCuratedCollection;
export const encodeCuratedCollection = Schema.encodeSync(CuratedCollection);
export const CreateCuratedCollectionInput = Schema.Struct({
  slug: Schema.String,
  title: Schema.String,
  description: Schema.String,
  heroImageUrl: Schema.String,
  authorName: Schema.optionalKey(Schema.String),
  parentShelfId: Schema.optionalKey(Schema.String),
  editionIds: Schema.Json,
  filterDefaults: Schema.optionalKey(Schema.Json),
});

export type CreateCuratedCollectionInput = typeof CreateCuratedCollectionInput.Type;

export const UpdateCuratedCollectionInput = Schema.Struct({
  slug: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  description: Schema.optionalKey(Schema.String),
  heroImageUrl: Schema.optionalKey(Schema.String),
  authorName: Schema.optionalKey(Schema.String),
  parentShelfId: Schema.optionalKey(Schema.String),
  editionIds: Schema.optionalKey(Schema.Json),
  filterDefaults: Schema.optionalKey(Schema.Json),
});

export type UpdateCuratedCollectionInput = typeof UpdateCuratedCollectionInput.Type;

export const ListCuratedCollectionInput = PaginationInput;

export type ListCuratedCollectionInput = PaginationInputType;

export const curatedcollectionPage = Page(CuratedCollection);

export type CuratedCollectionPage = PageType<CuratedCollection>;

export interface CuratedCollectionPort extends CrudPort<CuratedCollection, CreateCuratedCollectionInput, UpdateCuratedCollectionInput, ListCuratedCollectionInput, EntityIdType, CuratedCollectionPage> {
}
