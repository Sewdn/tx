import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentDashboardRows } from "@/fixtures/slices"
import { AgentDashboardRow } from "./agent-dashboard-row"

const meta: Meta<typeof AgentDashboardRow> = {
  title: "Gittenberg/Agents/Molecules/AgentDashboardRow",
  component: AgentDashboardRow,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AgentDashboardRow>

export const Default: Story = { args: agentDashboardRows[0] }
export const Paused: Story = { args: agentDashboardRows[2] }
