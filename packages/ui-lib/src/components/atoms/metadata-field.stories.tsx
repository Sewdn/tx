import type { Meta, StoryObj } from "@storybook/react-vite"

import { MetadataField } from "./metadata-field"

const meta: Meta<typeof MetadataField> = {
  title: "Gittenberg/Repository/Atoms/MetadataField",
  component: MetadataField,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MetadataField>

export const Default: Story = { args: { label: "Source", value: "Project Gutenberg #2701" } }
export const WithLink: Story = { args: { label: "Source", value: "PG #2701", href: "#" } }
