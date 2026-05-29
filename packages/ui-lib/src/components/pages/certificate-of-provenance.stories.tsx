import type { Meta, StoryObj } from "@storybook/react-vite"

import { CertificateActionPanel } from "@/components/organisms/certificate-action-panel"
import { CertificateOfProvenance } from "@/components/organisms/certificate-of-provenance"
import { certificateFields } from "@/fixtures/v2-from-seed"

function CertificateOfProvenancePage() {
  const patronName =
    certificateFields.find((field) => field.label === "Patron")?.value ?? "Anonymous Patron"
  const workTitle =
    certificateFields.find((field) => field.label === "Work")?.value ?? "Moby Dick"
  const workAuthor =
    certificateFields.find((field) => field.label === "Author")?.value ?? "Herman Melville"
  const arweaveTxId = certificateFields.find((field) => field.label === "Arweave TX")?.value

  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="mx-auto max-w-md px-boundary py-page">
        <CertificateOfProvenance
          patronName={patronName}
          workTitle={workTitle}
          workAuthor={workAuthor}
          decree="The steward is granted perpetual citation rights and public credit for anchoring this edition to the Eternal Archive."
          fields={certificateFields}
        />
        <CertificateActionPanel arweaveTxId={arweaveTxId} />
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Certificate of Provenance",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <CertificateOfProvenancePage />,
}
