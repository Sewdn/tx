import { repositorySlugParam } from "@tx/gittenberg-data-react"

export { repositorySlugParam }

export const editionIdParam = "editionId"
export const collectionIdParam = "collectionId"
export const buildIdParam = "buildId"
export const certificateIdParam = "certificateId"
export const eventIdParam = "eventId"
export const metricIdParam = "metricId"

export const routes = {
  prototypeHome: "/",
  explore: "/explore",
  libraryCinematic: "/library/cinematic",
  libraryEdition: (editionId: string) => `/library/editions/${editionId}`,
  libraryCollection: (collectionId: string) => `/library/collections/${collectionId}`,
  myCollections: "/collections",
  eternalGallery: "/gallery/eternal",
  subscribe: "/subscribe",
  creativeStudio: (editionId: string) => `/studio/${editionId}`,
  printOrder: (buildId: string, agent?: boolean) =>
    agent ? `/order/print/${buildId}/agent` : `/order/print/${buildId}`,
  certificate: (certificateId: string) => `/patronage/certificate/${certificateId}`,
  archiveAnchor: "/archive/anchor",
  repositories: "/repositories",
  repositoryNew: "/repositories/new",
  library: "/library",
  agents: "/agents",
  libraryEditionNew: "/library/new",
  libraryEditionEdit: (editionId: string) => `/library/${editionId}/edit`,
  activityEventNew: "/agents/activity/new",
  activityEventEdit: (eventId: string) => `/agents/activity/${eventId}/edit`,
  metricNew: (scope: "agents" | "repository") => `/metrics/new?scope=${scope}`,
  metricEdit: (metricId: string) => `/metrics/${metricId}/edit`,
  repositoryHome: (slug: string) => `/repositories/${slug}`,
  repositoryEdit: (slug: string) => `/repositories/${slug}/edit`,
  repositoryFileNew: (slug: string) => `/repositories/${slug}/files/new`,
  repositoryFileEdit: (slug: string, fileId: string) => `/repositories/${slug}/files/${fileId}/edit`,
  repositoryRevision: (slug: string, revisionId?: string) =>
    revisionId ? `/repositories/${slug}/revision/${revisionId}` : `/repositories/${slug}/revision`,
  repositoryRevisionNew: (slug: string) => `/repositories/${slug}/revisions/new`,
  repositoryRevisionEdit: (slug: string, revisionId: string) =>
    `/repositories/${slug}/revisions/${revisionId}/edit`,
  repositoryReader: (slug: string) => `/repositories/${slug}/reader`,
  repositoryChapterNew: (slug: string) => `/repositories/${slug}/chapters/new`,
  repositoryChapterEdit: (slug: string, chapterId: string) =>
    `/repositories/${slug}/chapters/${chapterId}/edit`,
  repositoryBuild: (slug: string, buildId?: string) =>
    buildId ? `/repositories/${slug}/build/${buildId}` : `/repositories/${slug}/build`,
  repositoryBuildNew: (slug: string) => `/repositories/${slug}/builds/new`,
  repositoryBuildEdit: (slug: string, buildId: string) => `/repositories/${slug}/builds/${buildId}/edit`,
  repositoryEdition: (slug: string) => `/repositories/${slug}/edition`,
  repositoryEditionInternational: (slug: string) =>
    `/repositories/${slug}/edition/international`,
  repositoryEditor: (slug: string) => `/repositories/${slug}/editor`,
  repositoryAgentNew: (slug: string) => `/repositories/${slug}/agents/new`,
  repositoryAgentEdit: (slug: string, agentId: string) => `/repositories/${slug}/agents/${agentId}/edit`,
  repositoryMetricNew: () => `/metrics/new?scope=repository`,
} as const

export const routePatterns = {
  prototypeHome: routes.prototypeHome,
  explore: routes.explore,
  libraryCinematic: "/library/cinematic",
  libraryEdition: `/library/editions/:${editionIdParam}`,
  libraryCollection: `/library/collections/:${collectionIdParam}`,
  myCollections: routes.myCollections,
  eternalGallery: routes.eternalGallery,
  subscribe: routes.subscribe,
  creativeStudio: `/studio/:${editionIdParam}`,
  printOrder: `/order/print/:${buildIdParam}`,
  printOrderAgent: `/order/print/:${buildIdParam}/agent`,
  certificate: `/patronage/certificate/:${certificateIdParam}`,
  archiveAnchor: routes.archiveAnchor,
  repositories: routes.repositories,
  repositoryNew: routes.repositoryNew,
  repository: `/repositories/:${repositorySlugParam}`,
  repositoryEdit: `/repositories/:${repositorySlugParam}/edit`,
  repositoryFileNew: `/repositories/:${repositorySlugParam}/files/new`,
  repositoryFileEdit: `/repositories/:${repositorySlugParam}/files/:fileId/edit`,
  repositoryRevision: `/repositories/:${repositorySlugParam}/revision/:revisionId?`,
  repositoryRevisionNew: `/repositories/:${repositorySlugParam}/revisions/new`,
  repositoryRevisionEdit: `/repositories/:${repositorySlugParam}/revisions/:revisionId/edit`,
  repositoryReader: `/repositories/:${repositorySlugParam}/reader`,
  repositoryChapterNew: `/repositories/:${repositorySlugParam}/chapters/new`,
  repositoryChapterEdit: `/repositories/:${repositorySlugParam}/chapters/:chapterId/edit`,
  repositoryBuild: `/repositories/:${repositorySlugParam}/build/:buildId?`,
  repositoryBuildNew: `/repositories/:${repositorySlugParam}/builds/new`,
  repositoryBuildEdit: `/repositories/:${repositorySlugParam}/builds/:buildId/edit`,
  repositoryEdition: `/repositories/:${repositorySlugParam}/edition`,
  repositoryEditionInternational: `/repositories/:${repositorySlugParam}/edition/international`,
  repositoryEditor: `/repositories/:${repositorySlugParam}/editor`,
  repositoryAgentNew: `/repositories/:${repositorySlugParam}/agents/new`,
  repositoryAgentEdit: `/repositories/:${repositorySlugParam}/agents/:agentId/edit`,
  library: routes.library,
  libraryEditionNew: "/library/new",
  libraryEditionEdit: `/library/:${editionIdParam}/edit`,
  agents: routes.agents,
  activityEventNew: "/agents/activity/new",
  activityEventEdit: `/agents/activity/:${eventIdParam}/edit`,
  metricNew: "/metrics/new",
  metricEdit: `/metrics/:${metricIdParam}/edit`,
} as const

