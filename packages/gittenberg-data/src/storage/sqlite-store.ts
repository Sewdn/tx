import initSqlJs, { type Database, type SqlJsStatic } from "sql.js"
import type { EntityStore, StoredRecord } from "./types.js"

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS gittenberg_records (
  table_name TEXT NOT NULL,
  id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  payload TEXT NOT NULL,
  PRIMARY KEY (table_name, id)
);
`

function bytesToBase64(bytes: Uint8Array) {
  let binary = ""
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]!)
  }
  return btoa(binary)
}

function base64ToBytes(encoded: string) {
  const binary = atob(encoded)
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }
  return bytes
}

export type SqliteStoreOptions = {
  namespace: string
  /** Persist the SQLite file bytes in localStorage (browser prototype). */
  persist?: boolean
  locateFile?: (file: string) => string
}

export async function createSqliteEntityStore(
  options: SqliteStoreOptions,
): Promise<EntityStore> {
  const persist = options.persist ?? true
  const storageKey = `${options.namespace}:sqlite-db`
  const SQL: SqlJsStatic = await initSqlJs({
    locateFile:
      options.locateFile ??
      ((file) => `https://sql.js.org/dist/${file}`),
  })

  const saved = persist ? globalThis.localStorage?.getItem(storageKey) : null
  const db: Database = saved
    ? new SQL.Database(base64ToBytes(saved))
    : new SQL.Database()

  db.run(SCHEMA_SQL)

  const persistDb = () => {
    if (!persist || !globalThis.localStorage) return
    const binary = db.export()
    globalThis.localStorage.setItem(storageKey, bytesToBase64(binary))
  }

  const rowToRecord = (payload: string): StoredRecord => JSON.parse(payload) as StoredRecord

  return {
    async init() {},

    async get(table, id) {
      const statement = db.prepare(
        `SELECT payload FROM gittenberg_records WHERE table_name = ? AND id = ?`,
      )
      statement.bind([table, id])
      if (!statement.step()) {
        statement.free()
        return undefined
      }
      const row = statement.getAsObject() as { payload: string }
      statement.free()
      return rowToRecord(row.payload)
    },

    async list(table) {
      const statement = db.prepare(
        `SELECT payload FROM gittenberg_records WHERE table_name = ? ORDER BY updated_at DESC`,
      )
      statement.bind([table])
      const records: StoredRecord[] = []
      while (statement.step()) {
        const row = statement.getAsObject() as { payload: string }
        records.push(rowToRecord(row.payload))
      }
      statement.free()
      return records
    },

    async upsert(table, record) {
      db.run(
        `INSERT INTO gittenberg_records (table_name, id, created_at, updated_at, payload)
         VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(table_name, id) DO UPDATE SET
           updated_at = excluded.updated_at,
           payload = excluded.payload`,
        [table, record.id, record.createdAt, record.updatedAt, JSON.stringify(record)],
      )
      persistDb()
    },

    async remove(table, id) {
      db.run(`DELETE FROM gittenberg_records WHERE table_name = ? AND id = ?`, [table, id])
      persistDb()
    },

    async count(table) {
      const statement = db.prepare(
        `SELECT COUNT(*) AS total FROM gittenberg_records WHERE table_name = ?`,
      )
      statement.bind([table])
      statement.step()
      const row = statement.getAsObject() as { total: number }
      statement.free()
      return Number(row.total)
    },

    async dispose() {
      db.close()
    },
  }
}
