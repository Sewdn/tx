import type { Meta, StoryObj } from "@storybook/react-vite"

import { TypographyController } from "./typography-controller"

const meta: Meta<typeof TypographyController> = {
  title: "Gittenberg/Revision/Organisms/TypographyController",
  component: TypographyController,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TypographyController>

export const Serif: Story = { args: { serifLabel: "Serif", sansLabel: "Sans", activeFamily: "serif" } }
