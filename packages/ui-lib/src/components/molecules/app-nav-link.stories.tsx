import type { Meta, StoryObj } from "@storybook/react-vite"

import { AppNavLink } from "./app-nav-link"

const meta: Meta<typeof AppNavLink> = {
  title: "Gittenberg/Shell/Molecules/AppNavLink",
  component: AppNavLink,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppNavLink>

export const Default: Story = { args: { label: "Repositories", href: "#" } }
export const Active: Story = { args: { label: "Repositories", href: "#", active: true } }
