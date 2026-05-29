import { Label, Slider } from "@tx/ui"
import { cn } from "@/lib/utils"

export type LayoutTypographyPanelProps = {
  marginMm?: number
  fontSizePt?: number
  onMarginChange?: (value: number) => void
  onFontSizeChange?: (value: number) => void
  className?: string
}

export function LayoutTypographyPanel({
  marginMm = 20,
  fontSizePt = 12,
  onMarginChange,
  onFontSizeChange,
  className,
}: LayoutTypographyPanelProps) {
  return (
    <div className={cn("space-y-section", className)}>
      <div>
        <div className="mb-micro flex justify-between">
          <Label className="font-ui-label-md">Page Margins</Label>
          <span className="font-code-sm text-code-sm text-outline">{marginMm}mm</span>
        </div>
        <Slider
          value={[marginMm]}
          min={10}
          max={40}
          step={1}
          onValueChange={([value]) => onMarginChange?.(value ?? marginMm)}
        />
      </div>
      <div>
        <div className="mb-micro flex justify-between">
          <Label className="font-ui-label-md">Body Font Size</Label>
          <span className="font-code-sm text-code-sm text-outline">{fontSizePt}pt</span>
        </div>
        <Slider
          value={[fontSizePt]}
          min={9}
          max={16}
          step={0.5}
          onValueChange={([value]) => onFontSizeChange?.(value ?? fontSizePt)}
        />
      </div>
    </div>
  )
}
