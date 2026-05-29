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
      <main className="mx-auto max-w-container-max px-margin-desktop py-12 pt-24">
        <RepositoryHero {...repositoryHeroFrom(repository)} />
        <p className="mt-8 text-on-surface-variant">No literary build yet for insights and edition history.</p>
        <Button className="mt-6" asChild>
          <Link to={routes.repositoryBuildNew(repository.slug)}>Create build</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-container-max px-margin-desktop py-12 pt-24">
      <RepositoryHero {...repositoryHeroFrom(repository)} />
      <section className="mb-16 grid grid-cols-1 gap-gutter lg:grid-cols-3">
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
