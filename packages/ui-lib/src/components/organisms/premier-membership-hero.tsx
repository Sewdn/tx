import { SubscriptionFeatureRow } from "@/components/molecules/subscription-feature-row"
import { cn } from "@/lib/utils"
import type { MembershipFeatureData } from "@/lib/types"

export type PremierMembershipHeroProps = {
  title: string
  subtitle: string
  features: MembershipFeatureData[]
  heroImageSrc: string
  className?: string
}

export function PremierMembershipHero({
  title,
  subtitle,
  features,
  heroImageSrc,
  className,
}: PremierMembershipHeroProps) {
  return (
    <section className={cn("mx-auto max-w-container-max px-boundary py-region", className)}>
      <div className="mb-region text-center">
        <h1 className="mb-component font-display-lg text-display-lg text-ink-primary">{title}</h1>
        <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 items-center gap-region lg:grid-cols-2">
        <img alt="" src={heroImageSrc} className="aspect-[4/3] w-full rounded-lg object-cover paper-shadow" />
        <div className="space-y-section">
          {features.map((feature) => (
            <SubscriptionFeatureRow key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
