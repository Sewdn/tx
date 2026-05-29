import type { Meta, StoryObj } from "@storybook/react-vite"

import { HeroActionButton } from "./hero-action-button"

const meta: Meta<typeof HeroActionButton> = {
  title: "Gittenberg/v2/Molecules/HeroActionButton",
  component: HeroActionButton,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
}

export default meta
type Story = StoryObj<typeof HeroActionButton>

export const Default: Story = {
  args: { label: "Read Now", variant: "primary", icon: "play_arrow" },
}
