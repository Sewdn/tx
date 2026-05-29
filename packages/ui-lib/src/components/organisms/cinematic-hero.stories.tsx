import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition } from "@/fixtures/v2-from-seed"
import { CinematicHero } from "./cinematic-hero"

const meta: Meta<typeof CinematicHero> = {
  title: "Gittenberg/v2/Organisms/CinematicHero",
  component: CinematicHero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof CinematicHero>

export const Default: Story = {
  args: {
    title: foundationEdition.title,
    subtitle: foundationEdition.author,
    tagline: foundationEdition.tagline,
    editionTag: "SCHOLARLY EDITION V4.2",
    coverSrc: foundationEdition.coverUrl,
    backgroundSrc: foundationEdition.heroImageUrl,
    primaryCta: { label: "Read Now", variant: "primary", icon: "menu_book" },
    secondaryCta: { label: "My Collection", variant: "ghost", icon: "bookmark" },
  },
}
