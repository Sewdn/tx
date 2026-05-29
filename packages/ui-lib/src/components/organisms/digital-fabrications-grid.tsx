import { FormatArtifactCard } from "@/components/molecules/format-artifact-card"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { FormatArtifact } from "@/lib/types"

export type DigitalFabricationsGridProps = {
  title?: string
  artifacts: FormatArtifact[]
  printPriceLabel?: string
  printCtaLabel?: string
  onPrintClick?: () => void
  className?: string
}

export function DigitalFabricationsGrid({
  title = "Digital Fabrications",
  artifacts,
  printPriceLabel = "$24.99",
  printCtaLabel = "Order Print Edition",
  onPrintClick,
  className,
}: DigitalFabricationsGridProps) {
  return (
    <section className={cn("mb-region", className)}>
      <h3 className="mb-section border-l-4 border-primary pl-4 font-headline-lg text-[24px] text-primary">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-section md:grid-cols-3">
        {artifacts.map((artifact) => (
          <FormatArtifactCard key={artifact.id} {...artifact} />
        ))}
        <div className="flex flex-col justify-between rounded border border-outline-variant bg-surface-container-low p-section transition-all hover:border-outline hover:shadow-md">
          <div>
            <div className="mb-component flex size-10 items-center justify-center rounded bg-surface-container-highest">
              <MaterialIcon name="print" className="text-primary" />
            </div>
            <h5 className="mb-micro font-bold text-primary">Print on Demand</h5>
            <p className="mb-component font-ui-label-sm text-ui-label-sm text-on-surface-variant">
              Premium hardcover with archival paper stock.
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-outline-variant/50 pt-4">
            <span className="font-ui-label-md font-bold text-primary">{printPriceLabel}</span>
            <Button
              onClick={onPrintClick}
              className="bg-primary font-ui-label-sm text-on-primary hover:bg-primary-container"
            >
              {printCtaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
