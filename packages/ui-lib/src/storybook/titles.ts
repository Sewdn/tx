/**
 * Canonical Storybook title paths for Gittenberg ui-lib (reference only).
 *
 * Generated `*.stories.tsx` files embed these paths as string literals
 * (Storybook CSF static analysis). Update `scripts/sync-stories.mjs` when
 * adding components, then run `bun run sync-stories`.
 *
 * Drill-down order (via preview storySort):
 *   Pages → {Domain} → Organisms → Molecules → Atoms
 */
const ROOT = "Gittenberg" as const

type Layer = "Atoms" | "Molecules" | "Organisms"

function domainPath(domain: string, layer: Layer, name: string) {
  return `${ROOT}/${domain}/${layer}/${name}` as const
}

export const storyTitles = {
  pages: {
    repositoryHome: `${ROOT}/Pages/Repository Home`,
    revisionDetail: `${ROOT}/Pages/Revision Detail`,
    readerPreview: `${ROOT}/Pages/Reader Preview`,
    buildExport: `${ROOT}/Pages/Build & Export`,
    editionHistory: `${ROOT}/Pages/Edition History`,
    internationalBuilds: `${ROOT}/Pages/International Builds`,
    libraryOfBuilds: `${ROOT}/Pages/Library of Builds`,
    agentDashboard: `${ROOT}/Pages/Agent Dashboard`,
    manuscriptEditor: `${ROOT}/Pages/Manuscript Editor`,
  },

  shell: {
    atoms: (name: string) => domainPath("Shell", "Atoms", name),
    molecules: (name: string) => domainPath("Shell", "Molecules", name),
    organisms: (name: string) => domainPath("Shell", "Organisms", name),
  },

  repository: {
    atoms: (name: string) => domainPath("Repository", "Atoms", name),
    molecules: (name: string) => domainPath("Repository", "Molecules", name),
    organisms: (name: string) => domainPath("Repository", "Organisms", name),
  },

  revision: {
    atoms: (name: string) => domainPath("Revision", "Atoms", name),
    molecules: (name: string) => domainPath("Revision", "Molecules", name),
    organisms: (name: string) => domainPath("Revision", "Organisms", name),
  },

  reader: {
    atoms: (name: string) => domainPath("Reader", "Atoms", name),
    molecules: (name: string) => domainPath("Reader", "Molecules", name),
    organisms: (name: string) => domainPath("Reader", "Organisms", name),
  },

  buildExport: {
    atoms: (name: string) => domainPath("Build & Export", "Atoms", name),
    molecules: (name: string) => domainPath("Build & Export", "Molecules", name),
    organisms: (name: string) => domainPath("Build & Export", "Organisms", name),
  },

  editionHistory: {
    atoms: (name: string) => domainPath("Edition History", "Atoms", name),
    molecules: (name: string) => domainPath("Edition History", "Molecules", name),
    organisms: (name: string) => domainPath("Edition History", "Organisms", name),
  },

  library: {
    atoms: (name: string) => domainPath("Library", "Atoms", name),
    molecules: (name: string) => domainPath("Library", "Molecules", name),
    organisms: (name: string) => domainPath("Library", "Organisms", name),
  },

  agents: {
    atoms: (name: string) => domainPath("Agents", "Atoms", name),
    molecules: (name: string) => domainPath("Agents", "Molecules", name),
    organisms: (name: string) => domainPath("Agents", "Organisms", name),
  },

  lexicon: {
    atoms: (name: string) => domainPath("Lexicon Editor", "Atoms", name),
    molecules: (name: string) => domainPath("Lexicon Editor", "Molecules", name),
    organisms: (name: string) => domainPath("Lexicon Editor", "Organisms", name),
  },
} as const
