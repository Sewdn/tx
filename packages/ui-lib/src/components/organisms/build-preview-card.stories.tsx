import type { Meta, StoryObj } from "@storybook/react-vite"

import { buildPreviewCover } from "@/fixtures/slices"
import { BuildPreviewCard } from "./build-preview-card"

const meta: Meta<typeof BuildPreviewCard> = {
  title: "Gittenberg/Build & Export/Organisms/BuildPreviewCard",
  component: BuildPreviewCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof BuildPreviewCard>

export const Default: Story = { args: { author: "Herman Melville", title: "Moby Dick", subtitle: "Or, The Whale", press: "Gittenberg Press", edition: "v2.4.0", illustrationSrc: buildPreviewCover } }
