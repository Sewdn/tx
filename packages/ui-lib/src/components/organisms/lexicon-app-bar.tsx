import { Button } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type LexiconNavItem = {
  id: string
  label: string
  href: string
  active?: boolean
}

export type LexiconAppBarProps = {
  title: string
  navItems: LexiconNavItem[]
  syncLabel?: string
  exportLabel?: string
  avatarSrc?: string
  avatarAlt?: string
  className?: string
}

export function LexiconAppBar({
  title,
  navItems,
  syncLabel = "Sync",
  exportLabel = "Export",
  avatarSrc,
  avatarAlt = "User avatar",
  className,
}: LexiconAppBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface-bright px-boundary",
        className,
      )}
    >
      <div className="flex items-center gap-section">
        <span className="font-headline-lg text-headline-lg font-semibold text-primary">{title}</span>
        <nav className="hidden items-center gap-section md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "font-ui-label-sm text-ui-label-sm tracking-wider uppercase transition-opacity",
                item.active
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-on-surface-variant opacity-90 hover:text-primary",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-component">
        <div className="mr-component flex items-center gap-micro">
          <MaterialIcon name="settings" className="text-on-surface-variant" />
          <MaterialIcon name="help_outline" className="text-on-surface-variant" />
        </div>
        <Button variant="outline" className="font-ui-label-sm uppercase tracking-wider">
          {syncLabel}
        </Button>
        <Button className="bg-primary font-ui-label-sm text-on-primary uppercase tracking-wider">
          {exportLabel}
        </Button>
        {avatarSrc ? (
          <div className="ml-micro size-8 overflow-hidden rounded-full border border-outline-variant bg-surface-variant">
            <img alt={avatarAlt} src={avatarSrc} className="size-full object-cover" />
          </div>
        ) : null}
      </div>
    </header>
  )
}
