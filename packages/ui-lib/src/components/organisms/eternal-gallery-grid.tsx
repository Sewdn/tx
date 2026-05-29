import { EternalGalleryBookCard } from "@/components/organisms/eternal-gallery-book-card"
import { cn } from "@/lib/utils"
import type { EternalGalleryCardData } from "@/lib/types"

export type EternalGalleryGridProps = {
  items: EternalGalleryCardData[]
  className?: string
}

export function EternalGalleryGrid({ items, className }: EternalGalleryGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-section md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <EternalGalleryBookCard
          key={item.id}
          {...item}
          className={item.featured ? "md:col-span-2 lg:col-span-2" : undefined}
        />
      ))}
    </div>
  )
}
