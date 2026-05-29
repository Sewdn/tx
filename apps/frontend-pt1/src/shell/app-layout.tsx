import { Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  cn,
  GittenbergFooter,
  GittenbergTopAppBar,
  RepositorySidebar,
  useSidebarNav,
} from "@tx/ui-lib"
import {
  useGittenbergData,
  useOptionalRepository,
  useOptionalRepositorySlugParam,
} from "@tx/gittenberg-data-react"
import {
  activeCuratorNavId,
  activeSidebarId,
  curatorNavItems,
  repositorySidebarNav,
  routes,
} from "@/navigation/routes"
import { PrototypeModeBar } from "@/shell/prototype-mode-bar"

export function AppLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const repositorySlug = useOptionalRepositorySlugParam()
  const repository = useOptionalRepository(repositorySlug)
  const { ui } = useGittenbergData()

  const sidebarItems = repositorySlug ? repositorySidebarNav(repositorySlug) : []
  const { navItems, select } = useSidebarNav(
    sidebarItems.map((item) => ({
      ...item,
      active: item.id === activeSidebarId(pathname),
    })),
    activeSidebarId(pathname),
  )

  const showRepositoryChrome = Boolean(repositorySlug && repository)
  const isPrototypeHome = pathname === routes.prototypeHome
  const isReaderRoute = pathname.includes("/reader")
  const isLibraryRoute = pathname === "/library"
  const density = isReaderRoute || isLibraryRoute ? "spacious" : "operational"
  const shellPad = "pt-prototype-bar-only"

  return (
    <div className="min-h-screen bg-background" data-density={density}>
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
        <PrototypeModeBar />
        {!isPrototypeHome ? (
          <GittenbergTopAppBar
            brandName="Gittenberg"
            brandHref={routes.prototypeHome}
            navItems={[...curatorNavItems]}
            activeNavId={activeCuratorNavId(pathname)}
            searchPlaceholder="Search the archives..."
            className="static top-auto right-auto left-auto border-t-0"
            onNavItemClick={(item) => {
              if (item.href !== "#") navigate(item.href)
            }}
          />
        ) : null}
      </div>
      {showRepositoryChrome ? (
        <RepositorySidebar
          title={repository!.title}
          subtitle={repository!.subtitle}
          coverSrc={repository!.coverUrl}
          coverAlt={`${repository!.title} cover`}
          navItems={navItems}
          footerItems={[...ui.sidebarFooter]}
          primaryActionLabel="Create Revision"
          className="lg:top-11 lg:h-[calc(100vh-2.75rem)] lg:pt-component"
          onNavItemClick={(item) => {
            select(item.id)
            if (item.href !== "#") navigate(item.href)
          }}
        />
      ) : null}
      <div className={cn(showRepositoryChrome ? "lg:pl-64" : "", shellPad)}>
        <Outlet />
      </div>
      {showRepositoryChrome && !isReaderRoute ? (
        <div className="lg:pl-64">
          <GittenbergFooter
            links={[...ui.footerLinks]}
            copyright="© 1851-2024 Gittenberg Public Domain Initiative"
          />
        </div>
      ) : null}
    </div>
  )
}
