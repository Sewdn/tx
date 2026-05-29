/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITTENBERG_BACKEND?: "memory" | "localStorage" | "sqlite"
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
