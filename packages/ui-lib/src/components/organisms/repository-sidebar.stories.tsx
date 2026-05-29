import type { Meta, StoryObj } from "@storybook/react-vite"

import { mobyDickCover, mobyDickSidebarFooter, mobyDickSidebarNav } from "@/fixtures/gittenberg"
import { RepositorySidebar } from "./repository-sidebar"

const meta: Meta<typeof RepositorySidebar> = {
  title: "Gittenberg/Repository/Organisms/RepositorySidebar",
  component: RepositorySidebar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof RepositorySidebar>

export const Default: Story = { args: { title: "Moby Dick", subtitle: "Herman Melville", coverSrc: mobyDickCover, coverAlt: "Cover", navItems: mobyDickSidebarNav, footerItems: mobyDickSidebarFooter, primaryActionLabel: "Create Revision" } }
