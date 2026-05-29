import { cn } from "@/lib/utils"

export type PresetChipProps = {
  label: string
  active?: boolean
  className?: string
}

export function PresetChip({ label, active = false, className }: PresetChipProps) {
  return (
    <span
      className={cn(
        "rounded px-4 py-2 font-ui-label-md text-sm transition-colors",
        active
          ? "bg-primary text-on-primary"
          : "border border-outline-variant hover:bg-white",
        className,
      )}
    >
      {label}
    </span>
  )
}
