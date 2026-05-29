import type { Meta, StoryObj } from "@storybook/react-vite"

import { OrderTotalBar } from "./order-total-bar"

const meta: Meta<typeof OrderTotalBar> = {
  title: "Gittenberg/v2/Molecules/OrderTotalBar",
  component: OrderTotalBar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof OrderTotalBar>

export const Default: Story = {
  args: {
    totalLabel: "Est. Total",
    totalCents: 3400,
    ctaLabel: "Continue to Shipping",
  },
}
