import type { Meta, StoryObj } from "@storybook/react-vite"

import { CoverDesignToggle } from "./cover-design-toggle"

const meta: Meta<typeof CoverDesignToggle> = {
  title: "Gittenberg/v2/Molecules/CoverDesignToggle",
  component: CoverDesignToggle,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CoverDesignToggle>

export const Default: Story = { args: { selected: "original" } }
