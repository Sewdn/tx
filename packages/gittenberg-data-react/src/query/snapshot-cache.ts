import type { GittenbergSnapshot } from "../context/load-snapshot.js"

/** Snapshot list fields backed by TanStack Query (excludes ports and static UI seed). */
export type GittenbergSnapshotCollection =
  | "repositories"
  | "manuscriptFiles"
  | "revisions"
  | "agents"
  | "literaryBuilds"
  | "libraryEditions"
  | "activityEvents"
  | "readerChapters"
  | "metricSnapshots"

export function patchSnapshotCollection<T extends { id: string }>(
  snapshot: GittenbergSnapshot,
  collection: GittenbergSnapshotCollection,
  updater: (items: readonly T[]) => readonly T[],
): GittenbergSnapshot {
  const items = snapshot[collection] as unknown as readonly T[]
  return {
    ...snapshot,
    [collection]: updater(items) as unknown as GittenbergSnapshot[typeof collection],
  }
}

export function optimisticRemoveFromSnapshot(
  snapshot: GittenbergSnapshot,
  collection: GittenbergSnapshotCollection,
  id: string,
): GittenbergSnapshot {
  return patchSnapshotCollection(snapshot, collection, (items) =>
    items.filter((item) => item.id !== id),
  )
}

export function optimisticUpsertInSnapshot<T extends { id: string }>(
  snapshot: GittenbergSnapshot,
  collection: GittenbergSnapshotCollection,
  entity: T,
): GittenbergSnapshot {
  return patchSnapshotCollection(snapshot, collection, (items) => {
    const index = items.findIndex((item) => item.id === entity.id)
    if (index === -1) {
      return [...items, entity]
    }
    return items.map((item, i) => (i === index ? entity : item))
  })
}

export function optimisticMergeInSnapshot<T extends { id: string }>(
  snapshot: GittenbergSnapshot,
  collection: GittenbergSnapshotCollection,
  id: string,
  patch: Partial<T>,
): GittenbergSnapshot {
  return patchSnapshotCollection(snapshot, collection, (items) =>
    items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
  )
}

export function optimisticAppendToSnapshot<T extends { id: string }>(
  snapshot: GittenbergSnapshot,
  collection: GittenbergSnapshotCollection,
  entity: T,
): GittenbergSnapshot {
  return patchSnapshotCollection(snapshot, collection, (items) => [...items, entity])
}
