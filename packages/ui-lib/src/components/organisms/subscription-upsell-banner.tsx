import { MaterialIcon } from "@/components/atoms/material-icon"
import { SubscriptionFeatureRow } from "@/components/molecules/subscription-feature-row"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { MembershipFeatureData } from "@/lib/types"

export type SubscriptionUpsellBannerProps = {
  title: string
  description: string
  ctaLabel: string
  features?: MembershipFeatureData[]
  onCtaClick?: () => void
  className?: string
}

export function SubscriptionUpsellBanner({
  title,
  description,
  ctaLabel,
  features = [],
  onCtaClick,
  className,
}: SubscriptionUpsellBannerProps) {
  return (
    <section
      className={cn(
        "border-y border-secondary/20 bg-secondary-container/30 px-boundary py-region",
        className,
      )}
    >
      <div className="mx-auto flex max-w-container-max flex-col gap-section lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-component flex items-center gap-micro">
            <MaterialIcon name="workspace_premium" className="text-secondary" filled />
            <span className="font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-secondary">
              Premier Membership
            </span>
          </div>
          <h2 className="mb-component font-headline-lg text-headline-lg text-ink-primary">{title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
        </div>
        {features.length > 0 ? (
          <div className="grid flex-1 gap-section sm:grid-cols-3">
            {features.map((feature) => (
              <SubscriptionFeatureRow key={feature.title} {...feature} />
            ))}
          </div>
        ) : null}
        <Button
          onClick={onCtaClick}
          className="shrink-0 bg-secondary px-section py-component font-ui-label-md text-on-secondary hover:bg-secondary/90"
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}
