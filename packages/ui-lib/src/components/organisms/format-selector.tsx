import { FormatOptionCard } from "@/components/molecules/format-option-card"
import { TonalSurface } from "@/components/organisms/tonal-surface"
import type { FormatOption } from "@/lib/types"

export type FormatSelectorProps = {
  title?: string
  options: FormatOption[]
}

export function FormatSelector({ title = "Output Format", options }: FormatSelectorProps) {
  return (
    <TonalSurface variant="layer-1" className="rounded-xl p-6">
      <h3 className="mb-4 font-ui-label-sm tracking-widest text-outline uppercase">{title}</h3>
      <div className="grid gap-3">
        {options.map((option) => (
          <FormatOptionCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            selected={option.selected}
          />
        ))}
      </div>
    </TonalSurface>
  )
}
