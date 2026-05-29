import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type HeroActionButtonProps = {
  label: string
  variant: "primary" | "ghost"
  icon?: string
  onClick?: () => void
  className?: string
}

export function HeroActionButton({
  label,
  variant,
  icon,
  onClick,
  className,
}: HeroActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-10 py-4 font-ui-label-md text-ui-label-md transition-all",
        variant === "primary"
          ? "bg-on-primary text-primary hover:scale-105"
          : "bg-white/10 text-on-primary backdrop-blur-md hover:bg-white/20",
        className,
      )}
    >
      {icon ? <MaterialIcon name={icon} size={20} filled={variant === "primary"} /> : null}
      {label}
    </button>
  )
}
