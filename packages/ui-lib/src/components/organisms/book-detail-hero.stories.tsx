import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition } from "@/fixtures/v2-from-seed"
import { BookDetailHero } from "./book-detail-hero"

const meta: Meta<typeof BookDetailHero> = {
  title: "Gittenberg/v2/Organisms/BookDetailHero",
  component: BookDetailHero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof BookDetailHero>

export const Default: Story = {
  args: {
    title: foundationEdition.title,
    author: foundationEdition.author,
    tagline: foundationEdition.tagline ?? "",
    editionTag: "SCHOLARLY EDITION V4.2",
    coverSrc: foundationEdition.coverUrl,
    heroImageSrc: foundationEdition.heroImageUrl ?? foundationEdition.coverUrl,
    actions: [
      { label: "Start Reading", variant: "primary", icon: "menu_book" },
      { label: "Add to Collection", variant: "ghost", icon: "bookmark_add" },
    ],
  },
}
