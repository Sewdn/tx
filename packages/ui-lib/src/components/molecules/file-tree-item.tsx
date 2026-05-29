import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { FileTreeNode } from "@/lib/types"

export type FileTreeItemProps = {
  node: FileTreeNode
  depth?: number
}

export function FileTreeItem({ node, depth = 0 }: FileTreeItemProps) {
  const hasChildren = node.children && node.children.length > 0

  return (
    <div style={{ marginLeft: depth > 0 ? depth * 16 : 0 }}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-micro rounded p-micro transition-colors",
          node.highlighted
            ? "border-r-2 border-secondary bg-secondary-container/30 font-bold text-secondary"
            : "hover:bg-surface-container",
        )}
      >
        <MaterialIcon
          name={node.icon}
          size={18}
          className={node.highlighted ? "" : "text-outline"}
        />
        <span className="font-ui-label-md text-ui-label-md">{node.name}</span>
      </div>
      {hasChildren
        ? node.children!.map((child) => (
            <FileTreeItem key={child.id} node={child} depth={depth + 1} />
          ))
        : null}
    </div>
  )
}
