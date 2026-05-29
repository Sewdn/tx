import type { Meta, StoryObj } from "@storybook/react-vite"

import { readerParagraphs } from "@/fixtures/slices"
import { ReaderArticle } from "./reader-article"

const meta: Meta<typeof ReaderArticle> = {
  title: "Gittenberg/Reader/Organisms/ReaderArticle",
  component: ReaderArticle,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ReaderArticle>

export const Default: Story = { args: { chapterLabel: "Chapter 1", title: "Loomings", paragraphs: readerParagraphs } }
