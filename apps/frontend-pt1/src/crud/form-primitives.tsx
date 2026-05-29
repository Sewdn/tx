import { Link } from "react-router-dom"
import { Button } from "@tx/ui"

type EntityListPanelProps = {
  title: string
  emptyMessage: string
  createHref: string
  createLabel: string
  items: ReadonlyArray<{ id: string; label: string; meta?: string }>
  editHref: (id: string) => string
  onDelete: (id: string) => void
}

export function EntityListPanel({
  title,
  emptyMessage,
  createHref,
  createLabel,
  items,
  editHref,
  onDelete,
}: EntityListPanelProps) {
  return (
    <section className="rounded-lg border border-outline-variant bg-surface-container-low p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="font-headline-lg text-[18px] text-primary">{title}</h2>
        <Button size="sm" asChild>
          <Link to={createHref}>{createLabel}</Link>
        </Button>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-on-surface-variant">{emptyMessage}</p>
      ) : (
        <ul className="divide-y divide-outline-variant">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="font-ui-label-md text-ui-label-md">{item.label}</p>
                {item.meta ? <p className="text-xs text-on-surface-variant">{item.meta}</p> : null}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link to={editHref(item.id)}>Edit</Link>
                </Button>
                <Button size="sm" variant="destructive" onClick={() => onDelete(item.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
