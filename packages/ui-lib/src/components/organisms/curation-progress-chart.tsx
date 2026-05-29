import type { CurationBar } from "@/lib/types"

export type CurationProgressChartProps = {
  title?: string
  bars: CurationBar[]
}

export function CurationProgressChart({
  title = "Curation Progress",
  bars,
}: CurationProgressChartProps) {
  return (
    <section className="rounded-lg border border-outline-variant bg-surface-container-low p-6">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-headline-lg text-[20px] text-primary">{title}</h2>
        <div className="flex gap-2">
          <span className="inline-block size-3 rounded-full bg-secondary" />
          <span className="font-ui-label-sm text-outline">Metadata</span>
          <span className="ml-2 inline-block size-3 rounded-full bg-primary" />
          <span className="font-ui-label-sm text-outline">Correction</span>
        </div>
      </div>
      <div className="relative flex h-48 w-full items-end gap-4 overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between opacity-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-full border-t border-primary" />
          ))}
        </div>
        {bars.map((bar) => (
          <div
            key={bar.id}
            className="relative w-12 cursor-pointer rounded-t-sm bg-secondary/20"
            style={{ height: `${bar.heightPercent}%` }}
          >
            <div
              className="absolute inset-x-0 bottom-0 rounded-t-sm bg-secondary"
              style={{ height: `${bar.fillPercent}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between px-4 font-ui-label-sm text-outline">
        {bars.map((bar) => (
          <span key={bar.id}>{bar.label}</span>
        ))}
      </div>
    </section>
  )
}
