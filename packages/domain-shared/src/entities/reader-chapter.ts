import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for ReaderChapter.
 * Reader chapter content
 */
export class ReaderChapter extends Schema.Class<ReaderChapter>("ReaderChapter")({
  createdAt: IsoDateString,
  id: EntityId,
  repositoryId: Schema.String,
  label: Schema.String,
  title: Schema.String,
  paragraphs: Schema.Json,
  sortOrder: Schema.Number,
  updatedAt: IsoDateString,
}
) { }

export const decodeReaderChapter = Schema.decodeUnknownSync(ReaderChapter);
export const decodeReaderChapterSync = decodeReaderChapter;
export const encodeReaderChapter = Schema.encodeSync(ReaderChapter);
export const CreateReaderChapterInput = Schema.Struct({
  repositoryId: Schema.String,
  label: Schema.String,
  title: Schema.String,
  paragraphs: Schema.Json,
  sortOrder: Schema.Number,
});

export type CreateReaderChapterInput = typeof CreateReaderChapterInput.Type;

export const UpdateReaderChapterInput = Schema.Struct({
  repositoryId: Schema.optionalKey(Schema.String),
  label: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  paragraphs: Schema.optionalKey(Schema.Json),
  sortOrder: Schema.optionalKey(Schema.Number),
});

export type UpdateReaderChapterInput = typeof UpdateReaderChapterInput.Type;

export const ListReaderChapterInput = PaginationInput;

export type ListReaderChapterInput = PaginationInputType;

export const readerchapterPage = Page(ReaderChapter);

export type ReaderChapterPage = PageType<ReaderChapter>;

export interface ReaderChapterPort extends CrudPort<ReaderChapter, CreateReaderChapterInput, UpdateReaderChapterInput, ListReaderChapterInput, EntityIdType, ReaderChapterPage> {
}
