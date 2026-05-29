import { cn } from "@/lib/utils"

export type StatusDotProps = {
  active?: boolean
  className?: string
}

export function StatusDot({ active = false, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "inline-block size-2 rounded-full",
        active ? "animate-pulse bg-secondary" : "bg-outline-variant",
        className,
      )}
      aria-hidden
    />
  )
}
