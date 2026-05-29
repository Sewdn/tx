import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { CinematicBookTileData } from "@/lib/types"

export type CinematicBookTileProps = CinematicBookTileData & {
  className?: string
  onClick?: () => void
}

export function CinematicBookTile({
  title,
  author,
  coverSrc,
  coverAlt,
  href,
  onClick,
  className,
}: CinematicBookTileProps) {
  const content = (
    <>
      <img alt={coverAlt} src={coverSrc} className="size-full object-cover" />
      <div className="card-scrim absolute inset-0 opacity-60 transition-opacity group-hover:opacity-90" />
      <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-4 transition-transform group-hover:translate-y-0">
        <h3 className="mb-1 font-headline-lg text-sm text-on-primary">{title}</h3>
        <p className="mb-2 text-[10px] text-on-primary-container opacity-70">{author}</p>
        <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <MaterialIcon name="download" size={14} className="text-on-primary" />
          <MaterialIcon name="favorite" size={14} className="text-on-primary" />
        </div>
      </div>
    </>
  )

  const tileClassName = cn(
    "group relative aspect-[2/3] w-[200px] shrink-0 cursor-pointer overflow-hidden rounded-lg bg-surface-container shadow-xl transition-transform duration-400 hover:scale-105",
    className,
  )

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cn(tileClassName, "text-left")}>
        {content}
      </button>
    )
  }

  if (href) {
    return (
      <a href={href} className={tileClassName}>
        {content}
      </a>
    )
  }

  return <article className={tileClassName}>{content}</article>
}
