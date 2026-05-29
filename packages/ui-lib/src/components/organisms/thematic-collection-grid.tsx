import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"

export type ThemeCollectionTileData = {
  id: string
  title: string
  description: string
  imageSrc: string
  ctaLabel?: string
  href?: string
}

export type ThematicCollectionGridProps = {
  items: ThemeCollectionTileData[]
  onItemClick?: (item: ThemeCollectionTileData) => void
  className?: string
}

function ThemeCollectionTile({
  id,
  title,
  description,
  imageSrc,
  ctaLabel = "Explore",
  href,
  onCtaClick,
}: ThemeCollectionTileData & { onCtaClick?: () => void }) {
  const content = (
    <>
      <img alt="" src={imageSrc} className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="card-scrim absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col justify-end p-section">
        <h3 className="mb-micro font-headline-lg text-headline-lg text-on-primary">{title}</h3>
        <p className="mb-component max-w-md font-body-md text-body-md text-on-primary-container/80">
          {description}
        </p>
        <Button
          onClick={onCtaClick}
          className="w-fit bg-on-primary font-ui-label-md text-primary hover:bg-on-primary/90"
        >
          {ctaLabel}
        </Button>
      </div>
    </>
  )

  const className =
    "group relative flex min-h-[320px] overflow-hidden rounded-lg bg-primary"

  if (href && !onCtaClick) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <article className={className} data-collection-id={id}>
      {content}
    </article>
  )
}

export function ThematicCollectionGrid({
  items,
  onItemClick,
  className,
}: ThematicCollectionGridProps) {
  return (
    <section className={cn("grid grid-cols-1 gap-section md:grid-cols-2", className)}>
      {items.map((item) => (
        <ThemeCollectionTile
          key={item.id}
          {...item}
          href={onItemClick ? undefined : item.href}
          onCtaClick={onItemClick ? () => onItemClick(item) : undefined}
        />
      ))}
    </section>
  )
}
