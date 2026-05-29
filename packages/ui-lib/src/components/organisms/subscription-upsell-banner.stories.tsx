import type { Meta, StoryObj } from "@storybook/react-vite"

import { membershipTierCards } from "@/fixtures/v2-from-seed"
import { SubscriptionUpsellBanner } from "./subscription-upsell-banner"

const meta: Meta<typeof SubscriptionUpsellBanner> = {
  title: "Gittenberg/v2/Organisms/SubscriptionUpsellBanner",
  component: SubscriptionUpsellBanner,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof SubscriptionUpsellBanner>

const premier = membershipTierCards.find((tier) => tier.tier === "premier")!

export const Default: Story = {
  args: {
    title: "Unlock the full Gittenberg library",
    description:
      "Premier members get unlimited downloads, print discounts, and early access to new scholarly editions.",
    ctaLabel: "Upgrade to Premier",
    features: premier.features.slice(0, 3),
  },
}
