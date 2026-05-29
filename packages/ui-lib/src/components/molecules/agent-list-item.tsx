import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type AgentListItemProps = {
  name: string
  status: string
  icon: string
  className?: string
}

export function AgentListItem({ name, status, icon, className }: AgentListItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-component p-micro transition-colors hover:bg-surface-container",
        className,
      )}
    >
      <div className="flex size-8 items-center justify-center rounded bg-primary-container">
        <MaterialIcon name={icon} size={18} className="text-on-primary" />
      </div>
      <div>
        <p className="font-ui-label-md text-ui-label-md text-primary">{name}</p>
        <p className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">{status}</p>
      </div>
    </div>
  )
}
