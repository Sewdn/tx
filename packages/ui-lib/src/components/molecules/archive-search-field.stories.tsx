import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArchiveSearchField } from "./archive-search-field"

const meta: Meta<typeof ArchiveSearchField> = {
  title: "Gittenberg/Shell/Molecules/ArchiveSearchField",
  component: ArchiveSearchField,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ArchiveSearchField>

export const Default: Story = { args: { placeholder: "Search the archives..." } }
