import { useNavigate } from "react-router-dom"
import { EternalGalleryFilterSidebar, EternalGalleryGrid } from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { consumerViewModels } from "@/data/consumer-data"
import { routes } from "@/navigation/routes"

export function EternalGalleryPage() {
  const navigate = useNavigate()
  const data = useGittenbergData()
  const { eternalGalleryCards, libraryAuthors } = consumerViewModels(data)

  return (
    <main className="mx-auto flex max-w-container-max flex-col gap-region px-boundary py-region md:flex-row">
      <EternalGalleryFilterSidebar
        authors={libraryAuthors}
        eraOptions={[
          { id: "1850", label: "1850s (Victorian)" },
          { id: "1950", label: "1950s (Golden Age)", selected: true },
        ]}
        formatChips={[...data.ui.libraryFormats]}
        stewardshipLevels={[
          { id: "genesis", label: "Genesis Stewardship", active: true },
          { id: "high", label: "High-Fidelity" },
          { id: "standard", label: "Standard" },
        ]}
        onContribute={() => navigate(routes.archiveAnchor)}
      />
      <div className="flex-1">
        <header className="mb-region">
          <h1 className="font-headline-lg text-headline-lg text-primary">Eternal Gallery</h1>
          <p className="text-on-surface-variant">
            Permaweb-anchored manuscripts and their Mécène stewards
          </p>
        </header>
        <EternalGalleryGrid items={eternalGalleryCards} />
      </div>
    </main>
  )
}
