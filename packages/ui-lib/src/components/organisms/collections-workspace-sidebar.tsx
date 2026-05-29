import { CollectionNavItem } from "@/components/molecules/collection-nav-item"
import { FolderNavItem } from "@/components/molecules/folder-nav-item"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type CollectionWorkspaceItem = {
  id: string
  name: string
  kind: "shelf" | "folder" | "workspace"
  active?: boolean
  count?: number
}

export type CollectionsWorkspaceSidebarProps = {
  collections: CollectionWorkspaceItem[]
  folders?: { id: string; name: string; active?: boolean }[]
  onNewFolder?: () => void
  className?: string
}

export function CollectionsWorkspaceSidebar({
  collections,
  folders = [],
  onNewFolder,
  className,
}: CollectionsWorkspaceSidebarProps) {
  return (
    <aside className={cn("w-full shrink-0 md:w-64", className)}>
      <div className="sticky top-32 space-y-section">
        <div>
          <h3 className="mb-component px-4 font-ui-label-sm tracking-widest text-on-surface-variant uppercase">
            Workspaces
          </h3>
          <div className="space-y-1">
            {collections.map((item) => (
              <CollectionNavItem
                key={item.id}
                label={item.name}
                count={item.count}
                active={item.active}
                icon={item.kind === "folder" ? "folder" : "auto_stories"}
              />
            ))}
          </div>
        </div>
        {folders.length > 0 || onNewFolder ? (
          <div>
            <h3 className="mb-component px-4 font-ui-label-sm tracking-widest text-on-surface-variant uppercase">
              Folders
            </h3>
            <div className="space-y-1">
              {folders.map((folder) => (
                <FolderNavItem key={folder.id} label={folder.name} active={folder.active} />
              ))}
              {onNewFolder ? (
                <button
                  type="button"
                  onClick={onNewFolder}
                  className="flex w-full items-center gap-3 px-4 py-2 text-on-surface-variant transition-colors hover:text-primary"
                >
                  <MaterialIcon name="create_new_folder" size={18} />
                  <span className="font-ui-label-md text-ui-label-md">New Folder</span>
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  )
}
