import type { Meta, StoryObj } from "@storybook/react-vite"

import { bindingOptions } from "@/fixtures/v2-from-seed"
import { BindingOptionRow } from "./binding-option-row"

const meta: Meta<typeof BindingOptionRow> = {
  title: "Gittenberg/v2/Molecules/BindingOptionRow",
  component: BindingOptionRow,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BindingOptionRow>

export const Default: Story = { args: bindingOptions[0] }
