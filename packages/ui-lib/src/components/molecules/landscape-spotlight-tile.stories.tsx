import type { Meta, StoryObj } from "@storybook/react-vite"

import { asimovSpotlight } from "@/fixtures/v2-from-seed"
import { LandscapeSpotlightTile } from "./landscape-spotlight-tile"

const meta: Meta<typeof LandscapeSpotlightTile> = {
  title: "Gittenberg/v2/Molecules/LandscapeSpotlightTile",
  component: LandscapeSpotlightTile,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
}

export default meta
type Story = StoryObj<typeof LandscapeSpotlightTile>

export const Default: Story = {
  args: {
    title: asimovSpotlight.name,
    subtitle: `${asimovSpotlight.birthYear}–${asimovSpotlight.deathYear}`,
    imageSrc: asimovSpotlight.portraitSrc,
    href: asimovSpotlight.collectionHref,
  },
}
