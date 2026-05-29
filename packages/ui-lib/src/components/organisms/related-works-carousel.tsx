import { CinematicBookTile } from "@/components/molecules/cinematic-book-tile"
import { cn } from "@/lib/utils"
import type { CinematicBookTileData } from "@/lib/types"

export type RelatedWorksCarouselProps = {
  title: string
  items: CinematicBookTileData[]
  onItemClick?: (item: CinematicBookTileData) => void
  className?: string
}

export function RelatedWorksCarousel({ title, items, onItemClick, className }: RelatedWorksCarouselProps) {
  return (
    <section className={cn("mb-region", className)}>
      <h3 className="mb-section border-l-4 border-primary pl-4 font-headline-lg text-[24px] text-primary">
        {title}
      </h3>
      <div className="hide-scrollbar flex gap-section overflow-x-auto pb-component">
        {items.map((item) => (
          <CinematicBookTile
            key={item.id}
            {...item}
            href={onItemClick ? undefined : item.href}
            onClick={onItemClick ? () => onItemClick(item) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
