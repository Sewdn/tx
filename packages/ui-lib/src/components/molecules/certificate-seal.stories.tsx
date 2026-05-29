import type { Meta, StoryObj } from "@storybook/react-vite"

import { CertificateSeal } from "./certificate-seal"

const meta: Meta<typeof CertificateSeal> = {
  title: "Gittenberg/v2/Molecules/CertificateSeal",
  component: CertificateSeal,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CertificateSeal>

export const Default: Story = {}
