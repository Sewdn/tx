import type { Meta, StoryObj } from "@storybook/react-vite"

import { FormatChip } from "./format-chip"

const meta: Meta<typeof FormatChip> = {
  title: "Gittenberg/v2/Molecules/FormatChip",
  component: FormatChip,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FormatChip>

export const Default: Story = { args: { label: "ePub" } }
