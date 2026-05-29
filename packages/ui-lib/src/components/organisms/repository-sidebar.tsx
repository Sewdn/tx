import { Button } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { SidebarNavItem } from "@/lib/types"

export type RepositorySidebarProps = {
  title: string
  subtitle: string
  coverSrc: string
  coverAlt: string
  navItems: SidebarNavItem[]
  footerItems: SidebarNavItem[]
  primaryActionLabel: string
  className?: string
  onNavItemClick?: (item: SidebarNavItem) => void
}

export function RepositorySidebar({
  title,
  subtitle,
  coverSrc,
  coverAlt,
  navItems,
  footerItems,
  primaryActionLabel,
  className,
  onNavItemClick,
}: RepositorySidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 hidden h-screen w-64 flex-col gap-unit border-r border-outline-variant bg-surface-container-low pt-shell pb-section lg:flex dark:border-outline dark:bg-surface-container-lowest",
        className,
      )}
    >
      <div className="mb-section px-section">
        <div className="mb-component flex items-center gap-component">
          <img
            alt={coverAlt}
            src={coverSrc}
            className="h-16 w-12 rounded-sm object-cover shadow-sm"
          />
          <div>
            <h2 className="font-headline-lg text-[18px] text-primary">{title}</h2>
            <p className="font-ui-label-sm text-on-surface-variant">{subtitle}</p>
          </div>
        </div>
        <Button className="w-full gap-micro bg-primary font-ui-label-md text-on-primary hover:opacity-80">
          <MaterialIcon name="add" size={18} />
          {primaryActionLabel}
        </Button>
      </div>
      <nav className="flex-1 space-y-micro">
        {navItems.map((item) => {
          const itemClassName = cn(
            "flex w-full items-center gap-component px-section py-component.5 font-ui-label-md text-ui-label-md transition-all",
            item.active
              ? "translate-x-1 rounded-r-full bg-secondary-container/30 font-bold text-primary dark:bg-primary-container dark:text-primary-fixed"
              : "text-on-surface-variant hover:bg-surface-container-high",
          )
          if (onNavItemClick) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavItemClick(item)}
                className={itemClassName}
              >
                <MaterialIcon name={item.icon} />
                {item.label}
              </button>
            )
          }
          return (
            <a key={item.id} href={item.href} className={itemClassName}>
              <MaterialIcon name={item.icon} />
              {item.label}
            </a>
          )
        })}
      </nav>
      <div className="border-t border-outline-variant px-section pt-section">
        {footerItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex items-center gap-component py-component font-ui-label-md text-ui-label-md text-on-surface-variant transition-all hover:bg-surface-container-high"
          >
            <MaterialIcon name={item.icon} />
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  )
}
