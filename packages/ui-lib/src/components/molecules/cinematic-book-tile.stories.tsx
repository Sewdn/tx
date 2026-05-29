import type { Meta, StoryObj } from "@storybook/react-vite"

import { cinematicBookTiles } from "@/fixtures/v2-from-seed"
import { CinematicBookTile } from "./cinematic-book-tile"

const meta: Meta<typeof CinematicBookTile> = {
  title: "Gittenberg/v2/Molecules/CinematicBookTile",
  component: CinematicBookTile,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
}

export default meta
type Story = StoryObj<typeof CinematicBookTile>

export const Default: Story = { args: cinematicBookTiles[0] }
