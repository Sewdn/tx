import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems } from "@/fixtures/gittenberg"
import { agentStyleChips, bindingOptions, printOrderMeta } from "@/fixtures/v2-from-seed"
import { AgentSummonPanel } from "@/components/organisms/agent-summon-panel"
import { Book3DPreview } from "@/components/organisms/book-3d-preview"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { PrintCustomizationPanel } from "@/components/organisms/print-customization-panel"
import { PrintOrderStepper } from "@/components/organisms/print-order-stepper"

function PrintOrderAgentPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={consumerNavItems}
        activeNavId="library"
        searchPlaceholder="Search editions..."
      />
      <main className="mx-auto max-w-container-max space-y-region px-boundary pt-reader pb-page">
        <PrintOrderStepper activeStep={1} />
        <div className="grid grid-cols-1 gap-region lg:grid-cols-2">
          <Book3DPreview coverSrc={printOrderMeta.coverSrc} title={printOrderMeta.title} />
          <PrintCustomizationPanel
            coverPanel={<AgentSummonPanel agents={agentStyleChips} />}
            bindingOptions={bindingOptions}
          />
        </div>
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Print Order Agent",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <PrintOrderAgentPage />,
}
