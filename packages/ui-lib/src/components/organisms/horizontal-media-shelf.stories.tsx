import type { Meta, StoryObj } from "@storybook/react-vite"

import { horizontalShelves } from "@/fixtures/v2-from-seed"
import { HorizontalMediaShelf } from "./horizontal-media-shelf"

const meta: Meta<typeof HorizontalMediaShelf> = {
  title: "Gittenberg/v2/Organisms/HorizontalMediaShelf",
  component: HorizontalMediaShelf,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof HorizontalMediaShelf>

export const Default: Story = {
  args: { ...horizontalShelves[0], enableWheelScroll: true },
}

export const WithNavButtons: Story = {
  args: { ...horizontalShelves[1], showNavButtons: true },
}
