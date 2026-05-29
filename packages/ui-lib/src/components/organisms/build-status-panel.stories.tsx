import type { Meta, StoryObj } from "@storybook/react-vite"

import { buildStatusItems } from "@/fixtures/slices"
import { BuildStatusPanel } from "./build-status-panel"

const meta: Meta<typeof BuildStatusPanel> = {
  title: "Gittenberg/Edition History/Organisms/BuildStatusPanel",
  component: BuildStatusPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BuildStatusPanel>

export const Default: Story = { args: { items: buildStatusItems, revisionsCount: "14,203 Revisions", revisionsLabel: "Total commits" } }
