import { MaterialIcon } from "@/components/atoms/material-icon"
import { TonalSurface } from "@/components/organisms/tonal-surface"
import { cn } from "@/lib/utils"
import type { BuildStatusItem } from "@/lib/types"

export type BuildStatusPanelProps = {
  title?: string
  items: BuildStatusItem[]
  revisionsCount: string
  revisionsLabel: string
}

export function BuildStatusPanel({
  title = "Build Status",
  items,
  revisionsCount,
  revisionsLabel,
}: BuildStatusPanelProps) {
  return (
    <TonalSurface
      variant="layer-2"
      className="flex flex-col justify-between rounded-lg border border-outline-variant p-8"
    >
      <div>
        <h4 className="mb-6 font-ui-label-md tracking-wider text-on-surface-variant uppercase">
          {title}
        </h4>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.label} className="flex items-center justify-between">
              <span className="font-ui-label-sm text-ui-label-sm">{item.label}</span>
              <span
                className={cn(
                  "font-ui-label-sm font-bold",
                  item.variant === "success" ? "text-secondary" : "text-on-surface-variant",
                )}
              >
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 border-t border-outline-variant pt-6">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-surface-container-highest">
            <MaterialIcon name="query_stats" />
          </div>
          <div>
            <p className="font-ui-label-sm font-bold">{revisionsCount}</p>
            <p className="text-[10px] tracking-tighter text-on-surface-variant uppercase">
              {revisionsLabel}
            </p>
          </div>
        </div>
      </div>
    </TonalSurface>
  )
}
