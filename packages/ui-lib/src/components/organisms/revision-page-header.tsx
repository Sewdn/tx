import { BreadcrumbTrail } from "@/components/molecules/breadcrumb-trail"
import { RevisionStatusBadge } from "@/components/molecules/revision-status-badge"
import { cn } from "@/lib/utils"
import type { BreadcrumbSegment, RevisionStatus } from "@/lib/types"

export type RevisionPageHeaderProps = {
  breadcrumbs: BreadcrumbSegment[]
  title: string
  status: RevisionStatus
  author: string
  timestamp: string
  className?: string
}

export function RevisionPageHeader({
  breadcrumbs,
  title,
  status,
  author,
  timestamp,
  className,
}: RevisionPageHeaderProps) {
  return (
    <div
      className={cn(
        "border-b border-outline-variant bg-surface-container px-margin-desktop py-8",
        className,
      )}
    >
      <div className="mx-auto max-w-container-max">
        <BreadcrumbTrail segments={breadcrumbs} />
        <h1 className="mb-4 font-headline-lg text-headline-lg text-primary">{title}</h1>
        <div className="flex items-center gap-4">
          <RevisionStatusBadge status={status} />
          <p className="font-ui-label-md text-ui-label-md text-on-surface-variant">
            Proposed by <span className="font-bold text-primary">{author}</span> {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}
