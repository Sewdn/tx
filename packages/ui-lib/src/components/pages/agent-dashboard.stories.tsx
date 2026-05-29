import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  activityFeed,
  agentDashboardMetrics,
  agentDashboardRows,
  curationBars,
} from "@/fixtures/slices"
import { defaultNavItems } from "@/fixtures/gittenberg"
import { ActivityFeed } from "@/components/organisms/activity-feed"
import { AgentDashboardTable } from "@/components/organisms/agent-dashboard-table"
import { CurationProgressChart } from "@/components/organisms/curation-progress-chart"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { MetricGrid } from "@/components/organisms/metric-grid"

function AgentDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={defaultNavItems}
        activeNavId="agents"
        searchPlaceholder="Search agents or activity..."
      />
      <main className="mx-auto grid max-w-container-max grid-cols-12 gap-gutter px-margin-desktop pt-24 pb-12">
        <div className="col-span-12 mb-6">
          <h1 className="font-headline-lg text-headline-lg text-primary">Agent Orchestration</h1>
          <p className="max-w-2xl text-on-surface-variant">
            A real-time overview of automated curation, stylistic normalization, and OCR
            correction protocols across the Gittenberg digital stacks.
          </p>
        </div>
        <div className="col-span-12">
          <MetricGrid metrics={agentDashboardMetrics} />
        </div>
        <div className="col-span-12 space-y-gutter lg:col-span-8">
          <AgentDashboardTable agents={agentDashboardRows} />
          <CurationProgressChart bars={curationBars} />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ActivityFeed items={activityFeed} />
        </div>
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Agent Dashboard",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <AgentDashboardPage />,
}
