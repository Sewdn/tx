import { cn } from "@/lib/utils"

export type MetricCardProps = {
  label: string
  value: string
  delta?: string
  deltaPositive?: boolean
  className?: string
}

export function MetricCard({
  label,
  value,
  delta,
  deltaPositive = true,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-outline-variant bg-surface-container-low p-6 transition-all hover:bg-surface-container",
        className,
      )}
    >
      <span className="mb-2 block font-ui-label-sm text-ui-label-sm tracking-widest text-outline uppercase">
        {label}
      </span>
      <div className="flex items-end gap-2">
        <span className="font-display-lg text-display-lg font-bold text-primary">{value}</span>
        {delta ? (
          <span
            className={cn(
              "mb-1 font-ui-label-sm text-ui-label-sm",
              deltaPositive ? "text-secondary" : "text-tertiary",
            )}
          >
            {delta}
          </span>
        ) : null}
      </div>
    </div>
  )
}
