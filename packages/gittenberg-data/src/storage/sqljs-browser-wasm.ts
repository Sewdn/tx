import sqlWasmBrowserUrl from "sql.js/dist/sql-wasm-browser.wasm?url"

/** Resolve sql.js browser WASM when bundled (Vite `?url`). */
export function createDefaultSqlJsLocateFile(): (file: string) => string {
  return (file: string) =>
    file === "sql-wasm-browser.wasm" ? sqlWasmBrowserUrl : file
}
