import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import {
  ReaderArticle,
  ReaderTocDrawer,
  ReaderToolbar,
  useDrawerOpen,
  useReaderTypography,
  useTocSelection,
} from "@tx/ui-lib"
import {
  useGittenbergData,
  useRepository,
  useRepositoryReaderChapters,
} from "@tx/gittenberg-data-react"
import { toCanvasThemes, toReaderTocChapters } from "@/data/mappers"
import { routes } from "@/navigation/routes"

export function ReaderPreviewPage() {
  const repository = useRepository()
  const readerChapters = useRepositoryReaderChapters()
  const { ui } = useGittenbergData()
  const chapter = readerChapters[0]
  const { open, openDrawer, closeDrawer } = useDrawerOpen(false)
  const { chapterItems } = useTocSelection(
    toReaderTocChapters([...readerChapters]),
    chapter?.id ?? "",
  )
  const { fontSize, activeFamily, activeThemeId } = useReaderTypography(18, "serif", "cream")

  if (!chapter) {
    return (
      <main className="mx-auto max-w-container-max px-margin-mobile pt-24 pb-20 md:px-margin-desktop">
        <h1 className="font-headline-lg text-headline-lg text-primary">Reader preview</h1>
        <p className="mt-2 text-on-surface-variant">No chapters for this repository yet.</p>
        <Button className="mt-8" asChild>
          <Link to={routes.repositoryChapterNew(repository.slug)}>Add reader chapter</Link>
        </Button>
      </main>
    )
  }

  return (
    <>
      <ReaderTocDrawer
        title={repository.title}
        subtitle={repository.subtitle}
        chapters={chapterItems}
        footerItems={[...ui.sidebarFooter]}
        open={open}
        onClose={closeDrawer}
      />
      <div className="fixed top-20 right-4 z-50 hidden gap-2 md:flex">
        <Button size="sm" variant="outline" asChild>
          <Link to={routes.repositoryChapterEdit(repository.slug, chapter.id)}>Edit chapter</Link>
        </Button>
        <Button size="sm" asChild>
          <Link to={routes.repositoryChapterNew(repository.slug)}>Add chapter</Link>
        </Button>
      </div>
      <main className="flex min-h-screen justify-center px-margin-mobile pt-32 pb-48 md:px-margin-desktop">
        <ReaderArticle
          chapterLabel={chapter.label}
          title={chapter.title}
          paragraphs={chapter.paragraphs as string[]}
          illustrationSrc={ui.readerIllustration}
          illustrationAlt="Ocean illustration"
          fontSize={fontSize}
        />
      </main>
      <ReaderToolbar
        fontSize={fontSize}
        activeFamily={activeFamily}
        themes={toCanvasThemes(ui.canvasThemes)}
        activeThemeId={activeThemeId}
      />
      <button
        type="button"
        className="fixed top-20 left-4 z-50 rounded-full bg-primary px-3 py-2 text-on-primary md:hidden"
        onClick={openDrawer}
      >
        TOC
      </button>
    </>
  )
}
