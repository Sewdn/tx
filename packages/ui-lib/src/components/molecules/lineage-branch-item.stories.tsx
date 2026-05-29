import type { Meta, StoryObj } from "@storybook/react-vite"

import { editionLineage } from "@/fixtures/slices"
import { LineageBranchItem } from "./lineage-branch-item"

const meta: Meta<typeof LineageBranchItem> = {
  title: "Gittenberg/Edition History/Molecules/LineageBranchItem",
  component: LineageBranchItem,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof LineageBranchItem>

export const Master: Story = { args: editionLineage[0] }
export const Fork: Story = { args: editionLineage[1] }
