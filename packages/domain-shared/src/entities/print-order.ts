import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for PrintOrder.
 * Print-on-demand order for a literary build
 */
export class PrintOrder extends Schema.Class<PrintOrder>("PrintOrder")({
  createdAt: IsoDateString,
  id: EntityId,
  userId: Schema.String,
  literaryBuildId: Schema.String,
  studioSessionId: Schema.optional(Schema.String),
  bindingOptionId: Schema.String,
  coverMode: Schema.String,
  coverAssetUrl: Schema.optional(Schema.String),
  interiorStyle: Schema.String,
  typographyPreset: Schema.String,
  shippingAddress: Schema.Json,
  status: Schema.String,
  totalCents: Schema.Number,
  updatedAt: IsoDateString,
}
) { }

export const decodePrintOrder = Schema.decodeUnknownSync(PrintOrder);
export const decodePrintOrderSync = decodePrintOrder;
export const encodePrintOrder = Schema.encodeSync(PrintOrder);
export const CreatePrintOrderInput = Schema.Struct({
  userId: Schema.String,
  literaryBuildId: Schema.String,
  studioSessionId: Schema.optionalKey(Schema.String),
  bindingOptionId: Schema.String,
  coverMode: Schema.String,
  coverAssetUrl: Schema.optionalKey(Schema.String),
  interiorStyle: Schema.String,
  typographyPreset: Schema.String,
  shippingAddress: Schema.Json,
  status: Schema.String,
  totalCents: Schema.Number,
});

export type CreatePrintOrderInput = typeof CreatePrintOrderInput.Type;

export const UpdatePrintOrderInput = Schema.Struct({
  userId: Schema.optionalKey(Schema.String),
  literaryBuildId: Schema.optionalKey(Schema.String),
  studioSessionId: Schema.optionalKey(Schema.String),
  bindingOptionId: Schema.optionalKey(Schema.String),
  coverMode: Schema.optionalKey(Schema.String),
  coverAssetUrl: Schema.optionalKey(Schema.String),
  interiorStyle: Schema.optionalKey(Schema.String),
  typographyPreset: Schema.optionalKey(Schema.String),
  shippingAddress: Schema.optionalKey(Schema.Json),
  status: Schema.optionalKey(Schema.String),
  totalCents: Schema.optionalKey(Schema.Number),
});

export type UpdatePrintOrderInput = typeof UpdatePrintOrderInput.Type;

export const ListPrintOrderInput = PaginationInput;

export type ListPrintOrderInput = PaginationInputType;

export const printorderPage = Page(PrintOrder);

export type PrintOrderPage = PageType<PrintOrder>;

export interface PrintOrderPort extends CrudPort<PrintOrder, CreatePrintOrderInput, UpdatePrintOrderInput, ListPrintOrderInput, EntityIdType, PrintOrderPage> {
}
