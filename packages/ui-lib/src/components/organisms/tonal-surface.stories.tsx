import type { Meta, StoryObj } from "@storybook/react-vite"

import { TonalSurface } from "./tonal-surface"

const meta: Meta<typeof TonalSurface> = {
  title: "Gittenberg/Shell/Organisms/TonalSurface",
  component: TonalSurface,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof TonalSurface>

export const Default: Story = { args: { children: "Tonal surface", variant: "default" } }
export const Layer1: Story = { args: { children: "Layer 1", variant: "layer-1" } }
