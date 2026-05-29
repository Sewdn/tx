import type { Meta, StoryObj } from "@storybook/react-vite"

import { OpenPagePreview } from "./open-page-preview"

const meta: Meta<typeof OpenPagePreview> = {
  title: "Gittenberg/v2/Organisms/OpenPagePreview",
  component: OpenPagePreview,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof OpenPagePreview>

export const Default: Story = {
  args: {
    dropCap: "H",
    paragraphs: [
      "Hari Seldon sat alone in the quiet of the Imperial Library, surrounded by the accumulated knowledge of a dying empire. The psychohistorical equations spread before him predicted collapse within five centuries.",
      "Yet within that collapse lay the seeds of renewal — a Foundation at the galaxy's edge, preserving the flame of civilization through the long dark.",
    ],
  },
}
