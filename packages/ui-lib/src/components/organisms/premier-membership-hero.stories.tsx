import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition, membershipTierCards } from "@/fixtures/v2-from-seed"
import { PremierMembershipHero } from "./premier-membership-hero"

const meta: Meta<typeof PremierMembershipHero> = {
  title: "Gittenberg/v2/Organisms/PremierMembershipHero",
  component: PremierMembershipHero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof PremierMembershipHero>

const premier = membershipTierCards.find((tier) => tier.tier === "premier")!

export const Default: Story = {
  args: {
    title: "Join Gittenberg Premier",
    subtitle: "Unlimited access to scholarly editions, print discounts, and Eternal Archive patronage.",
    features: premier.features,
    heroImageSrc: foundationEdition.heroImageUrl ?? foundationEdition.coverUrl,
  },
}
