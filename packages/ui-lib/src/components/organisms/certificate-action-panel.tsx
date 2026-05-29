import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"

export type CertificateActionPanelProps = {
  arweaveTxId?: string
  onDownload?: () => void
  onShare?: () => void
  onCopyTx?: () => void
  className?: string
}

export function CertificateActionPanel({
  arweaveTxId,
  onDownload,
  onShare,
  onCopyTx,
  className,
}: CertificateActionPanelProps) {
  return (
    <div className={cn("flex flex-col gap-component", className)}>
      <Button
        onClick={onDownload}
        className="w-full bg-primary py-component font-ui-label-md text-on-primary"
      >
        <MaterialIcon name="download" size={18} />
        Download PDF
      </Button>
      <Button
        variant="outline"
        onClick={onShare}
        className="w-full border-outline-variant py-component font-ui-label-md text-primary"
      >
        <MaterialIcon name="share" size={18} />
        Share Certificate
      </Button>
      {arweaveTxId ? (
        <Button
          variant="outline"
          onClick={onCopyTx}
          className="w-full border-outline-variant py-component font-code-sm text-primary"
        >
          <MaterialIcon name="content_copy" size={18} />
          Copy TX ID
        </Button>
      ) : null}
    </div>
  )
}
