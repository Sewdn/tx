import type { Meta, StoryObj } from "@storybook/react-vite"

import { PaperTextureOverlay } from "@/components/atoms/paper-texture-overlay"
import { CollectionBookGrid } from "@/components/organisms/collection-book-grid"
import { CollectionsWorkspaceSidebar } from "@/components/organisms/collections-workspace-sidebar"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { LoadMoreFooter } from "@/components/organisms/load-more-footer"
import { consumerNavItems } from "@/fixtures/gittenberg"
import { collectionBookCards, userCollections } from "@/fixtures/v2-from-seed"

function MyCollectionsPage() {
  return (
    <div className="relative min-h-screen bg-background" data-density="spacious">
      <PaperTextureOverlay />
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={consumerNavItems}
        activeNavId="collections"
        searchPlaceholder="Search your shelves..."
      />
      <main className="mx-auto flex max-w-container-max flex-col gap-region px-boundary pt-reader pb-page md:flex-row">
        <CollectionsWorkspaceSidebar
          collections={userCollections.map((collection, index) => ({
            id: collection.id,
            name: collection.name,
            kind: "shelf" as const,
            active: index === 0,
          }))}
          folders={[
            { id: "folder-sci-fi", name: "Sci-Fi Classics", active: false },
            { id: "folder-reading", name: "Currently Reading", active: true },
          ]}
          onNewFolder={() => undefined}
        />
        <div className="flex-1 space-y-region">
          <header>
            <h1 className="font-headline-lg text-headline-lg text-primary">My Collections</h1>
            <p className="text-on-surface-variant">
              Personal shelves, folders, and download-ready editions.
            </p>
          </header>
          <CollectionBookGrid items={collectionBookCards.slice(0, 4)} />
          <LoadMoreFooter shown={4} total={collectionBookCards.length} />
        </div>
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/My Collections",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <MyCollectionsPage />,
}
