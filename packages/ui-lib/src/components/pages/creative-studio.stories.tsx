import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@tx/ui"
import { AgentSummonPanel } from "@/components/organisms/agent-summon-panel"
import { BookCoverPreview } from "@/components/organisms/book-cover-preview"
import { CreativeStudioShell } from "@/components/organisms/creative-studio-shell"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { InteriorStylingPanel } from "@/components/organisms/interior-styling-panel"
import { LayoutTypographyPanel } from "@/components/organisms/layout-typography-panel"
import { StudioAgentSidebar } from "@/components/organisms/studio-agent-sidebar"
import { curatorNavItems } from "@/fixtures/gittenberg"
import { agentStyleChips, foundationEdition } from "@/fixtures/v2-from-seed"

function CreativeStudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={curatorNavItems}
        activeNavId="agents"
        searchPlaceholder="Search studio sessions..."
      />
      <CreativeStudioShell
        preview={
          <BookCoverPreview
            title={foundationEdition.title}
            author={foundationEdition.author}
            coverSrc={foundationEdition.coverUrl}
          />
        }
        sidebar={
          <StudioAgentSidebar
            activeTab="cover"
            coverPanel={<AgentSummonPanel agents={agentStyleChips} />}
            illustrationPanel={<InteriorStylingPanel />}
            layoutPanel={<LayoutTypographyPanel />}
          />
        }
        footer={
          <>
            <Button variant="outline">Save Draft</Button>
            <Button className="bg-primary text-on-primary">Send to Print Queue</Button>
          </>
        }
      />
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Creative Studio",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <CreativeStudioPage />,
}
