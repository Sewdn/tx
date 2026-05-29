import type { Meta, StoryObj } from "@storybook/react-vite"

import { curatorAvatar, manuscriptFileTree } from "@/fixtures/slices"
import { CuratorProfile } from "@/components/organisms/curator-profile"
import { LexiconAppBar } from "@/components/organisms/lexicon-app-bar"
import { LexiconFileBrowser } from "@/components/organisms/lexicon-file-browser"
import { LexiconSidebar } from "@/components/organisms/lexicon-sidebar"
import { ManuscriptEditorPane } from "@/components/organisms/manuscript-editor-pane"

const lexiconNav = [
  { id: "explorer", label: "Explorer", icon: "folder_open", href: "#", active: true },
  { id: "vc", label: "Version Control", icon: "history", href: "#" },
  { id: "review", label: "Review", icon: "rate_review", href: "#" },
  { id: "lineage", label: "Lineage", icon: "account_tree", href: "#" },
  { id: "build", label: "Build", icon: "output", href: "#" },
]

const sampleMarkdown = `# Echoes of Dust

The morning air hung heavy with salt and the promise of departure.

> "It is not down on any map; true places never are."

Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse...`

function ManuscriptEditorPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <LexiconSidebar
        title="Lexicon Archival"
        subtitle="Public Domain Project"
        navItems={lexiconNav}
        primaryActionLabel="Commit Changes"
        className="relative z-50"
        footer={
          <CuratorProfile
            name="Dr. Elias Thorne"
            role="Lead Curator"
            avatarSrc={curatorAvatar}
          />
        }
      />
      <div className="ml-64 flex flex-1 flex-col">
        <LexiconAppBar
          title="Lexicon IDE"
          navItems={[
            { id: "repo", label: "Repository", href: "#", active: true },
            { id: "drafts", label: "Drafts", href: "#" },
            { id: "collab", label: "Collaborators", href: "#" },
            { id: "archives", label: "Archives", href: "#" },
          ]}
          avatarSrc={curatorAvatar}
        />
        <div className="flex flex-1 overflow-hidden">
          <LexiconFileBrowser nodes={manuscriptFileTree} />
          <ManuscriptEditorPane fileName="02_Echoes_of_Dust.md" content={sampleMarkdown} />
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Manuscript Editor",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <ManuscriptEditorPage />,
}
