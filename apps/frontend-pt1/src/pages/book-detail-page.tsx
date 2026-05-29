import { Link, useNavigate, useParams } from "react-router-dom"
import {
  AuthorSpotlightPanel,
  BookDetailHero,
  DigitalFabricationsGrid,
  EditionLineagePanel,
  MetadataStatsList,
  RelatedWorksCarousel,
} from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import {
  authorSpotlightFromAuthor,
  consumerViewModels,
  findBuildForEdition,
  findEdition,
  tilesForEditions,
} from "@/data/consumer-data"
import { toFormatArtifacts, toLineageBranches } from "@/data/mappers"
import { editionIdParam, routes } from "@/navigation/routes"

export function BookDetailPage() {
  const navigate = useNavigate()
  const params = useParams<{ [editionIdParam]: string }>()
  const editionId = params[editionIdParam] ?? ""
  const data = useGittenbergData()
  const { lookup } = consumerViewModels(data)
  const edition = findEdition(data.libraryEditions, editionId)
  const build = edition ? findBuildForEdition(data.literaryBuilds, edition) : undefined
  const author = edition?.authorId
    ? data.authors.find((entry) => entry.id === edition.authorId)
    : undefined

  if (!edition) {
    return (
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <p className="font-body-md text-on-surface-variant">Edition not found.</p>
        <Link to={routes.libraryCinematic} className="mt-component text-primary underline">
          Back to library
        </Link>
      </main>
    )
  }

  const relatedIds = (edition.relatedEditionIds as string[]) ?? []
  const relatedEditions = relatedIds
    .map((id) => lookup[id])
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
  const provenance = edition.provenance as
    | { status?: string; citationCount?: number; archiveSizeLabel?: string; lensLabel?: string }
    | undefined

  const buildId = build?.id ?? edition.primaryBuildId ?? "build-moby-primary"

  return (
    <main>
      <BookDetailHero
        title={edition.title}
        author={edition.author}
        tagline={edition.tagline ?? edition.lensLabel ?? ""}
        editionTag={
          edition.badge ? `${edition.badge.toUpperCase()} V4.2` : edition.commit.toUpperCase()
        }
        coverSrc={edition.coverUrl}
        heroImageSrc={edition.heroImageUrl ?? edition.coverUrl}
        actions={[
          {
            label: "Start Reading",
            variant: "primary",
            icon: "menu_book",
            onClick: () => undefined,
          },
          {
            label: "Customize Edition",
            variant: "ghost",
            icon: "palette",
            onClick: () => navigate(routes.creativeStudio(edition.id)),
          },
        ]}
      />
      <div className="mx-auto max-w-container-max px-boundary py-region">
        <div className="grid grid-cols-1 gap-region lg:grid-cols-[1fr_264px]">
          <div className="space-y-region">
            <DigitalFabricationsGrid
              artifacts={build ? toFormatArtifacts(build) : []}
              printPriceLabel="$29.99"
              onPrintClick={() => navigate(routes.printOrder(buildId))}
            />
            {build ? (
              <EditionLineagePanel
                branches={toLineageBranches(build)}
                forkCount={14}
                title="Edition Lineage"
              />
            ) : null}
            <RelatedWorksCarousel
              title="Genre Kinship"
              items={tilesForEditions(relatedEditions)}
              onItemClick={(item) => navigate(routes.libraryEdition(item.id))}
            />
          </div>
          <aside className="space-y-section lg:sticky lg:top-shell lg:self-start">
            {author ? <AuthorSpotlightPanel {...authorSpotlightFromAuthor(author)} /> : null}
            <MetadataStatsList
              fields={[
                { label: "Provenance", value: provenance?.status ?? "Verified" },
                {
                  label: "Citations",
                  value: String(provenance?.citationCount ?? "—"),
                },
                { label: "Archive Size", value: provenance?.archiveSizeLabel ?? "—" },
                { label: "Lens", value: provenance?.lensLabel ?? edition.lensLabel ?? "—" },
              ]}
            />
          </aside>
        </div>
      </div>
    </main>
  )
}
