import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type FormatArtifactCardProps = {
  icon: string
  title: string
  description: string
  size: string
  className?: string
}

export function FormatArtifactCard({
  icon,
  title,
  description,
  size,
  className,
}: FormatArtifactCardProps) {
  return (
    <div
      className={cn(
        "tonal-layer-1 rounded border border-outline-variant p-6 transition-all hover:border-outline hover:shadow-md",
        className,
      )}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded bg-surface-container-highest">
        <MaterialIcon name={icon} className="text-primary" />
      </div>
      <h5 className="mb-1 font-bold text-primary">{title}</h5>
      <p className="mb-4 font-ui-label-sm text-ui-label-sm text-on-surface-variant">{description}</p>
      <div className="mt-auto flex items-center justify-between border-t border-outline-variant/50 pt-4">
        <span className="font-code-sm text-[11px]">{size}</span>
        <MaterialIcon name="download" className="cursor-pointer text-primary" />
      </div>
    </div>
  )
}
