import type { Meta, StoryObj } from "@storybook/react-vite"

import { libraryAuthors, libraryFormats } from "@/fixtures/slices"
import { EternalGalleryFilterSidebar } from "./eternal-gallery-filter-sidebar"

const meta: Meta<typeof EternalGalleryFilterSidebar> = {
  title: "Gittenberg/v2/Organisms/EternalGalleryFilterSidebar",
  component: EternalGalleryFilterSidebar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof EternalGalleryFilterSidebar>

export const Default: Story = {
  args: {
    authors: libraryAuthors,
    eraOptions: [
      { id: "19th", label: "19th Century", selected: true },
      { id: "20th", label: "20th Century" },
    ],
    formatChips: libraryFormats,
    stewardshipLevels: [
      { id: "genesis", label: "Genesis", active: true },
      { id: "patron", label: "Patron" },
      { id: "community", label: "Community" },
    ],
    onContribute: () => undefined,
  },
}
