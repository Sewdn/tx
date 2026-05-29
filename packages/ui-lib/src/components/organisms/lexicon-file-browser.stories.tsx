import type { Meta, StoryObj } from "@storybook/react-vite"

import { manuscriptFileTree } from "@/fixtures/slices"
import { LexiconFileBrowser } from "./lexicon-file-browser"

const meta: Meta<typeof LexiconFileBrowser> = {
  title: "Gittenberg/Lexicon Editor/Organisms/LexiconFileBrowser",
  component: LexiconFileBrowser,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof LexiconFileBrowser>

export const Default: Story = { args: { nodes: manuscriptFileTree } }
