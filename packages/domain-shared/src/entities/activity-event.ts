import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for ActivityEvent.
 * Agent activity feed event
 */
export class ActivityEvent extends Schema.Class<ActivityEvent>("ActivityEvent")({
  createdAt: IsoDateString,
  id: EntityId,
  timestamp: Schema.String,
  title: Schema.String,
  body: Schema.String,
  tag: Schema.String,
  tagVariant: Schema.String,
  actionLabel: Schema.String,
  dotVariant: Schema.String,
  eventType: Schema.optional(Schema.String),
  updatedAt: IsoDateString,
}
) { }

export const decodeActivityEvent = Schema.decodeUnknownSync(ActivityEvent);
export const decodeActivityEventSync = decodeActivityEvent;
export const encodeActivityEvent = Schema.encodeSync(ActivityEvent);
export const CreateActivityEventInput = Schema.Struct({
  timestamp: Schema.String,
  title: Schema.String,
  body: Schema.String,
  tag: Schema.String,
  tagVariant: Schema.String,
  actionLabel: Schema.String,
  dotVariant: Schema.String,
  eventType: Schema.optionalKey(Schema.String),
});

export type CreateActivityEventInput = typeof CreateActivityEventInput.Type;

export const UpdateActivityEventInput = Schema.Struct({
  timestamp: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  body: Schema.optionalKey(Schema.String),
  tag: Schema.optionalKey(Schema.String),
  tagVariant: Schema.optionalKey(Schema.String),
  actionLabel: Schema.optionalKey(Schema.String),
  dotVariant: Schema.optionalKey(Schema.String),
  eventType: Schema.optionalKey(Schema.String),
});

export type UpdateActivityEventInput = typeof UpdateActivityEventInput.Type;

export const ListActivityEventInput = PaginationInput;

export type ListActivityEventInput = PaginationInputType;

export const activityeventPage = Page(ActivityEvent);

export type ActivityEventPage = PageType<ActivityEvent>;

export interface ActivityEventPort extends CrudPort<ActivityEvent, CreateActivityEventInput, UpdateActivityEventInput, ListActivityEventInput, EntityIdType, ActivityEventPage> {
}
