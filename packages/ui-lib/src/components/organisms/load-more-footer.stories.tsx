import type { Meta, StoryObj } from "@storybook/react-vite"

import { collectionBookCards } from "@/fixtures/v2-from-seed"
import { LoadMoreFooter } from "./load-more-footer"

const meta: Meta<typeof LoadMoreFooter> = {
  title: "Gittenberg/v2/Organisms/LoadMoreFooter",
  component: LoadMoreFooter,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof LoadMoreFooter>

export const Default: Story = {
  args: {
    shown: 4,
    total: collectionBookCards.length,
  },
}
