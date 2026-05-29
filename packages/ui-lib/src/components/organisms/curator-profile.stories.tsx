import type { Meta, StoryObj } from "@storybook/react-vite"

import { curatorAvatar } from "@/fixtures/slices"
import { CuratorProfile } from "./curator-profile"

const meta: Meta<typeof CuratorProfile> = {
  title: "Gittenberg/Lexicon Editor/Organisms/CuratorProfile",
  component: CuratorProfile,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CuratorProfile>

export const Default: Story = { args: { name: "Dr. Elias Thorne", role: "Lead Curator", avatarSrc: curatorAvatar } }
