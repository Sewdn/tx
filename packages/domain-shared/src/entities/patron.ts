import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for Patron.
 * Patronage participant in the Mécène program
 */
export class Patron extends Schema.Class<Patron>("Patron")({
  createdAt: IsoDateString,
  id: EntityId,
  displayName: Schema.String,
  creditName: Schema.optional(Schema.String),
  userId: Schema.optional(Schema.String),
  updatedAt: IsoDateString,
}
) { }

export const decodePatron = Schema.decodeUnknownSync(Patron);
export const decodePatronSync = decodePatron;
export const encodePatron = Schema.encodeSync(Patron);
export const CreatePatronInput = Schema.Struct({
  displayName: Schema.String,
  creditName: Schema.optionalKey(Schema.String),
  userId: Schema.optionalKey(Schema.String),
});

export type CreatePatronInput = typeof CreatePatronInput.Type;

export const UpdatePatronInput = Schema.Struct({
  displayName: Schema.optionalKey(Schema.String),
  creditName: Schema.optionalKey(Schema.String),
  userId: Schema.optionalKey(Schema.String),
});

export type UpdatePatronInput = typeof UpdatePatronInput.Type;

export const ListPatronInput = PaginationInput;

export type ListPatronInput = PaginationInputType;

export const patronPage = Page(Patron);

export type PatronPage = PageType<Patron>;

export interface PatronPort extends CrudPort<Patron, CreatePatronInput, UpdatePatronInput, ListPatronInput, EntityIdType, PatronPage> {
}
