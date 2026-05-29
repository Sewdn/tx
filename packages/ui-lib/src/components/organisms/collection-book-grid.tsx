import { AccessLockOverlay } from "@/components/atoms/access-lock-overlay"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { ProvenanceBadge } from "@/components/atoms/provenance-badge"
import { FormatChip } from "@/components/molecules/format-chip"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { CollectionBookCardData } from "@/lib/types"

export type CollectionBookGridProps = {
  items: CollectionBookCardData[]
  onItemClick?: (item: CollectionBookCardData) => void
  onPrintClick?: (item: CollectionBookCardData) => void
  className?: string
}

export function CollectionBookGrid({
  items,
  onItemClick,
  onPrintClick,
  className,
}: CollectionBookGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-section", className)}>
      {items.map((item) => (
        <article
          key={item.id}
          className="group relative flex gap-section border border-outline-variant bg-surface-container-lowest p-section transition-all paper-shadow"
        >
          <div className="relative h-44 w-28 shrink-0 overflow-hidden">
            <img alt={item.title} src={item.coverSrc} className="size-full object-cover" />
            {item.locked ? <AccessLockOverlay /> : null}
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <div className="mb-micro flex items-start justify-between gap-component">
                <span className="font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-on-surface-variant">
                  {item.genre} • {item.year}
                </span>
                {item.provenanceVerified ? <ProvenanceBadge /> : null}
              </div>
              <h2
                className={cn(
                  "font-headline-lg text-headline-lg text-primary",
                  onItemClick && "cursor-pointer hover:underline",
                )}
                onClick={onItemClick ? () => onItemClick(item) : undefined}
                onKeyDown={
                  onItemClick
                    ? (event) => {
                        if (event.key === "Enter") onItemClick(item)
                      }
                    : undefined
                }
                role={onItemClick ? "button" : undefined}
                tabIndex={onItemClick ? 0 : undefined}
              >
                {item.title}
              </h2>
              <p className="mb-component font-body-md text-body-md italic text-on-surface-variant">
                {item.author}
              </p>
              <div className="mb-component flex flex-wrap gap-micro">
                <span className="font-ui-label-sm text-ui-label-sm text-outline">{item.versionLabel}</span>
                {item.formats.map((format) => (
                  <FormatChip key={format} label={format} icon={format.includes("pdf") ? "picture_as_pdf" : "menu_book"} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-component">
              {item.locked ? (
                <Button className="flex-1 bg-secondary font-ui-label-md text-on-secondary">
                  Subscribe to Unlock
                </Button>
              ) : (
                <Button
                  onClick={() => onItemClick?.(item)}
                  className="flex-1 bg-primary font-ui-label-md text-on-primary"
                >
                  Download
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                onClick={() => onPrintClick?.(item)}
                className="border-outline-variant text-primary"
              >
                <MaterialIcon name={item.shippingQueued ? "local_shipping" : "print"} filled={item.shippingQueued} />
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
