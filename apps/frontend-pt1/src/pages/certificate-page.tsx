import { Link, useParams } from "react-router-dom"
import { CertificateActionPanel, CertificateOfProvenance } from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { certificateIdParam, routes } from "@/navigation/routes"

export function CertificatePage() {
  const params = useParams<{ [certificateIdParam]: string }>()
  const certificateId = params[certificateIdParam] ?? ""
  const data = useGittenbergData()
  const certificate = data.provenanceCertificates.find((entry) => entry.id === certificateId)

  if (!certificate) {
    return (
      <main className="mx-auto max-w-md px-boundary py-region">
        <p className="font-body-md text-on-surface-variant">Certificate not found.</p>
        <Link to={routes.eternalGallery} className="mt-component text-primary underline">
          Eternal Gallery
        </Link>
      </main>
    )
  }

  const fields = [
    { label: "Commit", value: certificate.commitHash },
    { label: "Arweave TX", value: certificate.arweaveTxId },
    { label: "Series", value: certificate.seriesLabel },
    { label: "Issued", value: certificate.issuedAt },
  ]

  return (
    <main className="mx-auto max-w-md space-y-region px-boundary py-region">
      <header className="flex items-center justify-between">
        <Link to={routes.eternalGallery} className="font-ui-label-md text-primary">
          ← Eternal Gallery
        </Link>
        <span className="font-ui-label-sm text-on-surface-variant">Mécène Portal</span>
      </header>
      <CertificateOfProvenance
        patronName={certificate.patronDisplayName}
        workTitle={certificate.workTitle}
        workAuthor={certificate.workAuthor}
        decree={certificate.stewardshipDecree}
        fields={fields}
      />
      <CertificateActionPanel
        arweaveTxId={certificate.arweaveTxId}
        onDownload={() => undefined}
        onShare={() => undefined}
        onCopyTx={() => navigator.clipboard?.writeText(certificate.arweaveTxId)}
      />
      <p className="font-ui-label-sm text-on-surface-variant">
        What is an Eternal Archival version? A permaweb-anchored commit funded by a Mécène patron,
        immutable on Arweave for centuries.
      </p>
    </main>
  )
}
