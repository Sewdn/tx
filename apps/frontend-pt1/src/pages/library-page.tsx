import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import { BuildCatalogGrid, LibraryFilterSidebar } from "@tx/ui-lib"
import {
  useGittenbergData,
  useGittenbergPorts,
  useGittenbergRemoveMutation,
} from "@tx/gittenberg-data-react"
import { toLibraryAuthors, toLibraryBuildCards } from "@/data/mappers"
import { routes } from "@/navigation/routes"

export function LibraryPage() {
  const { libraryEditions, ui } = useGittenbergData()
  const ports = useGittenbergPorts()
  const removeEdition = useGittenbergRemoveMutation({
    collection: "libraryEditions",
    mutationFn: (id) => ports.libraryEdition.remove(id),
  })

  return (
    <main className="mx-auto grid max-w-container-max grid-cols-12 gap-gutter px-margin-desktop pt-24 pb-12">
      <div className="col-span-12 mb-4 flex justify-end">
        <Button asChild>
          <Link to={routes.libraryEditionNew}>Add edition</Link>
        </Button>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <LibraryFilterSidebar
          authors={toLibraryAuthors(ui.libraryAuthors)}
          eraOptions={[{ id: "1850", label: "1850s", selected: true }]}
          formatChips={[...ui.libraryFormats]}
          selectedFormats={["EPUB"]}
        />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <BuildCatalogGrid
          title="Library of Builds"
          subtitle={`Showing ${libraryEditions.length} curated editions`}
          builds={toLibraryBuildCards([...libraryEditions])}
        />
        <ul className="mt-8 space-y-2 border-t border-outline-variant pt-8">
          {libraryEditions.map((edition) => (
            <li
              key={edition.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-md border border-outline-variant px-4 py-3"
            >
              <span className="font-ui-label-md">
                {edition.title} — {edition.author}
              </span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link to={routes.libraryEditionEdit(edition.id)}>Edit</Link>
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    if (!window.confirm(`Delete "${edition.title}"?`)) return
                    removeEdition.mutate(edition.id)
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
