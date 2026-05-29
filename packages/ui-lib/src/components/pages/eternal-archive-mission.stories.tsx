import type { Meta, StoryObj } from "@storybook/react-vite"

import { curatorNavItems } from "@/fixtures/gittenberg"
import { foundationBuild, membershipTierCards } from "@/fixtures/v2-from-seed"
import { EternalArchivePitch } from "@/components/organisms/eternal-archive-pitch"
import { FeaturePillarGrid } from "@/components/organisms/feature-pillar-grid"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { MissionLandingHero } from "@/components/organisms/mission-landing-hero"

const patron = membershipTierCards.find((tier) => tier.tier === "mecene-patron")!

function EternalArchiveMissionPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={curatorNavItems}
        activeNavId="explore"
        searchPlaceholder="Search the archive..."
      />
      <MissionLandingHero
        title="The Eternal Archive"
        description="Gittenberg preserves literary builds with cryptographic provenance — every edition traceable to its canonical commit."
        sampleCommit={{
          hash: foundationBuild.commitHash,
          message: foundationBuild.title,
          author: "Gittenberg Curator",
          timestamp: "2024-03-15",
        }}
      />
      <EternalArchivePitch
        title="Permanent Preservation via Arweave"
        description="Every Eternal Archive edition is anchored to the permaweb — immutable, citable, and funded for centuries."
        features={patron.features}
      />
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <FeaturePillarGrid
          pillars={[
            {
              icon: "verified",
              title: "Cryptographic Provenance",
              description: "Every build links to a verifiable commit hash and lineage graph.",
            },
            {
              icon: "groups",
              title: "Community Curation",
              description: "Scholars and agents collaborate on canonical and forked editions.",
            },
            {
              icon: "all_inclusive",
              title: "Eternal Archival",
              description: "Permaweb anchoring ensures works survive beyond any single platform.",
            },
          ]}
        />
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Eternal Archive Mission",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <EternalArchiveMissionPage />,
}
