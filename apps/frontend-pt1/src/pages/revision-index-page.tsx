import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import {
  useRepository,
  useRepositoryRevisions,
  useRouteRevisionId,
} from "@tx/gittenberg-data-react"
import { routes } from "@/navigation/routes"
import { RevisionDetailPage } from "@/pages/revision-detail-page"

export function RevisionIndexPage() {
  const repository = useRepository()
  const revisions = useRepositoryRevisions()
  const revisionId = useRouteRevisionId()
  const active = revisionId
    ? revisions.find((item) => item.id === revisionId)
    : revisions[0]

  if (active) {
    return <RevisionDetailPage revision={active} allRevisions={revisions} />
  }

  return (
    <main className="mx-auto max-w-container-max px-boundary pt-shell pb-page md:px-boundary">
      <h1 className="font-headline-lg text-headline-lg text-primary">Revisions</h1>
      <p className="mt-micro text-on-surface-variant">
        No revisions for {repository.title} yet. Create one to review manuscript changes.
      </p>
      <Button className="mt-section" asChild>
        <Link to={routes.repositoryRevisionNew(repository.slug)}>Create revision</Link>
      </Button>
    </main>
  )
}
