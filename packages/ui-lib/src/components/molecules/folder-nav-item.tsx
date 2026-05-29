import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type FolderNavItemProps = {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function FolderNavItem({
  label,
  active = false,
  onClick,
  className,
}: FolderNavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 px-4 py-2 transition-colors",
        active ? "font-bold text-primary" : "text-on-surface-variant hover:text-primary",
        className,
      )}
    >
      <MaterialIcon name="folder" size={18} />
      <span className="font-ui-label-md text-ui-label-md">{label}</span>
    </button>
  )
}
