import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems } from "@/fixtures/gittenberg"
import { bindingOptions, printOrderMeta } from "@/fixtures/v2-from-seed"
import { Book3DPreview } from "@/components/organisms/book-3d-preview"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { PrintCustomizationPanel } from "@/components/organisms/print-customization-panel"
import { PrintOrderStepper } from "@/components/organisms/print-order-stepper"

function PrintOrderPage() {
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
            coverOptions={[
              {
                id: "original",
                label: "Original Art",
                description: "Canonical cover from repository",
                selected: true,
              },
              {
                id: "minimal",
                label: "Scholarly Minimal",
                description: "Clean typography on archival stock",
              },
            ]}
            bindingOptions={bindingOptions}
          />
        </div>
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Print Order",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <PrintOrderPage />,
}
