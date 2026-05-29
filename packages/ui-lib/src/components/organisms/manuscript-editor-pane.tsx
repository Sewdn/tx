import { cn } from "@/lib/utils"

export type ManuscriptEditorPaneProps = {
  fileName: string
  content: string
  lineCount?: number
  className?: string
}

export function ManuscriptEditorPane({
  fileName,
  content,
  lineCount = 24,
  className,
}: ManuscriptEditorPaneProps) {
  const lines = content.split("\n")

  return (
    <div className={cn("flex flex-1 flex-col overflow-hidden bg-surface-container-lowest", className)}>
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container px-component py-component">
        <span className="font-code-sm text-code-sm text-primary">{fileName}</span>
        <span className="font-ui-label-sm text-ui-label-sm text-outline">Markdown</span>
      </div>
      <div className="flex flex-1 overflow-auto font-code-sm text-code-sm custom-scrollbar">
        <div className="border-r border-outline-variant bg-surface-container px-component py-component text-right text-outline-variant select-none">
          {Array.from({ length: Math.max(lineCount, lines.length) }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="flex-1 p-component whitespace-pre-wrap text-on-surface">{content}</pre>
      </div>
    </div>
  )
}
