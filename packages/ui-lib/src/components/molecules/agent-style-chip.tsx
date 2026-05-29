import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { AgentStyleChipData } from "@/lib/types"

export type AgentStyleChipProps = AgentStyleChipData & {
  onSelect?: (id: string) => void
  className?: string
}

export function AgentStyleChip({
  id,
  name,
  styleLabel,
  icon,
  selected = false,
  onSelect,
  className,
}: AgentStyleChipProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(id)}
      className={cn(
        "flex flex-col items-center gap-2 border p-4 transition-colors",
        selected
          ? "border-primary bg-primary-container/10"
          : "border-outline-variant hover:border-primary",
        className,
      )}
    >
      <MaterialIcon
        name={icon}
        className={selected ? "text-primary" : "text-outline"}
        filled={selected}
      />
      <span className={cn("font-ui-label-md text-ui-label-md", selected && "font-bold")}>
        {name}
      </span>
      <span className="text-[10px] text-on-surface-variant uppercase">{styleLabel}</span>
    </button>
  )
}
