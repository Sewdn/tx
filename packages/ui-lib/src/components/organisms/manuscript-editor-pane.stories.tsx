import type { Meta, StoryObj } from "@storybook/react-vite"

import { ManuscriptEditorPane } from "./manuscript-editor-pane"

const meta: Meta<typeof ManuscriptEditorPane> = {
  title: "Gittenberg/Lexicon Editor/Organisms/ManuscriptEditorPane",
  component: ManuscriptEditorPane,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ManuscriptEditorPane>

export const Default: Story = { args: { fileName: "02_Echoes_of_Dust.md", content: "# Echoes\n\nThe morning air hung heavy with salt." } }
