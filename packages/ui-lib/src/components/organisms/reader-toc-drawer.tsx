import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { SidebarNavItem } from "@/lib/types"

export type ReaderTocDrawerProps = {
  title: string
  subtitle: string
  chapters: SidebarNavItem[]
  footerItems: SidebarNavItem[]
  open: boolean
  onClose?: () => void
  className?: string
}

export function ReaderTocDrawer({
  title,
  subtitle,
  chapters,
  footerItems,
  open,
  onClose,
  className,
}: ReaderTocDrawerProps) {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-50 h-screen w-80 border-r border-outline-variant bg-surface-container-low transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full",
        className,
      )}
    >
      <div className="flex h-full flex-col py-section">
        <div className="mb-section flex items-center justify-between px-section">
          <div>
            <h2 className="font-headline-lg text-[20px] text-primary">{title}</h2>
            <p className="font-ui-label-md text-ui-label-md text-on-surface-variant">{subtitle}</p>
          </div>
          <button
            type="button"
            className="p-micro transition-all hover:bg-surface-container-high"
            onClick={onClose}
            aria-label="Close table of contents"
          >
            <MaterialIcon name="close" />
          </button>
        </div>
        <div className="flex-1 space-y-micro overflow-y-auto px-micro custom-scrollbar">
          <div className="px-component py-component font-ui-label-sm text-ui-label-sm tracking-widest text-outline uppercase">
            Contents
          </div>
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={chapter.href}
              className={cn(
                "flex w-full items-center gap-component px-component py-component font-ui-label-md text-ui-label-md transition-all",
                chapter.active
                  ? "rounded-r-full bg-secondary-container/30 font-bold text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-high",
              )}
            >
              <MaterialIcon name={chapter.icon} />
              {chapter.label}
            </a>
          ))}
        </div>
        <div className="mt-section flex flex-col gap-micro border-t border-outline-variant px-component pt-section">
          {footerItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center gap-component px-component py-component font-ui-label-md text-ui-label-md text-on-surface-variant transition-all hover:bg-surface-container-high"
            >
              <MaterialIcon name={item.icon} />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
