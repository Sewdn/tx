import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems } from "@/fixtures/gittenberg"
import { foundationEdition, horizontalShelves, membershipTierCards } from "@/fixtures/v2-from-seed"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { HorizontalMediaShelf } from "@/components/organisms/horizontal-media-shelf"
import { ImmersiveLibraryHero } from "@/components/organisms/immersive-library-hero"
import { SubscriptionUpsellBanner } from "@/components/organisms/subscription-upsell-banner"

const curatedShelf = horizontalShelves.find((shelf) => shelf.id === "shelf-trending")
const premier = membershipTierCards.find((tier) => tier.tier === "premier")!

function PremierImmersiveLibraryPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={consumerNavItems}
        activeNavId="library"
        searchPlaceholder="Search the library..."
      />
      <ImmersiveLibraryHero
        title={foundationEdition.title}
        subtitle={foundationEdition.author}
        tagline={foundationEdition.tagline}
        editionTag="SCHOLARLY EDITION V4.2"
        coverSrc={foundationEdition.coverUrl}
        backgroundSrc={foundationEdition.heroImageUrl}
        primaryCta={{ label: "Read Now", variant: "primary", icon: "menu_book" }}
        secondaryCta={{ label: "Add to Collection", variant: "ghost", icon: "bookmark_add" }}
      />
      <SubscriptionUpsellBanner
        title="Unlock the full Gittenberg library"
        description="Premier members get unlimited downloads, print discounts, and early access to new scholarly editions."
        ctaLabel="Upgrade to Premier"
        features={premier.features.slice(0, 3)}
      />
      <main className="mx-auto max-w-container-max px-boundary py-region">
        {curatedShelf ? (
          <HorizontalMediaShelf {...curatedShelf} showNavButtons enableWheelScroll />
        ) : null}
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Premier Immersive Library",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <PremierImmersiveLibraryPage />,
}
