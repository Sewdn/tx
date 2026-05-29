import { Link, Outlet } from "react-router-dom"
import { useOptionalRepository, useRepositorySlugParam } from "@tx/gittenberg-data-react"
import { routes } from "@/navigation/routes"

export function RepositoryLayout() {
  const slug = useRepositorySlugParam()
  const repository = useOptionalRepository(slug)

  if (!repository) {
    return (
      <main className="mx-auto max-w-container-max px-margin-desktop py-32 pt-24">
        <h1 className="font-headline-lg text-headline-lg text-primary">Repository not found</h1>
        <p className="mt-4 text-on-surface-variant">
          No repository matches <code className="font-code-sm">{slug}</code> (by slug or id).
        </p>
        <Link
          to={routes.repositories}
          className="mt-8 inline-block font-ui-label-md text-primary underline"
        >
          Browse repositories
        </Link>
      </main>
    )
  }

  return <Outlet />
}
