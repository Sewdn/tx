import type { Meta, StoryObj } from "@storybook/react-vite"

import { RepositoryHero } from "./repository-hero"

const meta: Meta<typeof RepositoryHero> = {
  title: "Gittenberg/Edition History/Organisms/RepositoryHero",
  component: RepositoryHero,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof RepositoryHero>

export const Default: Story = { args: { badge: "Repository", repoId: "id: moby-dick-1851", title: "Moby Dick", description: "The Whale.", forkLabel: "Fork", watchLabel: "Watch" } }
