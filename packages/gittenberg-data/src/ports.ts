import type {
  ActivityEventPort,
  AgentPort,
  AuthorPort,
  CollectionItemPort,
  CreativeStudioSessionPort,
  CuratedCollectionPort,
  DiscoveryShelfPort,
  LibraryEditionPort,
  LiteraryBuildPort,
  ManuscriptFilePort,
  MembershipPlanPort,
  MetricSnapshotPort,
  PatronPort,
  PermawebAnchorPort,
  PrintOrderPort,
  PrintProductPort,
  ProvenanceCertificatePort,
  ReaderChapterPort,
  RepositoryPort,
  RevisionPort,
  UserCollectionPort,
  UserMembershipPort,
} from "@tx/domain-shared"

export type FileTreeNode = {
  id: string
  name: string
  icon: string
  active?: boolean
  highlighted?: boolean
  children?: FileTreeNode[]
}

/** Shared CRUD port surface for all Gittenberg domain entities. */
export type GittenbergPorts = {
  readonly repository: RepositoryPort
  readonly manuscriptFile: ManuscriptFilePort
  readonly revision: RevisionPort
  readonly agent: AgentPort
  readonly literaryBuild: LiteraryBuildPort
  readonly libraryEdition: LibraryEditionPort
  readonly activityEvent: ActivityEventPort
  readonly readerChapter: ReaderChapterPort
  readonly metricSnapshot: MetricSnapshotPort
  readonly author: AuthorPort
  readonly patron: PatronPort
  readonly permawebAnchor: PermawebAnchorPort
  readonly provenanceCertificate: ProvenanceCertificatePort
  readonly membershipPlan: MembershipPlanPort
  readonly userMembership: UserMembershipPort
  readonly userCollection: UserCollectionPort
  readonly collectionItem: CollectionItemPort
  readonly discoveryShelf: DiscoveryShelfPort
  readonly curatedCollection: CuratedCollectionPort
  readonly creativeStudioSession: CreativeStudioSessionPort
  readonly printProduct: PrintProductPort
  readonly printOrder: PrintOrderPort
}

export type GittenbergUiSeed = {
  readonly footerLinks: ReadonlyArray<{ label: string; href: string }>
  readonly sidebarFooter: ReadonlyArray<{
    id: string
    label: string
    icon: string
    href: string
  }>
  readonly fileTree: readonly FileTreeNode[]
  readonly curatorAvatar: string
  readonly readerIllustration: string
  readonly libraryAuthors: ReadonlyArray<{ id: string; label: string; checked?: boolean }>
  readonly libraryFormats: readonly string[]
  readonly curationBars: ReadonlyArray<{
    id: string
    label: string
    heightPercent: number
    fillPercent: number
  }>
  readonly canvasThemes: ReadonlyArray<{ id: string; color: string; active?: boolean }>
  readonly consumerNavItems: ReadonlyArray<{
    id: string
    label: string
    icon: string
    href: string
  }>
  readonly curatorNavItems: ReadonlyArray<{
    id: string
    label: string
    icon: string
    href: string
  }>
}

/** Primary demo repository id in seed data (use {@link DEFAULT_REPOSITORY_SLUG} in routes). */
export const MOBY_REPOSITORY_ID = "repo-moby-dick"

/** Foundation demo repository (Isaac Asimov). */
export const FOUNDATION_REPOSITORY_ID = "repo-foundation"

/** Prototype reader user id for collections and orders. */
export const DEMO_USER_ID = "user-demo-reader"

/** Default landing slug when visiting `/` (matches seed `Repository.slug`). */
export const DEFAULT_REPOSITORY_SLUG = "moby-dick"
