import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { MembershipTierCardData } from "@/lib/types"

export type MembershipTierCardProps = MembershipTierCardData & {
  billingPeriod?: "monthly" | "annual"
  onCtaClick?: () => void
  className?: string
}

function formatPrice(amount?: number) {
  if (amount === undefined) return "Free"
  return `$${amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}`
}

export function MembershipTierCard({
  name,
  monthlyPrice,
  annualPrice,
  features,
  active,
  ctaLabel,
  highlighted,
  billingPeriod = "monthly",
  onCtaClick,
  className,
}: MembershipTierCardProps) {
  const price = billingPeriod === "annual" ? annualPrice : monthlyPrice
  const periodLabel = billingPeriod === "annual" ? "/ year" : "/ month"
  const isDark = highlighted

  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden p-10 paper-shadow",
        isDark
          ? "border-4 border-secondary bg-ink-primary text-on-primary"
          : "border border-border-warm bg-surface-container-lowest",
        highlighted && "ring-2 ring-secondary ring-offset-2 ring-offset-background",
        className,
      )}
    >
      <div className="mb-8">
        <h4
          className={cn(
            "mb-2 font-ui-label-md text-ui-label-md uppercase",
            isDark ? "text-secondary-fixed" : "text-secondary",
          )}
        >
          {name}
        </h4>
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "font-headline-lg text-headline-lg",
              isDark ? "text-on-primary" : "text-ink-primary",
            )}
          >
            {formatPrice(price)}
          </span>
          {price !== undefined ? (
            <span className={cn(isDark ? "text-on-primary-container" : "text-on-surface-variant")}>
              {periodLabel}
            </span>
          ) : null}
        </div>
      </div>
      <ul className="mb-12 flex-grow space-y-4">
        {features.map((feature) => (
          <li
            key={feature.title}
            className={cn(
              "flex items-center gap-3",
              isDark ? "text-on-primary" : "text-on-surface-variant",
            )}
          >
            <MaterialIcon name="check" size={18} />
            <span>{feature.title}</span>
          </li>
        ))}
      </ul>
      <Button
        onClick={onCtaClick}
        disabled={active}
        className={cn(
          "w-full py-4 font-ui-label-md",
          isDark
            ? "bg-secondary text-on-secondary shadow-lg hover:bg-secondary/90"
            : "border border-border-warm bg-surface-container-high text-ink-primary hover:bg-surface-variant",
        )}
      >
        {active ? "Current Plan" : ctaLabel}
      </Button>
    </article>
  )
}
