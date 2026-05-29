import type { Meta, StoryObj } from "@storybook/react-vite"

import { MaterialIcon } from "./material-icon"

const meta: Meta<typeof MaterialIcon> = {
  title: "Gittenberg/Shell/Atoms/MaterialIcon",
  component: MaterialIcon,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MaterialIcon>

export const Default: Story = { args: { name: "menu_book" } }
export const Small: Story = { args: { name: "search", size: 20 } }
