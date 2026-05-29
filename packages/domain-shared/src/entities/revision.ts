import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for Revision.
 * Manuscript revision pull request
 */
export class Revision extends Schema.Class<Revision>("Revision")({
  createdAt: IsoDateString,
  id: EntityId,
  repositoryId: Schema.String,
  title: Schema.String,
  status: Schema.String,
  author: Schema.String,
  timestamp: Schema.String,
  fileName: Schema.String,
  breadcrumbs: Schema.Json,
  diffLines: Schema.Json,
  comments: Schema.Json,
  updatedAt: IsoDateString,
}
) { }

export const decodeRevision = Schema.decodeUnknownSync(Revision);
export const decodeRevisionSync = decodeRevision;
export const encodeRevision = Schema.encodeSync(Revision);
export const CreateRevisionInput = Schema.Struct({
  repositoryId: Schema.String,
  title: Schema.String,
  status: Schema.String,
  author: Schema.String,
  timestamp: Schema.String,
  fileName: Schema.String,
  breadcrumbs: Schema.Json,
  diffLines: Schema.Json,
  comments: Schema.Json,
});

export type CreateRevisionInput = typeof CreateRevisionInput.Type;

export const UpdateRevisionInput = Schema.Struct({
  repositoryId: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  status: Schema.optionalKey(Schema.String),
  author: Schema.optionalKey(Schema.String),
  timestamp: Schema.optionalKey(Schema.String),
  fileName: Schema.optionalKey(Schema.String),
  breadcrumbs: Schema.optionalKey(Schema.Json),
  diffLines: Schema.optionalKey(Schema.Json),
  comments: Schema.optionalKey(Schema.Json),
});

export type UpdateRevisionInput = typeof UpdateRevisionInput.Type;

export const ListRevisionInput = PaginationInput;

export type ListRevisionInput = PaginationInputType;

export const revisionPage = Page(Revision);

export type RevisionPage = PageType<Revision>;

export interface RevisionPort extends CrudPort<Revision, CreateRevisionInput, UpdateRevisionInput, ListRevisionInput, EntityIdType, RevisionPage> {
}
