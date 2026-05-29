import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { PrototypeHomePage } from "@/pages/prototype-home-page"
import type { GittenbergBackend } from "@tx/gittenberg-data"
import { GittenbergDataProvider } from "@tx/gittenberg-data-react"
import { routePatterns, routes } from "@/navigation/routes"
import { AppLayout } from "@/shell/app-layout"
import { ConsumerLayout } from "@/shell/consumer-layout"
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
import { ArweaveAnchoringPage } from "@/pages/arweave-anchoring-page"
import { BookDetailPage } from "@/pages/book-detail-page"
import { BuildIndexPage } from "@/pages/build-index-page"
import { CertificatePage } from "@/pages/certificate-page"
import { CinematicLibraryPage } from "@/pages/cinematic-library-page"
import { CreativeStudioPage } from "@/pages/creative-studio-page"
import { CuratedCollectionPage } from "@/pages/curated-collection-page"
import { EditionHistoryPage } from "@/pages/edition-history-page"
import { EternalGalleryPage } from "@/pages/eternal-gallery-page"
import { ExplorePage } from "@/pages/explore-page"
import { InternationalBuildsPage } from "@/pages/international-builds-page"
import { LibraryPage } from "@/pages/library-page"
import { ManuscriptEditorPage } from "@/pages/manuscript-editor-page"
import { MembershipPage } from "@/pages/membership-page"
import { MyCollectionsPage } from "@/pages/my-collections-page"
import { PrintOrderPage } from "@/pages/print-order-page"
import { ReaderPreviewPage } from "@/pages/reader-preview-page"
import { RepositoriesIndexPage } from "@/pages/repositories-index-page"
import { RepositoryHomePage } from "@/pages/repository-home-page"
import { RevisionIndexPage } from "@/pages/revision-index-page"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ConsumerLayout />}>
        <Route path={routePatterns.explore} element={<ExplorePage />} />
        <Route path={routePatterns.libraryCinematic} element={<CinematicLibraryPage />} />
        <Route path={routePatterns.libraryEdition} element={<BookDetailPage />} />
        <Route path={routePatterns.libraryCollection} element={<CuratedCollectionPage />} />
        <Route path={routePatterns.myCollections} element={<MyCollectionsPage />} />
        <Route path={routePatterns.eternalGallery} element={<EternalGalleryPage />} />
        <Route path={routePatterns.subscribe} element={<MembershipPage />} />
        <Route path={routePatterns.creativeStudio} element={<CreativeStudioPage />} />
        <Route path={routePatterns.printOrder} element={<PrintOrderPage />} />
        <Route path={routePatterns.printOrderAgent} element={<PrintOrderPage agentMode />} />
        <Route path={routePatterns.certificate} element={<CertificatePage />} />
        <Route path={routePatterns.archiveAnchor} element={<ArweaveAnchoringPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path={routePatterns.prototypeHome} element={<PrototypeHomePage />} />
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

      </Route>

      <Route path="*" element={<Navigate to={routes.prototypeHome} replace />} />
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
