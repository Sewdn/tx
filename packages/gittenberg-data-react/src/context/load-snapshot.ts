import type {
  ActivityEvent,
  Agent,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MetricSnapshot,
  ReaderChapter,
  Repository,
  Revision,
} from "@tx/domain-shared"
import type { GittenbergDataService } from "@tx/gittenberg-data"
import type { GittenbergPorts, GittenbergUiSeed } from "@tx/gittenberg-data"

export type GittenbergSnapshot = {
  readonly ports: GittenbergPorts
  readonly ui: GittenbergUiSeed
  readonly repositories: readonly Repository[]
  readonly manuscriptFiles: readonly ManuscriptFile[]
  readonly revisions: readonly Revision[]
  readonly agents: readonly Agent[]
  readonly literaryBuilds: readonly LiteraryBuild[]
  readonly libraryEditions: readonly LibraryEdition[]
  readonly activityEvents: readonly ActivityEvent[]
  readonly readerChapters: readonly ReaderChapter[]
  readonly metricSnapshots: readonly MetricSnapshot[]
}

export async function loadGittenbergSnapshot(
  service: GittenbergDataService,
): Promise<GittenbergSnapshot> {
  const page = { page: 1, pageSize: 500 }
  const { ports, ui } = service
  const [
    repositories,
    manuscriptFiles,
    revisions,
    agents,
    literaryBuilds,
    libraryEditions,
    activityEvents,
    readerChapters,
    metricSnapshots,
  ] = await Promise.all([
    ports.repository.list(page),
    ports.manuscriptFile.list(page),
    ports.revision.list(page),
    ports.agent.list(page),
    ports.literaryBuild.list(page),
    ports.libraryEdition.list(page),
    ports.activityEvent.list(page),
    ports.readerChapter.list(page),
    ports.metricSnapshot.list(page),
  ])

  return {
    ports,
    ui,
    repositories: repositories.items,
    manuscriptFiles: manuscriptFiles.items,
    revisions: revisions.items,
    agents: agents.items,
    literaryBuilds: literaryBuilds.items,
    libraryEditions: libraryEditions.items,
    activityEvents: activityEvents.items,
    readerChapters: readerChapters.items,
    metricSnapshots: metricSnapshots.items,
  }
}
