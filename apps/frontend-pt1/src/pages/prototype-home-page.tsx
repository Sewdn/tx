import { Link } from "react-router-dom"
import { DEFAULT_REPOSITORY_SLUG } from "@tx/gittenberg-data"
import { routes } from "@/navigation/routes"

type FlowCardProps = {
  title: string
  description: string
  links: { label: string; href: string; primary?: boolean }[]
}

function FlowCard({ title, description, links }: FlowCardProps) {
  return (
    <section className="rounded border border-outline-variant bg-surface-container-low p-region paper-shadow">
      <h2 className="mb-micro font-headline-lg text-headline-lg text-primary">{title}</h2>
      <p className="mb-section font-body-md text-on-surface-variant">{description}</p>
      <ul className="flex flex-col gap-micro">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={
                link.primary
                  ? "inline-flex rounded bg-primary px-component py-micro font-ui-label-md text-on-primary"
                  : "font-ui-label-md text-primary underline underline-offset-4"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function PrototypeHomePage() {
  return (
    <main className="mx-auto max-w-container-max px-boundary py-region">
      <header className="mb-region">
        <h1 className="mb-component font-display-lg text-display-lg text-ink-primary">Gittenberg Prototype</h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Two complementary experiences in one app: curators collaborate on manuscripts, builds, and
          forks; readers discover published editions, personalize print, and steward eternal
          archival on Arweave.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-region lg:grid-cols-2">
        <FlowCard
          title="Public experience"
          description="End-consumer flows for discovery, collections, membership, creative studio, print-on-demand, and permaweb patronage."
          links={[
            { label: "Mission & Eternal Archive", href: routes.explore, primary: true },
            { label: "Cinematic library", href: routes.libraryCinematic },
            { label: "My collections", href: routes.myCollections },
            { label: "Eternal Gallery", href: routes.eternalGallery },
            { label: "Membership", href: routes.subscribe },
            { label: "Foundation edition detail", href: routes.libraryEdition("lib-foundation") },
          ]}
        />
        <FlowCard
          title="Curator workspace"
          description="Internal organization: repositories, agent-assisted curation, revisions, lineage, builds, and the Lexicon editor."
          links={[
            {
              label: "Moby Dick repository (demo)",
              href: routes.repositoryHome(DEFAULT_REPOSITORY_SLUG),
              primary: true,
            },
            { label: "All repositories", href: routes.repositories },
            { label: "Agent dashboard", href: routes.agents },
            { label: "Build catalog (admin)", href: routes.library },
            { label: "Revision review", href: routes.repositoryRevision(DEFAULT_REPOSITORY_SLUG, "revision-142") },
            { label: "Arweave anchoring wizard", href: routes.archiveAnchor },
          ]}
        />
      </div>
      <p className="mt-region font-ui-label-sm text-on-surface-variant">
        Use the prototype bar at the top of any screen to switch between Public and Curator areas.
      </p>
    </main>
  )
}
