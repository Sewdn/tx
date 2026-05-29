import { cn } from "@/lib/utils"

export type LandscapeSpotlightTileProps = {
  title: string
  subtitle?: string
  imageSrc: string
  href?: string
  onClick?: () => void
  className?: string
}

export function LandscapeSpotlightTile({
  title,
  subtitle,
  imageSrc,
  href,
  onClick,
  className,
}: LandscapeSpotlightTileProps) {
  const content = (
    <>
      <img alt={title} src={imageSrc} className="size-full object-cover" />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="font-headline-lg text-xl text-on-primary">{title}</h3>
        {subtitle ? (
          <p className="mt-1 text-sm text-on-primary-container opacity-80">{subtitle}</p>
        ) : null}
      </div>
    </>
  )

  const tileClassName = cn(
    "group relative aspect-[16/10] w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl",
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
