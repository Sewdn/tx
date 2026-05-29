import type { Meta, StoryObj } from "@storybook/react-vite"

import { certificateFields } from "@/fixtures/v2-from-seed"
import { CertificateActionPanel } from "./certificate-action-panel"

const meta: Meta<typeof CertificateActionPanel> = {
  title: "Gittenberg/v2/Organisms/CertificateActionPanel",
  component: CertificateActionPanel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof CertificateActionPanel>

export const Default: Story = {
  args: {
    arweaveTxId: certificateFields.find((field) => field.label === "Arweave TX")?.value,
  },
}
