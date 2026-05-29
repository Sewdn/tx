import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationBuild } from "@/fixtures/v2-from-seed"
import { toFormatArtifacts } from "@/lib/mappers"
import { DigitalFabricationsGrid } from "./digital-fabrications-grid"

const meta: Meta<typeof DigitalFabricationsGrid> = {
  title: "Gittenberg/v2/Organisms/DigitalFabricationsGrid",
  component: DigitalFabricationsGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof DigitalFabricationsGrid>

export const Default: Story = {
  args: {
    artifacts: toFormatArtifacts(foundationBuild),
    printPriceLabel: "$29.99",
  },
}
