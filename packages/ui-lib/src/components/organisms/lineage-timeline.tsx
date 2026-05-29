import { LineageBranchItem } from "@/components/molecules/lineage-branch-item"
import type { LineageBranch } from "@/lib/types"

export type LineageTimelineProps = {
  title?: string
  branches: LineageBranch[]
}

export function LineageTimeline({
  title = "Manuscript Lineage",
  branches,
}: LineageTimelineProps) {
  return (
    <section className="mb-region">
      <h3 className="mb-section border-l-4 border-primary pl-4 font-headline-lg text-[24px] text-primary">
        {title}
      </h3>
      <div className="space-y-4">
        {branches.map((branch) => (
          <LineageBranchItem key={branch.id} {...branch} />
        ))}
      </div>
    </section>
  )
}
