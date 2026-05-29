import { Outlet, useLocation, useNavigate } from "react-router-dom"
import {
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
  activeSidebarId,
  activeTopNavId,
  repositorySidebarNav,
  routes,
  topNavItems,
} from "@/navigation/routes"

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
  const isReaderRoute = pathname.includes("/reader")

  return (
    <div className="min-h-screen bg-background">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref={routes.repositories}
        navItems={[...topNavItems]}
        activeNavId={activeTopNavId(pathname)}
        searchPlaceholder="Search the archives..."
        onNavItemClick={(item) => {
          if (item.href !== "#") navigate(item.href)
        }}
      />
      {showRepositoryChrome ? (
        <RepositorySidebar
          title={repository!.title}
          subtitle={repository!.subtitle}
          coverSrc={repository!.coverUrl}
          coverAlt={`${repository!.title} cover`}
          navItems={navItems}
          footerItems={[...ui.sidebarFooter]}
          primaryActionLabel="Create Revision"
          onNavItemClick={(item) => {
            select(item.id)
            if (item.href !== "#") navigate(item.href)
          }}
        />
      ) : null}
      <div className={showRepositoryChrome ? "lg:pl-64" : ""}>
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
