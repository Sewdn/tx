import type { CrudPort, EntityId, Page, PaginationInput } from "@tx/core-domain"
import type { EntityDefinition } from "../entities/entity-registry.js"
import type { EntityStore, StoredRecord } from "../storage/types.js"

let idCounter = 1

const nowIso = () => new Date().toISOString()
const nextId = (prefix: string) => `${prefix}-${String(idCounter++)}`

export function createPersistedCrudPort<
  TEntity extends StoredRecord,
  TCreate extends Record<string, unknown>,
  TUpdate extends Record<string, unknown>,
>(
  store: EntityStore,
  definition: EntityDefinition<TEntity, TCreate, TUpdate>,
  idPrefix = "gen",
): CrudPort<TEntity, TCreate, TUpdate, PaginationInput, EntityId, Page<TEntity>> {
  return {
    async create(input) {
      const timestamp = nowIso()
      const entity = definition.build(input, nextId(idPrefix), timestamp)
      await store.upsert(definition.table, entity)
      return entity
    },

    async getById(id) {
      const record = await store.get(definition.table, id)
      return record ? definition.decode(record) : undefined
    },

    async list({ page, pageSize }) {
      const records = await store.list(definition.table)
      const items = records.map((record) => definition.decode(record))
      const start = (page - 1) * pageSize
      const slice = items.slice(start, start + pageSize)
      return {
        items: slice,
        page,
        pageSize,
        total: items.length,
      }
    },

    async remove(id) {
      await store.remove(definition.table, id)
    },

    async update(id, input) {
      const existing = await store.get(definition.table, id)
      if (!existing) {
        throw new Error(`Entity not found: ${definition.table}/${id}`)
      }
      const entity = definition.patch(
        definition.decode(existing),
        input,
        nowIso(),
      )
      await store.upsert(definition.table, entity)
      return entity
    },
  }
}
