import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems } from "@/fixtures/gittenberg"
import { foundationEdition, membershipTierCards } from "@/fixtures/v2-from-seed"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { MembershipTierGrid } from "@/components/organisms/membership-tier-grid"
import { PremierMembershipHero } from "@/components/organisms/premier-membership-hero"

const premier = membershipTierCards.find((tier) => tier.tier === "premier")!

function PremierMembershipPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={consumerNavItems}
        activeNavId="subscribe"
        searchPlaceholder="Search editions..."
      />
      <PremierMembershipHero
        title="Join Gittenberg Premier"
        subtitle="Unlimited access to scholarly editions, print discounts, and Eternal Archive patronage."
        features={premier.features}
        heroImageSrc={foundationEdition.heroImageUrl ?? foundationEdition.coverUrl}
      />
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <MembershipTierGrid tiers={membershipTierCards} />
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Premier Membership",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <PremierMembershipPage />,
}
