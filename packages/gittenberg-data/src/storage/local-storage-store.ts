import type { EntityId } from "@tx/core-domain"
import type { EntityStore, EntityTableName, StoredRecord } from "./types.js"

const INDEX_SUFFIX = ":ids"

function recordKey(namespace: string, table: EntityTableName, id: EntityId) {
  return `${namespace}:${table}:${id}`
}

function indexKey(namespace: string, table: EntityTableName) {
  return `${namespace}:${table}${INDEX_SUFFIX}`
}

export function createLocalStorageEntityStore(namespace: string): EntityStore {
  const readIds = (table: EntityTableName): EntityId[] => {
    const raw = globalThis.localStorage?.getItem(indexKey(namespace, table))
    if (!raw) return []
    try {
      return JSON.parse(raw) as EntityId[]
    } catch {
      return []
    }
  }

  const writeIds = (table: EntityTableName, ids: EntityId[]) => {
    globalThis.localStorage?.setItem(indexKey(namespace, table), JSON.stringify(ids))
  }

  return {
    async init() {},

    async get(table, id) {
      const raw = globalThis.localStorage?.getItem(recordKey(namespace, table, id))
      if (!raw) return undefined
      return JSON.parse(raw) as StoredRecord
    },

    async list(table) {
      const ids = readIds(table)
      const records: StoredRecord[] = []
      for (const id of ids) {
        const record = await this.get(table, id)
        if (record) records.push(record)
      }
      return records
    },

    async upsert(table, record) {
      globalThis.localStorage?.setItem(
        recordKey(namespace, table, record.id),
        JSON.stringify(record),
      )
      const ids = new Set(readIds(table))
      ids.add(record.id)
      writeIds(table, Array.from(ids))
    },

    async remove(table, id) {
      globalThis.localStorage?.removeItem(recordKey(namespace, table, id))
      writeIds(
        table,
        readIds(table).filter((entry) => entry !== id),
      )
    },

    async count(table) {
      return readIds(table).length
    },
  }
}
