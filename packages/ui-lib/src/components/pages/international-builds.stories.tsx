import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  archivalVersions,
  buildStatusItems,
  formatArtifacts,
  internationalLineage,
} from "@/fixtures/slices"
import {
  defaultNavItems,
  mobyDickCover,
  mobyDickSidebarFooter,
  mobyDickSidebarNav,
} from "@/fixtures/gittenberg"
import { ActiveBuildCard } from "@/components/organisms/active-build-card"
import { ArchivalEvolutionTable } from "@/components/organisms/archival-evolution-table"
import { BuildStatusPanel } from "@/components/organisms/build-status-panel"
import { FormatArtifactGrid } from "@/components/organisms/format-artifact-grid"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { LineageTimeline } from "@/components/organisms/lineage-timeline"
import { RepositoryHero } from "@/components/organisms/repository-hero"
import { RepositorySidebar } from "@/components/organisms/repository-sidebar"

function InternationalBuildsPage() {
  const insightsNav = mobyDickSidebarNav.map((item) => ({
    ...item,
    active: item.id === "insights",
  }))

  return (
    <div className="min-h-screen bg-background">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={defaultNavItems}
        activeNavId="repositories"
        searchPlaceholder="Search manuscript metadata..."
      />
      <RepositorySidebar
        title="Moby Dick"
        subtitle="Herman Melville"
        coverSrc={mobyDickCover}
        coverAlt="Moby Dick cover"
        navItems={insightsNav}
        footerItems={mobyDickSidebarFooter}
        primaryActionLabel="Create Revision"
      />
      <main className="min-h-screen pt-shell lg:pl-64">
        <div className="mx-auto max-w-container-max px-boundary py-region">
          <RepositoryHero
            badge="Repository"
            repoId="id: moby-dick-1851"
            title="Moby Dick"
            description="International translation forks and localized build artifacts."
            forkLabel="Fork Manuscript"
            watchLabel="Watch Repository"
          />
          <section className="mb-region grid grid-cols-1 gap-region lg:grid-cols-3">
            <ActiveBuildCard
              versionWatermark="v4.2"
              statusLabel="Active Build: Production"
              title="Scholarly Edition v4.2.0-alpha"
              description="Canonical English build with translation fork metadata for French and Dutch agent pipelines."
              downloadLabel="Download PDF (Scholarly)"
              commitHash="7e3a9c1"
            />
            <BuildStatusPanel
              items={buildStatusItems}
              revisionsCount="14,203 Revisions"
              revisionsLabel="Total scholarly commits"
            />
          </section>
          <LineageTimeline title="Translation Lineage" branches={internationalLineage} />
          <FormatArtifactGrid artifacts={formatArtifacts} />
          <ArchivalEvolutionTable rows={archivalVersions} />
        </div>
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/International Builds",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <InternationalBuildsPage />,
}
