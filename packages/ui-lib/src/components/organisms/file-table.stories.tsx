import type { Meta, StoryObj } from "@storybook/react-vite"

import { mobyDickFileRows } from "@/fixtures/gittenberg"
import { FileTable } from "./file-table"

const meta: Meta<typeof FileTable> = {
  title: "Gittenberg/Repository/Organisms/FileTable",
  component: FileTable,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof FileTable>

export const Default: Story = { args: { branchLabel: "Current Branch", branchName: "master", lastUpdate: "Last Update: 2h ago", rows: mobyDickFileRows } }
