import type { Meta, StoryObj } from "@storybook/react-vite"

import { archivalVersions } from "@/fixtures/slices"
import { ArchivalEvolutionTable } from "./archival-evolution-table"

const meta: Meta<typeof ArchivalEvolutionTable> = {
  title: "Gittenberg/Edition History/Organisms/ArchivalEvolutionTable",
  component: ArchivalEvolutionTable,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ArchivalEvolutionTable>

export const Default: Story = { args: { rows: archivalVersions } }
