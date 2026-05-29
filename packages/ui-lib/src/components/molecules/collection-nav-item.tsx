import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type CollectionNavItemProps = {
  label: string
  count?: number
  active?: boolean
  icon?: string
  onClick?: () => void
  className?: string
}

export function CollectionNavItem({
  label,
  count,
  active = false,
  icon = "auto_stories",
  onClick,
  className,
}: CollectionNavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-3 px-4 py-2.5 transition-colors",
        active
          ? "border-l-2 border-primary bg-surface-container font-bold text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low",
        className,
      )}
    >
      <MaterialIcon
        name={icon}
        size={20}
        filled={active}
        className={cn(!active && "group-hover:text-primary")}
      />
      <span className="flex-1 text-left font-ui-label-md text-ui-label-md">{label}</span>
      {count !== undefined ? (
        <span className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">{count}</span>
      ) : null}
    </button>
  )
}
