import type { Meta, StoryObj } from "@storybook/react-vite"

import { FolderNavItem } from "./folder-nav-item"

const meta: Meta<typeof FolderNavItem> = {
  title: "Gittenberg/v2/Molecules/FolderNavItem",
  component: FolderNavItem,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FolderNavItem>

export const Default: Story = { args: { label: "19th Century Verse" } }
