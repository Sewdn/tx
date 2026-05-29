import type { Meta, StoryObj } from "@storybook/react-vite"

import { buildFormats } from "@/fixtures/slices"
import { FormatSelector } from "./format-selector"

const meta: Meta<typeof FormatSelector> = {
  title: "Gittenberg/Build & Export/Organisms/FormatSelector",
  component: FormatSelector,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FormatSelector>

export const Default: Story = { args: { options: buildFormats } }
