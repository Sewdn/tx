import type { Meta, StoryObj } from "@storybook/react-vite"

import { curatorNavItems, footerLinks } from "@/fixtures/gittenberg"
import { libraryAuthors, libraryFormats } from "@/fixtures/slices"
import { eternalGalleryCards } from "@/fixtures/v2-from-seed"
import { EternalGalleryFilterSidebar } from "@/components/organisms/eternal-gallery-filter-sidebar"
import { EternalGalleryGrid } from "@/components/organisms/eternal-gallery-grid"
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"

function EternalGalleryPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={curatorNavItems}
        activeNavId="repositories"
        searchPlaceholder="Search anchored manuscripts..."
      />
      <main className="mx-auto flex max-w-container-max flex-col gap-region px-boundary pt-reader pb-page md:flex-row">
        <EternalGalleryFilterSidebar
          authors={libraryAuthors}
          eraOptions={[
            { id: "19th", label: "19th Century", selected: true },
            { id: "20th", label: "20th Century" },
          ]}
          formatChips={libraryFormats}
          stewardshipLevels={[
            { id: "genesis", label: "Genesis", active: true },
            { id: "patron", label: "Patron" },
            { id: "community", label: "Community" },
          ]}
          onContribute={() => undefined}
        />
        <div className="flex-1 space-y-section">
          <header>
            <h1 className="font-headline-lg text-headline-lg text-primary">Eternal Gallery</h1>
            <p className="max-w-2xl text-on-surface-variant">
              Permaweb-anchored manuscripts with patron stewardship credit.
            </p>
          </header>
          <EternalGalleryGrid items={eternalGalleryCards} />
        </div>
      </main>
      <GittenbergFooter
        links={footerLinks}
        copyright="© 1851-2024 Gittenberg Public Domain Initiative"
      />
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Eternal Gallery",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <EternalGalleryPage />,
}
