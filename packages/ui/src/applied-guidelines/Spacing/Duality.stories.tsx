import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  DensityProvider,
  GridProvider,
  SpacingBox,
  SpacingGroup,
  useSpacingDensity,
  useSpacingGrid,
  type SpacingToken,
} from "@/lib/spacing-primitives"
import { cn } from "@/lib/utils"

function Gap({ token, showcase = false }: { token: SpacingToken; showcase?: boolean }) {
  const { show } = useSpacingGrid()
  const active = show && showcase
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full shrink-0",
        active && "bg-primary/15 outline outline-1 outline-dashed outline-primary/40",
      )}
      style={{ height: `var(--spacing-${token})` }}
    />
  )
}

function Bar({ className }: { className?: string }) {
  return <Skeleton className={cn("h-2 rounded-sm", className)} />
}

function Line({ className }: { className?: string }) {
  return <Skeleton className={cn("h-3 rounded-sm", className)} />
}

function StatCard({ label }: { label: string }) {
  return (
    <SpacingBox p="section" showcase className="rounded-xl border border-border bg-card">
      <SpacingGroup gap="micro" className="flex flex-col">
        <Bar className="w-24" />
        <Line className="w-16" />
        <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
      </SpacingGroup>
    </SpacingBox>
  )
}

function CurationDashboard() {
  return (
    <SpacingBox p="boundary" as="main" showcase className="min-h-full w-full bg-background">
      <SpacingGroup gap="component" className="flex flex-col">
        <SpacingGroup gap="micro" showcase className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Gittenberg / Agent orchestration
          </span>
          <h1 className="text-heading-xl font-semibold tracking-tight text-foreground">
            Curation operations
          </h1>
          <p className="text-sm text-muted-foreground">
            Live status across manuscript agents, open revisions, and build pipelines.
          </p>
        </SpacingGroup>

        <Gap token="region" showcase />

        <SpacingGroup gap="component" showcase className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Active agents" />
          <StatCard label="Commits today" />
          <StatCard label="Open revisions" />
          <StatCard label="Builds queued" />
        </SpacingGroup>

        <Gap token="region" />

        <SpacingGroup gap="component" className="grid grid-cols-1 lg:grid-cols-3">
          <SpacingBox p="section" showcase className="rounded-xl border border-border bg-card lg:col-span-2">
            <SpacingGroup gap="section" className="flex flex-col">
              <SpacingGroup gap="component" className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Manuscript activity</span>
                <Badge variant="secondary">Live</Badge>
              </SpacingGroup>
              <Separator />
              <Skeleton className="h-40 w-full rounded-md" />
              <Separator />
              <SpacingGroup gap="component" className="flex flex-col">
                {[1, 2, 3].map((id) => (
                  <SpacingBox
                    key={id}
                    p="component"
                    showcase={id === 1}
                    className="rounded-md border border-border/60 bg-background"
                  >
                    <SpacingGroup gap="component" className="flex items-center">
                      <Skeleton className="size-7 shrink-0 rounded-md" />
                      <SpacingGroup gap="micro" className="flex flex-1 flex-col">
                        <Line className="w-40" />
                        <Bar className="w-28" />
                      </SpacingGroup>
                      <Badge variant="outline">Running</Badge>
                    </SpacingGroup>
                  </SpacingBox>
                ))}
              </SpacingGroup>
            </SpacingGroup>
          </SpacingBox>

          <SpacingBox p="section" className="rounded-xl border border-border bg-card">
            <SpacingGroup gap="section" className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Recent builds</span>
              <Separator />
              <SpacingGroup gap="component" className="flex flex-col">
                {[1, 2, 3, 4].map((id) => (
                  <SpacingGroup key={id} gap="micro" className="flex flex-col">
                    <Line className="w-32" />
                    <Bar className="w-20" />
                  </SpacingGroup>
                ))}
              </SpacingGroup>
            </SpacingGroup>
          </SpacingBox>
        </SpacingGroup>
      </SpacingGroup>
    </SpacingBox>
  )
}

function Toolbar() {
  const { show, toggle } = useSpacingGrid()
  const { density, toggle: toggleDensity } = useSpacingDensity()
  return (
    <div className="flex items-center gap-component border-b border-border bg-card px-component py-component">
      <Button variant="outline" size="sm" onClick={toggle}>
        {show ? "Hide spacing grid" : "Show spacing grid"}
      </Button>
      <Button variant="outline" size="sm" onClick={toggleDensity}>
        {density === "spacious" ? "Switch to operational" : "Switch to spacious"}
      </Button>
    </div>
  )
}

const meta: Meta = {
  title: "Applied guidelines/Spacing",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, iframeHeight: 900 } },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Duality: Story = {
  render: () => (
    <GridProvider initial>
      <DensityProvider>
        <div className="flex min-h-svh flex-col">
          <Toolbar />
          <div className="flex-1 overflow-y-auto">
            <CurationDashboard />
          </div>
        </div>
      </DensityProvider>
    </GridProvider>
  ),
}
