import { cn } from "@/lib/utils"

export type StepNumberProps = {
  number: number
  active?: boolean
  completed?: boolean
  className?: string
}

export function StepNumber({
  number,
  active = false,
  completed = false,
  className,
}: StepNumberProps) {
  return (
    <span
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-ui-label-md",
        completed && "bg-secondary text-on-secondary",
        active && !completed && "bg-primary text-on-primary",
        !active && !completed && "border border-outline-variant text-on-surface-variant",
        className,
      )}
      aria-hidden
    >
      {number}
    </span>
  )
}
