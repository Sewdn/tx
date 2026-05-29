import type { Meta, StoryObj } from "@storybook/react-vite"

import { userCollections } from "@/fixtures/v2-from-seed"
import { CollectionsWorkspaceSidebar } from "./collections-workspace-sidebar"

const meta: Meta<typeof CollectionsWorkspaceSidebar> = {
  title: "Gittenberg/v2/Organisms/CollectionsWorkspaceSidebar",
  component: CollectionsWorkspaceSidebar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CollectionsWorkspaceSidebar>

export const Default: Story = {
  args: {
    collections: userCollections.map((collection, index) => ({
      id: collection.id,
      name: collection.name,
      kind: "shelf" as const,
      active: index === 0,
    })),
    folders: [
      { id: "folder-sci-fi", name: "Sci-Fi Classics", active: false },
      { id: "folder-reading", name: "Currently Reading", active: true },
    ],
    onNewFolder: () => undefined,
  },
}
