import { BuildCatalogCard } from "@/components/molecules/build-catalog-card"
import { LibraryFilterSidebar } from "@/components/organisms/library-filter-sidebar"
import { cn } from "@/lib/utils"
import type { FilterCheckboxOption, LibraryBuildCardData } from "@/lib/types"

export type AuthorCollectionGridProps = {
  authors: FilterCheckboxOption[]
  eraOptions: { id: string; label: string; selected?: boolean }[]
  formatChips: string[]
  selectedFormats?: string[]
  editions: LibraryBuildCardData[]
  onEditionClick?: (edition: LibraryBuildCardData) => void
  className?: string
}

export function AuthorCollectionGrid({
  authors,
  eraOptions,
  formatChips,
  selectedFormats,
  editions,
  onEditionClick,
  className,
}: AuthorCollectionGridProps) {
  return (
    <div className={cn("flex flex-col gap-region md:flex-row", className)}>
      <LibraryFilterSidebar
        authors={authors}
        eraOptions={eraOptions}
        formatChips={formatChips}
        selectedFormats={selectedFormats}
      />
      <div className="grid flex-1 grid-cols-1 gap-section">
        {editions.map((edition) => (
          <BuildCatalogCard
            key={edition.id}
            {...edition}
            onReadClick={onEditionClick ? () => onEditionClick(edition) : undefined}
          />
        ))}
      </div>
    </div>
  )
}
