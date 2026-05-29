import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationBuild } from "@/fixtures/v2-from-seed"
import { toLineageBranches } from "@/lib/mappers"
import { EditionLineagePanel } from "./edition-lineage-panel"

const meta: Meta<typeof EditionLineagePanel> = {
  title: "Gittenberg/v2/Organisms/EditionLineagePanel",
  component: EditionLineagePanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof EditionLineagePanel>

const branches = toLineageBranches(foundationBuild)

export const Default: Story = {
  args: {
    branches,
    forkCount: 14,
    title: "Edition Lineage",
  },
}
