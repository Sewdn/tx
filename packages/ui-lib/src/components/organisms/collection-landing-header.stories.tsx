import type { Meta, StoryObj } from "@storybook/react-vite"

import { curatedAsimovCollection } from "@/fixtures/v2-from-seed"
import { CollectionLandingHeader } from "./collection-landing-header"

const meta: Meta<typeof CollectionLandingHeader> = {
  title: "Gittenberg/v2/Organisms/CollectionLandingHeader",
  component: CollectionLandingHeader,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof CollectionLandingHeader>

export const Default: Story = {
  args: {
    backLabel: "Back to Collections",
    backHref: "#/collections",
    title: curatedAsimovCollection.title,
    description: curatedAsimovCollection.description,
    heroImageSrc: curatedAsimovCollection.heroImageUrl,
  },
}
