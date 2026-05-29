import { useState } from "react"

import { BillingPeriodToggle } from "@/components/molecules/billing-period-toggle"
import { MembershipTierCard } from "@/components/molecules/membership-tier-card"
import { cn } from "@/lib/utils"
import type { MembershipTierCardData } from "@/lib/types"

export type MembershipTierGridProps = {
  tiers: MembershipTierCardData[]
  defaultPeriod?: "monthly" | "annual"
  className?: string
}

export function MembershipTierGrid({
  tiers,
  defaultPeriod = "monthly",
  className,
}: MembershipTierGridProps) {
  const [period, setPeriod] = useState<"monthly" | "annual">(defaultPeriod)

  return (
    <section className={cn("mx-auto max-w-container-max px-boundary py-region", className)}>
      <div className="mb-region flex justify-center">
        <BillingPeriodToggle period={period} onPeriodChange={setPeriod} />
      </div>
      <div className="grid grid-cols-1 gap-section md:grid-cols-3">
        {tiers.map((tier) => (
          <MembershipTierCard key={tier.id} {...tier} billingPeriod={period} />
        ))}
      </div>
    </section>
  )
}
