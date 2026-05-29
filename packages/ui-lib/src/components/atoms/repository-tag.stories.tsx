import type { Meta, StoryObj } from "@storybook/react-vite"

import { RepositoryTag } from "./repository-tag"

const meta: Meta<typeof RepositoryTag> = {
  title: "Gittenberg/Repository/Atoms/RepositoryTag",
  component: RepositoryTag,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RepositoryTag>

export const PublicDomain: Story = { args: { variant: "public-domain", label: "Public Domain" } }
export const AgentCurated: Story = { args: { variant: "agent-curated", label: "Agent-Curated" } }
export const Version: Story = { args: { variant: "version", label: "v2.4.0-prose" } }
