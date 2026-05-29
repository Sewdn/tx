import { AppNavLink } from "@/components/molecules/app-nav-link"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/lib/types"

export type ReaderTopAppBarProps = {
  brandName: string
  navItems: NavItem[]
  activeNavId: string
  onMenuClick?: () => void
  className?: string
}

export function ReaderTopAppBar({
  brandName,
  navItems,
  activeNavId,
  onMenuClick,
  className,
}: ReaderTopAppBarProps) {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 border-b border-outline-variant bg-background",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-boundary py-component">
        <div className="flex items-center gap-section">
          <button
            type="button"
            className="p-micro transition-colors hover:bg-surface-container-high"
            onClick={onMenuClick}
            aria-label="Toggle table of contents"
          >
            <MaterialIcon name="menu" />
          </button>
          <h1 className="font-display-lg text-[24px] font-bold text-primary">{brandName}</h1>
        </div>
        <nav className="hidden items-center gap-section md:flex">
          {navItems.map((item) => (
            <AppNavLink
              key={item.id}
              label={item.label}
              href={item.href}
              active={item.id === activeNavId}
            />
          ))}
        </nav>
        <div className="flex items-center gap-component">
          {(["notifications", "history", "account_circle"] as const).map((icon) => (
            <MaterialIcon
              key={icon}
              name={icon}
              className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            />
          ))}
        </div>
      </div>
    </header>
  )
}
