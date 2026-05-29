import type { Meta, StoryObj } from "@storybook/react-vite"

import { curationBars } from "@/fixtures/slices"
import { CurationProgressChart } from "./curation-progress-chart"

const meta: Meta<typeof CurationProgressChart> = {
  title: "Gittenberg/Agents/Organisms/CurationProgressChart",
  component: CurationProgressChart,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CurationProgressChart>

export const Default: Story = { args: { bars: curationBars } }
