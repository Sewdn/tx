import type { Meta, StoryObj } from "@storybook/react-vite"

import { membershipTierCards } from "@/fixtures/v2-from-seed"
import { EternalArchivePitch } from "./eternal-archive-pitch"

const meta: Meta<typeof EternalArchivePitch> = {
  title: "Gittenberg/v2/Organisms/EternalArchivePitch",
  component: EternalArchivePitch,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof EternalArchivePitch>

const patron = membershipTierCards.find((tier) => tier.tier === "mecene-patron")!

export const Default: Story = {
  args: {
    title: "Permanent Preservation via Arweave",
    description:
      "Every Eternal Archive edition is anchored to the permaweb — immutable, citable, and funded for centuries.",
    features: patron.features,
  },
}
