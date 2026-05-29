import type { Meta, StoryObj } from "@storybook/react-vite"

import { SubscriptionFeatureRow } from "./subscription-feature-row"

const meta: Meta<typeof SubscriptionFeatureRow> = {
  title: "Gittenberg/v2/Molecules/SubscriptionFeatureRow",
  component: SubscriptionFeatureRow,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof SubscriptionFeatureRow>

export const Default: Story = {
  args: {
    icon: "cloud_download",
    title: "Unlimited High-Quality Downloads",
    description: "Lossless PDF and EPUB files with original typesetting and high-resolution scan plates.",
  },
}
