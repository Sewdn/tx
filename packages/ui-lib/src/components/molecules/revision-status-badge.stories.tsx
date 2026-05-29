import type { Meta, StoryObj } from "@storybook/react-vite"

import { RevisionStatusBadge } from "./revision-status-badge"

const meta: Meta<typeof RevisionStatusBadge> = {
  title: "Gittenberg/Revision/Molecules/RevisionStatusBadge",
  component: RevisionStatusBadge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RevisionStatusBadge>

export const Open: Story = { args: { status: "open" } }
