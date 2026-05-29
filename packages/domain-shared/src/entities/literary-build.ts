import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for LiteraryBuild.
 * Published or in-progress build
 */
export class LiteraryBuild extends Schema.Class<LiteraryBuild>("LiteraryBuild")({
  createdAt: IsoDateString,
  id: EntityId,
  repositoryId: Schema.String,
  version: Schema.String,
  statusLabel: Schema.String,
  title: Schema.String,
  description: Schema.String,
  commitHash: Schema.String,
  progressPercent: Schema.Number,
  statusMessage: Schema.String,
  lineage: Schema.Json,
  artifacts: Schema.Json,
  buildStatus: Schema.Json,
  archivalVersions: Schema.Json,
  styling: Schema.Json,
  formats: Schema.Json,
  presets: Schema.Json,
  updatedAt: IsoDateString,
}
) { }

export const decodeLiteraryBuild = Schema.decodeUnknownSync(LiteraryBuild);
export const decodeLiteraryBuildSync = decodeLiteraryBuild;
export const encodeLiteraryBuild = Schema.encodeSync(LiteraryBuild);
export const CreateLiteraryBuildInput = Schema.Struct({
  repositoryId: Schema.String,
  version: Schema.String,
  statusLabel: Schema.String,
  title: Schema.String,
  description: Schema.String,
  commitHash: Schema.String,
  progressPercent: Schema.Number,
  statusMessage: Schema.String,
  lineage: Schema.Json,
  artifacts: Schema.Json,
  buildStatus: Schema.Json,
  archivalVersions: Schema.Json,
  styling: Schema.Json,
  formats: Schema.Json,
  presets: Schema.Json,
});

export type CreateLiteraryBuildInput = typeof CreateLiteraryBuildInput.Type;

export const UpdateLiteraryBuildInput = Schema.Struct({
  repositoryId: Schema.optionalKey(Schema.String),
  version: Schema.optionalKey(Schema.String),
  statusLabel: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  description: Schema.optionalKey(Schema.String),
  commitHash: Schema.optionalKey(Schema.String),
  progressPercent: Schema.optionalKey(Schema.Number),
  statusMessage: Schema.optionalKey(Schema.String),
  lineage: Schema.optionalKey(Schema.Json),
  artifacts: Schema.optionalKey(Schema.Json),
  buildStatus: Schema.optionalKey(Schema.Json),
  archivalVersions: Schema.optionalKey(Schema.Json),
  styling: Schema.optionalKey(Schema.Json),
  formats: Schema.optionalKey(Schema.Json),
  presets: Schema.optionalKey(Schema.Json),
});

export type UpdateLiteraryBuildInput = typeof UpdateLiteraryBuildInput.Type;

export const ListLiteraryBuildInput = PaginationInput;

export type ListLiteraryBuildInput = PaginationInputType;

export const literarybuildPage = Page(LiteraryBuild);

export type LiteraryBuildPage = PageType<LiteraryBuild>;

export interface LiteraryBuildPort extends CrudPort<LiteraryBuild, CreateLiteraryBuildInput, UpdateLiteraryBuildInput, ListLiteraryBuildInput, EntityIdType, LiteraryBuildPage> {
}
