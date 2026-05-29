/**
 * Typed shapes for {@link Schema.Json} fields on Gittenberg domain entities.
 * Seed data in `@tx/gittenberg-data` and UI fixtures should conform to these.
 */

export type RepositoryTagVariant = "public-domain" | "agent-curated" | "version"

export type RepositoryTag = {
  variant: RepositoryTagVariant
  label: string
}

export type MetadataField = {
  label: string
  value: string
  href?: string
}

export type RevisionStatus = "open" | "merged" | "closed"

export type BreadcrumbSegment = {
  label: string
}

export type DiffLineVariant = "context" | "added" | "removed"

export type DiffLine = {
  id: string
  variant: DiffLineVariant
  oldLine?: number
  newLine?: number
  content: string
  icon?: string
}

export type RevisionComment = {
  id: string
  author: string
  timestamp: string
  body: string
}

export type FormatOption = {
  id: string
  icon: string
  title: string
  description: string
  selected?: boolean
}

export type DesignPreset = {
  id: string
  label: string
  active?: boolean
}

export type StylingSliderOption = {
  id: string
  label: string
  value: string
  progress?: number
}

export type StylingToggleOption = {
  id: string
  label: string
  enabled: boolean
}

export type LiteraryBuildStyling = {
  sliders: StylingSliderOption[]
  toggles: StylingToggleOption[]
}

export type LineageBranch = {
  id: string
  title: string
  badge?: string
  description: string
  formats: string[]
  isDefault?: boolean
  isLast?: boolean
}

export type FormatArtifact = {
  id: string
  icon: string
  title: string
  description: string
  size: string
}

export type ArchivalVersionRow = {
  id: string
  version: string
  note: string
  binding: string
  date: string
}

export type BuildStatusItem = {
  label: string
  value: string
  variant?: "success" | "neutral"
}

export type AgentStatusVariant = "operational" | "paused" | "error"
export type AgentIconVariant = "secondary" | "primary" | "muted"

export type ActivityTagVariant = "secondary" | "muted" | "error"
export type ActivityDotVariant = "secondary" | "primary" | "error"

export type CanvasTheme = {
  id: string
  color: string
  active?: boolean
}

export type CurationBar = {
  id: string
  label: string
  heightPercent: number
  fillPercent: number
}

export type LibraryAuthorFilter = {
  id: string
  label: string
  checked?: boolean
}

/** Matches {@link GittenbergUiSeed.fileTree} in `@tx/gittenberg-data`. */
export type FileTreeNode = {
  id: string
  name: string
  icon: string
  active?: boolean
  highlighted?: boolean
  children?: FileTreeNode[]
}
