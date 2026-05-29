import type { Meta, StoryObj } from "@storybook/react-vite"

import { cinematicBookTiles } from "@/fixtures/v2-from-seed"
import { RelatedWorksCarousel } from "./related-works-carousel"

const meta: Meta<typeof RelatedWorksCarousel> = {
  title: "Gittenberg/v2/Organisms/RelatedWorksCarousel",
  component: RelatedWorksCarousel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof RelatedWorksCarousel>

export const Default: Story = {
  args: {
    title: "Genre Kinship",
    items: cinematicBookTiles.slice(0, 5),
  },
}
