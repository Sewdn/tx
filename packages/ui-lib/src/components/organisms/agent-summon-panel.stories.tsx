import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentStyleChips } from "@/fixtures/v2-from-seed"
import { AgentSummonPanel } from "./agent-summon-panel"

const meta: Meta<typeof AgentSummonPanel> = {
  title: "Gittenberg/v2/Organisms/AgentSummonPanel",
  component: AgentSummonPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AgentSummonPanel>

export const Default: Story = {
  args: {
    agents: agentStyleChips,
    intent: "Galactic empire in decline — muted golds and deep space blues.",
  },
}
