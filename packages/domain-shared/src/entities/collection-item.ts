import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for CollectionItem.
 * Item within a user collection
 */
export class CollectionItem extends Schema.Class<CollectionItem>("CollectionItem")({
  createdAt: IsoDateString,
  id: EntityId,
  collectionId: Schema.String,
  libraryEditionId: Schema.optional(Schema.String),
  literaryBuildId: Schema.optional(Schema.String),
  addedAt: IsoDateString,
  progressPercent: Schema.optional(Schema.Number),
  printOrderId: Schema.optional(Schema.String),
  requiredTier: Schema.optional(Schema.String),
  updatedAt: IsoDateString,
}
) { }

export const decodeCollectionItem = Schema.decodeUnknownSync(CollectionItem);
export const decodeCollectionItemSync = decodeCollectionItem;
export const encodeCollectionItem = Schema.encodeSync(CollectionItem);
export const CreateCollectionItemInput = Schema.Struct({
  collectionId: Schema.String,
  libraryEditionId: Schema.optionalKey(Schema.String),
  literaryBuildId: Schema.optionalKey(Schema.String),
  addedAt: IsoDateString,
  progressPercent: Schema.optionalKey(Schema.Number),
  printOrderId: Schema.optionalKey(Schema.String),
  requiredTier: Schema.optionalKey(Schema.String),
});

export type CreateCollectionItemInput = typeof CreateCollectionItemInput.Type;

export const UpdateCollectionItemInput = Schema.Struct({
  collectionId: Schema.optionalKey(Schema.String),
  libraryEditionId: Schema.optionalKey(Schema.String),
  literaryBuildId: Schema.optionalKey(Schema.String),
  addedAt: Schema.optionalKey(IsoDateString),
  progressPercent: Schema.optionalKey(Schema.Number),
  printOrderId: Schema.optionalKey(Schema.String),
  requiredTier: Schema.optionalKey(Schema.String),
});

export type UpdateCollectionItemInput = typeof UpdateCollectionItemInput.Type;

export const ListCollectionItemInput = PaginationInput;

export type ListCollectionItemInput = PaginationInputType;

export const collectionitemPage = Page(CollectionItem);

export type CollectionItemPage = PageType<CollectionItem>;

export interface CollectionItemPort extends CrudPort<CollectionItem, CreateCollectionItemInput, UpdateCollectionItemInput, ListCollectionItemInput, EntityIdType, CollectionItemPage> {
}
