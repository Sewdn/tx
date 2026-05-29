import { Button } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { TonalSurface } from "@/components/organisms/tonal-surface"

export type BuildProgressPanelProps = {
  title: string
  statusMessage: string
  progressPercent: number
  cancelLabel: string
  buildLabel: string
  building?: boolean
}

export function BuildProgressPanel({
  title,
  statusMessage,
  progressPercent,
  cancelLabel,
  buildLabel,
  building = false,
}: BuildProgressPanelProps) {
  return (
    <TonalSurface variant="layer-1" className="rounded-xl p-section">
      <div className="mb-component flex items-end justify-between">
        <div>
          <h4 className="mb-micro font-headline-lg text-xl">{title}</h4>
          <p className="flex items-center gap-micro text-sm text-outline">
            {building ? (
              <MaterialIcon name="autorenew" size={16} className="animate-spin" />
            ) : null}
            {statusMessage}
          </p>
        </div>
        <span className="font-code-sm font-bold text-primary">{progressPercent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="mt-section flex justify-end gap-component">
        <Button variant="outline" className="border-outline-variant font-ui-label-md">
          {cancelLabel}
        </Button>
        <Button className="gap-micro bg-primary font-ui-label-md text-on-primary shadow-sm">
          <MaterialIcon name="bolt" />
          {buildLabel}
        </Button>
      </div>
    </TonalSurface>
  )
}
