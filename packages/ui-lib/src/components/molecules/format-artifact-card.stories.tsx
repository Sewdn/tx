import type { Meta, StoryObj } from "@storybook/react-vite"

import { formatArtifacts } from "@/fixtures/slices"
import { FormatArtifactCard } from "./format-artifact-card"

const meta: Meta<typeof FormatArtifactCard> = {
  title: "Gittenberg/Edition History/Molecules/FormatArtifactCard",
  component: FormatArtifactCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FormatArtifactCard>

export const Default: Story = { args: formatArtifacts[0] }
