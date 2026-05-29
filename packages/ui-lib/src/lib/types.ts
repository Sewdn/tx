/**
 * Presentation-layer types for Gittenberg UI components.
 * Domain entities come from `@tx/domain-shared`; JSON field shapes from `./gittenberg-json`.
 */

export type {
  ActivityEvent,
  Agent,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MetricSnapshot,
  ReaderChapter,
  Repository,
  Revision,
} from "@tx/domain-shared"

import type {
  ActivityDotVariant,
  ActivityTagVariant,
  AgentIconVariant,
  AgentStatusVariant,
} from "@/lib/gittenberg-json"

export type {
  ActivityDotVariant,
  ActivityTagVariant,
  AgentIconVariant,
  AgentStatusVariant,
  ArchivalVersionRow,
  BreadcrumbSegment,
  BuildStatusItem,
  CanvasTheme,
  CurationBar,
  FileTreeNode,
  DesignPreset,
  DiffLine,
  DiffLineVariant,
  FormatArtifact,
  FormatOption,
  LibraryAuthorFilter,
  LineageBranch,
  MetadataField,
  RepositoryTag,
  RepositoryTagVariant,
  RevisionComment,
  RevisionStatus,
  StylingSliderOption,
  StylingToggleOption,
} from "@/lib/gittenberg-json"

/** @deprecated Use {@link RevisionComment} */
export type CommentData = import("@/lib/gittenberg-json").RevisionComment

/** @deprecated Use {@link DiffLine} */
export type DiffLineData = import("@/lib/gittenberg-json").DiffLine

export type NavItem = {
  id: string
  label: string
  href: string
}

export type SidebarNavItem = NavItem & {
  icon: string
  active?: boolean
}

/** View of {@link ManuscriptFile} for file table rows */
export type FileTableRowData = {
  id: string
  icon: string
  name: string
  description?: string
  timestamp: string
  highlighted?: boolean
  highlightLabel?: string
}

export type AgentListItemData = {
  id: string
  name: string
  status: string
  icon: string
}

export type MetricCardData = {
  id: string
  label: string
  value: string
  delta?: string
  deltaPositive?: boolean
}

export type TypographyFamily = "serif" | "sans"

export type TocChapterItem = SidebarNavItem

export type LibraryBuildCardData = {
  id: string
  title: string
  author: string
  genre: string
  year: string
  coverSrc: string
  coverAlt: string
  commit: string
  formats: string[]
  badge?: string
}

/** @deprecated Use {@link LibraryAuthorFilter} */
export type FilterCheckboxOption = import("@/lib/gittenberg-json").LibraryAuthorFilter

export type AgentDashboardRowData = {
  id: string
  name: string
  description: string
  icon: string
  status: string
  statusVariant: AgentStatusVariant
  iconVariant?: AgentIconVariant
}

export type ActivityFeedItemData = {
  id: string
  timestamp: string
  title: string
  body: string
  tag?: string
  tagVariant?: ActivityTagVariant
  actionLabel?: string
  dotVariant: ActivityDotVariant
}
