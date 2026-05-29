import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition } from "@/fixtures/v2-from-seed"
import { ThematicCollectionGrid } from "./thematic-collection-grid"

const meta: Meta<typeof ThematicCollectionGrid> = {
  title: "Gittenberg/v2/Organisms/ThematicCollectionGrid",
  component: ThematicCollectionGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ThematicCollectionGrid>

export const Default: Story = {
  args: {
    items: [
      {
        id: "golden-age",
        title: "Golden Age of Sci-Fi",
        description: "Foundation-era psychohistory and galactic empire narratives.",
        imageSrc: foundationEdition.heroImageUrl ?? foundationEdition.coverUrl,
      },
      {
        id: "robot-series",
        title: "Robot & Foundation Universe",
        description: "Asimov's interconnected future history across centuries.",
        imageSrc: foundationEdition.coverUrl,
      },
    ],
  },
}
