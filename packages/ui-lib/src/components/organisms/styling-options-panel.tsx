import { MaterialIcon } from "@/components/atoms/material-icon"
import { TonalSurface } from "@/components/organisms/tonal-surface"
import { cn } from "@/lib/utils"
import type { StylingSliderOption, StylingToggleOption } from "@/lib/types"

export type StylingOptionsPanelProps = {
  sliders: StylingSliderOption[]
  toggles: StylingToggleOption[]
}

export function StylingOptionsPanel({ sliders, toggles }: StylingOptionsPanelProps) {
  return (
    <TonalSurface variant="layer-1" className="rounded-xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-ui-label-sm tracking-widest text-outline uppercase">Styling Options</h3>
        <MaterialIcon name="tune" className="cursor-pointer text-outline" />
      </div>
      <div className="space-y-6">
        {sliders.map((slider) => (
          <div key={slider.id}>
            <div className="mb-2 flex justify-between">
              <label className="font-ui-label-md text-sm">{slider.label}</label>
              <span className="font-code-sm text-xs">{slider.value}</span>
            </div>
            <div className="h-1 w-full rounded-full bg-outline-variant">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${slider.progress ?? 50}%` }}
              />
            </div>
          </div>
        ))}
        {toggles.map((toggle) => (
          <div
            key={toggle.id}
            className="flex items-center justify-between rounded p-2 transition-colors hover:bg-white"
          >
            <label className="font-ui-label-md text-sm">{toggle.label}</label>
            <div
              className={cn(
                "relative h-5 w-10 rounded-full",
                toggle.enabled ? "bg-secondary" : "bg-outline-variant",
              )}
            >
              <div
                className={cn(
                  "absolute top-1 size-3 rounded-full bg-white",
                  toggle.enabled ? "right-1" : "left-1",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </TonalSurface>
  )
}
