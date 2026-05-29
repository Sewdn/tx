import fs from "node:fs"
import path from "node:path"

const ROOT = path.join(import.meta.dirname, "../src/components")

/**
 * Catalog: [componentPath, storybookTitleLiteral, layout?, storiesSource]
 * Titles must be string literals (Storybook CSF static analysis).
 * Keep in sync with src/storybook/titles.ts hierarchy.
 */
const catalog = [
  ["atoms/material-icon", "Gittenberg/Shell/Atoms/MaterialIcon", "", `export const Default: Story = { args: { name: "menu_book" } }
export const Small: Story = { args: { name: "search", size: 20 } }`],
  ["atoms/status-dot", "Gittenberg/Shell/Atoms/StatusDot", "", `export const Inactive: Story = { args: { active: false } }
export const Active: Story = { args: { active: true } }`],
  ["atoms/repository-tag", "Gittenberg/Repository/Atoms/RepositoryTag", "", `export const PublicDomain: Story = { args: { variant: "public-domain", label: "Public Domain" } }
export const AgentCurated: Story = { args: { variant: "agent-curated", label: "Agent-Curated" } }
export const Version: Story = { args: { variant: "version", label: "v2.4.0-prose" } }`],
  ["atoms/metadata-field", "Gittenberg/Repository/Atoms/MetadataField", "", `export const Default: Story = { args: { label: "Source", value: "Project Gutenberg #2701" } }
export const WithLink: Story = { args: { label: "Source", value: "PG #2701", href: "#" } }`],
  ["molecules/app-nav-link", "Gittenberg/Shell/Molecules/AppNavLink", "", `export const Default: Story = { args: { label: "Repositories", href: "#" } }
export const Active: Story = { args: { label: "Repositories", href: "#", active: true } }`],
  ["molecules/archive-search-field", "Gittenberg/Shell/Molecules/ArchiveSearchField", "padded", `export const Default: Story = { args: { placeholder: "Search the archives..." } }`],
  ["molecules/metric-card", "Gittenberg/Shell/Molecules/MetricCard", "padded", `export const Default: Story = { args: { label: "Active Agents", value: "12", delta: "+2", deltaPositive: true } }`],
  ["molecules/file-table-row", "Gittenberg/Repository/Molecules/FileTableRow", "padded", `export const Default: Story = { args: { icon: "folder", name: "src/manuscript", description: "Chapters 1-135", timestamp: "3 days ago" } }
export const Highlighted: Story = { args: { icon: "markdown", name: "Chapter 3.md", highlighted: true, highlightLabel: "Open Revision #142", timestamp: "Just now" } }`],
  ["molecules/breadcrumb-trail", "Gittenberg/Revision/Molecules/BreadcrumbTrail", "", `export const Default: Story = { args: { segments: [{ label: "Revisions" }, { label: "PR #142" }] } }`],
  ["molecules/diff-line", "Gittenberg/Revision/Molecules/DiffLine", "padded", `export const Context: Story = { args: { variant: "context", oldLine: 41, newLine: 41, content: "Sample line." } }
export const Added: Story = { args: { variant: "added", newLine: 42, content: "Added text.", icon: "add" } }
export const Removed: Story = { args: { variant: "removed", oldLine: 42, content: "Removed text.", icon: "remove" } }`],
  ["molecules/revision-status-badge", "Gittenberg/Revision/Molecules/RevisionStatusBadge", "", `export const Open: Story = { args: { status: "open" } }`],
  ["molecules/comment-bubble", "Gittenberg/Revision/Molecules/CommentBubble", "padded", `export const Default: Story = { args: { author: "Curator", timestamp: "2h ago", body: "Removed the em-dash." } }`],
  ["molecules/agent-list-item", "Gittenberg/Repository/Molecules/AgentListItem", "padded", `export const Default: Story = { args: { name: "Pequod-03", status: "Auditing Chapter 1", icon: "neurology" } }`],
  ["molecules/format-option-card", "Gittenberg/Build & Export/Molecules/FormatOptionCard", "padded", `export const Selected: Story = { args: { icon: "book", title: "E-Reader (EPUB)", description: "Kindle and Apple Books", selected: true } }
export const Unselected: Story = { args: { icon: "print", title: "Press Quality", description: "Bleed markers" } }`],
  ["molecules/preset-chip", "Gittenberg/Build & Export/Molecules/PresetChip", "", `export const Active: Story = { args: { label: "Classic Scholarly", active: true } }
export const Inactive: Story = { args: { label: "Modern Minimal" } }`],
  ["molecules/lineage-branch-item", "Gittenberg/Edition History/Molecules/LineageBranchItem", "padded", `import { editionLineage } from "@/fixtures/slices"
export const Master: Story = { args: editionLineage[0] }
export const Fork: Story = { args: editionLineage[1] }`],
  ["molecules/format-artifact-card", "Gittenberg/Edition History/Molecules/FormatArtifactCard", "padded", `import { formatArtifacts } from "@/fixtures/slices"
export const Default: Story = { args: formatArtifacts[0] }`],
  ["molecules/build-catalog-card", "Gittenberg/Library/Molecules/BuildCatalogCard", "padded", `import { libraryBuilds } from "@/fixtures/slices"
export const Default: Story = { args: libraryBuilds[0] }`],
  ["molecules/agent-dashboard-row", "Gittenberg/Agents/Molecules/AgentDashboardRow", "padded", `import { agentDashboardRows } from "@/fixtures/slices"
export const Default: Story = { args: agentDashboardRows[0] }
export const Paused: Story = { args: agentDashboardRows[2] }`],
  ["molecules/activity-feed-item", "Gittenberg/Agents/Molecules/ActivityFeedItem", "padded", `import { activityFeed } from "@/fixtures/slices"
export const Default: Story = { args: activityFeed[0] }
export const Error: Story = { args: activityFeed[2] }`],
  ["molecules/file-tree-item", "Gittenberg/Lexicon Editor/Molecules/FileTreeItem", "padded", `import { manuscriptFileTree } from "@/fixtures/slices"
export const File: Story = { args: { node: manuscriptFileTree[0] } }
export const Folder: Story = { args: { node: manuscriptFileTree[2] } }`],
  ["organisms/tonal-surface", "Gittenberg/Shell/Organisms/TonalSurface", "padded", `export const Default: Story = { args: { children: "Tonal surface", variant: "default" } }
export const Layer1: Story = { args: { children: "Layer 1", variant: "layer-1" } }`],
  ["organisms/gittenberg-footer", "Gittenberg/Shell/Organisms/GittenbergFooter", "padded", `import { footerLinks } from "@/fixtures/gittenberg"
export const Default: Story = { args: { links: footerLinks, copyright: "© 1851-2024 Gittenberg" } }`],
  ["organisms/gittenberg-top-app-bar", "Gittenberg/Shell/Organisms/GittenbergTopAppBar", "fullscreen", `import { defaultNavItems } from "@/fixtures/gittenberg"
export const Repositories: Story = { args: { brandName: "Gittenberg", brandHref: "/", navItems: defaultNavItems, activeNavId: "repositories", searchPlaceholder: "Search..." } }`],
  ["organisms/metric-grid", "Gittenberg/Shell/Organisms/MetricGrid", "padded", `import { agentDashboardMetrics } from "@/fixtures/slices"
export const Default: Story = { args: { metrics: agentDashboardMetrics } }`],
  ["organisms/page-hero", "Gittenberg/Repository/Organisms/PageHero", "padded", `export const Default: Story = { args: { tags: [{ variant: "public-domain", label: "Public Domain" }], title: "Repository Home", subtitle: "Call me Ishmael..." } }`],
  ["organisms/file-table", "Gittenberg/Repository/Organisms/FileTable", "padded", `import { mobyDickFileRows } from "@/fixtures/gittenberg"
export const Default: Story = { args: { branchLabel: "Current Branch", branchName: "master", lastUpdate: "Last Update: 2h ago", rows: mobyDickFileRows } }`],
  ["organisms/metadata-panel", "Gittenberg/Repository/Organisms/MetadataPanel", "padded", `import { mobyDickAgents, mobyDickMetadata } from "@/fixtures/gittenberg"
export const Default: Story = { args: { title: "Repository Metadata", fields: mobyDickMetadata, agentsTitle: "Agents Active (3)", agents: mobyDickAgents, agentsActive: true } }`],
  ["organisms/repository-sidebar", "Gittenberg/Repository/Organisms/RepositorySidebar", "fullscreen", `import { mobyDickCover, mobyDickSidebarFooter, mobyDickSidebarNav } from "@/fixtures/gittenberg"
export const Default: Story = { args: { title: "Moby Dick", subtitle: "Herman Melville", coverSrc: mobyDickCover, coverAlt: "Cover", navItems: mobyDickSidebarNav, footerItems: mobyDickSidebarFooter, primaryActionLabel: "Create Revision" } }`],
  ["organisms/revision-page-header", "Gittenberg/Revision/Organisms/RevisionPageHeader", "padded", `export const Default: Story = { args: { breadcrumbs: [{ label: "Revisions" }, { label: "PR #142" }], title: "Normalize punctuation", status: "open", author: "ScholasticCurator", timestamp: "4 hours ago" } }`],
  ["organisms/diff-viewer", "Gittenberg/Revision/Organisms/DiffViewer", "padded", `import { chapter3DiffLines } from "@/fixtures/gittenberg"
export const Default: Story = { args: { fileName: "chapter_03.md", viewMode: "Unified", alternateViewMode: "Split", lines: chapter3DiffLines } }`],
  ["organisms/discussion-panel", "Gittenberg/Revision/Organisms/DiscussionPanel", "padded", `import { revisionComments } from "@/fixtures/gittenberg"
export const Default: Story = { args: { comments: revisionComments, commentPlaceholder: "Add a comment...", submitLabel: "Comment", mergeLabel: "Approve and Merge", requestChangesLabel: "Request Changes" } }`],
  ["organisms/typography-controller", "Gittenberg/Revision/Organisms/TypographyController", "", `export const Serif: Story = { args: { serifLabel: "Serif", sansLabel: "Sans", activeFamily: "serif" } }`],
  ["organisms/reader-top-app-bar", "Gittenberg/Reader/Organisms/ReaderTopAppBar", "fullscreen", `import { defaultNavItems } from "@/fixtures/gittenberg"
export const Default: Story = { args: { brandName: "Gittenberg", navItems: defaultNavItems, activeNavId: "repositories" } }`],
  ["organisms/reader-toc-drawer", "Gittenberg/Reader/Organisms/ReaderTocDrawer", "fullscreen", `import { readerTocChapters, readerTocFooter } from "@/fixtures/slices"
export const Open: Story = { args: { title: "Moby Dick", subtitle: "Herman Melville", chapters: readerTocChapters, footerItems: readerTocFooter, open: true } }`],
  ["organisms/reader-toolbar", "Gittenberg/Reader/Organisms/ReaderToolbar", "", `import { canvasThemes } from "@/fixtures/slices"
export const Default: Story = { args: { fontSize: 18, activeFamily: "serif", themes: canvasThemes, activeThemeId: "cream" } }`],
  ["organisms/reader-article", "Gittenberg/Reader/Organisms/ReaderArticle", "padded", `import { readerParagraphs } from "@/fixtures/slices"
export const Default: Story = { args: { chapterLabel: "Chapter 1", title: "Loomings", paragraphs: readerParagraphs } }`],
  ["organisms/format-selector", "Gittenberg/Build & Export/Organisms/FormatSelector", "padded", `import { buildFormats } from "@/fixtures/slices"
export const Default: Story = { args: { options: buildFormats } }`],
  ["organisms/preset-selector", "Gittenberg/Build & Export/Organisms/PresetSelector", "padded", `import { designPresets } from "@/fixtures/slices"
export const Default: Story = { args: { presets: designPresets } }`],
  ["organisms/styling-options-panel", "Gittenberg/Build & Export/Organisms/StylingOptionsPanel", "padded", `import { stylingSliders, stylingToggles } from "@/fixtures/slices"
export const Default: Story = { args: { sliders: stylingSliders, toggles: stylingToggles } }`],
  ["organisms/build-preview-card", "Gittenberg/Build & Export/Organisms/BuildPreviewCard", "padded", `import { buildPreviewCover } from "@/fixtures/slices"
export const Default: Story = { args: { author: "Herman Melville", title: "Moby Dick", subtitle: "Or, The Whale", press: "Gittenberg Press", edition: "v2.4.0", illustrationSrc: buildPreviewCover } }`],
  ["organisms/build-progress-panel", "Gittenberg/Build & Export/Organisms/BuildProgressPanel", "padded", `export const InProgress: Story = { args: { title: "Generating Output", statusMessage: "Compiling chapter 42...", progressPercent: 68, cancelLabel: "Cancel", buildLabel: "Build Now" } }`],
  ["organisms/lexicon-app-bar", "Gittenberg/Lexicon Editor/Organisms/LexiconAppBar", "fullscreen", `export const Default: Story = { args: { title: "Lexicon IDE", navItems: [{ id: "repo", label: "Repository", href: "#", active: true }] } }`],
  ["organisms/lexicon-sidebar", "Gittenberg/Lexicon Editor/Organisms/LexiconSidebar", "fullscreen", `export const Default: Story = { args: { title: "Lexicon Archival", subtitle: "Public Domain", navItems: [{ id: "build", label: "Build", icon: "output", href: "#", active: true }], primaryActionLabel: "Commit Changes" } }`],
  ["organisms/repository-hero", "Gittenberg/Edition History/Organisms/RepositoryHero", "padded", `export const Default: Story = { args: { badge: "Repository", repoId: "id: moby-dick-1851", title: "Moby Dick", description: "The Whale.", forkLabel: "Fork", watchLabel: "Watch" } }`],
  ["organisms/active-build-card", "Gittenberg/Edition History/Organisms/ActiveBuildCard", "padded", `export const Default: Story = { args: { versionWatermark: "v4.2", statusLabel: "Active Build: Production", title: "Scholarly Edition v4.2.0", description: "Latest orthographic corrections.", downloadLabel: "Download PDF", commitHash: "7e3a9c1" } }`],
  ["organisms/build-status-panel", "Gittenberg/Edition History/Organisms/BuildStatusPanel", "padded", `import { buildStatusItems } from "@/fixtures/slices"
export const Default: Story = { args: { items: buildStatusItems, revisionsCount: "14,203 Revisions", revisionsLabel: "Total commits" } }`],
  ["organisms/lineage-timeline", "Gittenberg/Edition History/Organisms/LineageTimeline", "padded", `import { editionLineage } from "@/fixtures/slices"
export const Default: Story = { args: { branches: editionLineage } }`],
  ["organisms/format-artifact-grid", "Gittenberg/Edition History/Organisms/FormatArtifactGrid", "padded", `import { formatArtifacts } from "@/fixtures/slices"
export const Default: Story = { args: { artifacts: formatArtifacts } }`],
  ["organisms/archival-evolution-table", "Gittenberg/Edition History/Organisms/ArchivalEvolutionTable", "padded", `import { archivalVersions } from "@/fixtures/slices"
export const Default: Story = { args: { rows: archivalVersions } }`],
  ["organisms/library-filter-sidebar", "Gittenberg/Library/Organisms/LibraryFilterSidebar", "padded", `import { libraryAuthors, libraryFormats } from "@/fixtures/slices"
export const Default: Story = { args: { authors: libraryAuthors, eraOptions: [{ id: "1850", label: "1850s", selected: true }], formatChips: libraryFormats, selectedFormats: ["EPUB"] } }`],
  ["organisms/build-catalog-grid", "Gittenberg/Library/Organisms/BuildCatalogGrid", "padded", `import { libraryBuilds } from "@/fixtures/slices"
export const Default: Story = { args: { title: "Library of Builds", subtitle: "Showing 4 of 2,481", builds: libraryBuilds } }`],
  ["organisms/agent-dashboard-table", "Gittenberg/Agents/Organisms/AgentDashboardTable", "padded", `import { agentDashboardRows } from "@/fixtures/slices"
export const Default: Story = { args: { agents: agentDashboardRows } }`],
  ["organisms/activity-feed", "Gittenberg/Agents/Organisms/ActivityFeed", "padded", `import { activityFeed } from "@/fixtures/slices"
export const Default: Story = { args: { items: activityFeed } }`],
  ["organisms/curation-progress-chart", "Gittenberg/Agents/Organisms/CurationProgressChart", "padded", `import { curationBars } from "@/fixtures/slices"
export const Default: Story = { args: { bars: curationBars } }`],
  ["organisms/lexicon-file-browser", "Gittenberg/Lexicon Editor/Organisms/LexiconFileBrowser", "padded", `import { manuscriptFileTree } from "@/fixtures/slices"
export const Default: Story = { args: { nodes: manuscriptFileTree } }`],
  ["organisms/manuscript-editor-pane", "Gittenberg/Lexicon Editor/Organisms/ManuscriptEditorPane", "fullscreen", `export const Default: Story = { args: { fileName: "02_Echoes_of_Dust.md", content: "# Echoes\\n\\nThe morning air hung heavy with salt." } }`],
  ["organisms/curator-profile", "Gittenberg/Lexicon Editor/Organisms/CuratorProfile", "", `import { curatorAvatar } from "@/fixtures/slices"
export const Default: Story = { args: { name: "Dr. Elias Thorne", role: "Lead Curator", avatarSrc: curatorAvatar } }`],
]

