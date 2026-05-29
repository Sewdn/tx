import type { Meta, StoryObj } from "@storybook/react-vite"

import { activityFeed } from "@/fixtures/slices"
import { ActivityFeedItem } from "./activity-feed-item"

const meta: Meta<typeof ActivityFeedItem> = {
  title: "Gittenberg/Agents/Molecules/ActivityFeedItem",
  component: ActivityFeedItem,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ActivityFeedItem>

export const Default: Story = { args: activityFeed[0] }
export const Error: Story = { args: activityFeed[2] }
