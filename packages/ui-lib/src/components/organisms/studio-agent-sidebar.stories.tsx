import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentStyleChips } from "@/fixtures/v2-from-seed"
import { AgentSummonPanel } from "./agent-summon-panel"
import { InteriorStylingPanel } from "./interior-styling-panel"
import { LayoutTypographyPanel } from "./layout-typography-panel"
import { StudioAgentSidebar } from "./studio-agent-sidebar"

const meta: Meta<typeof StudioAgentSidebar> = {
  title: "Gittenberg/v2/Organisms/StudioAgentSidebar",
  component: StudioAgentSidebar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof StudioAgentSidebar>

export const Default: Story = {
  args: {
    activeTab: "cover",
    coverPanel: <AgentSummonPanel agents={agentStyleChips} />,
    illustrationPanel: <InteriorStylingPanel />,
    layoutPanel: <LayoutTypographyPanel />,
  },
}
