import type { Meta, StoryObj } from "@storybook/react-vite"

import { StatusDot } from "./status-dot"

const meta: Meta<typeof StatusDot> = {
  title: "Gittenberg/Shell/Atoms/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StatusDot>

export const Inactive: Story = { args: { active: false } }
export const Active: Story = { args: { active: true } }
