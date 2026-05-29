import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { FilterCheckboxOption } from "@/lib/types"

export type LibraryFilterSidebarProps = {
  authors: FilterCheckboxOption[]
  eraOptions: { id: string; label: string; selected?: boolean }[]
  formatChips: string[]
  selectedFormats?: string[]
  clearLabel?: string
}

export function LibraryFilterSidebar({
  authors,
  eraOptions,
  formatChips,
  selectedFormats = [],
  clearLabel = "Clear All Filters",
}: LibraryFilterSidebarProps) {
  return (
    <aside className="w-full shrink-0 md:w-64">
      <div className="sticky top-32 space-y-section">
        <div>
          <h3 className="mb-component font-ui-label-sm tracking-widest text-on-surface-variant uppercase">
            Metadata Filters
          </h3>
          <div className="space-y-6">
            <div>
              <label className="mb-micro block font-ui-label-md font-bold">Author</label>
              <div className="space-y-2">
                {authors.map((author) => (
                  <label key={author.id} className="group flex cursor-pointer items-center gap-micro">
                    <input
                      type="checkbox"
                      readOnly
                      checked={author.checked}
                      className="size-4 rounded-sm border-outline-variant text-primary"
                    />
                    <span className="font-ui-label-md transition-colors group-hover:text-primary">
                      {author.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-micro block font-ui-label-md font-bold">Decade / Era</label>
              <div className="space-y-2">
                {eraOptions.map((era) => (
                  <label key={era.id} className="group flex cursor-pointer items-center gap-micro">
                    <input
                      type="radio"
                      readOnly
                      checked={era.selected}
                      className="size-4 border-outline-variant text-primary"
                    />
                    <span className="font-ui-label-md transition-colors group-hover:text-primary">
                      {era.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-micro block font-ui-label-md font-bold">Build Format</label>
              <div className="flex flex-wrap gap-micro">
                {formatChips.map((chip) => (
                  <span
                    key={chip}
                    className={cn(
                      "rounded-full border border-outline-variant bg-surface-container px-component py-1 font-ui-label-sm transition-all hover:border-primary",
                      selectedFormats.includes(chip) && "border-primary",
                    )}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant pt-section">
          <button
            type="button"
            className="flex w-full items-center justify-between font-ui-label-md text-on-surface-variant transition-colors hover:text-primary"
          >
            <span>{clearLabel}</span>
            <MaterialIcon name="close" size={18} />
          </button>
        </div>
      </div>
    </aside>
  )
}
