import type { Meta, StoryObj } from "@storybook/react-vite"

import { editionLineage } from "@/fixtures/slices"
import { LineageTimeline } from "./lineage-timeline"

const meta: Meta<typeof LineageTimeline> = {
  title: "Gittenberg/Edition History/Organisms/LineageTimeline",
  component: LineageTimeline,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof LineageTimeline>

export const Default: Story = { args: { branches: editionLineage } }
