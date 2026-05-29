import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type FormatOptionCardProps = {
  icon: string
  title: string
  description: string
  selected?: boolean
  className?: string
}

export function FormatOptionCard({
  icon,
  title,
  description,
  selected = false,
  className,
}: FormatOptionCardProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-4 rounded-lg border border-outline-variant p-4 transition-all",
        selected ? "" : "opacity-60 hover:opacity-100",
        className,
      )}
    >
      <MaterialIcon
        name={icon}
        className={selected ? "text-secondary" : "text-outline"}
      />
      <div className="grow">
        <p className={cn("font-ui-label-md", selected && "font-bold")}>{title}</p>
        <p className="text-xs text-outline">{description}</p>
      </div>
      <div
        className={cn(
          "flex size-4 items-center justify-center rounded-full border-2",
          selected ? "border-primary" : "border-outline-variant",
        )}
      >
        {selected ? <div className="size-2 rounded-full bg-primary" /> : null}
      </div>
    </div>
  )
}
