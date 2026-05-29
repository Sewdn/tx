import type { Meta, StoryObj } from "@storybook/react-vite"

import { PrintOrderStepper } from "./print-order-stepper"

const meta: Meta<typeof PrintOrderStepper> = {
  title: "Gittenberg/v2/Organisms/PrintOrderStepper",
  component: PrintOrderStepper,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PrintOrderStepper>

export const Customization: Story = { args: { activeStep: 1 } }
export const Shipping: Story = { args: { activeStep: 2 } }
export const Payment: Story = { args: { activeStep: 3 } }
