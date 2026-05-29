import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"

export type OrderTotalBarProps = {
  totalLabel: string
  totalCents: number
  ctaLabel: string
  onCtaClick?: () => void
  className?: string
}

function formatCents(cents: number) {
  return `$${(cents / 100).toFixed(2)}`
}

export function OrderTotalBar({
  totalLabel,
  totalCents,
  ctaLabel,
  onCtaClick,
  className,
}: OrderTotalBarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t border-border-warm pt-8",
        className,
      )}
    >
      <div>
        <span className="block font-ui-label-sm text-ui-label-sm text-on-surface-variant uppercase tracking-widest">
          {totalLabel}
        </span>
        <span className="font-headline-lg text-headline-lg text-primary">
          {formatCents(totalCents)}
        </span>
      </div>
      <Button
        onClick={onCtaClick}
        className="bg-primary px-12 py-4 font-ui-label-md font-bold text-on-primary shadow-lg hover:bg-ink-primary active:translate-y-px"
      >
        {ctaLabel}
      </Button>
    </div>
  )
}
