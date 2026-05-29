import { FormatArtifactCard } from "@/components/molecules/format-artifact-card"
import { MaterialIcon } from "@/components/atoms/material-icon"
import type { FormatArtifact } from "@/lib/types"

export type FormatArtifactGridProps = {
  title?: string
  rebuildLabel?: string
  artifacts: FormatArtifact[]
}

export function FormatArtifactGrid({
  title = "Generated Formats",
  rebuildLabel = "Rebuild All",
  artifacts,
}: FormatArtifactGridProps) {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-headline-lg text-[24px] text-primary">{title}</h3>
        <span className="flex items-center gap-2 font-ui-label-md font-bold text-primary">
          <MaterialIcon name="refresh" size={20} />
          {rebuildLabel}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {artifacts.map((artifact) => (
          <FormatArtifactCard key={artifact.id} {...artifact} />
        ))}
      </div>
    </section>
  )
}
