import type { Meta, StoryObj } from "@storybook/react-vite"

import { membershipTierCards } from "@/fixtures/v2-from-seed"
import { MembershipTierGrid } from "./membership-tier-grid"

const meta: Meta<typeof MembershipTierGrid> = {
  title: "Gittenberg/v2/Organisms/MembershipTierGrid",
  component: MembershipTierGrid,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof MembershipTierGrid>

export const Default: Story = { args: { tiers: membershipTierCards } }
