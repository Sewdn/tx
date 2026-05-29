import type { Meta, StoryObj } from "@storybook/react-vite"

import { defaultNavItems } from "@/fixtures/gittenberg"
import { ReaderTopAppBar } from "./reader-top-app-bar"

const meta: Meta<typeof ReaderTopAppBar> = {
  title: "Gittenberg/Reader/Organisms/ReaderTopAppBar",
  component: ReaderTopAppBar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ReaderTopAppBar>

export const Default: Story = { args: { brandName: "Gittenberg", navItems: defaultNavItems, activeNavId: "repositories" } }
