import { cn } from "@/lib/utils"
import type { BindingOptionData } from "@/lib/types"

export type BindingOptionRowProps = BindingOptionData & {
  onSelect?: (id: string) => void
  className?: string
}

function formatCents(cents: number) {
  return `$${(cents / 100).toFixed(2)}`
}

export function BindingOptionRow({
  id,
  label,
  description,
  priceCents,
  selected = false,
  onSelect,
  className,
}: BindingOptionRowProps) {
  return (
    <label
      className={cn(
        "group flex cursor-pointer items-center justify-between border border-border-warm p-4 transition-all hover:border-outline",
        selected && "border-primary",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <input
          type="radio"
          name="binding-option"
          checked={selected}
          onChange={() => onSelect?.(id)}
          className="size-4 border-outline text-primary focus:ring-primary"
        />
        <div>
          <span className="block font-ui-label-md text-ui-label-md font-bold">{label}</span>
          <span className="block font-ui-label-sm text-ui-label-sm text-on-surface-variant">
            {description}
          </span>
        </div>
      </div>
      <span className="font-ui-label-md text-ui-label-md font-bold text-primary">
        {formatCents(priceCents)}
      </span>
    </label>
  )
}
