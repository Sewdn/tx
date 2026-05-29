import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch } from "@tx/ui"
import { cn } from "@/lib/utils"

export type InteriorStylingPanelProps = {
  illustrationsEnabled?: boolean
  onIllustrationsChange?: (enabled: boolean) => void
  style?: string
  onStyleChange?: (style: string) => void
  className?: string
}

const styleOptions = [
  { value: "scholarly", label: "Scholarly Minimal" },
  { value: "ornate", label: "Ornate Victorian" },
  { value: "modern", label: "Modern Clean" },
]

export function InteriorStylingPanel({
  illustrationsEnabled = true,
  onIllustrationsChange,
  style = "scholarly",
  onStyleChange,
  className,
}: InteriorStylingPanelProps) {
  return (
    <div className={cn("space-y-section", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor="illustrations" className="font-ui-label-md">
          Chapter Illustrations
        </Label>
        <Switch
          id="illustrations"
          checked={illustrationsEnabled}
          onCheckedChange={onIllustrationsChange}
        />
      </div>
      <div>
        <Label className="mb-micro block font-ui-label-md">Interior Style</Label>
        <Select value={style} onValueChange={onStyleChange}>
          <SelectTrigger className="w-full border-outline-variant">
            <SelectValue placeholder="Select style" />
          </SelectTrigger>
          <SelectContent>
            {styleOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
