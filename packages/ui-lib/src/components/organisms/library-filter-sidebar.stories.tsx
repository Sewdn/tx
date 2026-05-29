import type { Meta, StoryObj } from "@storybook/react-vite"

import { libraryAuthors, libraryFormats } from "@/fixtures/slices"
import { LibraryFilterSidebar } from "./library-filter-sidebar"

const meta: Meta<typeof LibraryFilterSidebar> = {
  title: "Gittenberg/Library/Organisms/LibraryFilterSidebar",
  component: LibraryFilterSidebar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof LibraryFilterSidebar>

export const Default: Story = { args: { authors: libraryAuthors, eraOptions: [{ id: "1850", label: "1850s", selected: true }], formatChips: libraryFormats, selectedFormats: ["EPUB"] } }
