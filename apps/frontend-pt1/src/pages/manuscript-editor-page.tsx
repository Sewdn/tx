import { CuratorProfile, LexiconFileBrowser, ManuscriptEditorPane } from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { editorSampleMarkdown } from "@tx/gittenberg-data"

export function ManuscriptEditorPage() {
  const { ui } = useGittenbergData()

  return (
    <main className="flex min-h-screen flex-col pt-shell">
      <div className="flex flex-1 overflow-hidden">
        <LexiconFileBrowser nodes={[...ui.fileTree]} />
        <ManuscriptEditorPane fileName="02_Echoes_of_Dust.md" content={editorSampleMarkdown} />
      </div>
      <div className="border-t border-outline-variant px-section py-component">
        <CuratorProfile
          name="Dr. Elias Thorne"
          role="Lead Curator"
          avatarSrc={ui.curatorAvatar}
        />
      </div>
    </main>
  )
}
