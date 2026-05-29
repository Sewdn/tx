import type { Meta, StoryObj } from "@storybook/react-vite"

import { InteriorStylingPanel } from "./interior-styling-panel"

const meta: Meta<typeof InteriorStylingPanel> = {
  title: "Gittenberg/v2/Organisms/InteriorStylingPanel",
  component: InteriorStylingPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof InteriorStylingPanel>

export const Default: Story = { args: { illustrationsEnabled: true, style: "scholarly" } }
