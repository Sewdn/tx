import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { LineageBranch } from "@/lib/types"

export type LineageBranchItemProps = LineageBranch

export function LineageBranchItem({
  title,
  badge,
  description,
  formats,
  isDefault = false,
  isLast = false,
}: LineageBranchItemProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "z-10 size-4 rounded-full border-4 bg-background",
            isDefault ? "border-primary" : "border-outline-variant",
          )}
        />
        {!isLast ? <div className="w-0.5 flex-1 bg-outline-variant" /> : null}
      </div>
      <div className={cn("flex-1", !isLast && "pb-10")}>
        <div className="mb-2 flex items-center gap-3">
          <h4 className={cn("font-bold", isDefault ? "text-primary" : "text-on-surface")}>
            {title}
          </h4>
          {badge ? (
            <span className="rounded bg-surface-container-high px-2 py-0.5 font-ui-label-sm text-ui-label-sm">
              {badge}
            </span>
          ) : (
            <MaterialIcon name="fork_right" size={16} className="text-on-surface-variant" />
          )}
        </div>
        <p className="mb-4 font-ui-label-md text-ui-label-md text-on-surface-variant">
          {description}
        </p>
        {formats.length > 0 ? (
          <div className="flex gap-2">
            {formats.map((format) => (
              <span
                key={format}
                className="rounded border border-outline-variant px-2 py-1 text-[10px] text-on-surface-variant uppercase"
              >
                {format}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
