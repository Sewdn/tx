import type { Meta, StoryObj } from "@storybook/react-vite"

import { formatArtifacts } from "@/fixtures/slices"
import { FormatArtifactGrid } from "./format-artifact-grid"

const meta: Meta<typeof FormatArtifactGrid> = {
  title: "Gittenberg/Edition History/Organisms/FormatArtifactGrid",
  component: FormatArtifactGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FormatArtifactGrid>

export const Default: Story = { args: { artifacts: formatArtifacts } }
