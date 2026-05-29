import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentStyleChips } from "@/fixtures/v2-from-seed"
import { AgentStyleChip } from "./agent-style-chip"

const meta: Meta<typeof AgentStyleChip> = {
  title: "Gittenberg/v2/Molecules/AgentStyleChip",
  component: AgentStyleChip,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AgentStyleChip>

export const Default: Story = { args: agentStyleChips[0] }
