export type AnchorMetadataRowProps = {
  label: string
  value: string
  className?: string
}

export function AnchorMetadataRow({ label, value, className }: AnchorMetadataRowProps) {
  return (
    <div className={className}>
      <p className="mb-1 font-ui-label-sm text-[10px] text-outline uppercase">{label}</p>
      <p className="break-all font-code-sm text-code-sm text-primary">{value}</p>
    </div>
  )
}
