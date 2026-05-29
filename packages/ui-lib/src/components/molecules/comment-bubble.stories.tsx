import type { Meta, StoryObj } from "@storybook/react-vite"

import { CommentBubble } from "./comment-bubble"

const meta: Meta<typeof CommentBubble> = {
  title: "Gittenberg/Revision/Molecules/CommentBubble",
  component: CommentBubble,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CommentBubble>

export const Default: Story = { args: { author: "Curator", timestamp: "2h ago", body: "Removed the em-dash." } }
