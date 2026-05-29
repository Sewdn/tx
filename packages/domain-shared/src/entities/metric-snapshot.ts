import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for MetricSnapshot.
 * Dashboard metric card
 */
export class MetricSnapshot extends Schema.Class<MetricSnapshot>("MetricSnapshot")({
  createdAt: IsoDateString,
  id: EntityId,
  label: Schema.String,
  value: Schema.String,
  delta: Schema.String,
  deltaPositive: Schema.Boolean,
  scope: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeMetricSnapshot = Schema.decodeUnknownSync(MetricSnapshot);
export const decodeMetricSnapshotSync = decodeMetricSnapshot;
export const encodeMetricSnapshot = Schema.encodeSync(MetricSnapshot);
export const CreateMetricSnapshotInput = Schema.Struct({
  label: Schema.String,
  value: Schema.String,
  delta: Schema.String,
  deltaPositive: Schema.Boolean,
  scope: Schema.String,
});

export type CreateMetricSnapshotInput = typeof CreateMetricSnapshotInput.Type;

export const UpdateMetricSnapshotInput = Schema.Struct({
  label: Schema.optionalKey(Schema.String),
  value: Schema.optionalKey(Schema.String),
  delta: Schema.optionalKey(Schema.String),
  deltaPositive: Schema.optionalKey(Schema.Boolean),
  scope: Schema.optionalKey(Schema.String),
});

export type UpdateMetricSnapshotInput = typeof UpdateMetricSnapshotInput.Type;

export const ListMetricSnapshotInput = PaginationInput;

export type ListMetricSnapshotInput = PaginationInputType;

export const metricsnapshotPage = Page(MetricSnapshot);

export type MetricSnapshotPage = PageType<MetricSnapshot>;

export interface MetricSnapshotPort extends CrudPort<MetricSnapshot, CreateMetricSnapshotInput, UpdateMetricSnapshotInput, ListMetricSnapshotInput, EntityIdType, MetricSnapshotPage> {
}
