import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type CollectionLandingHeaderProps = {
  backLabel: string
  backHref: string
  title: string
  description: string
  heroImageSrc: string
  className?: string
}

export function CollectionLandingHeader({
  backLabel,
  backHref,
  title,
  description,
  heroImageSrc,
  className,
}: CollectionLandingHeaderProps) {
  return (
    <header className={cn("relative mb-region overflow-hidden", className)}>
      <img alt="" src={heroImageSrc} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="relative z-10 mx-auto max-w-container-max px-boundary py-region">
        <a
          href={backHref}
          className="mb-section inline-flex items-center gap-micro font-ui-label-md text-ui-label-md text-on-surface-variant transition-colors hover:text-primary"
        >
          <MaterialIcon name="arrow_back" size={18} />
          {backLabel}
        </a>
        <h1 className="mb-component font-display-lg text-display-lg text-ink-primary">{title}</h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{description}</p>
      </div>
    </header>
  )
}
