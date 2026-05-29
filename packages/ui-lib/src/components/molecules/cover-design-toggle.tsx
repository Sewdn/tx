import { cn } from "@/lib/utils"

export type CoverDesignToggleProps = {
  selected: "original" | "scholarly"
  onSelect?: (design: "original" | "scholarly") => void
  className?: string
}

const options = [
  {
    id: "original" as const,
    title: "Original Art",
    description: "Faithful reproduction of the 1st edition.",
  },
  {
    id: "scholarly" as const,
    title: "Scholarly Minimal",
    description: "Clean typography on heavy linen texture.",
  },
]

export function CoverDesignToggle({ selected, onSelect, className }: CoverDesignToggleProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect?.(option.id)}
          className={cn(
            "border p-4 text-left transition-all",
            selected === option.id
              ? "border-2 border-primary bg-surface-container-lowest"
              : "border-border-warm hover:bg-surface-container-low",
          )}
        >
          <span className="mb-1 block font-ui-label-md text-ui-label-md font-bold">
            {option.title}
          </span>
          <span className="block font-ui-label-sm text-ui-label-sm text-on-surface-variant">
            {option.description}
          </span>
        </button>
      ))}
    </div>
  )
}
