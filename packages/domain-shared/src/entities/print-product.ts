import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for PrintProduct.
 * Print-on-demand product for a literary build
 */
export class PrintProduct extends Schema.Class<PrintProduct>("PrintProduct")({
  createdAt: IsoDateString,
  id: EntityId,
  literaryBuildId: Schema.String,
  slug: Schema.String,
  seriesLabel: Schema.String,
  stockStatus: Schema.String,
  bindingOptions: Schema.Json,
  updatedAt: IsoDateString,
}
) { }

export const decodePrintProduct = Schema.decodeUnknownSync(PrintProduct);
export const decodePrintProductSync = decodePrintProduct;
export const encodePrintProduct = Schema.encodeSync(PrintProduct);
export const CreatePrintProductInput = Schema.Struct({
  literaryBuildId: Schema.String,
  slug: Schema.String,
  seriesLabel: Schema.String,
  stockStatus: Schema.String,
  bindingOptions: Schema.Json,
});

export type CreatePrintProductInput = typeof CreatePrintProductInput.Type;

export const UpdatePrintProductInput = Schema.Struct({
  literaryBuildId: Schema.optionalKey(Schema.String),
  slug: Schema.optionalKey(Schema.String),
  seriesLabel: Schema.optionalKey(Schema.String),
  stockStatus: Schema.optionalKey(Schema.String),
  bindingOptions: Schema.optionalKey(Schema.Json),
});

export type UpdatePrintProductInput = typeof UpdatePrintProductInput.Type;

export const ListPrintProductInput = PaginationInput;

export type ListPrintProductInput = PaginationInputType;

export const printproductPage = Page(PrintProduct);

export type PrintProductPage = PageType<PrintProduct>;

export interface PrintProductPort extends CrudPort<PrintProduct, CreatePrintProductInput, UpdatePrintProductInput, ListPrintProductInput, EntityIdType, PrintProductPage> {
}
