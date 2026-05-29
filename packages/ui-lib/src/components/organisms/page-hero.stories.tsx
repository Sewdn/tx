import type { Meta, StoryObj } from "@storybook/react-vite"

import { PageHero } from "./page-hero"

const meta: Meta<typeof PageHero> = {
  title: "Gittenberg/Repository/Organisms/PageHero",
  component: PageHero,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PageHero>

export const Default: Story = { args: { tags: [{ variant: "public-domain", label: "Public Domain" }], title: "Repository Home", subtitle: "Call me Ishmael..." } }
