import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { AuthorSpotlightData } from "@/lib/types"

export type AuthorSpotlightPanelProps = AuthorSpotlightData & {
  className?: string
}

export function AuthorSpotlightPanel({
  name,
  portraitSrc,
  birthYear,
  deathYear,
  bio,
  collectionHref,
  className,
}: AuthorSpotlightPanelProps) {
  return (
    <aside className={cn("space-y-section", className)}>
      <div className="overflow-hidden rounded border border-outline-variant">
        <img alt={name} src={portraitSrc} className="aspect-square w-full object-cover" />
      </div>
      <div>
        <h3 className="mb-micro font-headline-lg text-headline-lg text-primary">{name}</h3>
        <p className="mb-component font-ui-label-sm text-ui-label-sm text-on-surface-variant">
          {birthYear} — {deathYear}
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">{bio}</p>
      </div>
      {collectionHref ? (
        <Button
          asChild
          variant="outline"
          className="w-full border-outline-variant font-ui-label-md text-primary"
        >
          <a href={collectionHref}>View Full Collection</a>
        </Button>
      ) : null}
    </aside>
  )
}
