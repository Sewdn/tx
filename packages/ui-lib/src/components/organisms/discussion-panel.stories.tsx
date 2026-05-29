import type { Meta, StoryObj } from "@storybook/react-vite"

import { revisionComments } from "@/fixtures/gittenberg"
import { DiscussionPanel } from "./discussion-panel"

const meta: Meta<typeof DiscussionPanel> = {
  title: "Gittenberg/Revision/Organisms/DiscussionPanel",
  component: DiscussionPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof DiscussionPanel>

export const Default: Story = { args: { comments: revisionComments, commentPlaceholder: "Add a comment...", submitLabel: "Comment", mergeLabel: "Approve and Merge", requestChangesLabel: "Request Changes" } }
