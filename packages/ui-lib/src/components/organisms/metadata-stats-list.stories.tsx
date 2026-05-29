import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition } from "@/fixtures/v2-from-seed"
import { MetadataStatsList } from "./metadata-stats-list"

const meta: Meta<typeof MetadataStatsList> = {
  title: "Gittenberg/v2/Organisms/MetadataStatsList",
  component: MetadataStatsList,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof MetadataStatsList>

export const Default: Story = {
  args: {
    fields: [
      { label: "Provenance", value: "Verified" },
      { label: "Citations", value: "892" },
      { label: "Archive Size", value: "18.6 MB" },
      { label: "Lens", value: foundationEdition.lensLabel ?? "Sci-Fi Modernism" },
    ],
  },
}
