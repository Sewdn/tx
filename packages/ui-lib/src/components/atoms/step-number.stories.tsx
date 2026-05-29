import type { Meta, StoryObj } from "@storybook/react-vite"

import { StepNumber } from "./step-number"

const meta: Meta<typeof StepNumber> = {
  title: "Gittenberg/v2/Atoms/StepNumber",
  component: StepNumber,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StepNumber>

export const Default: Story = { args: { number: 1, active: true } }
