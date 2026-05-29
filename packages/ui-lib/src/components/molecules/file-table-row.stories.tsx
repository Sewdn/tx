import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileTableRow } from "./file-table-row"

const meta: Meta<typeof FileTableRow> = {
  title: "Gittenberg/Repository/Molecules/FileTableRow",
  component: FileTableRow,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FileTableRow>

export const Default: Story = { args: { icon: "folder", name: "src/manuscript", description: "Chapters 1-135", timestamp: "3 days ago" } }
export const Highlighted: Story = { args: { icon: "markdown", name: "Chapter 3.md", highlighted: true, highlightLabel: "Open Revision #142", timestamp: "Just now" } }
