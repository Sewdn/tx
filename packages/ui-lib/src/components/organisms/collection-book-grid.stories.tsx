import type { Meta, StoryObj } from "@storybook/react-vite"

import { collectionBookCards } from "@/fixtures/v2-from-seed"
import { CollectionBookGrid } from "./collection-book-grid"

const meta: Meta<typeof CollectionBookGrid> = {
  title: "Gittenberg/v2/Organisms/CollectionBookGrid",
  component: CollectionBookGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CollectionBookGrid>

export const Default: Story = {
  args: { items: collectionBookCards.slice(0, 4) },
}
