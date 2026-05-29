import type { Meta, StoryObj } from "@storybook/react-vite"

import { mobyDickAgents, mobyDickMetadata } from "@/fixtures/gittenberg"
import { MetadataPanel } from "./metadata-panel"

const meta: Meta<typeof MetadataPanel> = {
  title: "Gittenberg/Repository/Organisms/MetadataPanel",
  component: MetadataPanel,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof MetadataPanel>

export const Default: Story = { args: { title: "Repository Metadata", fields: mobyDickMetadata, agentsTitle: "Agents Active (3)", agents: mobyDickAgents, agentsActive: true } }
