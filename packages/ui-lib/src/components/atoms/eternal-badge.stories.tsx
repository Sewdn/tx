import type { Meta, StoryObj } from "@storybook/react-vite"

import { EternalBadge } from "./eternal-badge"

const meta: Meta<typeof EternalBadge> = {
  title: "Gittenberg/v2/Atoms/EternalBadge",
  component: EternalBadge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof EternalBadge>

export const Default: Story = { args: { label: "Eternal Archive", variant: "eternal" } }
