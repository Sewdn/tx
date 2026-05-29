import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type FeaturePillar = {
  icon: string
  title: string
  description: string
}

export type FeaturePillarGridProps = {
  pillars: FeaturePillar[]
  className?: string
}

export function FeaturePillarGrid({ pillars, className }: FeaturePillarGridProps) {
  return (
    <section className={cn("mx-auto max-w-container-max px-boundary py-region", className)}>
      <div className="space-y-section">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col gap-component border-b border-outline-variant pb-section last:border-b-0 md:flex-row md:items-start"
          >
            <MaterialIcon name={pillar.icon} size={32} className="shrink-0 text-secondary" />
            <div>
              <h3 className="mb-micro font-headline-lg text-headline-lg text-primary">{pillar.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
