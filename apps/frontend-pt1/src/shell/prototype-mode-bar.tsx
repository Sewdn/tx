import { Link, useLocation } from "react-router-dom"
import { DEFAULT_REPOSITORY_SLUG } from "@tx/gittenberg-data"
import { cn } from "@tx/ui-lib"
import { isConsumerRoute, routes } from "@/navigation/routes"

type PrototypeModeBarProps = {
  variant?: "light" | "dark"
}

export function PrototypeModeBar({ variant = "light" }: PrototypeModeBarProps) {
  const { pathname } = useLocation()
  const consumerActive = isConsumerRoute(pathname)
  const isDark = variant === "dark"

  const linkClass = (active: boolean) =>
    cn(
      "rounded-sm px-2 py-1 font-ui-label-sm transition-colors",
      isDark
        ? active
          ? "bg-on-primary/15 font-bold text-on-primary"
          : "text-on-primary-container hover:text-on-primary"
        : active
          ? "bg-primary-container/30 font-bold text-primary"
          : "text-on-surface-variant hover:text-primary",
    )

  return (
    <div
      className={cn(
        "border-b px-boundary py-micro",
        isDark ? "border-white/10 bg-primary/90 text-on-primary" : "border-outline-variant bg-surface-container-low",
      )}
    >
      <div className="mx-auto flex max-w-container-max flex-wrap items-center gap-component">
        <Link
          to={routes.prototypeHome}
          className={cn(
            "font-ui-label-sm font-bold tracking-wide uppercase",
            isDark ? "text-on-primary" : "text-on-surface-variant",
          )}
        >
          Gittenberg Prototype
        </Link>
        <span className={cn("font-ui-label-sm", isDark ? "text-on-primary-container/60" : "text-outline")}>
          |
        </span>
        <span className={cn("font-ui-label-sm", isDark ? "text-on-primary-container" : "text-on-surface-variant")}>
          Public
        </span>
        <Link to={routes.explore} className={linkClass(consumerActive && pathname === routes.explore)}>
          Explore
        </Link>
        <Link to={routes.libraryCinematic} className={linkClass(pathname.startsWith(routes.libraryCinematic))}>
          Library
        </Link>
        <Link to={routes.myCollections} className={linkClass(pathname.startsWith(routes.myCollections))}>
          Collections
        </Link>
        <span className={cn("font-ui-label-sm", isDark ? "text-on-primary-container/60" : "text-outline")}>
          |
        </span>
        <span className={cn("font-ui-label-sm", isDark ? "text-on-primary-container" : "text-on-surface-variant")}>
          Curator
        </span>
        <Link to={routes.repositories} className={linkClass(pathname === routes.repositories)}>
          Repositories
        </Link>
        <Link
          to={routes.repositoryHome(DEFAULT_REPOSITORY_SLUG)}
          className={linkClass(pathname.startsWith(`/repositories/${DEFAULT_REPOSITORY_SLUG}`))}
        >
          Moby Dick
        </Link>
        <Link to={routes.agents} className={linkClass(pathname.startsWith(routes.agents))}>
          Agents
        </Link>
        <Link
          to={routes.library}
          className={linkClass(
            pathname === routes.library ||
              pathname.startsWith("/library/new") ||
              (pathname.startsWith("/library/") && pathname.includes("/edit")),
          )}
        >
          Catalog admin
        </Link>
      </div>
    </div>
  )
}
