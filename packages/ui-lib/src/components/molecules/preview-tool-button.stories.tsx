import type { Meta, StoryObj } from "@storybook/react-vite"

import { PreviewToolButton } from "./preview-tool-button"

const meta: Meta<typeof PreviewToolButton> = {
  title: "Gittenberg/v2/Molecules/PreviewToolButton",
  component: PreviewToolButton,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PreviewToolButton>

export const Default: Story = { args: { icon: "rotate_left", label: "Rotate Left" } }
