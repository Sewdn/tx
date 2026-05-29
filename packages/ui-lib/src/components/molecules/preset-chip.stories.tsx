import type { Meta, StoryObj } from "@storybook/react-vite"

import { PresetChip } from "./preset-chip"

const meta: Meta<typeof PresetChip> = {
  title: "Gittenberg/Build & Export/Molecules/PresetChip",
  component: PresetChip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof PresetChip>

export const Active: Story = { args: { label: "Classic Scholarly", active: true } }
export const Inactive: Story = { args: { label: "Modern Minimal" } }
