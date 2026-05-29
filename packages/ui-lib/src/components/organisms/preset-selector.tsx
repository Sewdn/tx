import { PresetChip } from "@/components/molecules/preset-chip"
import { TonalSurface } from "@/components/organisms/tonal-surface"
import type { DesignPreset } from "@/lib/types"

export type PresetSelectorProps = {
  title?: string
  presets: DesignPreset[]
}

export function PresetSelector({ title = "Design Presets", presets }: PresetSelectorProps) {
  return (
    <TonalSurface variant="layer-1" className="rounded-xl p-6">
      <h3 className="mb-4 font-ui-label-sm tracking-widest text-outline uppercase">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <PresetChip key={preset.id} label={preset.label} active={preset.active} />
        ))}
      </div>
    </TonalSurface>
  )
}
