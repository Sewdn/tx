import { Tabs, TabsContent, TabsList, TabsTrigger } from "@tx/ui"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type StudioTab = "cover" | "illustration" | "layout"

export type StudioAgentSidebarProps = {
  activeTab?: StudioTab
  coverPanel?: ReactNode
  illustrationPanel?: ReactNode
  layoutPanel?: ReactNode
  className?: string
}

export function StudioAgentSidebar({
  activeTab = "cover",
  coverPanel,
  illustrationPanel,
  layoutPanel,
  className,
}: StudioAgentSidebarProps) {
  return (
    <Tabs defaultValue={activeTab} className={cn("h-full", className)}>
      <TabsList className="grid w-full grid-cols-3 rounded-none border-b border-outline-variant bg-transparent">
        <TabsTrigger value="cover" className="font-ui-label-md">
          Cover Design
        </TabsTrigger>
        <TabsTrigger value="illustration" className="font-ui-label-md">
          Illustration
        </TabsTrigger>
        <TabsTrigger value="layout" className="font-ui-label-md">
          Layout
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cover" className="p-section">
        {coverPanel ?? <p className="font-ui-label-md text-on-surface-variant">Cover design controls</p>}
      </TabsContent>
      <TabsContent value="illustration" className="p-section">
        {illustrationPanel ?? (
          <p className="font-ui-label-md text-on-surface-variant">Illustration controls</p>
        )}
      </TabsContent>
      <TabsContent value="layout" className="p-section">
        {layoutPanel ?? <p className="font-ui-label-md text-on-surface-variant">Layout controls</p>}
      </TabsContent>
    </Tabs>
  )
}
