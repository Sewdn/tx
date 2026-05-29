import type {
  ActivityEvent,
  Agent,
  Author,
  CollectionItem,
  CreativeStudioSession,
  CuratedCollection,
  DiscoveryShelf,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MembershipPlan,
  MetricSnapshot,
  Patron,
  PermawebAnchor,
  PrintOrder,
  PrintProduct,
  ProvenanceCertificate,
  ReaderChapter,
  Repository,
  Revision,
  UserCollection,
  UserMembership,
} from "@tx/domain-shared"
import type { GittenbergDataService } from "@tx/gittenberg-data"
import type { GittenbergPorts, GittenbergUiSeed } from "@tx/gittenberg-data"

export type GittenbergSnapshot = {
  readonly ports: GittenbergPorts
  readonly ui: GittenbergUiSeed
  readonly repositories: readonly Repository[]
  readonly manuscriptFiles: readonly ManuscriptFile[]
  readonly revisions: readonly Revision[]
  readonly agents: readonly Agent[]
  readonly literaryBuilds: readonly LiteraryBuild[]
  readonly libraryEditions: readonly LibraryEdition[]
  readonly activityEvents: readonly ActivityEvent[]
  readonly readerChapters: readonly ReaderChapter[]
  readonly metricSnapshots: readonly MetricSnapshot[]
  readonly authors: readonly Author[]
  readonly patrons: readonly Patron[]
  readonly permawebAnchors: readonly PermawebAnchor[]
  readonly provenanceCertificates: readonly ProvenanceCertificate[]
  readonly membershipPlans: readonly MembershipPlan[]
  readonly userMemberships: readonly UserMembership[]
  readonly userCollections: readonly UserCollection[]
  readonly collectionItems: readonly CollectionItem[]
  readonly discoveryShelves: readonly DiscoveryShelf[]
  readonly curatedCollections: readonly CuratedCollection[]
  readonly creativeStudioSessions: readonly CreativeStudioSession[]
  readonly printProducts: readonly PrintProduct[]
  readonly printOrders: readonly PrintOrder[]
}

export async function loadGittenbergSnapshot(
  service: GittenbergDataService,
): Promise<GittenbergSnapshot> {
  const page = { page: 1, pageSize: 500 }
  const { ports, ui } = service
  const [
    repositories,
    manuscriptFiles,
    revisions,
    agents,
    literaryBuilds,
    libraryEditions,
    activityEvents,
    readerChapters,
    metricSnapshots,
    authors,
    patrons,
    permawebAnchors,
    provenanceCertificates,
    membershipPlans,
    userMemberships,
    userCollections,
    collectionItems,
    discoveryShelves,
    curatedCollections,
    creativeStudioSessions,
    printProducts,
    printOrders,
  ] = await Promise.all([
    ports.repository.list(page),
    ports.manuscriptFile.list(page),
    ports.revision.list(page),
    ports.agent.list(page),
    ports.literaryBuild.list(page),
    ports.libraryEdition.list(page),
    ports.activityEvent.list(page),
    ports.readerChapter.list(page),
    ports.metricSnapshot.list(page),
    ports.author.list(page),
    ports.patron.list(page),
    ports.permawebAnchor.list(page),
    ports.provenanceCertificate.list(page),
    ports.membershipPlan.list(page),
    ports.userMembership.list(page),
    ports.userCollection.list(page),
    ports.collectionItem.list(page),
    ports.discoveryShelf.list(page),
    ports.curatedCollection.list(page),
    ports.creativeStudioSession.list(page),
    ports.printProduct.list(page),
    ports.printOrder.list(page),
  ])

  return {
    ports,
    ui,
    repositories: repositories.items,
    manuscriptFiles: manuscriptFiles.items,
    revisions: revisions.items,
    agents: agents.items,
    literaryBuilds: literaryBuilds.items,
    libraryEditions: libraryEditions.items,
    activityEvents: activityEvents.items,
    readerChapters: readerChapters.items,
    metricSnapshots: metricSnapshots.items,
    authors: authors.items,
    patrons: patrons.items,
    permawebAnchors: permawebAnchors.items,
    provenanceCertificates: provenanceCertificates.items,
    membershipPlans: membershipPlans.items,
    userMemberships: userMemberships.items,
    userCollections: userCollections.items,
    collectionItems: collectionItems.items,
    discoveryShelves: discoveryShelves.items,
    curatedCollections: curatedCollections.items,
    creativeStudioSessions: creativeStudioSessions.items,
    printProducts: printProducts.items,
    printOrders: printOrders.items,
  }
}
