import type { Meta, StoryObj } from "@storybook/react-vite"

import { CollectionNavItem } from "./collection-nav-item"

const meta: Meta<typeof CollectionNavItem> = {
  title: "Gittenberg/v2/Molecules/CollectionNavItem",
  component: CollectionNavItem,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CollectionNavItem>

export const Default: Story = {
  args: { label: "Current Reads", count: 12, active: true },
}
