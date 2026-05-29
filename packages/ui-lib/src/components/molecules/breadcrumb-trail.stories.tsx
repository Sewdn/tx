import type { Meta, StoryObj } from "@storybook/react-vite"

import { BreadcrumbTrail } from "./breadcrumb-trail"

const meta: Meta<typeof BreadcrumbTrail> = {
  title: "Gittenberg/Revision/Molecules/BreadcrumbTrail",
  component: BreadcrumbTrail,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BreadcrumbTrail>

export const Default: Story = { args: { segments: [{ label: "Revisions" }, { label: "PR #142" }] } }
