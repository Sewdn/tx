import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentDashboardRows } from "@/fixtures/slices"
import { AgentDashboardTable } from "./agent-dashboard-table"

const meta: Meta<typeof AgentDashboardTable> = {
  title: "Gittenberg/Agents/Organisms/AgentDashboardTable",
  component: AgentDashboardTable,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AgentDashboardTable>

export const Default: Story = { args: { agents: agentDashboardRows } }
