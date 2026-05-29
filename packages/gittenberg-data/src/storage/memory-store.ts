import type { EntityId } from "@tx/core-domain"
import type { EntityStore, EntityTableName, StoredRecord } from "./types.js"

export function createMemoryEntityStore(): EntityStore {
  const tables = new Map<EntityTableName, Map<EntityId, StoredRecord>>()

  const table = (name: EntityTableName) => {
    let bucket = tables.get(name)
    if (!bucket) {
      bucket = new Map()
      tables.set(name, bucket)
    }
    return bucket
  }

  return {
    async init() {},
    async get(tableName, id) {
      return table(tableName).get(id)
    },
    async list(tableName) {
      return Array.from(table(tableName).values())
    },
    async upsert(tableName, record) {
      table(tableName).set(record.id, record)
    },
    async remove(tableName, id) {
      table(tableName).delete(id)
    },
    async count(tableName) {
      return table(tableName).size
    },
  }
}
