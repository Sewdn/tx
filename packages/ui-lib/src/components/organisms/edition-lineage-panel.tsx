import { MaterialIcon } from "@/components/atoms/material-icon"
import { LineageTimeline } from "@/components/organisms/lineage-timeline"
import { cn } from "@/lib/utils"
import type { LineageBranch } from "@/lib/types"

export type EditionLineagePanelProps = {
  branches: LineageBranch[]
  forkCount?: number
  title?: string
  className?: string
}

export function EditionLineagePanel({
  branches,
  forkCount,
  title,
  className,
}: EditionLineagePanelProps) {
  return (
    <div
      className={cn(
        "rounded border border-outline-variant bg-surface-container-low p-section",
        className,
      )}
    >
      <LineageTimeline title={title} branches={branches} />
      {forkCount !== undefined ? (
        <div className="mt-section flex items-center gap-component border-t border-outline-variant pt-section">
          <MaterialIcon name="fork_right" className="text-primary" />
          <span className="font-ui-label-md text-ui-label-md font-bold text-primary">
            {forkCount} Active Forks
          </span>
          <span className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">
            Community editions derived from this build
          </span>
        </div>
      ) : null}
    </div>
  )
}
