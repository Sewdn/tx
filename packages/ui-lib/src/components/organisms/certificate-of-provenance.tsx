import { MaterialIcon } from "@/components/atoms/material-icon"
import { AnchorMetadataRow } from "@/components/molecules/anchor-metadata-row"
import { cn } from "@/lib/utils"
import type { CertificateFieldData } from "@/lib/types"

export type CertificateOfProvenanceProps = {
  patronName: string
  workTitle: string
  workAuthor: string
  decree: string
  fields: CertificateFieldData[]
  className?: string
}

function CertificateSeal() {
  return (
    <div className="relative mx-auto flex size-24 items-center justify-center">
      <div className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-secondary/40 [animation-duration:20s]" />
      <div className="flex size-16 items-center justify-center rounded-full border-2 border-secondary bg-secondary-container">
        <MaterialIcon name="verified" size={28} className="text-secondary" filled />
      </div>
    </div>
  )
}

export function CertificateOfProvenance({
  patronName,
  workTitle,
  workAuthor,
  decree,
  fields,
  className,
}: CertificateOfProvenanceProps) {
  return (
    <article
      className={cn(
        "certificate-grain relative mx-auto max-w-md border-4 border-double border-outline-variant p-section",
        className,
      )}
    >
      <div className="mb-section text-center">
        <MaterialIcon name="workspace_premium" size={32} className="mx-auto mb-component text-secondary" />
        <h1 className="font-headline-lg text-headline-lg text-primary">Certificate of Provenance</h1>
        <p className="font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-outline">
          Literary Stewardship
        </p>
      </div>
      <p className="mb-section text-center font-body-md text-body-md text-on-surface-variant">
        This certifies that <strong className="text-primary">{patronName}</strong> holds stewardship
        over the following literary work:
      </p>
      <div className="mb-section border border-outline-variant bg-surface-container-low p-component text-center">
        <h2 className="font-headline-lg text-lg text-primary">{workTitle}</h2>
        <p className="font-ui-label-md italic text-on-surface-variant">{workAuthor}</p>
      </div>
      <p className="mb-section font-body-md text-body-md italic text-on-surface-variant">{decree}</p>
      <div className="mb-section grid grid-cols-2 gap-section">
        {fields.map((field) => (
          <AnchorMetadataRow key={field.label} {...field} />
        ))}
      </div>
      <CertificateSeal />
      <p className="mt-section text-center font-ui-label-sm text-[10px] uppercase tracking-widest text-outline/50">
        Gittenberg Eternal Archive
      </p>
    </article>
  )
}
