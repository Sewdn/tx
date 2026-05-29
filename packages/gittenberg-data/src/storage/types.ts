import type { EntityId } from "@tx/core-domain"

export type EntityTableName =
  | "repository"
  | "manuscript_file"
  | "revision"
  | "agent"
  | "literary_build"
  | "library_edition"
  | "activity_event"
  | "reader_chapter"
  | "metric_snapshot"

export type StoredRecord = {
  id: EntityId
  createdAt: string
  updatedAt: string
}

/** Low-level persistence for encoded entity payloads (backend-agnostic). */
export interface EntityStore {
  init(): Promise<void>
  get(table: EntityTableName, id: EntityId): Promise<StoredRecord | undefined>
  list(table: EntityTableName): Promise<StoredRecord[]>
  upsert(table: EntityTableName, record: StoredRecord): Promise<void>
  remove(table: EntityTableName, id: EntityId): Promise<void>
  count(table: EntityTableName): Promise<number>
  dispose?(): Promise<void>
}

export type GittenbergBackend = "memory" | "localStorage" | "sqlite"

export type CreateEntityStoreOptions = {
  backend: GittenbergBackend
  namespace?: string
  /** sql.js WASM resolver (browser). Defaults to bundled `sql-wasm-browser.wasm`. */
  locateFile?: (file: string) => string
}
