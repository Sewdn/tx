import type { Meta, StoryObj } from "@storybook/react-vite"

import { foundationBuild } from "@/fixtures/v2-from-seed"
import { ArweaveAnchoringHeader } from "./arweave-anchoring-header"

const meta: Meta<typeof ArweaveAnchoringHeader> = {
  title: "Gittenberg/v2/Organisms/ArweaveAnchoringHeader",
  component: ArweaveAnchoringHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ArweaveAnchoringHeader>

export const Default: Story = {
  args: {
    title: "Anchor to the Permaweb",
    description: `Permanently preserve "${foundationBuild.title}" on Arweave with cryptographic provenance.`,
  },
}
