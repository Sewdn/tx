import type {
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
  ArchivalVersionRow,
  BreadcrumbSegment,
  BuildStatusItem,
  CanvasTheme,
  CurationBar,
  DesignPreset,
  DiffLine,
  FormatArtifact,
  FormatOption,
  LibraryAuthorFilter,
  LineageBranch,
  MetadataField,
  RepositoryTag,
  RevisionComment,
  RevisionStatus,
  StylingSliderOption,
  StylingToggleOption,
} from "@/lib/gittenberg-json"
import type {
  ActivityFeedItemData,
  AgentDashboardRowData,
  AgentListItemData,
  FileTableRowData,
  LibraryBuildCardData,
  MetricCardData,
  TocChapterItem,
} from "@/lib/types"

export function toRepositoryTags(tags: unknown): RepositoryTag[] {
  return (tags as RepositoryTag[]) ?? []
}

export function toMetadataFields(metadata: unknown): MetadataField[] {
  return (metadata as MetadataField[]) ?? []
}

export function toFileTableRows(files: ManuscriptFile[]): FileTableRowData[] {
  return files.map((file) => ({
    id: file.id,
    icon: file.icon,
    name: file.name,
    description: file.description,
    timestamp: file.timestamp,
    highlighted: file.highlighted,
    highlightLabel: file.highlightLabel || undefined,
  }))
}

export function toAgentListItems(agents: Agent[]): AgentListItemData[] {
  return agents.map((agent) => ({
    id: agent.id,
    name: agent.name,
    status: agent.status,
    icon: agent.icon,
  }))
}

export function toMetricCards(metrics: MetricSnapshot[]): MetricCardData[] {
  return metrics.map((metric) => ({
    id: metric.id,
    label: metric.label,
    value: metric.value,
    delta: metric.delta || undefined,
    deltaPositive: metric.deltaPositive,
  }))
}

export function toRevisionDiffLines(revision: Revision): DiffLine[] {
  return (revision.diffLines as DiffLine[]) ?? []
}

export function toRevisionComments(revision: Revision): RevisionComment[] {
  return (revision.comments as RevisionComment[]) ?? []
}

export function toRevisionBreadcrumbs(revision: Revision): BreadcrumbSegment[] {
  return (revision.breadcrumbs as BreadcrumbSegment[]) ?? []
}

export function toRevisionStatus(status: string): RevisionStatus {
  return status as RevisionStatus
}

export function toAgentDashboardRows(agents: Agent[]): AgentDashboardRowData[] {
  return agents.map((agent) => ({
    id: agent.id,
    name: agent.name,
    description: agent.description,
    icon: agent.icon,
    status: agent.status,
    statusVariant: agent.statusVariant as AgentStatusVariant,
    iconVariant: agent.iconVariant as AgentIconVariant,
  }))
}

export function toActivityFeedItems(events: ActivityEvent[]): ActivityFeedItemData[] {
  return events.map((event) => ({
    id: event.id,
    timestamp: event.timestamp,
    title: event.title,
    body: event.body,
    tag: event.tag || undefined,
    tagVariant: (event.tagVariant || undefined) as ActivityTagVariant | undefined,
    actionLabel: event.actionLabel || undefined,
    dotVariant: event.dotVariant as ActivityDotVariant,
  }))
}

export function toCurationBars(bars: unknown): CurationBar[] {
  return (bars as CurationBar[]) ?? []
}

export function toLineageBranches(build: LiteraryBuild): LineageBranch[] {
  return (build.lineage as LineageBranch[]) ?? []
}

export function toFormatArtifacts(build: LiteraryBuild): FormatArtifact[] {
  return (build.artifacts as FormatArtifact[]) ?? []
}

export function toArchivalVersions(build: LiteraryBuild): ArchivalVersionRow[] {
  return (build.archivalVersions as ArchivalVersionRow[]) ?? []
}

export function toBuildStatusItems(build: LiteraryBuild): BuildStatusItem[] {
  return (build.buildStatus as BuildStatusItem[]) ?? []
}

export function toFormatOptions(build: LiteraryBuild): FormatOption[] {
  return (build.formats as FormatOption[]) ?? []
}

export function toDesignPresets(build: LiteraryBuild): DesignPreset[] {
  return (build.presets as DesignPreset[]) ?? []
}

export function toStylingSliders(build: LiteraryBuild): StylingSliderOption[] {
  const styling = build.styling as { sliders?: StylingSliderOption[] }
  return styling?.sliders ?? []
}

export function toStylingToggles(build: LiteraryBuild): StylingToggleOption[] {
  const styling = build.styling as { toggles?: StylingToggleOption[] }
  return styling?.toggles ?? []
}

export function toLibraryBuildCards(editions: LibraryEdition[]): LibraryBuildCardData[] {
  return editions.map((edition) => ({
    id: edition.id,
    title: edition.title,
    author: edition.author,
    genre: edition.genre,
    year: edition.year,
    coverSrc: edition.coverUrl,
    coverAlt: `${edition.title} cover`,
    commit: edition.commit,
    formats: edition.formats as string[],
    badge: edition.badge || undefined,
  }))
}

export function toReaderTocChapters(chapters: ReaderChapter[]): TocChapterItem[] {
  const icons = ["menu_book", "forum", "difference", "analytics", "auto_stories"] as const
  return chapters.map((chapter, index) => ({
    id: chapter.id,
    label: chapter.label,
    icon: icons[index % icons.length] ?? "menu_book",
    href: "#",
    active: index === 0,
  }))
}

export function toReaderParagraphs(chapter: ReaderChapter): string[] {
  return (chapter.paragraphs as string[]) ?? []
}

export function toCanvasThemes(themes: unknown): CanvasTheme[] {
  return (themes as CanvasTheme[]) ?? []
}

export function toLibraryAuthors(authors: unknown): LibraryAuthorFilter[] {
  return (authors as LibraryAuthorFilter[]) ?? []
}

export function repositoryHeroFrom(repo: Repository) {
  return {
    badge: "Repository",
    repoId: `id: ${repo.slug}`,
    title: repo.title,
    description: repo.readmeExcerpt,
    forkLabel: "Fork Manuscript",
    watchLabel: "Watch Repository",
  }
}
