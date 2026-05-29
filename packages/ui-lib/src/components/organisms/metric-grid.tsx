import { MetricCard } from "@/components/molecules/metric-card"
import { cn } from "@/lib/utils"
import type { MetricCardData } from "@/lib/types"

export type MetricGridProps = {
  metrics: MetricCardData[]
  className?: string
}

export function MetricGrid({ metrics, className }: MetricGridProps) {
  return (
    <div
      className={cn(
        "mb-component grid grid-cols-1 gap-region md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          delta={metric.delta}
          deltaPositive={metric.deltaPositive}
        />
      ))}
    </div>
  )
}
