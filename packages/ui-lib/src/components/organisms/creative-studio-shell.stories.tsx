import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@tx/ui"
import { BookCoverPreview } from "./book-cover-preview"
import { CreativeStudioShell } from "./creative-studio-shell"
import { StudioAgentSidebar } from "./studio-agent-sidebar"

const meta: Meta<typeof CreativeStudioShell> = {
  title: "Gittenberg/v2/Organisms/CreativeStudioShell",
  component: CreativeStudioShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof CreativeStudioShell>

export const Default: Story = {
  render: () => (
    <CreativeStudioShell
      preview={<BookCoverPreview title="Foundation" author="Isaac Asimov" coverSrc="https://placehold.co/300x450" />}
      sidebar={<StudioAgentSidebar activeTab="cover" />}
      footer={
        <>
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-primary text-on-primary">Send to Print Queue</Button>
        </>
      }
    />
  ),
}
