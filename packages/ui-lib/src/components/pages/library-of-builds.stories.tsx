import type { Meta, StoryObj } from "@storybook/react-vite"

import { libraryAuthors, libraryBuilds, libraryFormats } from "@/fixtures/slices"
import { defaultNavItems } from "@/fixtures/gittenberg"
import { BuildCatalogGrid } from "@/components/organisms/build-catalog-grid"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"
import { LibraryFilterSidebar } from "@/components/organisms/library-filter-sidebar"

const eraOptions = [
  { id: "1810", label: "1810s (Regency)" },
  { id: "1850", label: "1850s (Victorian)", selected: true },
  { id: "1890", label: "1890s (Fin de siècle)" },
]

function LibraryPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={defaultNavItems}
        activeNavId="library"
        searchPlaceholder="Search builds..."
      />
      <main className="mx-auto flex max-w-container-max flex-col gap-region px-boundary pt-reader pb-page md:flex-row">
        <LibraryFilterSidebar
          authors={libraryAuthors}
          eraOptions={eraOptions}
          formatChips={libraryFormats}
          selectedFormats={["EPUB"]}
        />
        <BuildCatalogGrid
          title="Library of Builds"
          subtitle="Showing 4 of 2,481 curated editions"
          builds={libraryBuilds}
        />
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Library of Builds",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <LibraryPage />,
}
