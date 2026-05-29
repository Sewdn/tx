import type { Meta, StoryObj } from "@storybook/react-vite"

import { agentStyleChips, bindingOptions } from "@/fixtures/v2-from-seed"
import { AgentSummonPanel } from "./agent-summon-panel"
import { PrintCustomizationPanel } from "./print-customization-panel"

const meta: Meta<typeof PrintCustomizationPanel> = {
  title: "Gittenberg/v2/Organisms/PrintCustomizationPanel",
  component: PrintCustomizationPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PrintCustomizationPanel>

export const StandardCover: Story = {
  args: {
    coverOptions: [
      { id: "original", label: "Original Art", description: "Canonical cover from repository", selected: true },
      { id: "minimal", label: "Scholarly Minimal", description: "Clean typography on archival stock" },
    ],
    bindingOptions,
  },
}

export const AgentAssisted: Story = {
  args: {
    coverPanel: <AgentSummonPanel agents={agentStyleChips} />,
    bindingOptions,
  },
}
