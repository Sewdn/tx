import type { Meta, StoryObj } from "@storybook/react-vite"

import { stylingSliders, stylingToggles } from "@/fixtures/slices"
import { StylingOptionsPanel } from "./styling-options-panel"

const meta: Meta<typeof StylingOptionsPanel> = {
  title: "Gittenberg/Build & Export/Organisms/StylingOptionsPanel",
  component: StylingOptionsPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof StylingOptionsPanel>

export const Default: Story = { args: { sliders: stylingSliders, toggles: stylingToggles } }
