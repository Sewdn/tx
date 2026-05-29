import type { Meta, StoryObj } from "@storybook/react-vite"

import { AnchorFundingPanel } from "@/components/organisms/anchor-funding-panel"
import { AnchorScopeSelector } from "@/components/organisms/anchor-scope-selector"
import { ArweaveAnchoringHeader } from "@/components/organisms/arweave-anchoring-header"
import { LexiconAppBar } from "@/components/organisms/lexicon-app-bar"
import { LexiconSidebar } from "@/components/organisms/lexicon-sidebar"
import { foundationBuild } from "@/fixtures/v2-from-seed"

const lexiconNav = [
  { id: "explorer", label: "Explorer", icon: "folder_open", href: "#" },
  { id: "lineage", label: "Lineage", icon: "account_tree", href: "#" },
  { id: "build", label: "Build", icon: "output", href: "#", active: true },
]

const lexiconAppNav = [
  { id: "repo", label: "Repository", href: "#", active: true },
  { id: "archives", label: "Archives", href: "#" },
]

function ArweaveAnchoringPage() {
  return (
    <div className="min-h-screen bg-background">
      <LexiconSidebar
        title="Lexicon Archival"
        subtitle="Public Domain Project"
        navItems={lexiconNav}
        primaryActionLabel="Commit Changes"
      />
      <div className="ml-64">
        <LexiconAppBar title="Eternal Archive" navItems={lexiconAppNav} />
        <main className="mx-auto max-w-container-max space-y-region p-boundary">
          <ArweaveAnchoringHeader
            title="Anchor to the Permaweb"
            description={`Permanently preserve "${foundationBuild.title}" on Arweave with cryptographic provenance.`}
          />
          <AnchorScopeSelector
            commitHash={foundationBuild.commitHash}
            commitMessage={foundationBuild.title}
            manifestSize="24.8 MB"
            fileCount={12}
            selected
          />
          <AnchorFundingPanel
            costs={[
              { label: "Storage (200 years)", amount: "$4.20" },
              { label: "Network Fee", amount: "$0.08" },
              { label: "Gittenberg Service", amount: "$2.00" },
            ]}
            totalLabel="$6.28"
            patronName="Dr. Elena Vasquez"
            publicCredit
          />
        </main>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Arweave Anchoring",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <ArweaveAnchoringPage />,
}
