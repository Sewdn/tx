import type { Meta, StoryObj } from "@storybook/react-vite"

import { asimovSpotlight } from "@/fixtures/v2-from-seed"
import { AuthorSpotlightPanel } from "./author-spotlight-panel"

const meta: Meta<typeof AuthorSpotlightPanel> = {
  title: "Gittenberg/v2/Organisms/AuthorSpotlightPanel",
  component: AuthorSpotlightPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof AuthorSpotlightPanel>

export const Default: Story = { args: asimovSpotlight }
