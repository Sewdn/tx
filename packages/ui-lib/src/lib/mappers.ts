import type {
  ActivityEvent,
  Agent,
  CollectionItem,
  DiscoveryShelf,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MembershipPlan,
  MetricSnapshot,
  PrintProduct,
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
  BindingOptionData,
  CinematicBookTileData,
  CollectionBookCardData,
  EternalGalleryCardData,
  FileTableRowData,
  HorizontalShelfData,
  LibraryBuildCardData,
  MembershipFeatureData,
  MembershipTierCardData,
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

type ProvenanceSnapshot = { status?: string }

type BindingOptionSnapshot = {
  id: string
  label: string
  description: string
  priceCents: number
  isDefault?: boolean
}

function editionVersionLabel(edition: LibraryEdition): string {
  if (edition.badge) {
    return edition.badge.toUpperCase()
  }
  return edition.commit
}

function membershipCtaLabel(tier: string, active: boolean): string {
  if (active) {
    return "Current Plan"
  }
  if (tier === "mecene-patron") {
    return "Become a Mécène"
  }
  if (tier === "premier") {
    return "Upgrade to Premier"
  }
  return "Get Started"
}

export function toCinematicBookTiles(editions: LibraryEdition[]): CinematicBookTileData[] {
  return editions.map((edition) => ({
    id: edition.id,
    title: edition.title,
    author: edition.author,
    coverSrc: edition.coverUrl,
    coverAlt: `${edition.title} cover`,
    locked: Boolean(edition.requiredTier),
    href: `#/library/editions/${edition.id}`,
  }))
}

export function toCollectionBookCards(
  editions: LibraryEdition[],
  items: CollectionItem[],
): CollectionBookCardData[] {
  const itemByEditionId = new Map(
    items
      .filter((item) => item.libraryEditionId)
      .map((item) => [item.libraryEditionId!, item]),
  )

  return editions.map((edition) => {
    const item = itemByEditionId.get(edition.id)
    const requiredTier = item?.requiredTier ?? edition.requiredTier
    const provenance = edition.provenance as ProvenanceSnapshot | undefined

    return {
      id: edition.id,
      title: edition.title,
      author: edition.author,
      genre: edition.genre,
      year: edition.year,
      coverSrc: edition.coverUrl,
      versionLabel: editionVersionLabel(edition),
      formats: edition.formats as string[],
      provenanceVerified: provenance?.status === "verified",
      locked: Boolean(requiredTier),
      shippingQueued: Boolean(item?.printOrderId),
      requiredTier,
    }
  })
}

export function toEternalGalleryCards(editions: LibraryEdition[]): EternalGalleryCardData[] {
  return editions
    .filter((edition) => edition.isEternal)
    .map((edition, index) => ({
      id: edition.id,
      title: edition.title,
      author: edition.author,
      coverSrc: edition.coverUrl,
      eraLabel: edition.decadeLabel ?? edition.year,
      statusLabel: edition.anchorStatus ?? "Anchored",
      patronName: edition.patronCreditName ?? "Anonymous Patron",
      arweaveHash: edition.arweaveTxId ?? "",
      featured: index === 0,
      eternal: edition.isEternal,
    }))
}

export function toMembershipTierCards(plans: MembershipPlan[]): MembershipTierCardData[] {
  return plans.map((plan) => {
    const features = plan.features as MembershipFeatureData[]
    const active = plan.tier === "free"

    return {
      id: plan.id,
      name: plan.name,
      tier: plan.tier,
      monthlyPrice:
        plan.monthlyPriceCents !== undefined ? plan.monthlyPriceCents / 100 : undefined,
      annualPrice: plan.annualPriceCents !== undefined ? plan.annualPriceCents / 100 : undefined,
      features,
      active,
      ctaLabel: membershipCtaLabel(plan.tier, active),
      highlighted: plan.tier === "premier",
    }
  })
}

export function toHorizontalShelves(
  shelves: DiscoveryShelf[],
  editionsById: Record<string, LibraryEdition>,
): HorizontalShelfData[] {
  return shelves.map((shelf) => ({
    id: shelf.id,
    title: shelf.title,
    subtitle: shelf.subtitle || undefined,
    items: ((shelf.editionIds as string[]) ?? [])
      .map((editionId) => editionsById[editionId])
      .filter((edition): edition is LibraryEdition => edition !== undefined)
      .map((edition) => ({
        id: edition.id,
        title: edition.title,
        author: edition.author,
        coverSrc: edition.coverUrl,
        coverAlt: `${edition.title} cover`,
        locked: Boolean(edition.requiredTier),
        href: `#/library/editions/${edition.id}`,
      })),
  }))
}

export function toBindingOptions(product: PrintProduct, selectedId?: string): BindingOptionData[] {
  const options = product.bindingOptions as BindingOptionSnapshot[]

  return options.map((option) => ({
    id: option.id,
    label: option.label,
    description: option.description,
    priceCents: option.priceCents,
    selected: selectedId ? option.id === selectedId : Boolean(option.isDefault),
  }))
}
