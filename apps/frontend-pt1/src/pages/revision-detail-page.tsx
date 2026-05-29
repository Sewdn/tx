import { Link } from "react-router-dom"
import type { Revision } from "@tx/domain-shared"
import { Button } from "@tx/ui"
import {
  DiffViewer,
  DiscussionPanel,
  RevisionPageHeader,
  TypographyController,
  useTypographyController,
} from "@tx/ui-lib"
import { useRepository } from "@tx/gittenberg-data-react"
import { toRevisionComments, toRevisionDiffLines } from "@/data/mappers"
import { routes } from "@/navigation/routes"

type RevisionDetailPageProps = {
  revision: Revision
  allRevisions: ReadonlyArray<Revision>
}

export function RevisionDetailPage({ revision, allRevisions }: RevisionDetailPageProps) {
  const repository = useRepository()
  const { activeFamily } = useTypographyController("serif")

  return (
    <main className="min-h-screen canvas-bg">
      <div className="border-b border-outline-variant bg-surface px-8 py-component">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-component">
          {allRevisions.length > 1 ? (
            <label className="flex items-center gap-micro text-sm">
              <span className="text-on-surface-variant">Revision</span>
              <select
                className="rounded-md border border-input bg-background px-micro py-1"
                value={revision.id}
                onChange={(e) => {
                  window.location.href = routes.repositoryRevision(repository.slug, e.target.value)
                }}
              >
                {allRevisions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <div className="flex gap-micro">
            <Button size="sm" variant="outline" asChild>
              <Link to={routes.repositoryRevisionEdit(repository.slug, revision.id)}>Edit</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to={routes.repositoryRevisionNew(repository.slug)}>New revision</Link>
            </Button>
          </div>
        </div>
      </div>
      <RevisionPageHeader
        breadcrumbs={(revision.breadcrumbs as Array<{ label: string }>) ?? []}
        title={revision.title}
        status={revision.status as "open"}
        author={revision.author}
        timestamp={revision.timestamp}
      />
      <div className="mx-auto flex max-w-[1600px] flex-col gap-section p-section xl:flex-row">
        <DiffViewer
          fileName={revision.fileName}
          viewMode="Unified"
          alternateViewMode="Split"
          lines={toRevisionDiffLines(revision)}
          className="flex-1"
        />
        <DiscussionPanel
          comments={toRevisionComments(revision)}
          commentPlaceholder="Add a comment..."
          submitLabel="Comment"
          mergeLabel="Approve and Merge"
          requestChangesLabel="Request Changes"
        />
      </div>
      <TypographyController serifLabel="Serif" sansLabel="Sans" activeFamily={activeFamily} />
    </main>
  )
}
