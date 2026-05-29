import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { DEFAULT_REPOSITORY_SLUG, type GittenbergBackend } from "@tx/gittenberg-data"
import { GittenbergDataProvider } from "@tx/gittenberg-data-react"
import { routePatterns, routes } from "@/navigation/routes"
import { AppLayout } from "@/shell/app-layout"
import { RepositoryLayout } from "@/shell/repository-layout"
import { ActivityEventFormPage } from "@/pages/crud/activity-event-form-page"
import { AgentFormPage } from "@/pages/crud/agent-form-page"
import { CreateRepositoryPage } from "@/pages/crud/create-repository-page"
import { EditRepositoryPage } from "@/pages/crud/edit-repository-page"
import { LibraryEditionFormPage } from "@/pages/crud/library-edition-form-page"
import { LiteraryBuildFormPage } from "@/pages/crud/literary-build-form-page"
import { ManuscriptFileFormPage } from "@/pages/crud/manuscript-file-form-page"
import { MetricSnapshotFormPage } from "@/pages/crud/metric-snapshot-form-page"
import { ReaderChapterFormPage } from "@/pages/crud/reader-chapter-form-page"
import { RevisionFormPage } from "@/pages/crud/revision-form-page"
import { AgentDashboardPage } from "@/pages/agent-dashboard-page"
import { BuildIndexPage } from "@/pages/build-index-page"
import { EditionHistoryPage } from "@/pages/edition-history-page"
import { InternationalBuildsPage } from "@/pages/international-builds-page"
import { LibraryPage } from "@/pages/library-page"
import { ManuscriptEditorPage } from "@/pages/manuscript-editor-page"
import { ReaderPreviewPage } from "@/pages/reader-preview-page"
import { RepositoriesIndexPage } from "@/pages/repositories-index-page"
import { RepositoryHomePage } from "@/pages/repository-home-page"
import { RevisionIndexPage } from "@/pages/revision-index-page"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routePatterns.repositories} element={<RepositoriesIndexPage />} />
        <Route path={routePatterns.repositoryNew} element={<CreateRepositoryPage />} />
        <Route path={routePatterns.library} element={<LibraryPage />} />
        <Route path={routePatterns.libraryEditionNew} element={<LibraryEditionFormPage />} />
        <Route path={routePatterns.libraryEditionEdit} element={<LibraryEditionFormPage />} />
        <Route path={routePatterns.agents} element={<AgentDashboardPage />} />
        <Route path={routePatterns.activityEventNew} element={<ActivityEventFormPage />} />
        <Route path={routePatterns.activityEventEdit} element={<ActivityEventFormPage />} />
        <Route path={routePatterns.metricNew} element={<MetricSnapshotFormPage />} />
        <Route path={routePatterns.metricEdit} element={<MetricSnapshotFormPage />} />

        <Route path={routePatterns.repository} element={<RepositoryLayout />}>
          <Route index element={<RepositoryHomePage />} />
          <Route path="edit" element={<EditRepositoryPage />} />
          <Route path="files/new" element={<ManuscriptFileFormPage />} />
          <Route path="files/:fileId/edit" element={<ManuscriptFileFormPage />} />
          <Route path="revisions/new" element={<RevisionFormPage />} />
          <Route path="revisions/:revisionId/edit" element={<RevisionFormPage />} />
          <Route path="revision/:revisionId?" element={<RevisionIndexPage />} />
          <Route path="reader" element={<ReaderPreviewPage />} />
          <Route path="chapters/new" element={<ReaderChapterFormPage />} />
          <Route path="chapters/:chapterId/edit" element={<ReaderChapterFormPage />} />
          <Route path="build/:buildId?" element={<BuildIndexPage />} />
          <Route path="builds/new" element={<LiteraryBuildFormPage />} />
          <Route path="builds/:buildId/edit" element={<LiteraryBuildFormPage />} />
          <Route path="agents/new" element={<AgentFormPage />} />
          <Route path="agents/:agentId/edit" element={<AgentFormPage />} />
          <Route path="edition" element={<EditionHistoryPage />} />
          <Route path="edition/international" element={<InternationalBuildsPage />} />
          <Route path="editor" element={<ManuscriptEditorPage />} />
        </Route>

        <Route
          path="/"
          element={<Navigate to={routes.repositoryHome(DEFAULT_REPOSITORY_SLUG)} replace />}
        />
        <Route
          path="*"
          element={<Navigate to={routes.repositoryHome(DEFAULT_REPOSITORY_SLUG)} replace />}
        />
      </Route>
    </Routes>
  )
}

const backend = (import.meta.env.VITE_GITTENBERG_BACKEND ?? "sqlite") as GittenbergBackend

export default function App() {
  return (
    <GittenbergDataProvider backend={backend}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GittenbergDataProvider>
  )
}
