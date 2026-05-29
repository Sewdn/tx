import type { ReactNode } from "react"

import { Button } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { SidebarNavItem } from "@/lib/types"

export type LexiconSidebarProps = {
  title: string
  subtitle: string
  navItems: SidebarNavItem[]
  primaryActionLabel: string
  footer?: ReactNode
  className?: string
}

export function LexiconSidebar({
  title,
  subtitle,
  navItems,
  primaryActionLabel,
  footer,
  className,
}: LexiconSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-[60] flex h-screen w-64 flex-col border-r border-outline-variant bg-surface py-10 dark:border-outline dark:bg-surface-dim",
        className,
      )}
    >
      <div className="mb-8 px-6">
        <h1 className="font-headline-lg text-headline-lg text-primary dark:text-on-surface">
          {title}
        </h1>
        <p className="font-ui-label-sm text-ui-label-sm tracking-wider text-outline uppercase">
          {subtitle}
        </p>
      </div>
      <nav className="grow">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id} className="px-4">
              <a
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded p-2 font-ui-label-md transition-all duration-200",
                  item.active
                    ? "border-r-2 border-primary bg-surface-variant/30 font-bold text-primary dark:border-primary-fixed-dim dark:text-on-surface"
                    : "text-on-surface-variant hover:bg-surface-variant dark:text-outline dark:hover:bg-surface-container-high",
                )}
              >
                <MaterialIcon name={item.icon} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto px-6">
        <Button className="flex w-full items-center justify-center gap-2 bg-primary py-3 font-ui-label-md text-on-primary hover:opacity-90">
          {primaryActionLabel}
        </Button>
        {footer}
      </div>
    </aside>
  )
}
