import { useNavigate } from "react-router-dom"
import {
  CollectionBookGrid,
  CollectionsWorkspaceSidebar,
  LoadMoreFooter,
  PaperTextureOverlay,
} from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { consumerViewModels, findBuildForEdition, findEdition } from "@/data/consumer-data"
import { routes } from "@/navigation/routes"

export function MyCollectionsPage() {
  const navigate = useNavigate()
  const data = useGittenbergData()
  const { collectionBookCards } = consumerViewModels(data)

  const openEdition = (editionId: string) => navigate(routes.libraryEdition(editionId))

  const startPrint = (editionId: string) => {
    const edition = findEdition(data.libraryEditions, editionId)
    if (!edition) return
    const build = findBuildForEdition(data.literaryBuilds, edition)
    const buildId = build?.id ?? edition.primaryBuildId ?? "build-moby-primary"
    navigate(routes.printOrder(buildId))
  }

  return (
    <main className="relative">
      <PaperTextureOverlay />
      <div className="mx-auto flex max-w-container-max flex-col gap-region px-boundary py-region md:flex-row">
        <CollectionsWorkspaceSidebar
          collections={data.userCollections.map((collection, index) => ({
            id: collection.id,
            name: collection.name,
            kind: collection.kind === "custom-folder" ? "folder" : "shelf",
            active: index === 0,
          }))}
          folders={[
            { id: "folder-sci-fi", name: "Sci-Fi Classics", active: false },
            { id: "folder-reading", name: "Currently Reading", active: true },
          ]}
        />
        <div className="flex-1 space-y-region">
          <header>
            <h1 className="font-headline-lg text-headline-lg text-primary">My Collections</h1>
            <p className="text-on-surface-variant">
              Personal shelves, folders, and download-ready editions.
            </p>
          </header>
          <CollectionBookGrid
            items={collectionBookCards.slice(0, 5)}
            onItemClick={(item) => openEdition(item.id)}
            onPrintClick={(item) => startPrint(item.id)}
          />
          <LoadMoreFooter shown={5} total={collectionBookCards.length} />
        </div>
      </div>
    </main>
  )
}
