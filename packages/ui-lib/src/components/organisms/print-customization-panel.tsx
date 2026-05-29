import { BindingOptionRow } from "@/components/molecules/binding-option-row"
import { cn } from "@/lib/utils"
import type { BindingOptionData } from "@/lib/types"
import type { ReactNode } from "react"

export type CoverDesignOption = {
  id: string
  label: string
  description: string
  selected?: boolean
}

export type PrintCustomizationPanelProps = {
  coverPanel?: ReactNode
  coverOptions?: CoverDesignOption[]
  onCoverOptionSelect?: (id: string) => void
  bindingOptions: BindingOptionData[]
  onBindingSelect?: (id: string) => void
  className?: string
}

function CoverDesignToggle({
  options,
  onSelect,
}: {
  options: CoverDesignOption[]
  onSelect?: (id: string) => void
}) {
  return (
    <div className="grid grid-cols-2 gap-component">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect?.(option.id)}
          className={cn(
            "border p-component text-left transition-all",
            option.selected ? "border-primary bg-primary-container/5" : "border-outline-variant hover:border-outline",
          )}
        >
          <span className="block font-ui-label-md font-bold text-primary">{option.label}</span>
          <span className="block font-ui-label-sm text-ui-label-sm text-on-surface-variant">
            {option.description}
          </span>
        </button>
      ))}
    </div>
  )
}

export function PrintCustomizationPanel({
  coverPanel,
  coverOptions,
  onCoverOptionSelect,
  bindingOptions,
  onBindingSelect,
  className,
}: PrintCustomizationPanelProps) {
  return (
    <div className={cn("space-y-region", className)}>
      <div>
        <h3 className="mb-section font-ui-label-md font-bold uppercase tracking-widest text-outline">
          Cover Design
        </h3>
        {coverPanel ?? (
          <CoverDesignToggle options={coverOptions ?? []} onSelect={onCoverOptionSelect} />
        )}
      </div>
      <div>
        <h3 className="mb-section font-ui-label-md font-bold uppercase tracking-widest text-outline">
          Binding
        </h3>
        <div className="space-y-component">
          {bindingOptions.map((option) => (
            <BindingOptionRow key={option.id} {...option} onSelect={onBindingSelect} />
          ))}
        </div>
      </div>
    </div>
  )
}
