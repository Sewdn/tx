import { cn } from "@/lib/utils"

export type ProvenanceBadgeProps = {
  label?: string
  className?: string
}

export function ProvenanceBadge({
  label = "Provenance Checked",
  className,
}: ProvenanceBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex bg-secondary px-micro py-micro font-ui-label-md text-[10px] uppercase tracking-wider text-on-secondary",
        className,
      )}
    >
      {label}
    </span>
  )
}
