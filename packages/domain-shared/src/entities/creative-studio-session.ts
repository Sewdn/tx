import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for CreativeStudioSession.
 * Agent-assisted creative studio session for cover and interior design
 */
export class CreativeStudioSession extends Schema.Class<CreativeStudioSession>("CreativeStudioSession")({
  createdAt: IsoDateString,
  id: EntityId,
  repositoryId: Schema.String,
  literaryBuildId: Schema.String,
  activeAgentId: Schema.String,
  coverIntentPrompt: Schema.String,
  coverAssetUrl: Schema.optional(Schema.String),
  illustrationStyle: Schema.String,
  layoutPresetId: Schema.optional(Schema.String),
  status: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeCreativeStudioSession = Schema.decodeUnknownSync(CreativeStudioSession);
export const decodeCreativeStudioSessionSync = decodeCreativeStudioSession;
export const encodeCreativeStudioSession = Schema.encodeSync(CreativeStudioSession);
export const CreateCreativeStudioSessionInput = Schema.Struct({
  repositoryId: Schema.String,
  literaryBuildId: Schema.String,
  activeAgentId: Schema.String,
  coverIntentPrompt: Schema.String,
  coverAssetUrl: Schema.optionalKey(Schema.String),
  illustrationStyle: Schema.String,
  layoutPresetId: Schema.optionalKey(Schema.String),
  status: Schema.String,
});

export type CreateCreativeStudioSessionInput = typeof CreateCreativeStudioSessionInput.Type;

export const UpdateCreativeStudioSessionInput = Schema.Struct({
  repositoryId: Schema.optionalKey(Schema.String),
  literaryBuildId: Schema.optionalKey(Schema.String),
  activeAgentId: Schema.optionalKey(Schema.String),
  coverIntentPrompt: Schema.optionalKey(Schema.String),
  coverAssetUrl: Schema.optionalKey(Schema.String),
  illustrationStyle: Schema.optionalKey(Schema.String),
  layoutPresetId: Schema.optionalKey(Schema.String),
  status: Schema.optionalKey(Schema.String),
});

export type UpdateCreativeStudioSessionInput = typeof UpdateCreativeStudioSessionInput.Type;

export const ListCreativeStudioSessionInput = PaginationInput;

export type ListCreativeStudioSessionInput = PaginationInputType;

export const creativestudiosessionPage = Page(CreativeStudioSession);

export type CreativeStudioSessionPage = PageType<CreativeStudioSession>;

export interface CreativeStudioSessionPort extends CrudPort<CreativeStudioSession, CreateCreativeStudioSessionInput, UpdateCreativeStudioSessionInput, ListCreativeStudioSessionInput, EntityIdType, CreativeStudioSessionPage> {
}
