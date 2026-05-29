import type { Meta, StoryObj } from "@storybook/react-vite"

import { consumerNavItems } from "@/fixtures/v2-from-seed"
import { FloatingPillNav } from "./floating-pill-nav"

const meta: Meta<typeof FloatingPillNav> = {
  title: "Gittenberg/v2/Organisms/FloatingPillNav",
  component: FloatingPillNav,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof FloatingPillNav>

export const Default: Story = {
  args: {
    brandHref: "/",
    navItems: consumerNavItems.slice(0, 3),
    activeNavId: "library",
  },
}
