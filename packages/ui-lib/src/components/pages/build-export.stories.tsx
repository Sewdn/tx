import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  buildFormats,
  buildPreviewCover,
  designPresets,
  stylingSliders,
  stylingToggles,
} from "@/fixtures/slices"
import { useFormatSelection } from "@/hooks/use-format-selection"
import { usePresetSelection } from "@/hooks/use-preset-selection"
import { BuildPreviewCard } from "@/components/organisms/build-preview-card"
import { BuildProgressPanel } from "@/components/organisms/build-progress-panel"
import { FormatSelector } from "@/components/organisms/format-selector"
import { LexiconAppBar } from "@/components/organisms/lexicon-app-bar"
import { LexiconSidebar } from "@/components/organisms/lexicon-sidebar"
import { PresetSelector } from "@/components/organisms/preset-selector"
import { StylingOptionsPanel } from "@/components/organisms/styling-options-panel"

const lexiconNav = [
  { id: "explorer", label: "Explorer", icon: "folder_open", href: "#" },
  { id: "vc", label: "Version Control", icon: "history", href: "#" },
  { id: "review", label: "Review", icon: "rate_review", href: "#" },
  { id: "lineage", label: "Lineage", icon: "account_tree", href: "#" },
  { id: "build", label: "Build", icon: "output", href: "#", active: true },
]

const lexiconAppNav = [
  { id: "repo", label: "Repository", href: "#", active: true },
  { id: "drafts", label: "Drafts", href: "#" },
  { id: "collab", label: "Collaborators", href: "#" },
  { id: "archives", label: "Archives", href: "#" },
]

function BuildExportPage() {
  const { formatOptions } = useFormatSelection(buildFormats)
  const { presetOptions } = usePresetSelection(designPresets)

  return (
    <div className="min-h-screen bg-background">
      <LexiconSidebar
        title="Lexicon Archival"
        subtitle="Public Domain Project"
        navItems={lexiconNav}
        primaryActionLabel="Commit Changes"
      />
      <div className="ml-64">
        <LexiconAppBar title="Lexicon IDE" navItems={lexiconAppNav} />
        <main className="grid min-h-[calc(100vh-4rem)] grid-cols-12 gap-region p-boundary">
          <div className="col-span-4 max-h-[calc(100vh-120px)] space-y-gutter overflow-y-auto pr-4 custom-scrollbar">
            <FormatSelector options={formatOptions} />
            <PresetSelector presets={presetOptions} />
            <StylingOptionsPanel sliders={stylingSliders} toggles={stylingToggles} />
          </div>
          <div className="col-span-8 flex h-full flex-col gap-section">
            <div className="group flex grow flex-col">
              <BuildPreviewCard
                author="Herman Melville"
                title="Moby Dick"
                subtitle="Or, The Whale"
                press="Gittenberg Press"
                edition="Edition v2.4.0-release"
                illustrationSrc={buildPreviewCover}
              />
            </div>
            <BuildProgressPanel
              title="Generating Output"
              statusMessage="Compiling chapter 42: The Whiteness of the Whale..."
              progressPercent={68}
              cancelLabel="Cancel Build"
              buildLabel="Build Now"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Build & Export",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <BuildExportPage />,
}
