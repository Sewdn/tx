import { LibraryFilterSidebar } from "@/components/organisms/library-filter-sidebar"
import { PresetChip } from "@/components/molecules/preset-chip"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { FilterCheckboxOption } from "@/lib/types"

export type EternalGalleryFilterSidebarProps = {
  authors: FilterCheckboxOption[]
  eraOptions: { id: string; label: string; selected?: boolean }[]
  formatChips: string[]
  selectedFormats?: string[]
  stewardshipLevels?: { id: string; label: string; active?: boolean }[]
  onContribute?: () => void
  className?: string
}

export function EternalGalleryFilterSidebar({
  authors,
  eraOptions,
  formatChips,
  selectedFormats,
  stewardshipLevels = [],
  onContribute,
  className,
}: EternalGalleryFilterSidebarProps) {
  return (
    <div className={cn("space-y-section", className)}>
      <LibraryFilterSidebar
        authors={authors}
        eraOptions={eraOptions}
        formatChips={formatChips}
        selectedFormats={selectedFormats}
        clearLabel="Reset Filters"
      />
      {stewardshipLevels.length > 0 ? (
        <div>
          <h3 className="mb-component font-ui-label-sm tracking-widest text-on-surface-variant uppercase">
            Stewardship Level
          </h3>
          <div className="flex flex-wrap gap-micro">
            {stewardshipLevels.map((level) => (
              <PresetChip key={level.id} label={level.label} active={level.active} />
            ))}
          </div>
        </div>
      ) : null}
      {onContribute ? (
        <Button
          onClick={onContribute}
          className="w-full bg-primary font-ui-label-md text-on-primary hover:bg-primary-container"
        >
          Contribute a Manuscript
        </Button>
      ) : null}
    </div>
  )
}
