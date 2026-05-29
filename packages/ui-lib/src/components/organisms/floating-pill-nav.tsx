import { AppNavLink } from "@/components/molecules/app-nav-link"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/lib/types"

export type FloatingPillNavProps = {
  brandHref: string
  navItems: NavItem[]
  activeNavId: string
  className?: string
  onNavItemClick?: (item: NavItem) => void
}

export function FloatingPillNav({
  brandHref,
  navItems,
  activeNavId,
  className,
  onNavItemClick,
}: FloatingPillNavProps) {
  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-section rounded-full border border-white/10 bg-primary/80 px-section py-component shadow-2xl backdrop-blur-xl",
        className,
      )}
    >
      <a
        href={brandHref}
        className="flex size-10 items-center justify-center rounded-full bg-on-primary font-display-lg text-lg font-bold text-primary"
      >
        G
      </a>
      <div className="flex items-center gap-component">
        {navItems.map((item) => (
          <AppNavLink
            key={item.id}
            label={item.label}
            href={item.href}
            active={item.id === activeNavId}
            onNavigate={onNavItemClick ? () => onNavItemClick(item) : undefined}
            className="border-none text-on-primary/70 hover:text-on-primary data-[active=true]:text-on-primary"
          />
        ))}
      </div>
    </nav>
  )
}
