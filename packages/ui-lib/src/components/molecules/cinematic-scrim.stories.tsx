import type { Meta, StoryObj } from "@storybook/react-vite"

import { CinematicScrim } from "./cinematic-scrim"

const meta: Meta<typeof CinematicScrim> = {
  title: "Gittenberg/v2/Molecules/CinematicScrim",
  component: CinematicScrim,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof CinematicScrim>

export const Default: Story = {
  render: (args) => (
    <CinematicScrim {...args} className="h-96">
      <img
        alt="Hero backdrop"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkGgXNW87kBhyeuLPP2hCdA3buiAhxSQJxEQxmy9rwdsabVhZf2LmTdy1gCX2Txal7C-P-uuxODqj8uvsnoKVsZx9jmS0kBq9GnbNuIT6DUXeJnlWrrKkgG_XQN1-Qf2_kc-ol_VTr6XvjFh-DwRN0fkGaIfPp-40ZOfiJiFIjR3lL4-CUadIblpi3_HkJ_WrC2IdM1z4Q55JkRYK6lZNeaoKjrMxTiXPyCDDyVqb855pFp-1Ro-XTEE22LIsBeWlp99DGQVsG0fE_"
        className="size-full object-cover opacity-70"
      />
    </CinematicScrim>
  ),
}
