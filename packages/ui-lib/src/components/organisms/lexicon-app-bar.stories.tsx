import type { Meta, StoryObj } from "@storybook/react-vite"

import { LexiconAppBar } from "./lexicon-app-bar"

const meta: Meta<typeof LexiconAppBar> = {
  title: "Gittenberg/Lexicon Editor/Organisms/LexiconAppBar",
  component: LexiconAppBar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof LexiconAppBar>

export const Default: Story = { args: { title: "Lexicon IDE", navItems: [{ id: "repo", label: "Repository", href: "#", active: true }] } }
