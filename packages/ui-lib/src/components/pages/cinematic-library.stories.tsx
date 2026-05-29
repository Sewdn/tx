import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems, footerLinks } from "@/fixtures/gittenberg"
import { foundationEdition, horizontalShelves } from "@/fixtures/v2-from-seed"
import { CinematicHero } from "@/components/organisms/cinematic-hero"
import { FloatingPillNav } from "@/components/organisms/floating-pill-nav"
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer"
import { HorizontalMediaShelf } from "@/components/organisms/horizontal-media-shelf"

const browseShelves = horizontalShelves.filter((shelf) => shelf.id !== "shelf-featured-hero")

function CinematicLibraryPage() {
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
        {browseShelves.map((shelf) => (
          <HorizontalMediaShelf key={shelf.id} {...shelf} enableWheelScroll />
        ))}
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
  title: "Gittenberg/Pages/Cinematic Library",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <CinematicLibraryPage />,
}
