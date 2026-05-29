import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"

export type ThemeCollectionTileProps = {
  title: string
  description: string
  imageSrc: string
  ctaLabel: string
  onCtaClick?: () => void
  className?: string
}

export function ThemeCollectionTile({
  title,
  description,
  imageSrc,
  ctaLabel,
  onCtaClick,
  className,
}: ThemeCollectionTileProps) {
  return (
    <article
      className={cn(
        "group relative h-64 cursor-pointer overflow-hidden rounded-2xl shadow-2xl",
        className,
      )}
    >
      <img alt={title} src={imageSrc} className="size-full object-cover" />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <h3 className="mb-2 font-display-lg text-4xl text-on-primary">{title}</h3>
        <p className="mb-4 max-w-xs text-sm text-on-primary-container">{description}</p>
        <Button
          onClick={onCtaClick}
          className="rounded-full bg-white px-6 py-2 font-ui-label-md text-sm text-primary hover:bg-white/90"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
