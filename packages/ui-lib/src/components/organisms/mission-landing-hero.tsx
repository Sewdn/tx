import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"

export type MissionLandingHeroProps = {
  title: string
  description: string
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  sampleCommit?: {
    hash: string
    message: string
    author: string
    timestamp: string
  }
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
}

export function MissionLandingHero({
  title,
  description,
  primaryCtaLabel = "Enter the Archive",
  secondaryCtaLabel = "Scholarly Guidelines",
  sampleCommit,
  onPrimaryClick,
  onSecondaryClick,
  className,
}: MissionLandingHeroProps) {
  return (
    <section className={cn("mx-auto max-w-container-max px-boundary py-region", className)}>
      <div className="grid grid-cols-1 items-center gap-region lg:grid-cols-2">
        <div>
          <h1 className="mb-section font-display-lg text-display-lg text-ink-primary">{title}</h1>
          <p className="mb-section font-body-lg text-body-lg text-on-surface-variant">{description}</p>
          <div className="flex flex-wrap gap-component">
            <Button
              onClick={onPrimaryClick}
              className="bg-primary px-section py-component font-ui-label-md text-on-primary"
            >
              {primaryCtaLabel}
            </Button>
            <Button
              variant="outline"
              onClick={onSecondaryClick}
              className="border-outline-variant font-ui-label-md text-primary"
            >
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>
        {sampleCommit ? (
          <div className="rounded border border-outline-variant bg-surface-container-low p-section font-code-sm text-code-sm">
            <div className="mb-component flex items-center gap-micro text-primary">
              <MaterialIcon name="commit" size={18} />
              <span className="font-ui-label-md">{sampleCommit.hash}</span>
            </div>
            <p className="mb-micro text-on-surface">{sampleCommit.message}</p>
            <p className="text-on-surface-variant">
              {sampleCommit.author} · {sampleCommit.timestamp}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
