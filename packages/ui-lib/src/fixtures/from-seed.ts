/**
 * Storybook and component fixtures derived from {@link @tx/gittenberg-data} seed.
 * Single source of truth: `gittenberg-seed.ts` in the data package.
 */
import {
  MOBY_REPOSITORY_ID,
  seedActivityEvents,
  seedAgents,
  seedLibraryEditions,
  seedLiteraryBuilds,
  seedManuscriptFiles,
  seedMetricSnapshots,
  seedReaderChapters,
  seedRepositories,
  seedRevisions,
  seedUi,
} from "@tx/gittenberg-data"
import type { LineageBranch, SidebarNavItem } from "@/lib/types"
import {
  toActivityFeedItems,
  toAgentDashboardRows,
  toAgentListItems,
  toArchivalVersions,
  toBuildStatusItems,
  toCanvasThemes,
  toCurationBars,
  toDesignPresets,
  toFileTableRows,
  toFormatArtifacts,
  toFormatOptions,
  toLibraryAuthors,
  toLibraryBuildCards,
  toLineageBranches,
  toMetricCards,
  toReaderParagraphs,
  toReaderTocChapters,
  toRevisionComments,
  toRevisionDiffLines,
  toStylingSliders,
  toStylingToggles,
} from "@/lib/mappers"

const mobyRepository = seedRepositories.find((repo) => repo.id === MOBY_REPOSITORY_ID)!
const mobyRevision = seedRevisions.find((rev) => rev.repositoryId === MOBY_REPOSITORY_ID)!
const mobyBuild = seedLiteraryBuilds.find((build) => build.repositoryId === MOBY_REPOSITORY_ID)!
const mobyFiles = seedManuscriptFiles.filter((file) => file.repositoryId === MOBY_REPOSITORY_ID)
const mobyRepoAgents = seedAgents.filter((agent) => agent.repositoryId === MOBY_REPOSITORY_ID)
const mobyChapters = seedReaderChapters.filter((ch) => ch.repositoryId === MOBY_REPOSITORY_ID)
const dashboardAgents = seedAgents.filter((agent) => agent.id.startsWith("agent-dash"))

export const seedMobyRepository = mobyRepository
export const seedMobyRevision = mobyRevision
export const seedMobyBuild = mobyBuild

export const mobyDickCover = mobyRepository.coverUrl
export const mobyDickFileRows = toFileTableRows(mobyFiles)
export const mobyDickMetadata = mobyRepository.metadata as import("@/lib/gittenberg-json").MetadataField[]
export const mobyDickAgents = toAgentListItems(mobyRepoAgents)
export const chapter3DiffLines = toRevisionDiffLines(mobyRevision)
export const revisionComments = toRevisionComments(mobyRevision)

export const footerLinks = [...seedUi.footerLinks]
export const mobyDickSidebarFooter: SidebarNavItem[] = seedUi.sidebarFooter.map((item) => ({
  ...item,
}))

export const agentMetrics = toMetricCards(
  seedMetricSnapshots.filter((metric) => metric.scope === "repository"),
)

const mobyLineage = toLineageBranches(mobyBuild)

/** Edition insights: canonical + scholarly forks (excludes translation branches). */
export const editionLineage = mobyLineage.filter((branch) =>
  ["master", "scholarly", "modern"].includes(branch.id),
)

/** International builds: full lineage from seed including translation forks. */
export const internationalLineage: LineageBranch[] = mobyLineage

export const formatArtifacts = toFormatArtifacts(mobyBuild)
export const archivalVersions = toArchivalVersions(mobyBuild)
export const buildStatusItems = toBuildStatusItems(mobyBuild)
export const buildFormats = toFormatOptions(mobyBuild)
export const designPresets = toDesignPresets(mobyBuild)
export const stylingSliders = toStylingSliders(mobyBuild)
export const stylingToggles = toStylingToggles(mobyBuild)
export const buildPreviewCover = mobyRepository.coverUrl

export const readerTocChapters = toReaderTocChapters(mobyChapters)
export const readerTocFooter: SidebarNavItem[] = seedUi.sidebarFooter.map((item) => ({ ...item }))
export const readerParagraphs = mobyChapters[0] ? toReaderParagraphs(mobyChapters[0]) : []
export const readerIllustration = seedUi.readerIllustration
export const canvasThemes = toCanvasThemes(seedUi.canvasThemes)

export const libraryAuthors = toLibraryAuthors(seedUi.libraryAuthors)
export const libraryFormats = [...seedUi.libraryFormats]
export const libraryBuilds = toLibraryBuildCards(seedLibraryEditions)

export const agentDashboardRows = toAgentDashboardRows(dashboardAgents)
export const agentDashboardMetrics = toMetricCards(
  seedMetricSnapshots.filter((metric) => metric.scope === "agents"),
)
export const activityFeed = toActivityFeedItems(seedActivityEvents)
export const curationBars = toCurationBars(seedUi.curationBars)

export const manuscriptFileTree = seedUi.fileTree.map((node) => ({ ...node }))
export const curatorAvatar = seedUi.curatorAvatar
