import type { Meta, StoryObj } from "@storybook/react-vite"

import { EditionVersionTag } from "./edition-version-tag"

const meta: Meta<typeof EditionVersionTag> = {
  title: "Gittenberg/v2/Atoms/EditionVersionTag",
  component: EditionVersionTag,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof EditionVersionTag>

export const Default: Story = { args: { label: "Scholarly Edition v4.2" } }
