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
} from "@/data/mappers"
import type { LineageBranch } from "@tx/ui-lib"

const internationalBranches: LineageBranch[] = [
  {
    id: "master",
    title: "Master Branch",
    badge: "Default",
    description: "The canonical text based on the 1851 American edition.",
    formats: ["EPUB", "PDF", "WEB"],
    isDefault: true,
  },
  {
    id: "french",
    title: "French Translation Fork (Automated)",
    description:
      "Full linguistic normalization and translation by Agent-Hugo. Optimized for modern French scholarship.",
    formats: ["EPUB (FR)", "PDF (FR)"],
  },
  {
    id: "dutch",
    title: "Dutch Translation Fork (Automated)",
    description: "Experimental Dutch localization fork with glossary annotations.",
    formats: ["EPUB (NL)"],
    isLast: true,
  },
]

export function InternationalBuildsPage() {
  const repository = useRepository()
  const build = useRepositoryLiteraryBuilds()[0]

  if (!build) {
    return (
      <main className="mx-auto max-w-container-max px-boundary py-region pt-shell">
        <RepositoryHero
          {...repositoryHeroFrom(repository)}
          description="International translation forks and localized build artifacts."
        />
        <p className="mt-section text-on-surface-variant">Create a literary build to populate translation lineage.</p>
        <Button className="mt-section" asChild>
          <Link to={routes.repositoryBuildNew(repository.slug)}>Create build</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-container-max px-boundary py-region pt-shell">
      <RepositoryHero
        {...repositoryHeroFrom(repository)}
        description="International translation forks and localized build artifacts."
      />
      <section className="mb-region grid grid-cols-1 gap-region lg:grid-cols-3">
        <ActiveBuildCard
          versionWatermark={build.version}
          statusLabel={build.statusLabel}
          title={build.title}
          description="Canonical English build with translation fork metadata for French and Dutch agent pipelines."
          downloadLabel="Download PDF (Scholarly)"
          commitHash={build.commitHash}
        />
        <BuildStatusPanel
          items={toBuildStatusItems(build)}
          revisionsCount="14,203 Revisions"
          revisionsLabel="Total scholarly commits"
        />
      </section>
      <LineageTimeline title="Translation Lineage" branches={internationalBranches} />
      <FormatArtifactGrid artifacts={toFormatArtifacts(build)} />
      <ArchivalEvolutionTable rows={toArchivalVersions(build)} />
    </main>
  )
}
