import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for UserCollection.
 * Reader workspace collection (My Collections)
 */
export class UserCollection extends Schema.Class<UserCollection>("UserCollection")({
  createdAt: IsoDateString,
  id: EntityId,
  userId: Schema.String,
  name: Schema.String,
  kind: Schema.String,
  sortOrder: Schema.Number,
  updatedAt: IsoDateString,
}
) { }

export const decodeUserCollection = Schema.decodeUnknownSync(UserCollection);
export const decodeUserCollectionSync = decodeUserCollection;
export const encodeUserCollection = Schema.encodeSync(UserCollection);
export const CreateUserCollectionInput = Schema.Struct({
  userId: Schema.String,
  name: Schema.String,
  kind: Schema.String,
  sortOrder: Schema.Number,
});

export type CreateUserCollectionInput = typeof CreateUserCollectionInput.Type;

export const UpdateUserCollectionInput = Schema.Struct({
  userId: Schema.optionalKey(Schema.String),
  name: Schema.optionalKey(Schema.String),
  kind: Schema.optionalKey(Schema.String),
  sortOrder: Schema.optionalKey(Schema.Number),
});

export type UpdateUserCollectionInput = typeof UpdateUserCollectionInput.Type;

export const ListUserCollectionInput = PaginationInput;

export type ListUserCollectionInput = PaginationInputType;

export const usercollectionPage = Page(UserCollection);

export type UserCollectionPage = PageType<UserCollection>;

export interface UserCollectionPort extends CrudPort<UserCollection, CreateUserCollectionInput, UpdateUserCollectionInput, ListUserCollectionInput, EntityIdType, UserCollectionPage> {
}