/** Curator / Lexicon top nav — distinct from consumer Explore (public mission landing). */
export const curatorNavItems = [
  { id: "prototype", label: "Overview", href: routes.prototypeHome },
  { id: "repositories", label: "Repositories", href: routes.repositories },
  { id: "agents", label: "Agents", href: routes.agents },
  { id: "library", label: "Catalog", href: routes.library },
] as const

export function consumerNavItemsFromUi(
  items: ReadonlyArray<{ id: string; label: string; href: string }>,
) {
  const hrefById: Record<string, string> = {
    explore: routes.explore,
    collections: routes.myCollections,
    library: routes.libraryCinematic,
    subscribe: routes.subscribe,
  }
  return items.map((item) => ({
    id: item.id,
    label: item.label,
    href: hrefById[item.id] ?? item.href,
  }))
}

export type SidebarNavId =
  | "manuscript"
  | "discussion"
  | "revisions"
  | "insights"
  | "reader"
  | "build"
  | "editor"

export function repositorySidebarNav(slug: string) {
  return [
    { id: "manuscript" as const, label: "Manuscript", icon: "menu_book", href: routes.repositoryHome(slug) },
    { id: "discussion" as const, label: "Discussion", icon: "forum", href: "#" },
    {
      id: "revisions" as const,
      label: "Revisions",
      icon: "difference",
      href: routes.repositoryRevision(slug),
    },
    {
      id: "insights" as const,
      label: "Insights",
      icon: "analytics",
      href: routes.repositoryEdition(slug),
    },
    {
      id: "reader" as const,
      label: "Reader",
      icon: "auto_stories",
      href: routes.repositoryReader(slug),
    },
    {
      id: "build" as const,
      label: "Build & Export",
      icon: "output",
      href: routes.repositoryBuild(slug),
    },
    {
      id: "editor" as const,
      label: "Lexicon Editor",
      icon: "edit_note",
      href: routes.repositoryEditor(slug),
    },
  ]
}

export type CuratorNavId = (typeof curatorNavItems)[number]["id"]
export type ConsumerNavId = "explore" | "collections" | "library" | "subscribe"

export function activeSidebarId(pathname: string): SidebarNavId {
  if (pathname.includes("/revision")) return "revisions"
  if (pathname.includes("/reader") || pathname.includes("/chapters")) return "reader"
  if (pathname.includes("/build")) return "build"
  if (pathname.includes("/editor") || pathname.includes("/files")) return "editor"
  if (pathname.includes("/edition")) return "insights"
  return "manuscript"
}

export function activeCuratorNavId(pathname: string): CuratorNavId {
  if (pathname === routes.prototypeHome) return "prototype"
  if (pathname.startsWith(routes.agents)) return "agents"
  if (
    pathname === routes.library ||
    pathname.startsWith("/library/new") ||
    (pathname.startsWith("/library/") && pathname.includes("/edit"))
  ) {
    return "library"
  }
  if (pathname.startsWith(routes.repositories)) return "repositories"
  if (pathname.startsWith("/metrics")) return "agents"
  return "repositories"
}

export function activeConsumerNavId(pathname: string): ConsumerNavId {
  if (pathname.startsWith(routes.myCollections)) return "collections"
  if (pathname.startsWith(routes.subscribe)) return "subscribe"
  if (pathname.startsWith("/library") || pathname.startsWith("/studio") || pathname.startsWith("/order")) {
    return "library"
  }
  if (pathname.startsWith(routes.explore) || pathname.startsWith(routes.eternalGallery) || pathname.startsWith(routes.archiveAnchor)) {
    return "explore"
  }
  return "explore"
}

export function isCuratorRoute(pathname: string): boolean {
  if (pathname === routes.prototypeHome) return false
  if (isConsumerRoute(pathname)) return false
  return (
    pathname.startsWith(routes.repositories) ||
    pathname.startsWith(routes.agents) ||
    pathname.startsWith(routes.library) ||
    pathname.startsWith("/metrics")
  )
}

export function isConsumerRoute(pathname: string): boolean {
  if (pathname === routes.prototypeHome) return false
  return (
    pathname.startsWith(routes.explore) ||
    pathname.startsWith("/library/cinematic") ||
    pathname.startsWith("/library/editions") ||
    pathname.startsWith("/library/collections") ||
    pathname.startsWith(routes.myCollections) ||
    pathname.startsWith(routes.eternalGallery) ||
    pathname.startsWith(routes.subscribe) ||
    pathname.startsWith("/studio") ||
    pathname.startsWith("/order/print") ||
    pathname.startsWith("/patronage") ||
    pathname.startsWith(routes.archiveAnchor)
  )
}
