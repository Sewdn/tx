import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for DiscoveryShelf.
 * Cinematic library discovery shelf
 */
export class DiscoveryShelf extends Schema.Class<DiscoveryShelf>("DiscoveryShelf")({
  createdAt: IsoDateString,
  id: EntityId,
  slug: Schema.String,
  title: Schema.String,
  subtitle: Schema.optional(Schema.String),
  shelfType: Schema.String,
  editionIds: Schema.Json,
  layout: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeDiscoveryShelf = Schema.decodeUnknownSync(DiscoveryShelf);
export const decodeDiscoveryShelfSync = decodeDiscoveryShelf;
export const encodeDiscoveryShelf = Schema.encodeSync(DiscoveryShelf);
export const CreateDiscoveryShelfInput = Schema.Struct({
  slug: Schema.String,
  title: Schema.String,
  subtitle: Schema.optionalKey(Schema.String),
  shelfType: Schema.String,
  editionIds: Schema.Json,
  layout: Schema.String,
});

export type CreateDiscoveryShelfInput = typeof CreateDiscoveryShelfInput.Type;

export const UpdateDiscoveryShelfInput = Schema.Struct({
  slug: Schema.optionalKey(Schema.String),
  title: Schema.optionalKey(Schema.String),
  subtitle: Schema.optionalKey(Schema.String),
  shelfType: Schema.optionalKey(Schema.String),
  editionIds: Schema.optionalKey(Schema.Json),
  layout: Schema.optionalKey(Schema.String),
});

export type UpdateDiscoveryShelfInput = typeof UpdateDiscoveryShelfInput.Type;

export const ListDiscoveryShelfInput = PaginationInput;

export type ListDiscoveryShelfInput = PaginationInputType;

export const discoveryshelfPage = Page(DiscoveryShelf);

export type DiscoveryShelfPage = PageType<DiscoveryShelf>;

export interface DiscoveryShelfPort extends CrudPort<DiscoveryShelf, CreateDiscoveryShelfInput, UpdateDiscoveryShelfInput, ListDiscoveryShelfInput, EntityIdType, DiscoveryShelfPage> {
}
