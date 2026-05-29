import type { Meta, StoryObj } from "@storybook/react-vite"

import { eternalGalleryCards } from "@/fixtures/v2-from-seed"
import { EternalGalleryGrid } from "./eternal-gallery-grid"

const meta: Meta<typeof EternalGalleryGrid> = {
  title: "Gittenberg/v2/Organisms/EternalGalleryGrid",
  component: EternalGalleryGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof EternalGalleryGrid>

export const Default: Story = { args: { items: eternalGalleryCards } }
