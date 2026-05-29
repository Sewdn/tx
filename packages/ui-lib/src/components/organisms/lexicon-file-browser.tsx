import { FileTreeItem } from "@/components/molecules/file-tree-item"
import { MaterialIcon } from "@/components/atoms/material-icon"
import type { FileTreeNode } from "@/lib/types"

export type LexiconFileBrowserProps = {
  rootLabel?: string
  nodes: FileTreeNode[]
}

export function LexiconFileBrowser({
  rootLabel = "Gittenberg_OS",
  nodes,
}: LexiconFileBrowserProps) {
  return (
    <div className="flex w-72 flex-col border-r border-outline-variant bg-surface-bright">
      <div className="flex items-center justify-between border-b border-outline-variant p-4">
        <span className="font-ui-label-sm tracking-widest text-outline uppercase">{rootLabel}</span>
        <MaterialIcon name="unfold_more" size={16} className="text-on-surface-variant" />
      </div>
      <div className="flex-1 space-y-0.5 overflow-y-auto p-2 custom-scrollbar">
        {nodes.map((node) => (
          <FileTreeItem key={node.id} node={node} />
        ))}
      </div>
    </div>
  )
}
