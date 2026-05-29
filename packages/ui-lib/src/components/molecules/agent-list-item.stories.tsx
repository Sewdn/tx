import type { Meta, StoryObj } from "@storybook/react-vite"

import { AgentListItem } from "./agent-list-item"

const meta: Meta<typeof AgentListItem> = {
  title: "Gittenberg/Repository/Molecules/AgentListItem",
  component: AgentListItem,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AgentListItem>

export const Default: Story = { args: { name: "Pequod-03", status: "Auditing Chapter 1", icon: "neurology" } }
