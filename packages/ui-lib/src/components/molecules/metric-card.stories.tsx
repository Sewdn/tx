import type { Meta, StoryObj } from "@storybook/react-vite"

import { MetricCard } from "./metric-card"

const meta: Meta<typeof MetricCard> = {
  title: "Gittenberg/Shell/Molecules/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof MetricCard>

export const Default: Story = { args: { label: "Active Agents", value: "12", delta: "+2", deltaPositive: true } }
