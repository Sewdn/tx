import type { Meta, StoryObj } from "@storybook/react-vite"

import { DecadeShelfHeader } from "./decade-shelf-header"

const meta: Meta<typeof DecadeShelfHeader> = {
  title: "Gittenberg/v2/Molecules/DecadeShelfHeader",
  component: DecadeShelfHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
}

export default meta
type Story = StoryObj<typeof DecadeShelfHeader>

export const Default: Story = {
  args: { label: "The 1950s: Golden Age of Sci-Fi" },
}
