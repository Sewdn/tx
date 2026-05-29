import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { GittenbergFooter, GittenbergTopAppBar } from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import {
  activeConsumerNavId,
  consumerNavItemsFromUi,
  routes,
} from "@/navigation/routes"
import { PrototypeModeBar } from "@/shell/prototype-mode-bar"

export function ConsumerLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { ui } = useGittenbergData()
  const navItems = consumerNavItemsFromUi(ui.consumerNavItems)
  const isDarkShell = pathname.startsWith(routes.libraryCinematic)
  const hideTopBar = isDarkShell || pathname.startsWith(routes.archiveAnchor)
  const showFooter = !pathname.startsWith("/patronage/certificate")

  const shellPad = hideTopBar ? "pt-prototype-bar-only" : "pt-shell-prototype"

  return (
    <div
      className={isDarkShell ? "min-h-screen bg-primary text-on-primary" : "min-h-screen bg-background"}
      data-density="spacious"
    >
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
        <PrototypeModeBar variant={isDarkShell ? "dark" : "light"} />
        {!hideTopBar ? (
          <GittenbergTopAppBar
            brandName="Gittenberg"
            brandHref={routes.prototypeHome}
            navItems={navItems}
            activeNavId={activeConsumerNavId(pathname)}
            searchPlaceholder="Search the archives..."
            className={
              isDarkShell
                ? "static top-auto right-auto left-auto border-t-0 border-white/10 bg-primary text-on-primary"
                : "static top-auto right-auto left-auto border-t-0"
            }
            onNavItemClick={(item) => {
              if (item.href !== "#") navigate(item.href)
            }}
          />
        ) : null}
      </div>
      <div className={shellPad}>
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
