import { cn } from "@/lib/utils"
import type { BreadcrumbSegment } from "@/lib/types"

export type BreadcrumbTrailProps = {
  segments: BreadcrumbSegment[]
  className?: string
}

export function BreadcrumbTrail({ segments, className }: BreadcrumbTrailProps) {
  return (
    <div
      className={cn(
        "mb-micro flex items-center gap-micro font-ui-label-sm text-ui-label-sm tracking-wider text-on-surface-variant uppercase",
        className,
      )}
    >
      {segments.map((segment, index) => (
        <span key={`${segment.label}-${index}`} className="inline-flex items-center gap-micro">
          {index > 0 ? <span>/</span> : null}
          <span>{segment.label}</span>
        </span>
      ))}
    </div>
  )
}
