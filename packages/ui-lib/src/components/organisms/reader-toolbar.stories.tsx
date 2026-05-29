import type { Meta, StoryObj } from "@storybook/react-vite"

import { canvasThemes } from "@/fixtures/slices"
import { ReaderToolbar } from "./reader-toolbar"

const meta: Meta<typeof ReaderToolbar> = {
  title: "Gittenberg/Reader/Organisms/ReaderToolbar",
  component: ReaderToolbar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ReaderToolbar>

export const Default: Story = { args: { fontSize: 18, activeFamily: "serif", themes: canvasThemes, activeThemeId: "cream" } }
