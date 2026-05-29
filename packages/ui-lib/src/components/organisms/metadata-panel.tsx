import { MaterialIcon } from "@/components/atoms/material-icon"
import { MetadataField } from "@/components/atoms/metadata-field"
import { StatusDot } from "@/components/atoms/status-dot"
import { AgentListItem } from "@/components/molecules/agent-list-item"
import { TonalSurface } from "@/components/organisms/tonal-surface"
import { cn } from "@/lib/utils"
import type { AgentListItemData, MetadataField as MetadataFieldType } from "@/lib/types"

export type MetadataPanelProps = {
  title: string
  icon?: string
  fields: MetadataFieldType[]
  agentsTitle?: string
  agents?: AgentListItemData[]
  agentsActive?: boolean
  className?: string
}

export function MetadataPanel({
  title,
  icon = "info",
  fields,
  agentsTitle,
  agents,
  agentsActive = false,
  className,
}: MetadataPanelProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <TonalSurface className="p-6">
        <h3 className="mb-4 flex items-center gap-2 font-ui-label-md text-ui-label-md font-bold">
          <MaterialIcon name={icon} size={20} />
          {title}
        </h3>
        <div className="space-y-4">
          {fields.map((field) => (
            <MetadataField
              key={field.label}
              label={field.label}
              value={field.value}
              href={field.href}
            />
          ))}
        </div>
      </TonalSurface>
      {agents && agentsTitle ? (
        <TonalSurface className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-ui-label-md text-ui-label-md font-bold text-primary">
              {agentsTitle}
            </h3>
            <StatusDot active={agentsActive} />
          </div>
          <div className="space-y-3">
            {agents.map((agent) => (
              <AgentListItem
                key={agent.id}
                name={agent.name}
                status={agent.status}
                icon={agent.icon}
              />
            ))}
          </div>
        </TonalSurface>
      ) : null}
    </div>
  )
}
