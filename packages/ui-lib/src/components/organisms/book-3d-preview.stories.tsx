import type { Meta, StoryObj } from "@storybook/react-vite"

import { printOrderMeta } from "@/fixtures/v2-from-seed"
import { Book3DPreview } from "./book-3d-preview"

const meta: Meta<typeof Book3DPreview> = {
  title: "Gittenberg/v2/Organisms/Book3DPreview",
  component: Book3DPreview,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Book3DPreview>

export const Default: Story = {
  args: {
    coverSrc: printOrderMeta.coverSrc,
    title: printOrderMeta.title,
  },
}
