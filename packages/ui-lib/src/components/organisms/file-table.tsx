import { FileTableRow } from "@/components/molecules/file-table-row"
import { cn } from "@/lib/utils"
import type { FileTableRowData } from "@/lib/types"

export type FileTableProps = {
  branchLabel: string
  branchName: string
  lastUpdate: string
  rows: FileTableRowData[]
  className?: string
}

export function FileTable({
  branchLabel,
  branchName,
  lastUpdate,
  rows,
  className,
}: FileTableProps) {
  return (
    <section className={cn("tonal-surface overflow-hidden rounded-lg", className)}>
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-high px-section py-component">
        <span className="font-ui-label-md text-ui-label-md font-bold text-primary">
          {branchLabel}: <span className="font-normal opacity-70">{branchName}</span>
        </span>
        <span className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">
          {lastUpdate}
        </span>
      </div>
      <div className="divide-y divide-outline-variant">
        {rows.map((row) => (
          <FileTableRow
            key={row.id}
            icon={row.icon}
            name={row.name}
            description={row.description}
            timestamp={row.timestamp}
            highlighted={row.highlighted}
            highlightLabel={row.highlightLabel}
          />
        ))}
      </div>
    </section>
  )
}
