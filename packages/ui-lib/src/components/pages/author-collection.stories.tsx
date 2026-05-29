import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems } from "@/fixtures/gittenberg"
import { asimovEditionCards, curatedAsimovCollection, libraryAuthors, libraryFormats } from "@/fixtures/slices"
import { AuthorCollectionGrid } from "@/components/organisms/author-collection-grid"
import { CollectionLandingHeader } from "@/components/organisms/collection-landing-header"
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar"

function AuthorCollectionPage() {
  return (
    <div className="min-h-screen bg-background" data-density="spacious">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={consumerNavItems}
        activeNavId="library"
        searchPlaceholder="Search Asimov editions..."
      />
      <CollectionLandingHeader
        backLabel="Back to Collections"
        backHref="#/collections"
        title={curatedAsimovCollection.title}
        description={curatedAsimovCollection.description}
        heroImageSrc={curatedAsimovCollection.heroImageUrl}
      />
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <AuthorCollectionGrid
          authors={libraryAuthors.filter((author) => author.id === "asimov")}
          eraOptions={curatedAsimovCollection.filterDefaults?.eras?.map((era, index) => ({
            id: era,
            label: era,
            selected: index === 0,
          })) ?? [{ id: "1950s", label: "1950s", selected: true }]}
          formatChips={libraryFormats}
          editions={asimovEditionCards}
        />
      </main>
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Author Collection",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <AuthorCollectionPage />,
}
