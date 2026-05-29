import type { Meta, StoryObj } from "@storybook/react-vite"

import { ProvenanceBadge } from "./provenance-badge"

const meta: Meta<typeof ProvenanceBadge> = {
  title: "Gittenberg/v2/Atoms/ProvenanceBadge",
  component: ProvenanceBadge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProvenanceBadge>

export const Default: Story = {}
