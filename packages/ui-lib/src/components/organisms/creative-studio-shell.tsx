import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type CreativeStudioShellProps = {
  preview: ReactNode
  sidebar: ReactNode
  footer?: ReactNode
  className?: string
}

export function CreativeStudioShell({
  preview,
  sidebar,
  footer,
  className,
}: CreativeStudioShellProps) {
  return (
    <div className={cn("flex min-h-[calc(100vh-4rem)] flex-col", className)}>
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-1 items-center justify-center bg-surface-container-low p-region">
          {preview}
        </div>
        <aside className="w-full shrink-0 border-l border-outline-variant bg-background lg:w-96">
          {sidebar}
        </aside>
      </div>
      {footer ? (
        <footer className="flex items-center justify-end gap-component border-t border-outline-variant px-boundary py-component">
          {footer}
        </footer>
      ) : null}
    </div>
  )
}
