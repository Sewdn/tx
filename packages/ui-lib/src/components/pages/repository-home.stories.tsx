import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  defaultNavItems,
  footerLinks,
  mobyDickAgents,
  mobyDickCover,
  mobyDickFileRows,
  mobyDickMetadata,
  mobyDickSidebarFooter,
  mobyDickSidebarNav,
} from "@/fixtures/gittenberg"
import { FileTable } from "@/components/organisms/file-table"
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { MetadataPanel } from "@/components/organisms/metadata-panel"
import { PageHero } from "@/components/organisms/page-hero"
import { RepositorySidebar } from "@/components/organisms/repository-sidebar"
import { TonalSurface } from "@/components/organisms/tonal-surface"

function RepositoryHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={defaultNavItems}
        activeNavId="repositories"
        searchPlaceholder="Search the archives..."
      />
      <RepositorySidebar
        title="Moby Dick"
        subtitle="Herman Melville"
        coverSrc={mobyDickCover}
        coverAlt="Moby Dick cover"
        navItems={mobyDickSidebarNav}
        footerItems={mobyDickSidebarFooter}
        primaryActionLabel="Create Revision"
      />
      <main className="min-h-screen px-margin-mobile pt-24 pb-20 md:px-margin-desktop lg:ml-64">
        <div className="mx-auto max-w-container-max">
          <PageHero
            tags={[
              { variant: "public-domain", label: "Public Domain" },
              { variant: "agent-curated", label: "Agent-Curated" },
              { variant: "version", label: "v2.4.0-prose" },
            ]}
            title="The Whale: Repository Home"
            subtitle='"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."'
          />
          <div className="grid grid-cols-1 gap-gutter xl:grid-cols-12">
            <div className="space-y-gutter xl:col-span-8">
              <FileTable
                branchLabel="Current Branch"
                branchName="master"
                lastUpdate="Last Update: 2 hours ago by Queequeg-Bot"
                rows={mobyDickFileRows}
              />
              <TonalSurface className="p-10 md:p-16">
                <article className="mx-auto max-w-reading-width">
                  <h2 className="mb-6 border-b border-outline-variant pb-2 font-headline-lg text-[24px] text-primary">
                    README.md
                  </h2>
                  <p className="mb-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                    This repository contains the canonical, agent-audited version of Herman
                    Melville&apos;s masterpiece,{" "}
                    <em className="font-bold text-primary">Moby Dick; or, The Whale</em>.
                  </p>
                </article>
              </TonalSurface>
            </div>
            <div className="xl:col-span-4">
              <MetadataPanel
                title="Repository Metadata"
                fields={mobyDickMetadata}
                agentsTitle="Agents Active (3)"
                agents={mobyDickAgents}
                agentsActive
              />
            </div>
          </div>
        </div>
      </main>
      <GittenbergFooter
        links={footerLinks}
        copyright="© 1851-2024 Gittenberg Public Domain Initiative"
      />
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Repository Home",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <RepositoryHomePage />,
}
