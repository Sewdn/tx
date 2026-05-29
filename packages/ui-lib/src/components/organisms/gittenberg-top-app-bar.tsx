import { ArchiveSearchField } from "@/components/molecules/archive-search-field"
import { AppNavLink } from "@/components/molecules/app-nav-link"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/lib/types"

export type GittenbergTopAppBarProps = {
  brandName: string
  brandHref: string
  navItems: NavItem[]
  activeNavId: string
  searchPlaceholder: string
  searchValue?: string
  showUtilityIcons?: boolean
  className?: string
  onMenuClick?: () => void
  onNavItemClick?: (item: NavItem) => void
}

export function GittenbergTopAppBar({
  brandName,
  brandHref,
  navItems,
  activeNavId,
  searchPlaceholder,
  searchValue,
  showUtilityIcons = true,
  className,
  onMenuClick,
  onNavItemClick,
}: GittenbergTopAppBarProps) {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b border-outline-variant bg-background dark:border-outline",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-boundary py-component">
        <div className="flex items-center gap-region">
          <div className="flex items-center gap-component">
            {onMenuClick ? (
              <button
                type="button"
                className="p-micro transition-colors hover:bg-surface-container-high md:hidden"
                onClick={onMenuClick}
                aria-label="Open menu"
              >
                <MaterialIcon name="menu" />
              </button>
            ) : null}
            <a
              href={brandHref}
              className="font-display-lg text-display-lg font-bold text-primary dark:text-on-primary-fixed"
            >
              {brandName}
            </a>
          </div>
          <nav className="hidden items-center gap-section md:flex">
            {navItems.map((item) => (
              <AppNavLink
                key={item.id}
                label={item.label}
                href={item.href}
                active={item.id === activeNavId}
                onNavigate={onNavItemClick ? () => onNavItemClick(item) : undefined}
              />
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-component">
          <ArchiveSearchField placeholder={searchPlaceholder} value={searchValue} />
          {showUtilityIcons
            ? (["notifications", "history", "account_circle"] as const).map((icon) => (
                <MaterialIcon
                  key={icon}
                  name={icon}
                  className="cursor-pointer text-on-surface-variant hover:text-primary"
                />
              ))
            : null}
        </div>
      </div>
    </header>
  )
}
