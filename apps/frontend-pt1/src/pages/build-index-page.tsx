import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import {
  useRepository,
  useRepositoryLiteraryBuilds,
  useRouteBuildId,
} from "@tx/gittenberg-data-react"
import { routes } from "@/navigation/routes"
import { BuildExportPage } from "@/pages/build-export-page"

export function BuildIndexPage() {
  const repository = useRepository()
  const builds = useRepositoryLiteraryBuilds()
  const buildId = useRouteBuildId()
  const active = buildId ? builds.find((item) => item.id === buildId) : builds[0]

  if (active) {
    return <BuildExportPage build={active} allBuilds={builds} />
  }

  return (
    <main className="mx-auto max-w-container-max px-boundary pt-shell pb-page md:px-boundary">
      <h1 className="font-headline-lg text-headline-lg text-primary">Build &amp; export</h1>
      <p className="mt-micro text-on-surface-variant">
        No literary builds for {repository.title} yet. Create a build to configure formats and
        export.
      </p>
      <Button className="mt-section" asChild>
        <Link to={routes.repositoryBuildNew(repository.slug)}>Create build</Link>
      </Button>
    </main>
  )
}
