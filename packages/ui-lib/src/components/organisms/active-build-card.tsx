import { Button } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { TonalSurface } from "@/components/organisms/tonal-surface"

export type ActiveBuildCardProps = {
  versionWatermark: string
  statusLabel: string
  title: string
  description: string
  downloadLabel: string
  commitHash: string
}

export function ActiveBuildCard({
  versionWatermark,
  statusLabel,
  title,
  description,
  downloadLabel,
  commitHash,
}: ActiveBuildCardProps) {
  return (
    <TonalSurface variant="layer-1" className="relative overflow-hidden rounded-lg border border-outline-variant p-section lg:col-span-2">
      <span className="pointer-events-none absolute top-0 right-0 p-component font-display-lg text-[120px] text-outline-variant/10 select-none">
        {versionWatermark}
      </span>
      <div className="relative z-10">
        <div className="mb-section flex items-center gap-micro">
          <MaterialIcon name="verified" className="text-secondary" />
          <span className="font-ui-label-sm font-bold tracking-widest text-secondary uppercase">
            {statusLabel}
          </span>
        </div>
        <h3 className="mb-component font-headline-lg text-headline-lg text-primary">{title}</h3>
        <p className="mb-section max-w-reading-width text-on-surface-variant">{description}</p>
        <div className="flex flex-wrap items-center gap-component">
          <Button className="gap-component rounded-lg bg-primary px-section py-component text-on-primary shadow-sm">
            <MaterialIcon name="download" />
            {downloadLabel}
          </Button>
          <Button variant="outline" className="gap-micro rounded-lg border-outline px-section py-component">
            <MaterialIcon name="code" />
            <span className="font-code-sm">commit: {commitHash}</span>
          </Button>
        </div>
      </div>
    </TonalSurface>
  )
}
