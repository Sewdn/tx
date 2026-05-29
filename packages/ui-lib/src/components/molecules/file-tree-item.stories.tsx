import type { Meta, StoryObj } from "@storybook/react-vite"

import { manuscriptFileTree } from "@/fixtures/slices"
import { FileTreeItem } from "./file-tree-item"

const meta: Meta<typeof FileTreeItem> = {
  title: "Gittenberg/Lexicon Editor/Molecules/FileTreeItem",
  component: FileTreeItem,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FileTreeItem>

export const File: Story = { args: { node: manuscriptFileTree[0] } }
export const Folder: Story = { args: { node: manuscriptFileTree[2] } }
