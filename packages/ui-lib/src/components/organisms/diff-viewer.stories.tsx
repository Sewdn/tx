import type { Meta, StoryObj } from "@storybook/react-vite"

import { chapter3DiffLines } from "@/fixtures/gittenberg"
import { DiffViewer } from "./diff-viewer"

const meta: Meta<typeof DiffViewer> = {
  title: "Gittenberg/Revision/Organisms/DiffViewer",
  component: DiffViewer,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof DiffViewer>

export const Default: Story = { args: { fileName: "chapter_03.md", viewMode: "Unified", alternateViewMode: "Split", lines: chapter3DiffLines } }
