import type { Meta, StoryObj } from "@storybook/react-vite"

import { certificateFields } from "@/fixtures/v2-from-seed"
import { AnchorMetadataRow } from "./anchor-metadata-row"

const meta: Meta<typeof AnchorMetadataRow> = {
  title: "Gittenberg/v2/Molecules/AnchorMetadataRow",
  component: AnchorMetadataRow,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AnchorMetadataRow>

export const Default: Story = {
  args: {
    label: certificateFields.find((field) => field.label === "Commit")?.label ?? "Commit Hash",
    value: certificateFields.find((field) => field.label === "Commit")?.value ?? "",
  },
}
