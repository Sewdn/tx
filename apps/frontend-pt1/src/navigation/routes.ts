import { repositorySlugParam } from "@tx/gittenberg-data-react"

export { repositorySlugParam }

export const editionIdParam = "editionId"
export const eventIdParam = "eventId"
export const metricIdParam = "metricId"

export const routes = {
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

/** React Router `path` patterns (param names must match {@link repositorySlugParam}). */
export const routePatterns = {
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

export const topNavItems = [
  { id: "explore", label: "Explore", href: "#" },
  { id: "repositories", label: "Repositories", href: routes.repositories },
  { id: "agents", label: "Agents", href: routes.agents },
  { id: "library", label: "Library", href: routes.library },
] as const

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

export type TopNavId = (typeof topNavItems)[number]["id"]

export function activeSidebarId(pathname: string): SidebarNavId {
  if (pathname.includes("/revision")) return "revisions"
  if (pathname.includes("/reader") || pathname.includes("/chapters")) return "reader"
  if (pathname.includes("/build")) return "build"
  if (pathname.includes("/editor") || pathname.includes("/files")) return "editor"
  if (pathname.includes("/edition")) return "insights"
  return "manuscript"
}

export function activeTopNavId(pathname: string): TopNavId {
  if (pathname.startsWith(routes.agents)) return "agents"
  if (pathname.startsWith(routes.library)) return "library"
  if (pathname.startsWith(routes.repositories)) return "repositories"
  return "repositories"
}
