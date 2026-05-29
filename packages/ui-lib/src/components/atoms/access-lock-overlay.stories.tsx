import type { Meta, StoryObj } from "@storybook/react-vite"

import { AccessLockOverlay } from "./access-lock-overlay"

const meta: Meta<typeof AccessLockOverlay> = {
  title: "Gittenberg/v2/Atoms/AccessLockOverlay",
  component: AccessLockOverlay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative h-48 w-44 overflow-hidden bg-surface-container-high">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AccessLockOverlay>

export const Default: Story = {}
