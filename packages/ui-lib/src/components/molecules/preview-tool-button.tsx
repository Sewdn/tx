import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type PreviewToolButtonProps = {
  icon: string
  label: string
  onClick?: () => void
  className?: string
}

export function PreviewToolButton({ icon, label, onClick, className }: PreviewToolButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "border border-border-warm p-2 transition-all hover:bg-surface-container",
        className,
      )}
    >
      <MaterialIcon name={icon} size={20} />
    </button>
  )
}
