import type {
  Author,
  CuratedCollection,
  DiscoveryShelf,
  LibraryEdition,
  LiteraryBuild,
} from "@tx/domain-shared"
import type { GittenbergSnapshot } from "@tx/gittenberg-data-react"
import type {
  AgentStyleChipData,
  AuthorSpotlightData,
  CinematicBookTileData,
  HorizontalShelfData,
} from "@tx/ui-lib"

export type ThemeCollectionTileData = {
  id: string
  title: string
  description: string
  imageSrc: string
  ctaLabel?: string
  href?: string
}
import {
  toBindingOptions,
  toCinematicBookTiles,
  toCollectionBookCards,
  toEternalGalleryCards,
  toHorizontalShelves,
  toLibraryAuthors,
  toLibraryBuildCards,
  toMembershipTierCards,
} from "@/data/mappers"
import { routes } from "@/navigation/routes"

export const CURATED_ASIMOV_ID = "curated-asimov"
export const LIB_FOUNDATION_ID = "lib-foundation"

export function editionsById(editions: readonly LibraryEdition[]) {
  return Object.fromEntries(editions.map((edition) => [edition.id, edition])) as Record<
    string,
    LibraryEdition
  >
}

export function findEdition(editions: readonly LibraryEdition[], editionId: string) {
  return editions.find((edition) => edition.id === editionId)
}

export function findBuildForEdition(
  builds: readonly LiteraryBuild[],
  edition: LibraryEdition,
) {
  const buildId = edition.primaryBuildId
  if (buildId) {
    return builds.find((build) => build.id === buildId)
  }
  if (edition.repositoryId) {
    return builds.find((build) => build.repositoryId === edition.repositoryId)
  }
  return undefined
}

export function findCuratedCollection(
  collections: readonly CuratedCollection[],
  collectionId: string,
) {
  return collections.find((collection) => collection.id === collectionId || collection.slug === collectionId)
}

export function curatedEditionCards(
  collection: CuratedCollection,
  lookup: Record<string, LibraryEdition>,
) {
  const ids = (collection.editionIds as string[]) ?? []
  return toLibraryBuildCards(
    ids.map((id) => lookup[id]).filter((edition): edition is LibraryEdition => Boolean(edition)),
  )
}

export function authorSpotlightFromAuthor(author: Author): AuthorSpotlightData {
  return {
    id: author.id,
    name: author.name,
    portraitSrc: author.portraitUrl,
    birthYear: author.birthYear ?? 0,
    deathYear: author.deathYear ?? 0,
    bio: author.biography,
    collectionHref: author.collectionId
      ? routes.libraryCollection(author.collectionId)
      : routes.libraryCinematic,
  }
}

export function cinematicShelves(
  shelves: readonly DiscoveryShelf[],
  lookup: Record<string, LibraryEdition>,
  onEdition: (editionId: string) => string = routes.libraryEdition,
): HorizontalShelfData[] {
  return toHorizontalShelves([...shelves], lookup).map((shelf) => ({
    ...shelf,
    items: shelf.items.map((item) => ({
      ...item,
      href: onEdition(item.id),
    })),
  }))
}

export function tilesForEditions(
  editions: LibraryEdition[],
  onEdition: (editionId: string) => string = routes.libraryEdition,
): CinematicBookTileData[] {
  return toCinematicBookTiles(editions).map((tile) => ({
    ...tile,
    href: onEdition(tile.id),
  }))
}

export function thematicTilesFromShelves(
  shelves: readonly DiscoveryShelf[],
  lookup: Record<string, LibraryEdition>,
): ThemeCollectionTileData[] {
  const thematic = shelves.filter((shelf) => shelf.shelfType === "thematic")
  return thematic.map((shelf) => {
    const firstEdition = ((shelf.editionIds as string[]) ?? [])
      .map((id) => lookup[id])
      .find(Boolean)
    return {
      id: shelf.id,
      title: shelf.title,
      description: shelf.subtitle ?? "Explore curated thematic editions",
      imageSrc: firstEdition?.heroImageUrl ?? firstEdition?.coverUrl ?? "",
      ctaLabel: "Explore Collection",
      href:
        shelf.slug === "asimov-spotlight" || shelf.id === "shelf-asimov-spotlight"
          ? routes.libraryCollection(CURATED_ASIMOV_ID)
          : routes.libraryCollection(CURATED_ASIMOV_ID),
    }
  })
}

export function studioAgents(agents: GittenbergSnapshot["agents"]): AgentStyleChipData[] {
  return agents
    .filter((agent) => agent.studioEnabled)
    .map((agent) => ({
      id: agent.id,
      name: agent.name,
      styleLabel: agent.specialty ?? agent.description,
      icon: agent.icon,
      selected: false,
    }))
}

export function consumerViewModels(data: GittenbergSnapshot) {
  const lookup = editionsById(data.libraryEditions)
  const foundation = lookup[LIB_FOUNDATION_ID]
  const asimovCollection = findCuratedCollection(data.curatedCollections, CURATED_ASIMOV_ID)

  return {
    lookup,
    foundation,
    asimovCollection,
    cinematicShelves: cinematicShelves(data.discoveryShelves, lookup),
    thematicTiles: thematicTilesFromShelves(data.discoveryShelves, lookup),
    membershipTiers: toMembershipTierCards([...data.membershipPlans]),
    eternalGalleryCards: toEternalGalleryCards([...data.libraryEditions]),
    collectionBookCards: toCollectionBookCards(
      [...data.libraryEditions],
      [...data.collectionItems],
    ),
    libraryAuthors: toLibraryAuthors(data.ui.libraryAuthors),
    bindingForProduct: (productId: string, selectedBindingId?: string) => {
      const product = data.printProducts.find((entry) => entry.id === productId)
      return product ? toBindingOptions(product, selectedBindingId) : []
    },
  }
}
