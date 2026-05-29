import type { Meta, StoryObj } from "@storybook/react-vite"

import { activityFeed } from "@/fixtures/slices"
import { ActivityFeed } from "./activity-feed"

const meta: Meta<typeof ActivityFeed> = {
  title: "Gittenberg/Agents/Organisms/ActivityFeed",
  component: ActivityFeed,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ActivityFeed>

export const Default: Story = { args: { items: activityFeed } }
