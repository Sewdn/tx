import type { Meta, StoryObj } from "@storybook/react-vite"

import { PaperTextureOverlay } from "./paper-texture-overlay"

const meta: Meta<typeof PaperTextureOverlay> = {
  title: "Gittenberg/v2/Atoms/PaperTextureOverlay",
  component: PaperTextureOverlay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative min-h-48 bg-background p-8">
        <p className="font-body-md text-body-md text-on-surface">
          Content beneath the grain overlay.
        </p>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PaperTextureOverlay>

export const Default: Story = {}
