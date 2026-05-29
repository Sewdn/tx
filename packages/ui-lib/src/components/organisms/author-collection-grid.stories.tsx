import type { Meta, StoryObj } from "@storybook/react-vite"

import { libraryAuthors, libraryBuilds, libraryFormats } from "@/fixtures/slices"
import { AuthorCollectionGrid } from "./author-collection-grid"

const meta: Meta<typeof AuthorCollectionGrid> = {
  title: "Gittenberg/v2/Organisms/AuthorCollectionGrid",
  component: AuthorCollectionGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AuthorCollectionGrid>

export const Default: Story = {
  args: {
    authors: libraryAuthors.filter((author) => author.label.includes("Asimov")),
    eraOptions: [
      { id: "1950s", label: "1950s", selected: true },
      { id: "1960s", label: "1960s" },
    ],
    formatChips: libraryFormats,
    editions: libraryBuilds.filter((build) => build.author.includes("Asimov")),
  },
}
