import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationEdition } from "@/fixtures/v2-from-seed"
import { ImmersiveLibraryHero } from "./immersive-library-hero"

const meta: Meta<typeof ImmersiveLibraryHero> = {
  title: "Gittenberg/v2/Organisms/ImmersiveLibraryHero",
  component: ImmersiveLibraryHero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ImmersiveLibraryHero>

export const Default: Story = {
  args: {
    title: foundationEdition.title,
    subtitle: foundationEdition.author,
    tagline: foundationEdition.tagline,
    editionTag: "SCHOLARLY EDITION V4.2",
    coverSrc: foundationEdition.coverUrl,
    backgroundSrc: foundationEdition.heroImageUrl,
    primaryCta: { label: "Read Now", variant: "primary", icon: "menu_book" },
    secondaryCta: { label: "Add to Collection", variant: "ghost", icon: "bookmark_add" },
  },
}
