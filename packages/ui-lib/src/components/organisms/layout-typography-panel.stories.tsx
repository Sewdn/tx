import type { Meta, StoryObj } from "@storybook/react-vite"

import { LayoutTypographyPanel } from "./layout-typography-panel"

const meta: Meta<typeof LayoutTypographyPanel> = {
  title: "Gittenberg/v2/Organisms/LayoutTypographyPanel",
  component: LayoutTypographyPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof LayoutTypographyPanel>

export const Default: Story = { args: { marginMm: 22, fontSizePt: 11.5 } }
