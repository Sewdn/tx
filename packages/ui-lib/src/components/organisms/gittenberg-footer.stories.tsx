import type { Meta, StoryObj } from "@storybook/react-vite"

import { footerLinks } from "@/fixtures/gittenberg"
import { GittenbergFooter } from "./gittenberg-footer"

const meta: Meta<typeof GittenbergFooter> = {
  title: "Gittenberg/Shell/Organisms/GittenbergFooter",
  component: GittenbergFooter,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof GittenbergFooter>

export const Default: Story = { args: { links: footerLinks, copyright: "© 1851-2024 Gittenberg" } }
