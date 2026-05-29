import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for MembershipPlan.
 * Subscription tier (Premier, Mécène Patron)
 */
export class MembershipPlan extends Schema.Class<MembershipPlan>("MembershipPlan")({
  createdAt: IsoDateString,
  id: EntityId,
  tier: Schema.String,
  name: Schema.String,
  monthlyPriceCents: Schema.optional(Schema.Number),
  annualPriceCents: Schema.optional(Schema.Number),
  features: Schema.Json,
  updatedAt: IsoDateString,
}
) { }

export const decodeMembershipPlan = Schema.decodeUnknownSync(MembershipPlan);
export const decodeMembershipPlanSync = decodeMembershipPlan;
export const encodeMembershipPlan = Schema.encodeSync(MembershipPlan);
export const CreateMembershipPlanInput = Schema.Struct({
  tier: Schema.String,
  name: Schema.String,
  monthlyPriceCents: Schema.optionalKey(Schema.Number),
  annualPriceCents: Schema.optionalKey(Schema.Number),
  features: Schema.Json,
});

export type CreateMembershipPlanInput = typeof CreateMembershipPlanInput.Type;

export const UpdateMembershipPlanInput = Schema.Struct({
  tier: Schema.optionalKey(Schema.String),
  name: Schema.optionalKey(Schema.String),
  monthlyPriceCents: Schema.optionalKey(Schema.Number),
  annualPriceCents: Schema.optionalKey(Schema.Number),
  features: Schema.optionalKey(Schema.Json),
});

export type UpdateMembershipPlanInput = typeof UpdateMembershipPlanInput.Type;

export const ListMembershipPlanInput = PaginationInput;

export type ListMembershipPlanInput = PaginationInputType;

export const membershipplanPage = Page(MembershipPlan);

export type MembershipPlanPage = PageType<MembershipPlan>;

export interface MembershipPlanPort extends CrudPort<MembershipPlan, CreateMembershipPlanInput, UpdateMembershipPlanInput, ListMembershipPlanInput, EntityIdType, MembershipPlanPage> {
}
