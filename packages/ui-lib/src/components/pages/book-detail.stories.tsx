import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems, footerLinks } from "@/fixtures/gittenberg"
import {
  asimovSpotlight,
  cinematicBookTiles,
  foundationBuild,
  foundationEdition,
} from "@/fixtures/v2-from-seed"
import { AuthorSpotlightPanel } from "@/components/organisms/author-spotlight-panel"
import { BookDetailHero } from "@/components/organisms/book-detail-hero"
import { DigitalFabricationsGrid } from "@/components/organisms/digital-fabrications-grid"
import { EditionLineagePanel } from "@/components/organisms/edition-lineage-panel"
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { MetadataStatsList } from "@/components/organisms/metadata-stats-list"
import { RelatedWorksCarousel } from "@/components/organisms/related-works-carousel"
import { toFormatArtifacts, toLineageBranches } from "@/lib/mappers"

const lineageBranches = toLineageBranches(foundationBuild)
const formatArtifacts = toFormatArtifacts(foundationBuild)

function BookDetailPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={consumerNavItems}
        activeNavId="library"
        searchPlaceholder="Search editions..."
      />
      <BookDetailHero
        title={foundationEdition.title}
        author={foundationEdition.author}
        tagline={foundationEdition.tagline ?? ""}
        editionTag="SCHOLARLY EDITION V4.2"
        coverSrc={foundationEdition.coverUrl}
        heroImageSrc={foundationEdition.heroImageUrl ?? foundationEdition.coverUrl}
        actions={[
          { label: "Start Reading", variant: "primary", icon: "menu_book" },
          { label: "Add to Collection", variant: "ghost", icon: "bookmark_add" },
        ]}
      />
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <div className="grid grid-cols-1 gap-region lg:grid-cols-[1fr_264px]">
          <div className="space-y-region">
            <DigitalFabricationsGrid artifacts={formatArtifacts} printPriceLabel="$29.99" />
            <EditionLineagePanel
              branches={lineageBranches}
              forkCount={14}
              title="Edition Lineage"
            />
            <RelatedWorksCarousel
              title="Genre Kinship"
              items={cinematicBookTiles.slice(0, 5)}
            />
          </div>
          <aside className="space-y-section lg:sticky lg:top-shell lg:self-start">
            <AuthorSpotlightPanel {...asimovSpotlight} />
            <MetadataStatsList
              fields={[
                { label: "Provenance", value: "Verified" },
                { label: "Citations", value: "892" },
                { label: "Archive Size", value: "18.6 MB" },
                { label: "Lens", value: foundationEdition.lensLabel ?? "Sci-Fi Modernism" },
              ]}
            />
          </aside>
        </div>
      </main>
      <GittenbergFooter
        links={footerLinks}
        copyright="© 1851-2024 Gittenberg Public Domain Initiative"
      />
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Book Detail",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <BookDetailPage />,
}
