import type { Meta, StoryObj } from "@storybook/react-vite"

import { CarouselNavButton } from "./carousel-nav-button"

const meta: Meta<typeof CarouselNavButton> = {
  title: "Gittenberg/v2/Molecules/CarouselNavButton",
  component: CarouselNavButton,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CarouselNavButton>

export const Default: Story = { args: { direction: "next" } }
