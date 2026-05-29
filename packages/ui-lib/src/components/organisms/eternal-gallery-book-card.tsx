import { EternalBadge } from "@/components/atoms/eternal-badge"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { PatronCreditLine } from "@/components/molecules/patron-credit-line"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { EternalGalleryCardData } from "@/lib/types"

export type EternalGalleryBookCardProps = EternalGalleryCardData & {
  className?: string
}

function truncateHash(hash: string) {
  if (hash.length <= 16) return hash
  return `${hash.slice(0, 8)}…${hash.slice(-6)}`
}

export function EternalGalleryBookCard({
  title,
  author,
  coverSrc,
  eraLabel,
  statusLabel,
  patronName,
  arweaveHash,
  eternal,
  className,
}: EternalGalleryBookCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden border border-outline-variant bg-surface-container-lowest transition-all paper-shadow",
        className,
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img alt={title} src={coverSrc} className="size-full object-cover transition-transform group-hover:scale-105" />
        {eternal ? (
          <EternalBadge label="Eternal Archive" className="absolute top-3 left-3" />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-component p-section">
        <div className="flex flex-wrap gap-micro">
          <span className="rounded bg-surface-container px-micro py-micro font-ui-label-sm text-[10px] uppercase text-on-surface-variant">
            {eraLabel}
          </span>
          <span className="rounded bg-secondary-container px-micro py-micro font-ui-label-sm text-[10px] uppercase text-on-secondary-container">
            {statusLabel}
          </span>
        </div>
        <div>
          <h3 className="font-headline-lg text-lg text-primary">{title}</h3>
          <p className="font-ui-label-md text-ui-label-md italic text-on-surface-variant">{author}</p>
        </div>
        <PatronCreditLine patronName={patronName} className="text-on-surface-variant" />
        {arweaveHash ? (
          <p className="font-code-sm text-code-sm text-outline">{truncateHash(arweaveHash)}</p>
        ) : null}
        <div className="mt-auto flex gap-micro">
          <Button variant="outline" size="icon" className="border-outline-variant text-primary">
            <MaterialIcon name="history" />
          </Button>
          <Button className="flex-1 bg-primary font-ui-label-sm text-on-primary">Open Reader</Button>
        </div>
      </div>
    </article>
  )
}
