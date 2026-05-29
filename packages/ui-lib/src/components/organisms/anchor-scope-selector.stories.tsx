import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationBuild } from "@/fixtures/v2-from-seed"
import { AnchorScopeSelector } from "./anchor-scope-selector"

const meta: Meta<typeof AnchorScopeSelector> = {
  title: "Gittenberg/v2/Organisms/AnchorScopeSelector",
  component: AnchorScopeSelector,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AnchorScopeSelector>

export const Default: Story = {
  args: {
    commitHash: foundationBuild.commitHash,
    commitMessage: foundationBuild.title,
    manifestSize: "24.8 MB",
    fileCount: 12,
    selected: true,
  },
}
