import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for ManuscriptFile.
 * File in a repository manuscript tree
 */
export class ManuscriptFile extends Schema.Class<ManuscriptFile>("ManuscriptFile")({
  createdAt: IsoDateString,
  id: EntityId,
  repositoryId: Schema.String,
  icon: Schema.String,
  name: Schema.String,
  description: Schema.String,
  timestamp: Schema.String,
  highlighted: Schema.Boolean,
  highlightLabel: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeManuscriptFile = Schema.decodeUnknownSync(ManuscriptFile);
export const decodeManuscriptFileSync = decodeManuscriptFile;
export const encodeManuscriptFile = Schema.encodeSync(ManuscriptFile);
export const CreateManuscriptFileInput = Schema.Struct({
  repositoryId: Schema.String,
  icon: Schema.String,
  name: Schema.String,
  description: Schema.String,
  timestamp: Schema.String,
  highlighted: Schema.Boolean,
  highlightLabel: Schema.String,
});

export type CreateManuscriptFileInput = typeof CreateManuscriptFileInput.Type;

export const UpdateManuscriptFileInput = Schema.Struct({
  repositoryId: Schema.optionalKey(Schema.String),
  icon: Schema.optionalKey(Schema.String),
  name: Schema.optionalKey(Schema.String),
  description: Schema.optionalKey(Schema.String),
  timestamp: Schema.optionalKey(Schema.String),
  highlighted: Schema.optionalKey(Schema.Boolean),
  highlightLabel: Schema.optionalKey(Schema.String),
});

export type UpdateManuscriptFileInput = typeof UpdateManuscriptFileInput.Type;

export const ListManuscriptFileInput = PaginationInput;

export type ListManuscriptFileInput = PaginationInputType;

export const manuscriptfilePage = Page(ManuscriptFile);

export type ManuscriptFilePage = PageType<ManuscriptFile>;

export interface ManuscriptFilePort extends CrudPort<ManuscriptFile, CreateManuscriptFileInput, UpdateManuscriptFileInput, ListManuscriptFileInput, EntityIdType, ManuscriptFilePage> {
}
