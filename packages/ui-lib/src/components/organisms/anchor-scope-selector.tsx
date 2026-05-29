import { AnchorMetadataRow } from "@/components/molecules/anchor-metadata-row"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type AnchorScopeSelectorProps = {
  commitHash: string
  commitMessage: string
  manifestSize: string
  fileCount: number
  selected?: boolean
  onSelect?: () => void
  className?: string
}

export function AnchorScopeSelector({
  commitHash,
  commitMessage,
  manifestSize,
  fileCount,
  selected = false,
  onSelect,
  className,
}: AnchorScopeSelectorProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "w-full border p-section text-left transition-all",
        selected ? "border-primary bg-primary-container/5" : "border-outline-variant hover:border-outline",
        className,
      )}
    >
      <div className="mb-component flex items-center gap-micro">
        <MaterialIcon name="commit" className="text-primary" />
        <span className="font-code-sm text-code-sm text-primary">{commitHash}</span>
      </div>
      <p className="mb-section font-ui-label-md text-ui-label-md">{commitMessage}</p>
      <div className="grid grid-cols-2 gap-section">
        <AnchorMetadataRow label="Manifest Size" value={manifestSize} />
        <AnchorMetadataRow label="Files" value={String(fileCount)} />
      </div>
    </button>
  )
}
