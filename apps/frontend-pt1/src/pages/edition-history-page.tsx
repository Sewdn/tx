import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import {
  ActiveBuildCard,
  ArchivalEvolutionTable,
  BuildStatusPanel,
  FormatArtifactGrid,
  LineageTimeline,
  RepositoryHero,
} from "@tx/ui-lib"
import { useRepository, useRepositoryLiteraryBuilds } from "@tx/gittenberg-data-react"
import { routes } from "@/navigation/routes"
import {
  repositoryHeroFrom,
  toArchivalVersions,
  toBuildStatusItems,
  toFormatArtifacts,
  toLineageBranches,
} from "@/data/mappers"

export function EditionHistoryPage() {
  const repository = useRepository()
  const build = useRepositoryLiteraryBuilds()[0]

  if (!build) {
    return (
      <main className="mx-auto max-w-container-max px-boundary py-region pt-shell">
        <RepositoryHero {...repositoryHeroFrom(repository)} />
        <p className="mt-section text-on-surface-variant">No literary build yet for insights and edition history.</p>
        <Button className="mt-section" asChild>
          <Link to={routes.repositoryBuildNew(repository.slug)}>Create build</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-container-max px-boundary py-region pt-shell">
      <RepositoryHero {...repositoryHeroFrom(repository)} />
      <section className="mb-region grid grid-cols-1 gap-region lg:grid-cols-3">
        <ActiveBuildCard
          versionWatermark={build.version}
          statusLabel={build.statusLabel}
          title={build.title}
          description={build.description}
          downloadLabel="Download PDF (Scholarly)"
          commitHash={build.commitHash}
        />
        <BuildStatusPanel
          items={toBuildStatusItems(build)}
          revisionsCount="14,203 Revisions"
          revisionsLabel="Total scholarly commits"
        />
      </section>
      <LineageTimeline branches={toLineageBranches(build)} />
      <FormatArtifactGrid artifacts={toFormatArtifacts(build)} />
      <ArchivalEvolutionTable rows={toArchivalVersions(build)} />
    </main>
  )
}
