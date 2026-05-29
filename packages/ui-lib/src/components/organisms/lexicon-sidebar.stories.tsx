import type { Meta, StoryObj } from "@storybook/react-vite"

import { LexiconSidebar } from "./lexicon-sidebar"

const meta: Meta<typeof LexiconSidebar> = {
  title: "Gittenberg/Lexicon Editor/Organisms/LexiconSidebar",
  component: LexiconSidebar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof LexiconSidebar>

export const Default: Story = { args: { title: "Lexicon Archival", subtitle: "Public Domain", navItems: [{ id: "build", label: "Build", icon: "output", href: "#", active: true }], primaryActionLabel: "Commit Changes" } }
