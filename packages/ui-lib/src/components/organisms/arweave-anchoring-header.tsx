import { EternalBadge } from "@/components/atoms/eternal-badge"
import { cn } from "@/lib/utils"

export type ArweaveAnchoringHeaderProps = {
  title: string
  description: string
  className?: string
}

export function ArweaveAnchoringHeader({ title, description, className }: ArweaveAnchoringHeaderProps) {
  return (
    <header className={cn("border-b border-outline-variant px-boundary py-region", className)}>
      <EternalBadge label="Eternal Archive Initiation" variant="genesis" className="mb-component" />
      <h1 className="mb-component font-headline-lg text-headline-lg text-primary">{title}</h1>
      <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">{description}</p>
    </header>
  )
}
