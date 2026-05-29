import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type CarouselNavButtonProps = {
  direction: "prev" | "next"
  onClick?: () => void
  className?: string
}

export function CarouselNavButton({ direction, onClick, className }: CarouselNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className={cn(
        "border border-border-warm p-2 transition-colors hover:bg-surface-container-high",
        className,
      )}
    >
      <MaterialIcon name={direction === "prev" ? "chevron_left" : "chevron_right"} size={20} />
    </button>
  )
}
