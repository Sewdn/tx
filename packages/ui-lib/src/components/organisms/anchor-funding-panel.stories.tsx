import type { Meta, StoryObj } from "@storybook/react-vite"

import { AnchorFundingPanel } from "./anchor-funding-panel"

const meta: Meta<typeof AnchorFundingPanel> = {
  title: "Gittenberg/v2/Organisms/AnchorFundingPanel",
  component: AnchorFundingPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AnchorFundingPanel>

export const Default: Story = {
  args: {
    costs: [
      { label: "Storage (200 years)", amount: "$4.20" },
      { label: "Network Fee", amount: "$0.08" },
      { label: "Gittenberg Service", amount: "$2.00" },
    ],
    totalLabel: "$6.28",
    patronName: "Dr. Elena Vasquez",
    publicCredit: true,
  },
}
