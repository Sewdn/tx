import type { Meta, StoryObj } from "@storybook/react-vite"

import { ActiveBuildCard } from "./active-build-card"

const meta: Meta<typeof ActiveBuildCard> = {
  title: "Gittenberg/Edition History/Organisms/ActiveBuildCard",
  component: ActiveBuildCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof ActiveBuildCard>

export const Default: Story = { args: { versionWatermark: "v4.2", statusLabel: "Active Build: Production", title: "Scholarly Edition v4.2.0", description: "Latest orthographic corrections.", downloadLabel: "Download PDF", commitHash: "7e3a9c1" } }
