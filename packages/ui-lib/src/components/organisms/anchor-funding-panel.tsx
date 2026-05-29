import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button, Input, Label, Switch } from "@tx/ui"
import { cn } from "@/lib/utils"

export type AnchorCostLine = {
  label: string
  amount: string
}

export type AnchorFundingPanelProps = {
  costs: AnchorCostLine[]
  totalLabel: string
  patronName?: string
  onPatronNameChange?: (name: string) => void
  publicCredit?: boolean
  onPublicCreditChange?: (enabled: boolean) => void
  onConfirm?: () => void
  onCancel?: () => void
  className?: string
}

export function AnchorFundingPanel({
  costs,
  totalLabel,
  patronName = "",
  onPatronNameChange,
  publicCredit = true,
  onPublicCreditChange,
  onConfirm,
  onCancel,
  className,
}: AnchorFundingPanelProps) {
  return (
    <div className={cn("space-y-section", className)}>
      <div className="rounded border border-outline-variant">
        {costs.map((cost, index) => (
          <div
            key={cost.label}
            className={cn(
              "flex justify-between px-section py-component",
              index < costs.length - 1 && "border-b border-outline-variant",
            )}
          >
            <span className="font-ui-label-md text-ui-label-md text-on-surface-variant">{cost.label}</span>
            <span className="font-ui-label-md font-bold text-primary">{cost.amount}</span>
          </div>
        ))}
        <div className="flex justify-between bg-surface-container-low px-section py-component">
          <span className="font-ui-label-md font-bold text-primary">Total Endowment</span>
          <span className="font-headline-lg text-lg text-primary">{totalLabel}</span>
        </div>
      </div>
      <div>
        <Label htmlFor="patron-name" className="mb-micro block font-ui-label-md">
          Patron Display Name
        </Label>
        <Input
          id="patron-name"
          value={patronName}
          onChange={(event) => onPatronNameChange?.(event.target.value)}
          placeholder="Your name or alias"
          className="border-outline-variant"
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="public-credit" className="font-ui-label-md">
          Public credit on certificate
        </Label>
        <Switch id="public-credit" checked={publicCredit} onCheckedChange={onPublicCreditChange} />
      </div>
      <div className="flex gap-component">
        <Button variant="outline" onClick={onCancel} className="flex-1 border-outline-variant">
          Cancel
        </Button>
        <Button onClick={onConfirm} className="flex-1 bg-primary text-on-primary">
          <MaterialIcon name="all_inclusive" size={18} />
          Fund &amp; Anchor
        </Button>
      </div>
    </div>
  )
}
