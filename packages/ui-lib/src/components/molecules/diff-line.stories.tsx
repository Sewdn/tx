import type { Meta, StoryObj } from "@storybook/react-vite"

import { DiffLine } from "./diff-line"

const meta: Meta<typeof DiffLine> = {
  title: "Gittenberg/Revision/Molecules/DiffLine",
  component: DiffLine,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof DiffLine>

export const Context: Story = { args: { variant: "context", oldLine: 41, newLine: 41, content: "Sample line." } }
export const Added: Story = { args: { variant: "added", newLine: 42, content: "Added text.", icon: "add" } }
export const Removed: Story = { args: { variant: "removed", oldLine: 42, content: "Removed text.", icon: "remove" } }
