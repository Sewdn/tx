import { Schema } from "effect";
import type { CrudPort, EntityId as EntityIdType, Page as PageType, PaginationInput as PaginationInputType } from "@tx/core-domain";
import { EntityId, IsoDateString, Page, PaginationInput } from "@tx/core-domain";
/**
 * Effect schema and class model for Agent.
 * Curation agent
 */
export class Agent extends Schema.Class<Agent>("Agent")({
  createdAt: IsoDateString,
  id: EntityId,
  name: Schema.String,
  description: Schema.String,
  status: Schema.String,
  statusVariant: Schema.String,
  icon: Schema.String,
  iconVariant: Schema.String,
  repositoryId: Schema.String,
  updatedAt: IsoDateString,
}
) { }

export const decodeAgent = Schema.decodeUnknownSync(Agent);
export const decodeAgentSync = decodeAgent;
export const encodeAgent = Schema.encodeSync(Agent);
export const CreateAgentInput = Schema.Struct({
  name: Schema.String,
  description: Schema.String,
  status: Schema.String,
  statusVariant: Schema.String,
  icon: Schema.String,
  iconVariant: Schema.String,
  repositoryId: Schema.String,
});

export type CreateAgentInput = typeof CreateAgentInput.Type;

export const UpdateAgentInput = Schema.Struct({
  name: Schema.optionalKey(Schema.String),
  description: Schema.optionalKey(Schema.String),
  status: Schema.optionalKey(Schema.String),
  statusVariant: Schema.optionalKey(Schema.String),
  icon: Schema.optionalKey(Schema.String),
  iconVariant: Schema.optionalKey(Schema.String),
  repositoryId: Schema.optionalKey(Schema.String),
});

export type UpdateAgentInput = typeof UpdateAgentInput.Type;

export const ListAgentInput = PaginationInput;

export type ListAgentInput = PaginationInputType;

export const agentPage = Page(Agent);

export type AgentPage = PageType<Agent>;

export interface AgentPort extends CrudPort<Agent, CreateAgentInput, UpdateAgentInput, ListAgentInput, EntityIdType, AgentPage> {
}
