import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type ViewModeToggleProps = {
  mode: "grid" | "list"
  onModeChange?: (mode: "grid" | "list") => void
  className?: string
}

export function ViewModeToggle({ mode, onModeChange, className }: ViewModeToggleProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {(["grid", "list"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-label={option === "grid" ? "Grid view" : "List view"}
          aria-pressed={mode === option}
          onClick={() => onModeChange?.(option)}
          className={cn(
            "border border-border-warm p-2 transition-colors hover:bg-surface-container",
            mode === option && "bg-surface-container",
          )}
        >
          <MaterialIcon name={option === "grid" ? "grid_view" : "view_list"} size={20} />
        </button>
      ))}
    </div>
  )
}
