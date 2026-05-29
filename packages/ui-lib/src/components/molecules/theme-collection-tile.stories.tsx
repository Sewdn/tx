import type { Meta, StoryObj } from "@storybook/react-vite"

import { ThemeCollectionTile } from "./theme-collection-tile"

const meta: Meta<typeof ThemeCollectionTile> = {
  title: "Gittenberg/v2/Molecules/ThemeCollectionTile",
  component: ThemeCollectionTile,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
}

export default meta
type Story = StoryObj<typeof ThemeCollectionTile>

export const Default: Story = {
  args: {
    title: "Space Opera",
    description: "Intergalactic conflict and epic journeys across the stars.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADR0r6EXlgak-MZF1jhDU1JJIxnB0tbyLdSrRDFmhw-aOOlkcUVqyzMyc7FCBUuC6dXpQa8BbdjeZSvK4wySpVLnsexXEKCHzrLmIa6MvhezKV-wOi6GjH_nnUH8HlsvWdd-b90sh6swyebI9V3M1Z6nq0Q2k2MxM40WjWHpLD7_gwyRcBHfDgCIepzWeePvsscLVl6D48HAvdxXaw-97QxOoecOLRALdYP_lEigMKnsakhPyuNnq0UuH6qvFgMx1D8pb0l5aPvmcA",
    ctaLabel: "Explore Theme",
  },
}
