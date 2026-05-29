import type { Meta, StoryObj } from "@storybook/react-vite"

import { FormatOptionCard } from "./format-option-card"

const meta: Meta<typeof FormatOptionCard> = {
  title: "Gittenberg/Build & Export/Molecules/FormatOptionCard",
  component: FormatOptionCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FormatOptionCard>

export const Selected: Story = { args: { icon: "book", title: "E-Reader (EPUB)", description: "Kindle and Apple Books", selected: true } }
export const Unselected: Story = { args: { icon: "print", title: "Press Quality", description: "Bleed markers" } }
