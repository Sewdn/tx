import { AgentStyleChip } from "@/components/molecules/agent-style-chip"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { Button, Textarea } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { AgentStyleChipData } from "@/lib/types"

export type AgentSummonPanelProps = {
  agents: AgentStyleChipData[]
  intent?: string
  onIntentChange?: (value: string) => void
  onAgentSelect?: (id: string) => void
  onRegenerate?: () => void
  className?: string
}

export function AgentSummonPanel({
  agents,
  intent = "",
  onIntentChange,
  onAgentSelect,
  onRegenerate,
  className,
}: AgentSummonPanelProps) {
  return (
    <div className={cn("space-y-section", className)}>
      <div>
        <h4 className="mb-component font-ui-label-md font-bold text-primary">Select Agent</h4>
        <div className="grid grid-cols-2 gap-component">
          {agents.map((agent) => (
            <AgentStyleChip key={agent.id} {...agent} onSelect={onAgentSelect} />
          ))}
        </div>
      </div>
      <div>
        <label className="mb-micro block font-ui-label-md font-bold text-primary">Cover Intent</label>
        <Textarea
          value={intent}
          onChange={(event) => onIntentChange?.(event.target.value)}
          placeholder="Describe the mood, palette, and symbolism for your cover…"
          className="min-h-24 resize-none border-outline-variant font-body-md"
        />
      </div>
      <Button
        onClick={onRegenerate}
        className="w-full bg-primary font-ui-label-md text-on-primary"
      >
        <MaterialIcon name="autorenew" size={18} />
        Regenerate Art
      </Button>
    </div>
  )
}
