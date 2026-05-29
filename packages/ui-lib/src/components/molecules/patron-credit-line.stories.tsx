import type { Meta, StoryObj } from "@storybook/react-vite"

import { PatronCreditLine } from "./patron-credit-line"

const meta: Meta<typeof PatronCreditLine> = {
  title: "Gittenberg/v2/Molecules/PatronCreditLine",
  component: PatronCreditLine,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PatronCreditLine>

export const Default: Story = { args: { patronName: "Dr. Elena Vance" } }
