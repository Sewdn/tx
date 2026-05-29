/**
 * v2 consumer-facing fixtures derived from {@link @tx/gittenberg-data} seed.
 */
import {
  AUTHOR_ASIMOV_ID,
  BUILD_FOUNDATION_ID,
  FOUNDATION_REPOSITORY_ID,
  LIB_FOUNDATION_ID,
  seedAgents,
  seedAuthors,
  seedCollectionItems,
  seedCreativeStudioSessions,
  seedCuratedCollections,
  seedDiscoveryShelves,
  seedLibraryEditions,
  seedLiteraryBuilds,
  seedMembershipPlans,
  seedPermawebAnchors,
  seedPrintOrders,
  seedPrintProducts,
  seedProvenanceCertificates,
  seedUi,
  seedUserCollections,
} from "@tx/gittenberg-data"
import type {
  AgentStyleChipData,
  AuthorSpotlightData,
  CertificateFieldData,
  NavItem,
  PrintOrderMeta,
} from "@/lib/types"
import {
  toBindingOptions,
  toCinematicBookTiles,
  toCollectionBookCards,
  toEternalGalleryCards,
  toHorizontalShelves,
  toLibraryBuildCards,
  toMembershipTierCards,
} from "@/lib/mappers"

export {
  AUTHOR_ASIMOV_ID,
  BUILD_FOUNDATION_ID,
  FOUNDATION_REPOSITORY_ID,
  LIB_FOUNDATION_ID,
}

export const foundationBuild = seedLiteraryBuilds.find((build) => build.id === BUILD_FOUNDATION_ID)!
export const foundationEdition = seedLibraryEditions.find((edition) => edition.id === LIB_FOUNDATION_ID)!
export const asimovAuthor = seedAuthors.find((author) => author.id === AUTHOR_ASIMOV_ID)!

export const consumerNavItems: NavItem[] = seedUi.consumerNavItems.map(({ id, label, href }) => ({
  id,
  label,
  href,
}))

const editionsById = Object.fromEntries(
  seedLibraryEditions.map((edition) => [edition.id, edition]),
) as Record<string, (typeof seedLibraryEditions)[number]>

const collectionItemByEditionId = new Map(
  seedCollectionItems
    .filter((item) => item.libraryEditionId)
    .map((item) => [item.libraryEditionId!, item]),
)

export const cinematicBookTiles = toCinematicBookTiles(seedLibraryEditions).map((tile) => {
  const item = collectionItemByEditionId.get(tile.id)
  return {
    ...tile,
    progressPercent: item?.progressPercent,
    locked: tile.locked ?? Boolean(item?.requiredTier),
  }
})

export const collectionBookCards = toCollectionBookCards(seedLibraryEditions, seedCollectionItems)

export const eternalGalleryCards = toEternalGalleryCards(seedLibraryEditions)

export const membershipTierCards = toMembershipTierCards(seedMembershipPlans)

export const horizontalShelves = toHorizontalShelves(seedDiscoveryShelves, editionsById).map(
  (shelf) => ({
    ...shelf,
    items: shelf.items.map((item) => {
      const collectionItem = collectionItemByEditionId.get(item.id)
      return {
        ...item,
        progressPercent: collectionItem?.progressPercent,
      }
    }),
  }),
)

export const asimovSpotlight: AuthorSpotlightData = {
  id: asimovAuthor.id,
  name: asimovAuthor.name,
  portraitSrc: asimovAuthor.portraitUrl,
  birthYear: asimovAuthor.birthYear ?? 1920,
  deathYear: asimovAuthor.deathYear ?? 1992,
  bio: asimovAuthor.biography,
  collectionHref: `#/collections/${asimovAuthor.collectionId ?? "curated-asimov"}`,
}

const studioAgents = seedAgents.filter((agent) => agent.studioEnabled)

export const agentStyleChips: AgentStyleChipData[] = studioAgents.map((agent) => ({
  id: agent.id,
  name: agent.name,
  styleLabel: agent.specialty ?? agent.description,
  icon: agent.icon,
  selected: agent.id === seedCreativeStudioSessions[0]?.activeAgentId,
}))

export const mobyPrintProduct = seedPrintProducts[0]!
export const bindingOptions = toBindingOptions(
  mobyPrintProduct,
  seedPrintOrders[0]?.bindingOptionId,
)

const mobyCertificate = seedProvenanceCertificates[0]!
const mobyAnchor = seedPermawebAnchors[0]!

export const certificateFields: CertificateFieldData[] = [
  { label: "Work", value: mobyCertificate.workTitle },
  { label: "Author", value: mobyCertificate.workAuthor },
  { label: "Year", value: mobyCertificate.workYear },
  { label: "Series", value: mobyCertificate.seriesLabel },
  { label: "Commit", value: mobyCertificate.commitHash },
  { label: "Arweave TX", value: mobyCertificate.arweaveTxId },
  { label: "Patron", value: mobyCertificate.patronDisplayName },
  { label: "Issued", value: mobyCertificate.issuedAt },
  { label: "Stewardship", value: mobyAnchor.stewardshipLevel },
]

const mobyEdition = seedLibraryEditions.find((edition) => edition.id === "lib-moby")!

export const printOrderMeta: PrintOrderMeta = {
  title: mobyEdition.title,
  author: mobyEdition.author,
  seriesLabel: mobyPrintProduct.seriesLabel,
  coverSrc: mobyEdition.coverUrl,
}

export const curatedAsimovCollection = seedCuratedCollections[0]!

export const asimovEditionCards = toLibraryBuildCards(
  curatedAsimovCollection.editionIds
    .map((id) => editionsById[id])
    .filter((edition): edition is NonNullable<typeof edition> => Boolean(edition)),
)

export const userCollections = [...seedUserCollections]
