import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { RevisionStatus } from "@/lib/types"

const statusLabels: Record<RevisionStatus, string> = {
  open: "Open",
  merged: "Merged",
  closed: "Closed",
}

export type RevisionStatusBadgeProps = {
  status: RevisionStatus
  className?: string
}

export function RevisionStatusBadge({ status, className }: RevisionStatusBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 font-ui-label-md text-ui-label-md text-on-secondary-container",
        className,
      )}
    >
      <MaterialIcon name="check_circle" size={18} />
      <span>{statusLabels[status]}</span>
    </div>
  )
}
