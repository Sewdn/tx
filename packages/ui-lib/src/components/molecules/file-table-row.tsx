import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type FileTableRowProps = {
  icon: string
  name: string
  description?: string
  timestamp: string
  highlighted?: boolean
  highlightLabel?: string
  className?: string
}

export function FileTableRow({
  icon,
  name,
  description,
  timestamp,
  highlighted = false,
  highlightLabel,
  className,
}: FileTableRowProps) {
  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center px-6 py-4 transition-colors hover:bg-surface-container-low",
        highlighted && "bg-secondary/5",
        className,
      )}
    >
      <MaterialIcon
        name={icon}
        className={cn(
          "mr-4 text-outline group-hover:text-primary",
          highlighted && "text-secondary",
        )}
      />
      <span
        className={cn(
          "flex-1 font-ui-label-md text-ui-label-md text-primary",
          highlighted && "font-bold",
        )}
      >
        {name}
      </span>
      {description ? (
        <span
          className={cn(
            "ml-auto hidden font-ui-label-sm text-ui-label-sm md:block",
            highlighted ? "text-secondary italic" : "text-on-surface-variant",
          )}
        >
          {highlightLabel ?? description}
        </span>
      ) : null}
      <span className="ml-auto font-ui-label-sm text-ui-label-sm text-on-surface-variant">
        {timestamp}
      </span>
    </div>
  )
}
