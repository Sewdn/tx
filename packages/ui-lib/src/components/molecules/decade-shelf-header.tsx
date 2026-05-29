import { cn } from "@/lib/utils"

export type DecadeShelfHeaderProps = {
  label: string
  className?: string
}

export function DecadeShelfHeader({ label, className }: DecadeShelfHeaderProps) {
  return (
    <h3
      className={cn(
        "font-ui-label-md text-xs text-on-primary-container uppercase tracking-widest",
        className,
      )}
    >
      {label}
    </h3>
  )
}
