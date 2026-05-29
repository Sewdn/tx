import { AgentDashboardRow } from "@/components/molecules/agent-dashboard-row"
import { MaterialIcon } from "@/components/atoms/material-icon"
import type { AgentDashboardRowData } from "@/lib/types"

export type AgentDashboardTableProps = {
  title?: string
  viewAllLabel?: string
  agents: AgentDashboardRowData[]
}

export function AgentDashboardTable({
  title = "Automated Agents",
  viewAllLabel = "View All Protocols",
  agents,
}: AgentDashboardTableProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low">
      <div className="flex items-center justify-between border-b border-outline-variant p-6">
        <h2 className="font-headline-lg text-[20px] text-primary">{title}</h2>
        <span className="flex items-center gap-1 font-ui-label-md font-bold text-primary">
          {viewAllLabel}
          <MaterialIcon name="chevron_right" size={18} />
        </span>
      </div>
      <div className="divide-y divide-outline-variant">
        {agents.map((agent) => (
          <AgentDashboardRow key={agent.id} {...agent} />
        ))}
      </div>
    </section>
  )
}
