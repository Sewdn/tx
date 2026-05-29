import type { Meta, StoryObj } from "@storybook/react-vite"

import { FeaturePillarGrid } from "./feature-pillar-grid"

const meta: Meta<typeof FeaturePillarGrid> = {
  title: "Gittenberg/v2/Organisms/FeaturePillarGrid",
  component: FeaturePillarGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FeaturePillarGrid>

export const Default: Story = {
  args: {
    pillars: [
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
    ],
  },
}
