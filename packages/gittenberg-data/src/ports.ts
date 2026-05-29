import type {
  ActivityEventPort,
  AgentPort,
  LibraryEditionPort,
  LiteraryBuildPort,
  ManuscriptFilePort,
  MetricSnapshotPort,
  ReaderChapterPort,
  RepositoryPort,
  RevisionPort,
} from "@tx/domain-shared"

export type FileTreeNode = {
  id: string
  name: string
  icon: string
  active?: boolean
  highlighted?: boolean
  children?: FileTreeNode[]
}

/** Shared CRUD port surface for all Gittenberg domain entities. */
export type GittenbergPorts = {
  readonly repository: RepositoryPort
  readonly manuscriptFile: ManuscriptFilePort
  readonly revision: RevisionPort
  readonly agent: AgentPort
  readonly literaryBuild: LiteraryBuildPort
  readonly libraryEdition: LibraryEditionPort
  readonly activityEvent: ActivityEventPort
  readonly readerChapter: ReaderChapterPort
  readonly metricSnapshot: MetricSnapshotPort
}

export type GittenbergUiSeed = {
  readonly footerLinks: ReadonlyArray<{ label: string; href: string }>
  readonly sidebarFooter: ReadonlyArray<{
    id: string
    label: string
    icon: string
    href: string
  }>
  readonly fileTree: readonly FileTreeNode[]
  readonly curatorAvatar: string
  readonly readerIllustration: string
  readonly libraryAuthors: ReadonlyArray<{ id: string; label: string; checked?: boolean }>
  readonly libraryFormats: readonly string[]
  readonly curationBars: ReadonlyArray<{
    id: string
    label: string
    heightPercent: number
    fillPercent: number
  }>
  readonly canvasThemes: ReadonlyArray<{ id: string; color: string; active?: boolean }>
}

/** Primary demo repository id in seed data (use {@link DEFAULT_REPOSITORY_SLUG} in routes). */
export const MOBY_REPOSITORY_ID = "repo-moby-dick"

/** Default landing slug when visiting `/` (matches seed `Repository.slug`). */
export const DEFAULT_REPOSITORY_SLUG = "moby-dick"
