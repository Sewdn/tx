import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for ProvenanceCertificate.
 * Issued certificate for a permaweb anchor act
 */
export class ProvenanceCertificate extends Schema.Class<ProvenanceCertificate>("ProvenanceCertificate")({
  createdAt: IsoDateString,
  id: EntityId,
  anchorId: Schema.String,
  patronDisplayName: Schema.String,
  workTitle: Schema.String,
  workAuthor: Schema.String,
  workYear: Schema.String,
  commitHash: Schema.String,
  arweaveTxId: Schema.String,
  issuedAt: IsoDateString,
  seriesLabel: Schema.String,
  stewardshipDecree: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeProvenanceCertificate = Schema.decodeUnknownSync(ProvenanceCertificate);
export const decodeProvenanceCertificateSync = decodeProvenanceCertificate;
export const encodeProvenanceCertificate = Schema.encodeSync(ProvenanceCertificate);
export const CreateProvenanceCertificateInput = Schema.Struct({
  anchorId: Schema.String,
  patronDisplayName: Schema.String,
  workTitle: Schema.String,
  workAuthor: Schema.String,
  workYear: Schema.String,
  commitHash: Schema.String,
  arweaveTxId: Schema.String,
  issuedAt: IsoDateString,
  seriesLabel: Schema.String,
  stewardshipDecree: Schema.String,
});

export type CreateProvenanceCertificateInput = typeof CreateProvenanceCertificateInput.Type;

export const UpdateProvenanceCertificateInput = Schema.Struct({
  anchorId: Schema.optionalKey(Schema.String),
  patronDisplayName: Schema.optionalKey(Schema.String),
  workTitle: Schema.optionalKey(Schema.String),
  workAuthor: Schema.optionalKey(Schema.String),
  workYear: Schema.optionalKey(Schema.String),
  commitHash: Schema.optionalKey(Schema.String),
  arweaveTxId: Schema.optionalKey(Schema.String),
  issuedAt: Schema.optionalKey(IsoDateString),
  seriesLabel: Schema.optionalKey(Schema.String),
  stewardshipDecree: Schema.optionalKey(Schema.String),
});

export type UpdateProvenanceCertificateInput = typeof UpdateProvenanceCertificateInput.Type;

export const ListProvenanceCertificateInput = PaginationInput;

export type ListProvenanceCertificateInput = PaginationInputType;

export const provenancecertificatePage = Page(ProvenanceCertificate);

export type ProvenanceCertificatePage = PageType<ProvenanceCertificate>;

export interface ProvenanceCertificatePort extends CrudPort<ProvenanceCertificate, CreateProvenanceCertificateInput, UpdateProvenanceCertificateInput, ListProvenanceCertificateInput, EntityIdType, ProvenanceCertificatePage> {
}
