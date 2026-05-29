import { cn } from "@/lib/utils"

export type BillingPeriodToggleProps = {
  period?: "monthly" | "annual"
  onPeriodChange?: (period: "monthly" | "annual") => void
  className?: string
}

export function BillingPeriodToggle({
  period = "monthly",
  onPeriodChange,
  className,
}: BillingPeriodToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg bg-surface-container-high p-1",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onPeriodChange?.("monthly")}
        className={cn(
          "rounded px-6 py-2 font-ui-label-md transition-all",
          period === "monthly"
            ? "bg-background text-primary shadow-sm"
            : "text-on-surface-variant hover:text-primary",
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onPeriodChange?.("annual")}
        className={cn(
          "rounded px-6 py-2 font-ui-label-md transition-all",
          period === "annual"
            ? "bg-background text-primary shadow-sm"
            : "text-on-surface-variant hover:text-primary",
        )}
      >
        Annual (Save 20%)
      </button>
    </div>
  )
}
