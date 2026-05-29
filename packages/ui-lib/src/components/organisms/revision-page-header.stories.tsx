import type { Meta, StoryObj } from "@storybook/react-vite"

import { RevisionPageHeader } from "./revision-page-header"

const meta: Meta<typeof RevisionPageHeader> = {
  title: "Gittenberg/Revision/Organisms/RevisionPageHeader",
  component: RevisionPageHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof RevisionPageHeader>

export const Default: Story = { args: { breadcrumbs: [{ label: "Revisions" }, { label: "PR #142" }], title: "Normalize punctuation", status: "open", author: "ScholasticCurator", timestamp: "4 hours ago" } }
