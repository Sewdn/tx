import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { AgentDashboardRowData } from "@/lib/types"

const iconBg: Record<NonNullable<AgentDashboardRowData["iconVariant"]>, string> = {
  secondary: "bg-secondary-container",
  primary: "bg-primary-container",
  muted: "bg-secondary-container/50",
}

const statusStyles: Record<AgentDashboardRowData["statusVariant"], string> = {
  operational: "bg-secondary/10 text-secondary",
  paused: "bg-surface-variant text-outline",
  error: "bg-error-container text-on-error-container",
}

export type AgentDashboardRowProps = AgentDashboardRowData

export function AgentDashboardRow({
  name,
  description,
  icon,
  status,
  statusVariant,
  iconVariant = "secondary",
}: AgentDashboardRowProps) {
  return (
    <div className="flex items-center gap-6 p-6 transition-all hover:bg-surface-container-high">
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-full",
          iconBg[iconVariant],
        )}
      >
        <MaterialIcon
          name={icon}
          className={iconVariant === "primary" ? "text-on-primary-container" : "text-on-secondary-container"}
        />
      </div>
      <div className="grow">
        <h3 className="font-ui-label-md font-bold text-primary">{name}</h3>
        <p className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">{description}</p>
      </div>
      <div className="text-right">
        <div className="mb-1 font-ui-label-sm text-ui-label-sm text-outline">Status</div>
        <span
          className={cn(
            "rounded-full px-3 py-1 font-ui-label-sm font-bold",
            statusStyles[statusVariant],
          )}
        >
          {status}
        </span>
      </div>
    </div>
  )
}
