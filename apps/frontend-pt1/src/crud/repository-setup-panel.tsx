import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import {
  useGittenbergData,
  useGittenbergPorts,
  useGittenbergRemoveMutation,
  useRepository,
  useRepositoryAgents,
  useRepositoryLiteraryBuilds,
  useRepositoryManuscriptFiles,
  useRepositoryMetricSnapshots,
  useRepositoryReaderChapters,
  useRepositoryRevisions,
} from "@tx/gittenberg-data-react"
import { EntityListPanel } from "@/crud/form-primitives"
import { routes } from "@/navigation/routes"

export function RepositorySetupPanel() {
  const repository = useRepository()
  const slug = repository.slug
  const ports = useGittenbergPorts()
  const files = useRepositoryManuscriptFiles()
  const revisions = useRepositoryRevisions()
  const builds = useRepositoryLiteraryBuilds()
  const chapters = useRepositoryReaderChapters()
  const agents = useRepositoryAgents()
  const metrics = useRepositoryMetricSnapshots()
  const { metricSnapshots } = useGittenbergData()

  const removeManuscriptFile = useGittenbergRemoveMutation({
    collection: "manuscriptFiles",
    mutationFn: (id) => ports.manuscriptFile.remove(id),
  })
  const removeRevision = useGittenbergRemoveMutation({
    collection: "revisions",
    mutationFn: (id) => ports.revision.remove(id),
  })
  const removeBuild = useGittenbergRemoveMutation({
    collection: "literaryBuilds",
    mutationFn: (id) => ports.literaryBuild.remove(id),
  })
  const removeChapter = useGittenbergRemoveMutation({
    collection: "readerChapters",
    mutationFn: (id) => ports.readerChapter.remove(id),
  })
  const removeAgent = useGittenbergRemoveMutation({
    collection: "agents",
    mutationFn: (id) => ports.agent.remove(id),
  })
  const removeMetric = useGittenbergRemoveMutation({
    collection: "metricSnapshots",
    mutationFn: (id) => ports.metricSnapshot.remove(id),
  })

  const confirmDelete = (mutate: (id: string) => void) => (id: string) => {
    if (!window.confirm("Delete this item?")) return
    mutate(id)
  }

  return (
    <section className="mt-16 space-y-gutter border-t border-outline-variant pt-12">
      <div className="flex flex-wrap items-center justify-between gap-component">
        <div>
          <h2 className="font-headline-lg text-[22px] text-primary">Repository setup</h2>
          <p className="mt-micro text-sm text-on-surface-variant">
            Create and manage all entities linked to this repository.
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to={routes.repositoryEdit(slug)}>Edit repository</Link>
        </Button>
      </div>

      <EntityListPanel
        title="Manuscript files"
        emptyMessage="No files yet. Add chapters, notes, or sources for this manuscript."
        createHref={routes.repositoryFileNew(slug)}
        createLabel="Add file"
        items={files.map((file) => ({
          id: file.id,
          label: file.name,
          meta: file.description,
        }))}
        editHref={(id) => routes.repositoryFileEdit(slug, id)}
        onDelete={confirmDelete((id) => removeManuscriptFile.mutate(id))}
      />

      <EntityListPanel
        title="Revisions"
        emptyMessage="No revisions yet. Open a pull-request style review when ready."
        createHref={routes.repositoryRevisionNew(slug)}
        createLabel="Create revision"
        items={revisions.map((revision) => ({
          id: revision.id,
          label: revision.title,
          meta: `${revision.status} · ${revision.author}`,
        }))}
        editHref={(id) => routes.repositoryRevisionEdit(slug, id)}
        onDelete={confirmDelete((id) => removeRevision.mutate(id))}
      />

      <EntityListPanel
        title="Literary builds"
        emptyMessage="No builds yet. Configure export formats and styling presets."
        createHref={routes.repositoryBuildNew(slug)}
        createLabel="Create build"
        items={builds.map((build) => ({
          id: build.id,
          label: build.title || build.version,
          meta: build.statusLabel,
        }))}
        editHref={(id) => routes.repositoryBuildEdit(slug, id)}
        onDelete={confirmDelete((id) => removeBuild.mutate(id))}
      />

      <EntityListPanel
        title="Reader chapters"
        emptyMessage="No chapters yet. Add content for the reader preview."
        createHref={routes.repositoryChapterNew(slug)}
        createLabel="Add chapter"
        items={chapters.map((chapter) => ({
          id: chapter.id,
          label: chapter.title,
          meta: chapter.label,
        }))}
        editHref={(id) => routes.repositoryChapterEdit(slug, id)}
        onDelete={confirmDelete((id) => removeChapter.mutate(id))}
      />

      <EntityListPanel
        title="Agents"
        emptyMessage="No agents assigned to this repository."
        createHref={routes.repositoryAgentNew(slug)}
        createLabel="Create agent"
        items={agents.map((agent) => ({
          id: agent.id,
          label: agent.name,
          meta: agent.status,
        }))}
        editHref={(id) => routes.repositoryAgentEdit(slug, id)}
        onDelete={confirmDelete((id) => removeAgent.mutate(id))}
      />

      <EntityListPanel
        title="Repository metrics"
        emptyMessage="No repository-scoped metrics. Add cards shown on this home page."
        createHref={`${routes.metricNew("repository")}&from=${slug}`}
        createLabel="Add metric"
        items={metrics.map((metric) => ({
          id: metric.id,
          label: metric.label,
          meta: `${metric.value} (${metric.delta})`,
        }))}
        editHref={(id) => routes.metricEdit(id)}
        onDelete={confirmDelete((id) => removeMetric.mutate(id))}
      />

      <p className="text-xs text-on-surface-variant">
        Global metrics on the agents dashboard:{" "}
        {metricSnapshots.filter((m) => m.scope === "agents").length} total.
      </p>
    </section>
  )
}
