import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type FormatChipProps = {
  label: string
  icon?: string
  className?: string
}

export function FormatChip({ label, icon, className }: FormatChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-surface-container px-2 py-0.5 font-ui-label-md text-[11px] text-on-surface-variant uppercase",
        className,
      )}
    >
      {icon ? <MaterialIcon name={icon} size={14} /> : null}
      {label}
    </span>
  )
}
