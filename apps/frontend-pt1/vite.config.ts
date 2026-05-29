import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const appSrc = path.resolve(rootDir, "./src")
const uiLibSrc = path.resolve(rootDir, "../../packages/ui-lib/src")
const uiSrc = path.resolve(rootDir, "../../packages/ui/src")

function resolveWithExtensions(baseDir: string, source: string) {
  const candidates = [
    path.join(baseDir, source),
    path.join(baseDir, `${source}.tsx`),
    path.join(baseDir, `${source}.ts`),
    path.join(baseDir, source, "index.tsx"),
    path.join(baseDir, source, "index.ts"),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate
    }
  }
  return null
}

function workspaceInternalAlias(): Plugin {
  return {
    name: "workspace-internal-alias",
    enforce: "pre",
    resolveId(source, importer) {
      if (!source.startsWith("@/") || !importer) {
        return null
      }
      const file = importer.replace(/\\/g, "/")
      const relative = source.slice(2)
      if (file.includes("/packages/ui-lib/")) {
        return resolveWithExtensions(uiLibSrc, relative)
      }
      if (file.includes("/packages/ui/")) {
        return resolveWithExtensions(uiSrc, relative)
      }
      return resolveWithExtensions(appSrc, relative)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), workspaceInternalAlias()],
  assetsInclude: ["**/*.wasm"],
})
