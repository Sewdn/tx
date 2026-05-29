import type { Meta, StoryObj } from "@storybook/react-vite"

import { eternalGalleryCards } from "@/fixtures/v2-from-seed"
import { EternalGalleryBookCard } from "./eternal-gallery-book-card"

const meta: Meta<typeof EternalGalleryBookCard> = {
  title: "Gittenberg/v2/Organisms/EternalGalleryBookCard",
  component: EternalGalleryBookCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof EternalGalleryBookCard>

export const Default: Story = { args: eternalGalleryCards[0] }
export const Featured: Story = { args: { ...eternalGalleryCards[0], featured: true } }
