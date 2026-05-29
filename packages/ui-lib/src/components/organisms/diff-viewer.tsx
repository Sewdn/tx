import { DiffLine } from "@/components/molecules/diff-line"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { DiffLineData } from "@/lib/types"

export type DiffViewerProps = {
  fileName: string
  viewMode: string
  alternateViewMode: string
  lines: DiffLineData[]
  className?: string
}

export function DiffViewer({
  fileName,
  viewMode,
  alternateViewMode,
  lines,
  className,
}: DiffViewerProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-6 py-4">
        <div className="flex items-center gap-3">
          <MaterialIcon name="description" className="text-outline" />
          <span className="font-code-sm text-code-sm">{fileName}</span>
        </div>
        <div className="flex gap-2">
          <span className="rounded border border-outline-variant bg-surface-variant px-3 py-1 font-ui-label-sm text-ui-label-sm">
            {viewMode}
          </span>
          <span className="rounded border border-outline-variant bg-background px-3 py-1 font-ui-label-sm text-ui-label-sm">
            {alternateViewMode}
          </span>
        </div>
      </div>
      <div className="overflow-x-auto font-code-sm text-code-sm">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line) => (
              <DiffLine
                key={line.id}
                variant={line.variant}
                oldLine={line.oldLine}
                newLine={line.newLine}
                content={line.content}
                icon={line.icon}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
