import type { Meta, StoryObj } from "@storybook/react-vite"

import { membershipTierCards } from "@/fixtures/v2-from-seed"
import { MembershipTierCard } from "./membership-tier-card"

const meta: Meta<typeof MembershipTierCard> = {
  title: "Gittenberg/v2/Molecules/MembershipTierCard",
  component: MembershipTierCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof MembershipTierCard>

export const Default: Story = {
  args: membershipTierCards.find((tier) => tier.highlighted) ?? membershipTierCards[0],
}
