import type { Meta, StoryObj } from "@storybook/react-vite"

import { designPresets } from "@/fixtures/slices"
import { PresetSelector } from "./preset-selector"

const meta: Meta<typeof PresetSelector> = {
  title: "Gittenberg/Build & Export/Organisms/PresetSelector",
  component: PresetSelector,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PresetSelector>

export const Default: Story = { args: { presets: designPresets } }
