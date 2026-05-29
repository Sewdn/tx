import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationBuild } from "@/fixtures/v2-from-seed"
import { MissionLandingHero } from "./mission-landing-hero"

const meta: Meta<typeof MissionLandingHero> = {
  title: "Gittenberg/v2/Organisms/MissionLandingHero",
  component: MissionLandingHero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof MissionLandingHero>

export const Default: Story = {
  args: {
    title: "The Eternal Archive",
    description:
      "Gittenberg preserves literary builds with cryptographic provenance — every edition traceable to its canonical commit.",
    sampleCommit: {
      hash: foundationBuild.commitHash,
      message: foundationBuild.title,
      author: "Gittenberg Curator",
      timestamp: "2024-03-15",
    },
  },
}
