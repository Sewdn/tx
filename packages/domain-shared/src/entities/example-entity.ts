import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for ExampleEntity.
 * Starter example entity. Replace these fields with your real domain model.
 */
export class ExampleEntity extends Schema.Class<ExampleEntity>("ExampleEntity")({
  createdAt: IsoDateString,
  id: EntityId,
  name: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeExampleEntity = Schema.decodeUnknownSync(ExampleEntity);
export const decodeExampleEntitySync = decodeExampleEntity;
export const encodeExampleEntity = Schema.encodeSync(ExampleEntity);
export const CreateExampleEntityInput = Schema.Struct({
  name: Schema.String,
});

export type CreateExampleEntityInput = typeof CreateExampleEntityInput.Type;

export const UpdateExampleEntityInput = Schema.Struct({
  name: Schema.optionalKey(Schema.String),
});

export type UpdateExampleEntityInput = typeof UpdateExampleEntityInput.Type;

export const ListExampleEntityInput = PaginationInput;

export type ListExampleEntityInput = PaginationInputType;

export const exampleentityPage = Page(ExampleEntity);

export type ExampleEntityPage = PageType<ExampleEntity>;

export interface ExampleEntityPort extends CrudPort<ExampleEntity, CreateExampleEntityInput, UpdateExampleEntityInput, ListExampleEntityInput, EntityIdType, ExampleEntityPage> {
}
