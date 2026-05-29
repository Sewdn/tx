import type { Meta, StoryObj } from "@storybook/react-vite"

import { defaultNavItems } from "@/fixtures/gittenberg"
import { GittenbergTopAppBar } from "./gittenberg-top-app-bar"

const meta: Meta<typeof GittenbergTopAppBar> = {
  title: "Gittenberg/Shell/Organisms/GittenbergTopAppBar",
  component: GittenbergTopAppBar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof GittenbergTopAppBar>

export const Repositories: Story = { args: { brandName: "Gittenberg", brandHref: "/", navItems: defaultNavItems, activeNavId: "repositories", searchPlaceholder: "Search..." } }
