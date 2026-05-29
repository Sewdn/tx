import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  canvasThemes,
  readerIllustration,
  readerParagraphs,
  readerTocChapters,
  readerTocFooter,
} from "@/fixtures/slices"
import { defaultNavItems, footerLinks } from "@/fixtures/gittenberg"
import { useDrawerOpen } from "@/hooks/use-drawer-open"
import { useReaderTypography } from "@/hooks/use-reader-typography"
import { useTocSelection } from "@/hooks/use-toc-selection"
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer"
import { ReaderArticle } from "@/components/organisms/reader-article"
import { ReaderTocDrawer } from "@/components/organisms/reader-toc-drawer"
import { ReaderToolbar } from "@/components/organisms/reader-toolbar"
import { ReaderTopAppBar } from "@/components/organisms/reader-top-app-bar"

function ReaderPreviewPage() {
  const { open, openDrawer, closeDrawer } = useDrawerOpen(false)
  const { chapterItems } = useTocSelection(readerTocChapters, "1")
  const { fontSize, activeFamily, activeThemeId } = useReaderTypography(18, "serif", "cream")

  return (
    <div className="min-h-screen bg-background">
      <ReaderTopAppBar
        brandName="Gittenberg"
        navItems={defaultNavItems}
        activeNavId="repositories"
        onMenuClick={openDrawer}
      />
      <ReaderTocDrawer
        title="Moby Dick"
        subtitle="Herman Melville"
        chapters={chapterItems}
        footerItems={readerTocFooter}
        open={open}
        onClose={closeDrawer}
      />
      <main className="flex min-h-screen justify-center px-margin-mobile pt-32 pb-48 md:px-margin-desktop">
        <ReaderArticle
          chapterLabel="Chapter 1"
          title="Loomings"
          paragraphs={readerParagraphs}
          illustrationSrc={readerIllustration}
          illustrationAlt="Ocean illustration"
          fontSize={fontSize}
        />
      </main>
      <ReaderToolbar
        fontSize={fontSize}
        activeFamily={activeFamily}
        themes={canvasThemes}
        activeThemeId={activeThemeId}
      />
      <GittenbergFooter
        links={footerLinks}
        copyright="© 1851-2024 Gittenberg Public Domain Initiative"
      />
    </div>
  )
}

const meta: Meta = {
  title: "Gittenberg/Pages/Reader Preview",
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <ReaderPreviewPage />,
}
