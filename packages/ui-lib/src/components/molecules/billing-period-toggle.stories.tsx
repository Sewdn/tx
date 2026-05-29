import type { Meta, StoryObj } from "@storybook/react-vite"

import { BillingPeriodToggle } from "./billing-period-toggle"

const meta: Meta<typeof BillingPeriodToggle> = {
  title: "Gittenberg/v2/Molecules/BillingPeriodToggle",
  component: BillingPeriodToggle,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BillingPeriodToggle>

export const Default: Story = { args: { period: "monthly" } }
