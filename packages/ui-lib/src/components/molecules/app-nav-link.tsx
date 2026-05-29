import { cn } from "@/lib/utils"

export type AppNavLinkProps = {
  label: string
  href: string
  active?: boolean
  className?: string
  onNavigate?: () => void
}

export function AppNavLink({
  label,
  href,
  active = false,
  className,
  onNavigate,
}: AppNavLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        if (onNavigate) {
          event.preventDefault()
          onNavigate()
        }
      }}
      className={cn(
        "font-body-md text-body-md transition-colors",
        active
          ? "border-b-2 border-primary font-bold text-primary dark:text-on-primary-fixed"
          : "text-on-surface-variant hover:text-primary dark:text-outline-variant dark:hover:text-on-primary-fixed",
        className,
      )}
    >
      {label}
    </a>
  )
}
