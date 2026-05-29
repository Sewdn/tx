import type { Meta, StoryObj } from "@storybook/react-vite"

import { ViewModeToggle } from "./view-mode-toggle"

const meta: Meta<typeof ViewModeToggle> = {
  title: "Gittenberg/v2/Molecules/ViewModeToggle",
  component: ViewModeToggle,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ViewModeToggle>

export const Default: Story = { args: { mode: "grid" } }
