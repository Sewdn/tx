import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentDashboardMetrics } from "@/fixtures/slices"
import { MetricGrid } from "./metric-grid"

const meta: Meta<typeof MetricGrid> = {
  title: "Gittenberg/Shell/Organisms/MetricGrid",
  component: MetricGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof MetricGrid>

export const Default: Story = { args: { metrics: agentDashboardMetrics } }
