import type { Meta, StoryObj } from "@storybook/react-vite"

import { readerTocChapters, readerTocFooter } from "@/fixtures/slices"
import { ReaderTocDrawer } from "./reader-toc-drawer"

const meta: Meta<typeof ReaderTocDrawer> = {
  title: "Gittenberg/Reader/Organisms/ReaderTocDrawer",
  component: ReaderTocDrawer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ReaderTocDrawer>

export const Open: Story = { args: { title: "Moby Dick", subtitle: "Herman Melville", chapters: readerTocChapters, footerItems: readerTocFooter, open: true } }
