import type { Meta, StoryObj } from "@storybook/react-vite"

import { libraryBuilds } from "@/fixtures/slices"
import { BuildCatalogGrid } from "./build-catalog-grid"

const meta: Meta<typeof BuildCatalogGrid> = {
  title: "Gittenberg/Library/Organisms/BuildCatalogGrid",
  component: BuildCatalogGrid,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BuildCatalogGrid>

export const Default: Story = { args: { title: "Library of Builds", subtitle: "Showing 4 of 2,481", builds: libraryBuilds } }
