import type { Meta, StoryObj } from "@storybook/react-vite"

import { libraryBuilds } from "@/fixtures/slices"
import { BuildCatalogCard } from "./build-catalog-card"

const meta: Meta<typeof BuildCatalogCard> = {
  title: "Gittenberg/Library/Molecules/BuildCatalogCard",
  component: BuildCatalogCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BuildCatalogCard>

export const Default: Story = { args: libraryBuilds[0] }
