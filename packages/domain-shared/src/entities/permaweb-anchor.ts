import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for PermawebAnchor.
 * Funding act that anchors a repository commit to the permaweb
 */
export class PermawebAnchor extends Schema.Class<PermawebAnchor>("PermawebAnchor")({
  createdAt: IsoDateString,
  id: EntityId,
  repositoryId: Schema.String,
  literaryBuildId: Schema.optional(Schema.String),
  commitHash: Schema.String,
  arweaveTxId: Schema.String,
  anchoredAt: IsoDateString,
  seriesNumber: Schema.Number,
  stewardshipLevel: Schema.String,
  patronId: Schema.String,
  certificateId: Schema.optional(Schema.String),
  updatedAt: IsoDateString,
}
) { }

export const decodePermawebAnchor = Schema.decodeUnknownSync(PermawebAnchor);
export const decodePermawebAnchorSync = decodePermawebAnchor;
export const encodePermawebAnchor = Schema.encodeSync(PermawebAnchor);
export const CreatePermawebAnchorInput = Schema.Struct({
  repositoryId: Schema.String,
  literaryBuildId: Schema.optionalKey(Schema.String),
  commitHash: Schema.String,
  arweaveTxId: Schema.String,
  anchoredAt: IsoDateString,
  seriesNumber: Schema.Number,
  stewardshipLevel: Schema.String,
  patronId: Schema.String,
  certificateId: Schema.optionalKey(Schema.String),
});

export type CreatePermawebAnchorInput = typeof CreatePermawebAnchorInput.Type;

export const UpdatePermawebAnchorInput = Schema.Struct({
  repositoryId: Schema.optionalKey(Schema.String),
  literaryBuildId: Schema.optionalKey(Schema.String),
  commitHash: Schema.optionalKey(Schema.String),
  arweaveTxId: Schema.optionalKey(Schema.String),
  anchoredAt: Schema.optionalKey(IsoDateString),
  seriesNumber: Schema.optionalKey(Schema.Number),
  stewardshipLevel: Schema.optionalKey(Schema.String),
  patronId: Schema.optionalKey(Schema.String),
  certificateId: Schema.optionalKey(Schema.String),
});

export type UpdatePermawebAnchorInput = typeof UpdatePermawebAnchorInput.Type;

export const ListPermawebAnchorInput = PaginationInput;

export type ListPermawebAnchorInput = PaginationInputType;

export const permawebanchorPage = Page(PermawebAnchor);

export type PermawebAnchorPage = PageType<PermawebAnchor>;

export interface PermawebAnchorPort extends CrudPort<PermawebAnchor, CreatePermawebAnchorInput, UpdatePermawebAnchorInput, ListPermawebAnchorInput, EntityIdType, PermawebAnchorPage> {
}
