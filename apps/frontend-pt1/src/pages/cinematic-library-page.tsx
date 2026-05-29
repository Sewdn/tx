import { useNavigate } from "react-router-dom"
import {
  CinematicHero,
  FloatingPillNav,
  HorizontalMediaShelf,
  LandscapeSpotlightTile,
  ThematicCollectionGrid,
} from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { CURATED_ASIMOV_ID, consumerViewModels } from "@/data/consumer-data"
import {
  activeConsumerNavId,
  consumerNavItemsFromUi,
  routes,
} from "@/navigation/routes"

export function CinematicLibraryPage() {
  const navigate = useNavigate()
  const data = useGittenbergData()
  const { foundation, cinematicShelves, thematicTiles } = consumerViewModels(data)
  const asimov = data.authors.find((author) => author.slug === "isaac-asimov")
  const navItems = consumerNavItemsFromUi(data.ui.consumerNavItems).slice(0, 3)
  const browseShelves = cinematicShelves.filter((shelf) => shelf.id !== "shelf-featured-hero")
  const spotlightShelf = cinematicShelves.find((shelf) => shelf.id === "shelf-asimov-spotlight")

  const goEdition = (editionId: string) => navigate(routes.libraryEdition(editionId))

  if (!foundation) {
    return (
      <main className="p-boundary font-body-md text-on-primary">No featured editions in the archive.</main>
    )
  }

  return (
    <main className="min-h-screen bg-primary text-on-primary">
      <FloatingPillNav
        brandHref={routes.explore}
        navItems={navItems}
        activeNavId={activeConsumerNavId("/library/cinematic")}
        onNavItemClick={(item) => navigate(item.href)}
      />
      <CinematicHero
        title={foundation.title}
        subtitle={foundation.author}
        tagline={foundation.tagline}
        editionTag={foundation.badge ? `${foundation.badge.toUpperCase()} V4.2` : "SCHOLARLY EDITION"}
        coverSrc={foundation.coverUrl}
        backgroundSrc={foundation.heroImageUrl ?? foundation.coverUrl}
        primaryCta={{
          label: "Read Now",
          variant: "primary",
          icon: "menu_book",
          onClick: () => goEdition(foundation.id),
        }}
        secondaryCta={{
          label: "Galactic Archive",
          variant: "ghost",
          icon: "collections_bookmark",
          onClick: () => navigate(routes.libraryCollection(CURATED_ASIMOV_ID)),
        }}
      />
      <div className="mx-auto max-w-container-max space-y-region px-boundary pb-page pt-region">
        {asimov ? (
          <section>
            <h2 className="mb-section font-headline-lg text-headline-lg">Author Spotlight</h2>
            <div className="hide-scrollbar flex gap-section overflow-x-auto pb-component">
              <LandscapeSpotlightTile
                title={asimov.name}
                subtitle={`${asimov.birthYear}–${asimov.deathYear}`}
                imageSrc={asimov.portraitUrl}
                onClick={() => navigate(routes.libraryCollection(CURATED_ASIMOV_ID))}
              />
              {(spotlightShelf?.items ?? []).slice(0, 2).map((item) => (
                <LandscapeSpotlightTile
                  key={item.id}
                  title={item.title}
                  subtitle={item.author}
                  imageSrc={item.coverSrc}
                  onClick={() => goEdition(item.id)}
                />
              ))}
            </div>
          </section>
        ) : null}
        {browseShelves.map((shelf) => (
          <HorizontalMediaShelf
            key={shelf.id}
            {...shelf}
            enableWheelScroll
            onItemClick={(item) => goEdition(item.id)}
          />
        ))}
        <section>
          <h2 className="mb-section font-headline-lg text-headline-lg">Thematic Collections</h2>
          <ThematicCollectionGrid
            items={thematicTiles}
            onItemClick={() => navigate(routes.libraryCollection(CURATED_ASIMOV_ID))}
          />
        </section>
      </div>
    </main>
  )
}
