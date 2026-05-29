import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition } from "@/fixtures/v2-from-seed"
import { BookCoverPreview } from "./book-cover-preview"

const meta: Meta<typeof BookCoverPreview> = {
  title: "Gittenberg/v2/Organisms/BookCoverPreview",
  component: BookCoverPreview,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof BookCoverPreview>

export const Default: Story = {
  args: {
    title: foundationEdition.title,
    author: foundationEdition.author,
    coverSrc: foundationEdition.coverUrl,
  },
}
