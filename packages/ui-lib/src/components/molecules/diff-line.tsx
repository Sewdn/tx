import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { DiffLineVariant } from "@/lib/types"

export type DiffLineProps = {
  variant: DiffLineVariant
  oldLine?: number
  newLine?: number
  content: string
  icon?: string
}

export function DiffLine({ variant, oldLine, newLine, content, icon }: DiffLineProps) {
  return (
    <tr
      className={cn(
        "transition-colors",
        variant === "context" && "text-outline-variant hover:bg-surface-container-low",
        variant === "added" && "diff-added",
        variant === "removed" && "diff-removed",
      )}
    >
      <td className="w-12 border-r border-outline-variant px-micro py-1 text-right select-none">
        {oldLine ?? ""}
      </td>
      <td className="w-12 border-r border-outline-variant px-micro py-1 text-right select-none">
        {newLine ?? ""}
      </td>
      <td className="flex items-center gap-micro px-component py-1">
        {icon ? <MaterialIcon name={icon} size={16} /> : null}
        {content}
      </td>
    </tr>
  )
}
