import { MaterialIcon } from "@/components/atoms/material-icon"
import { SubscriptionFeatureRow } from "@/components/molecules/subscription-feature-row"
import { cn } from "@/lib/utils"
import type { MembershipFeatureData } from "@/lib/types"

export type EternalArchivePitchProps = {
  title: string
  description: string
  features: MembershipFeatureData[]
  illustrationSrc?: string
  className?: string
}

export function EternalArchivePitch({
  title,
  description,
  features,
  illustrationSrc,
  className,
}: EternalArchivePitchProps) {
  return (
    <section className={cn("bg-primary px-boundary py-region text-on-primary", className)}>
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-region lg:grid-cols-2">
        <div>
          <div className="mb-component flex items-center gap-micro">
            <MaterialIcon name="all_inclusive" className="text-secondary-fixed" />
            <span className="font-ui-label-sm uppercase tracking-widest text-secondary-fixed">
              Powered by Arweave
            </span>
          </div>
          <h2 className="mb-section font-headline-lg text-headline-lg">{title}</h2>
          <p className="mb-section font-body-md text-body-md text-on-primary-container">{description}</p>
          <div className="space-y-section">
            {features.map((feature) => (
              <SubscriptionFeatureRow
                key={feature.title}
                {...feature}
                className="[&_p:first-of-type]:text-on-primary [&_p:last-of-type]:text-on-primary-container"
              />
            ))}
          </div>
        </div>
        {illustrationSrc ? (
          <img
            alt=""
            src={illustrationSrc}
            className="aspect-video w-full rounded-lg object-cover opacity-80"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <MaterialIcon name="cloud_done" size={64} className="text-on-primary-container/50" />
          </div>
        )}
      </div>
    </section>
  )
}
