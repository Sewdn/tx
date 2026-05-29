import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type SubscriptionFeatureRowProps = {
  icon: string
  title: string
  description: string
  className?: string
}

export function SubscriptionFeatureRow({
  icon,
  title,
  description,
  className,
}: SubscriptionFeatureRowProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <MaterialIcon name={icon} className="text-secondary" filled />
      <div>
        <p className="font-ui-label-md text-ui-label-md font-bold text-ink-primary">{title}</p>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
    </div>
  )
}
