import type { ReactNode } from "react"
import { useGittenbergSnapshotQuery } from "../hooks/use-gittenberg-snapshot-query.js"

type GittenbergSnapshotGateProps = {
  children: ReactNode
  loadingFallback: ReactNode
  errorFallback?: (error: Error, retry: () => void) => ReactNode
}

const defaultErrorFallback = (error: Error, retry: () => void) => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 font-body-md text-on-surface-variant">
    <p>Failed to load Gittenberg archives.</p>
    <p className="text-sm text-destructive">{error.message}</p>
    <button
      type="button"
      className="rounded-md bg-primary px-4 py-2 text-on-primary"
      onClick={() => retry()}
    >
      Retry
    </button>
  </div>
)

export function GittenbergSnapshotGate({
  children,
  loadingFallback,
  errorFallback = defaultErrorFallback,
}: GittenbergSnapshotGateProps) {
  const query = useGittenbergSnapshotQuery()

  if (query.isPending) {
    return loadingFallback
  }

  if (query.isError) {
    return errorFallback(query.error, () => {
      void query.refetch()
    })
  }

  return children
}
