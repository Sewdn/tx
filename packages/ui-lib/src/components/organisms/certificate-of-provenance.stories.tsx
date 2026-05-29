import type { Meta, StoryObj } from "@storybook/react-vite"

import { certificateFields } from "@/fixtures/v2-from-seed"
import { CertificateOfProvenance } from "./certificate-of-provenance"

const meta: Meta<typeof CertificateOfProvenance> = {
  title: "Gittenberg/v2/Organisms/CertificateOfProvenance",
  component: CertificateOfProvenance,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof CertificateOfProvenance>

export const Default: Story = {
  args: {
    patronName: certificateFields.find((field) => field.label === "Patron")?.value ?? "Anonymous Patron",
    workTitle: certificateFields.find((field) => field.label === "Work")?.value ?? "Moby Dick",
    workAuthor: certificateFields.find((field) => field.label === "Author")?.value ?? "Herman Melville",
    decree:
      "The steward is granted perpetual citation rights and public credit for anchoring this edition to the Eternal Archive.",
    fields: certificateFields,
  },
}