function pascalFromFile(file) {
  const base = path.basename(file)
  return base
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
}

function splitFixtureImports(stories) {
  const fixtureImports = []
  const storyLines = []
  for (const line of stories.split("\n")) {
    if (line.startsWith("import ")) fixtureImports.push(line)
    else storyLines.push(line)
  }
  const fixtureBlock = fixtureImports.length ? `\n${fixtureImports.join("\n")}` : ""
  return { fixtureBlock, body: storyLines.join("\n").trim() }
}

for (const [file, title, layout, stories] of catalog) {
  const base = path.basename(file)
  const compName = pascalFromFile(file)
  const { fixtureBlock, body } = splitFixtureImports(stories)
  const layoutBlock = layout
    ? `
  parameters: { layout: "${layout}" },`
    : ""
  const content = `import type { Meta, StoryObj } from "@storybook/react-vite"
${fixtureBlock}
import { ${compName} } from "./${base}"

const meta: Meta<typeof ${compName}> = {
  title: "${title}",
  component: ${compName},
  tags: ["autodocs"],${layoutBlock}
}

export default meta
type Story = StoryObj<typeof ${compName}>

${body}
`
  const storyPath = path.join(ROOT, `${file}.stories.tsx`)
  fs.writeFileSync(storyPath, content)
}

console.log(`Synced ${catalog.length} story files.`)
