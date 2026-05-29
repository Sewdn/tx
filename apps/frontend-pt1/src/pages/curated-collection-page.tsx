import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthorCollectionGrid, CollectionLandingHeader } from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import {
  consumerViewModels,
  curatedEditionCards,
  findCuratedCollection,
} from "@/data/consumer-data"
import { collectionIdParam, routes } from "@/navigation/routes"

export function CuratedCollectionPage() {
  const navigate = useNavigate()
  const params = useParams<{ [collectionIdParam]: string }>()
  const collectionId = params[collectionIdParam] ?? ""
  const data = useGittenbergData()
  const { lookup, libraryAuthors } = consumerViewModels(data)
  const collection = findCuratedCollection(data.curatedCollections, collectionId)

  if (!collection) {
    return (
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <p className="font-body-md text-on-surface-variant">Collection not found.</p>
        <Link to={routes.libraryCinematic} className="mt-component text-primary underline">
          Back to library
        </Link>
      </main>
    )
  }

  const filterDefaults = collection.filterDefaults as
    | { eras?: string[]; themes?: string[]; formats?: string[] }
    | undefined
  const editions = curatedEditionCards(collection, lookup)

  return (
    <main>
      <CollectionLandingHeader
        backLabel="Back to Cinematic Library"
        backHref={routes.libraryCinematic}
        title={collection.title}
        description={collection.description}
        heroImageSrc={collection.heroImageUrl}
      />
      <div className="mx-auto max-w-container-max px-boundary py-region">
        <AuthorCollectionGrid
          authors={libraryAuthors.filter((author) => author.id === "asimov")}
          eraOptions={
            filterDefaults?.eras?.map((era, index) => ({
              id: era,
              label: era,
              selected: index === 0,
            })) ?? [{ id: "1950s", label: "1950s", selected: true }]
          }
          formatChips={[...data.ui.libraryFormats]}
          editions={editions}
          onEditionClick={(edition) => navigate(routes.libraryEdition(edition.id))}
        />
      </div>
    </main>
  )
}
