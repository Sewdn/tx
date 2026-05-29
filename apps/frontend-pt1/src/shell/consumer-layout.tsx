import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { GittenbergFooter, GittenbergTopAppBar } from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import {
  activeConsumerNavId,
  consumerNavItemsFromUi,
  routes,
} from "@/navigation/routes"

export function ConsumerLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { ui } = useGittenbergData()
  const navItems = consumerNavItemsFromUi(ui.consumerNavItems)
  const isDarkShell = pathname.startsWith(routes.libraryCinematic)
  const hideTopBar = isDarkShell || pathname.startsWith(routes.archiveAnchor)
  const showFooter = !pathname.startsWith("/patronage/certificate")

  return (
    <div
      className={isDarkShell ? "min-h-screen bg-primary text-on-primary" : "min-h-screen bg-background"}
      data-density="spacious"
    >
      {!hideTopBar ? (
        <GittenbergTopAppBar
          brandName="Gittenberg"
          brandHref={routes.explore}
          navItems={navItems}
          activeNavId={activeConsumerNavId(pathname)}
          searchPlaceholder="Search the archives..."
          onNavItemClick={(item) => {
            if (item.href !== "#") navigate(item.href)
          }}
        />
      ) : null}
      <div className={hideTopBar ? "" : "pt-shell"}>
        <Outlet />
      </div>
      {showFooter ? (
        <GittenbergFooter
          links={[...ui.footerLinks]}
          copyright="© 1851-2024 Gittenberg Public Domain Initiative"
          className={isDarkShell ? "border-outline bg-primary text-on-primary" : undefined}
        />
      ) : null}
    </div>
  )
}
