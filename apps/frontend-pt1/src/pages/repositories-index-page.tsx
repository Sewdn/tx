import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { routes } from "@/navigation/routes"

export function RepositoriesIndexPage() {
  const { repositories } = useGittenbergData()

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-24 pb-20 md:px-margin-desktop">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Repositories</h1>
          <p className="mt-2 max-w-2xl text-on-surface-variant">
            Select a literary repository to open its manuscript, revisions, builds, and reader
            preview.
          </p>
        </div>
        <Button asChild>
          <Link to={routes.repositoryNew}>New repository</Link>
        </Button>
      </div>
      <ul className="mt-10 grid gap-gutter md:grid-cols-2">
        {repositories.map((repository) => (
          <li key={repository.id}>
            <Link
              to={routes.repositoryHome(repository.slug)}
              className="flex gap-4 rounded-lg border border-outline-variant bg-surface-container-low p-6 transition-colors hover:bg-surface-container-high"
            >
              {repository.coverUrl ? (
                <img
                  src={repository.coverUrl}
                  alt=""
                  className="h-20 w-14 shrink-0 rounded-sm object-cover"
                />
              ) : (
                <div className="flex h-20 w-14 shrink-0 items-center justify-center rounded-sm bg-surface-container-high text-xs text-on-surface-variant">
                  No cover
                </div>
              )}
              <div>
                <h2 className="font-headline-lg text-[20px] text-primary">{repository.title}</h2>
                <p className="text-on-surface-variant">{repository.subtitle}</p>
                <p className="mt-2 font-code-sm text-code-sm text-on-surface-variant">
                  /{repository.slug}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
