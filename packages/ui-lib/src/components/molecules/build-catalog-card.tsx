import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { LibraryBuildCardData } from "@/lib/types"

export type BuildCatalogCardProps = LibraryBuildCardData & {
  className?: string
  onReadClick?: () => void
}

export function BuildCatalogCard({
  title,
  author,
  genre,
  year,
  coverSrc,
  coverAlt,
  commit,
  formats,
  badge,
  onReadClick,
  className,
}: BuildCatalogCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-section border border-outline-variant bg-surface-container-low p-section transition-all duration-500 hover:border-outline hover:bg-surface-container md:flex-row",
        "book-card-shadow",
        className,
      )}
    >
      <div className="relative h-60 w-40 shrink-0 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
        <img alt={coverAlt} src={coverSrc} className="size-full object-cover" />
        {badge ? (
          <div className="absolute top-2 right-2 rounded-sm bg-secondary px-micro py-micro font-ui-label-sm text-ui-label-sm text-on-secondary">
            {badge}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-micro flex items-start justify-between">
            <span className="font-ui-label-sm text-ui-label-sm tracking-widest text-on-surface-variant uppercase">
              {genre} • {year}
            </span>
            <div className="flex gap-micro">
              {formats.map((icon) => (
                <MaterialIcon key={icon} name={icon} size={18} className="text-primary" />
              ))}
            </div>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary transition-all group-hover:underline">
            {title}
          </h2>
          <p className="mb-component font-body-md text-body-md text-on-surface-variant italic">{author}</p>
          <div className="mb-section flex items-center gap-micro">
            <span className="rounded border border-outline-variant bg-surface-container-highest px-micro py-1 font-code-sm text-code-sm text-primary">
              {commit}
            </span>
            <MaterialIcon name="history" size={14} className="text-on-surface-variant" />
          </div>
        </div>
        <div className="flex gap-component">
          <Button
            onClick={onReadClick}
            className="flex-1 bg-primary py-component font-ui-label-md text-on-primary hover:bg-primary-container"
          >
            Read Now
          </Button>
          <Button variant="outline" size="icon" className="border-outline text-primary">
            <MaterialIcon name="download" />
          </Button>
        </div>
      </div>
    </article>
  )
}
