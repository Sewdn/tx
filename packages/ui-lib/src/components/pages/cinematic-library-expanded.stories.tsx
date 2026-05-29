import type { Meta, StoryObj } from "@storybook/react-vite"

import { DecadeShelfHeader } from "@/components/molecules/decade-shelf-header"
import { CinematicHero } from "@/components/organisms/cinematic-hero"
import { FloatingPillNav } from "@/components/organisms/floating-pill-nav"
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer"
import { HorizontalMediaShelf } from "@/components/organisms/horizontal-media-shelf"
import { ThematicCollectionGrid } from "@/components/organisms/thematic-collection-grid"
import { consumerNavItems, footerLinks } from "@/fixtures/gittenberg"
import { foundationEdition, horizontalShelves } from "@/fixtures/v2-from-seed"

const continueShelf = horizontalShelves.find((shelf) => shelf.id === "shelf-continue-reading")
const trendingShelf = horizontalShelves.find((shelf) => shelf.id === "shelf-trending")
const authorSpotlightShelf = horizontalShelves.find((shelf) => shelf.id === "shelf-asimov-spotlight")
const decadeShelf = horizontalShelves.find((shelf) => shelf.id === "shelf-decade-1950s")

function CinematicLibraryExpandedPage() {
  return (
    <div className="min-h-screen bg-primary text-on-primary">
      <FloatingPillNav
        brandHref="/"
        navItems={consumerNavItems.slice(0, 3)}
        activeNavId="library"
      />
      <CinematicHero
        title={foundationEdition.title}
        subtitle={foundationEdition.author}
        tagline={foundationEdition.tagline}
        editionTag="SCHOLARLY EDITION V4.2"
        coverSrc={foundationEdition.coverUrl}
        backgroundSrc={foundationEdition.heroImageUrl}
        primaryCta={{ label: "Read Now", variant: "primary", icon: "menu_book" }}
        secondaryCta={{ label: "My Collection", variant: "ghost", icon: "bookmark" }}
      />
      <div className="mx-auto max-w-container-max space-y-region px-boundary pb-page">
        {continueShelf ? <HorizontalMediaShelf {...continueShelf} enableWheelScroll /> : null}
        {trendingShelf ? <HorizontalMediaShelf {...trendingShelf} enableWheelScroll /> : null}
        {authorSpotlightShelf ? (
          <HorizontalMediaShelf {...authorSpotlightShelf} enableWheelScroll />
        ) : null}
        {decadeShelf ? (
          <div>
            <DecadeShelfHeader label="The 1950s: Golden Age of Sci-Fi" />
            <HorizontalMediaShelf {...decadeShelf} enableWheelScroll />
          </div>
        ) : null}
        <ThematicCollectionGrid
          items={[
            {
              id: "golden-age",
              title: "Golden Age of Sci-Fi",
              description: "Foundation-era psychohistory and galactic empire narratives.",
              imageSrc: foundationEdition.heroImageUrl ?? foundationEdition.coverUrl,
            },
            {
              id: "robot-series",
              title: "Robot & Foundation Universe",
              description: "Asimov's interconnected future history across centuries.",
              imageSrc: foundationEdition.coverUrl,
            },
          ]}
        />
      </div>
      <GittenbergFooter
        links={footerLinks}
        copyright="© 1851-2024 Gittenberg Public Domain Initiative"
        className="border-outline bg-primary text-on-primary"
      />
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Cinematic Library Expanded",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <CinematicLibraryExpandedPage />,
}
