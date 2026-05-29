import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for UserMembership.
 * User subscription to a membership plan
 */
export class UserMembership extends Schema.Class<UserMembership>("UserMembership")({
  createdAt: IsoDateString,
  id: EntityId,
  userId: Schema.String,
  planId: Schema.String,
  billingPeriod: Schema.String,
  activeUntil: IsoDateString,
  updatedAt: IsoDateString,
}
) { }

export const decodeUserMembership = Schema.decodeUnknownSync(UserMembership);
export const decodeUserMembershipSync = decodeUserMembership;
export const encodeUserMembership = Schema.encodeSync(UserMembership);
export const CreateUserMembershipInput = Schema.Struct({
  userId: Schema.String,
  planId: Schema.String,
  billingPeriod: Schema.String,
  activeUntil: IsoDateString,
});

export type CreateUserMembershipInput = typeof CreateUserMembershipInput.Type;

export const UpdateUserMembershipInput = Schema.Struct({
  userId: Schema.optionalKey(Schema.String),
  planId: Schema.optionalKey(Schema.String),
  billingPeriod: Schema.optionalKey(Schema.String),
  activeUntil: Schema.optionalKey(IsoDateString),
});

export type UpdateUserMembershipInput = typeof UpdateUserMembershipInput.Type;

export const ListUserMembershipInput = PaginationInput;

export type ListUserMembershipInput = PaginationInputType;

export const usermembershipPage = Page(UserMembership);

export type UserMembershipPage = PageType<UserMembership>;

export interface UserMembershipPort extends CrudPort<UserMembership, CreateUserMembershipInput, UpdateUserMembershipInput, ListUserMembershipInput, EntityIdType, UserMembershipPage> {
}
