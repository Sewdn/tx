import type { Meta, StoryObj } from "@storybook/react-vite"

import { BuildProgressPanel } from "./build-progress-panel"

const meta: Meta<typeof BuildProgressPanel> = {
  title: "Gittenberg/Build & Export/Organisms/BuildProgressPanel",
  component: BuildProgressPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BuildProgressPanel>

export const InProgress: Story = { args: { title: "Generating Output", statusMessage: "Compiling chapter 42...", progressPercent: 68, cancelLabel: "Cancel", buildLabel: "Build Now" } }
