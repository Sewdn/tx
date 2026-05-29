import { useMemo } from "react"
import { useParams } from "react-router-dom"
import type {
  Agent,
  LiteraryBuild,
  ManuscriptFile,
  MetricSnapshot,
  ReaderChapter,
  Repository,
  Revision,
} from "@tx/domain-shared"
import { useGittenbergData } from "../context/gittenberg-data-context.js"
import { resolveRepository } from "../lib/resolve-repository.js"

export const repositorySlugParam = "repositorySlug" as const

export function useRepositorySlugParam(): string {
  const params = useParams<{ [repositorySlugParam]?: string }>()
  const slug = params[repositorySlugParam]
  if (!slug) {
    throw new Error(
      `Missing route param :${repositorySlugParam}. Use a /repositories/:${repositorySlugParam}/… route.`,
    )
  }
  return slug
}

export function useOptionalRepositorySlugParam(): string | undefined {
  const params = useParams<{ [repositorySlugParam]?: string }>()
  return params[repositorySlugParam]
}

export function useRepository(): Repository {
  const slug = useRepositorySlugParam()
  const { repositories } = useGittenbergData()
  const repository = resolveRepository(repositories, slug)
  if (!repository) {
    throw new Error(`Repository not found for "${slug}"`)
  }
  return repository
}

export function useOptionalRepository(slugOrId: string | undefined): Repository | undefined {
  const { repositories } = useGittenbergData()
  return useMemo(() => {
    if (!slugOrId) return undefined
    return resolveRepository(repositories, slugOrId)
  }, [repositories, slugOrId])
}

export function useRepositoryManuscriptFiles(): ManuscriptFile[] {
  const repository = useRepository()
  const { manuscriptFiles } = useGittenbergData()
  return useMemo(
    () => manuscriptFiles.filter((file) => file.repositoryId === repository.id),
    [manuscriptFiles, repository.id],
  )
}

export function useRepositoryAgents(): Agent[] {
  const repository = useRepository()
  const { agents } = useGittenbergData()
  return useMemo(
    () => agents.filter((agent) => agent.repositoryId === repository.id),
    [agents, repository.id],
  )
}

export function useRepositoryMetricSnapshots(): MetricSnapshot[] {
  const { metricSnapshots } = useGittenbergData()
  return useMemo(
    () => metricSnapshots.filter((metric) => metric.scope === "repository"),
    [metricSnapshots],
  )
}

export function useRepositoryRevisions(): Revision[] {
  const repository = useRepository()
  const { revisions } = useGittenbergData()
  return useMemo(
    () =>
      revisions
        .filter((item) => item.repositoryId === repository.id)
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [revisions, repository.id],
  )
}

export function useRepositoryLiteraryBuilds(): LiteraryBuild[] {
  const repository = useRepository()
  const { literaryBuilds } = useGittenbergData()
  return useMemo(
    () =>
      literaryBuilds
        .filter((item) => item.repositoryId === repository.id)
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [literaryBuilds, repository.id],
  )
}

export const revisionIdParam = "revisionId" as const
export const buildIdParam = "buildId" as const
export const fileIdParam = "fileId" as const
export const chapterIdParam = "chapterId" as const
export const agentIdParam = "agentId" as const

export function useRepositoryRevisionById(revisionId: string): Revision | undefined {
  const revisions = useRepositoryRevisions()
  return useMemo(
    () => revisions.find((item) => item.id === revisionId),
    [revisions, revisionId],
  )
}

export function useRouteRevisionId(): string | undefined {
  const params = useParams<{ [revisionIdParam]?: string }>()
  return params[revisionIdParam]
}

export function useRepositoryRevision(): Revision {
  const revisionId = useRouteRevisionId()
  const revisions = useRepositoryRevisions()
  const revision = useMemo(() => {
    if (revisionId) {
      return revisions.find((item) => item.id === revisionId)
    }
    return revisions[0]
  }, [revisionId, revisions])
  if (!revision) {
    const repository = useRepository()
    throw new Error(`No revision found for repository "${repository.slug}"`)
  }
  return revision
}

export function useRepositoryLiteraryBuildById(buildId: string): LiteraryBuild | undefined {
  const builds = useRepositoryLiteraryBuilds()
  return useMemo(() => builds.find((item) => item.id === buildId), [builds, buildId])
}

export function useRouteBuildId(): string | undefined {
  const params = useParams<{ [buildIdParam]?: string }>()
  return params[buildIdParam]
}

export function useRepositoryLiteraryBuild(): LiteraryBuild {
  const buildId = useRouteBuildId()
  const builds = useRepositoryLiteraryBuilds()
  const build = useMemo(() => {
    if (buildId) {
      return builds.find((item) => item.id === buildId)
    }
    return builds[0]
  }, [buildId, builds])
  if (!build) {
    const repository = useRepository()
    throw new Error(`No literary build found for repository "${repository.slug}"`)
  }
  return build
}

export function useRepositoryReaderChapters(): ReaderChapter[] {
  const repository = useRepository()
  const { readerChapters } = useGittenbergData()
  return useMemo(
    () =>
      readerChapters
        .filter((chapter) => chapter.repositoryId === repository.id)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    [readerChapters, repository.id],
  )
}
