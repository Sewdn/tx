import { useEffect, useRef } from "react"

import { CarouselNavButton } from "@/components/molecules/carousel-nav-button"
import { CinematicBookTile } from "@/components/molecules/cinematic-book-tile"
import { cn } from "@/lib/utils"
import type { CinematicBookTileData, HorizontalShelfData } from "@/lib/types"

export type HorizontalMediaShelfProps = HorizontalShelfData & {
  enableWheelScroll?: boolean
  showNavButtons?: boolean
  onItemClick?: (item: CinematicBookTileData) => void
  className?: string
}

function useHorizontalWheelScroll(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault()
        element.scrollLeft += event.deltaY
      }
    }

    element.addEventListener("wheel", onWheel, { passive: false })
    return () => element.removeEventListener("wheel", onWheel)
  }, [ref, enabled])
}

export function HorizontalMediaShelf({
  title,
  subtitle,
  items,
  enableWheelScroll = false,
  showNavButtons = false,
  onItemClick,
  className,
}: HorizontalMediaShelfProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  useHorizontalWheelScroll(scrollRef, enableWheelScroll)

  const scrollBy = (direction: "prev" | "next") => {
    scrollRef.current?.scrollBy({
      left: direction === "next" ? 400 : -400,
      behavior: "smooth",
    })
  }

  return (
    <section className={cn("mb-region", className)}>
      <div className="mb-section flex items-baseline justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-primary dark:text-on-primary">{title}</h2>
          {subtitle ? (
            <p className="font-ui-label-md text-ui-label-md text-on-surface-variant">{subtitle}</p>
          ) : null}
        </div>
        {showNavButtons ? (
          <div className="flex gap-micro">
            <CarouselNavButton direction="prev" onClick={() => scrollBy("prev")} />
            <CarouselNavButton direction="next" onClick={() => scrollBy("next")} />
          </div>
        ) : null}
      </div>
      <div ref={scrollRef} className="hide-scrollbar flex gap-section overflow-x-auto pb-component">
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

export type { CinematicBookTileData, HorizontalShelfData }
