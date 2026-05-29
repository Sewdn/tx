import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import { FileTable, MetadataPanel, PageHero, TonalSurface } from "@tx/ui-lib"
import {
  useRepository,
  useRepositoryAgents,
  useRepositoryLiteraryBuilds,
  useRepositoryManuscriptFiles,
  useRepositoryMetricSnapshots,
  useRepositoryReaderChapters,
  useRepositoryRevisions,
} from "@tx/gittenberg-data-react"
import { RepositorySetupPanel } from "@/crud/repository-setup-panel"
import {
  toAgentListItems,
  toFileTableRows,
  toMetadataFields,
  toMetricCards,
  toRepositoryTags,
} from "@/data/mappers"
import { routes } from "@/navigation/routes"

export function RepositoryHomePage() {
  const repository = useRepository()
  const files = useRepositoryManuscriptFiles()
  const repoAgents = useRepositoryAgents()
  const repoMetrics = useRepositoryMetricSnapshots()
  const revisions = useRepositoryRevisions()
  const builds = useRepositoryLiteraryBuilds()
  const chapters = useRepositoryReaderChapters()
  const slug = repository.slug

  return (
    <main className="min-h-screen px-boundary pt-shell pb-page md:px-boundary">
      <div className="mx-auto max-w-container-max">
        <div className="mb-section flex flex-wrap gap-component">
          {revisions.length === 0 ? (
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryRevisionNew(slug)}>Create revision</Link>
            </Button>
          ) : (
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryRevision(slug, revisions[0]?.id)}>
                View revisions
              </Link>
            </Button>
          )}
          {builds.length === 0 ? (
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryBuildNew(slug)}>Create build</Link>
            </Button>
          ) : (
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryBuild(slug, builds[0]?.id)}>Open build</Link>
            </Button>
          )}
          {chapters.length === 0 ? (
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryChapterNew(slug)}>Add reader chapter</Link>
            </Button>
          ) : (
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryReader(slug)}>Reader preview</Link>
            </Button>
          )}
          <Button size="sm" variant="outline" asChild>
            <Link to={routes.repositoryFileNew(slug)}>Add manuscript file</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link to={routes.repositoryAgentNew(slug)}>Create agent</Link>
          </Button>
        </div>

        <PageHero
          tags={toRepositoryTags(repository.tags)}
          title={repository.heroTitle}
          subtitle={repository.heroSubtitle}
        />
        <div className="grid grid-cols-1 gap-region xl:grid-cols-12">
          <div className="space-y-gutter xl:col-span-8">
            <FileTable
              branchLabel={repository.branchLabel}
              branchName={repository.branchName}
              lastUpdate={repository.lastUpdate}
              rows={toFileTableRows(files)}
            />
            {files.length === 0 ? (
              <p className="text-sm text-on-surface-variant">
                No manuscript files yet.{" "}
                <Link to={routes.repositoryFileNew(slug)} className="text-primary underline">
                  Add your first file
                </Link>
                .
              </p>
            ) : null}
            <TonalSurface className="p-10 md:p-region">
              <article className="mx-auto max-w-reading-width">
                <h2 className="mb-section border-b border-outline-variant pb-2 font-headline-lg text-[24px] text-primary">
                  README.md
                </h2>
                <p className="mb-section font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  {repository.readmeExcerpt || "No README excerpt yet. Edit the repository to add one."}
                </p>
              </article>
            </TonalSurface>
          </div>
          <div className="xl:col-span-4">
            <MetadataPanel
              title="Repository Metadata"
              fields={toMetadataFields(repository.metadata)}
              agentsTitle={`Agents Active (${repoAgents.length})`}
              agents={toAgentListItems(repoAgents)}
              agentsActive
            />
            {repoMetrics.length > 0 ? (
              <p className="mt-component text-sm text-on-surface-variant">
                {toMetricCards(repoMetrics)
                  .map((metric) => `${metric.label}: ${metric.value}`)
                  .join(" · ")}
              </p>
            ) : (
              <p className="mt-component text-sm text-on-surface-variant">
                <Link
                  to={`${routes.metricNew("repository")}&from=${slug}`}
                  className="text-primary underline"
                >
                  Add repository metrics
                </Link>
              </p>
            )}
          </div>
        </div>

        <RepositorySetupPanel />
      </div>
    </main>
  )
}
