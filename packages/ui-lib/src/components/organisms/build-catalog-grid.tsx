import { BuildCatalogCard } from "@/components/molecules/build-catalog-card"
import type { LibraryBuildCardData } from "@/lib/types"

export type BuildCatalogGridProps = {
  title: string
  subtitle: string
  builds: LibraryBuildCardData[]
}

export function BuildCatalogGrid({ title, subtitle, builds }: BuildCatalogGridProps) {
  return (
    <section className="flex-1">
      <div className="mb-section flex items-baseline justify-between">
        <h1 className="font-headline-lg text-headline-lg text-primary">{title}</h1>
        <p className="font-ui-label-md text-on-surface-variant">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-region md:grid-cols-2">
        {builds.map((build) => (
          <BuildCatalogCard key={build.id} {...build} />
        ))}
      </div>
    </section>
  )
}
