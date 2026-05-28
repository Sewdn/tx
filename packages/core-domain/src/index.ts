/**
 * Shared boilerplate for Effect-based domain declarations.
 * Domain packages should re-export from here instead of duplicating generic helpers.
 */

import { Schema } from "effect";

export const EntityId = Schema.String;
export type EntityId = typeof EntityId.Type;

export const IsoDateString = Schema.String;
export type IsoDateString = typeof IsoDateString.Type;

export type Optional<TValue> = TValue | null | undefined;

export const PaginationInput = Schema.Struct({
  page: Schema.Number,
  pageSize: Schema.Number,
});
export type PaginationInput = typeof PaginationInput.Type;

export const EntityTimestamps = Schema.Struct({
  createdAt: IsoDateString,
  updatedAt: IsoDateString,
});
export type EntityTimestamps = typeof EntityTimestamps.Type;

export const Page = <TItem extends Schema.Top>(item: TItem) =>
  Schema.Struct({
    items: Schema.Array(item),
    page: Schema.Number,
    pageSize: Schema.Number,
    total: Schema.Number,
  });

export type Page<TItem> = {
  readonly items: readonly TItem[];
  readonly page: number;
  readonly pageSize: number;
  readonly total: number;
};

export interface CrudPort<
  TEntity,
  TCreateInput,
  TUpdateInput,
  TListInput = PaginationInput,
  TId = EntityId,
  TListOutput = Page<TEntity>,
> {
  readonly create: (input: TCreateInput) => Promise<TEntity>;
  readonly getById: (id: TId) => Promise<TEntity | undefined>;
  readonly list: (input: TListInput) => Promise<TListOutput>;
  readonly remove: (id: TId) => Promise<void>;
  readonly update: (id: TId, input: TUpdateInput) => Promise<TEntity>;
}
