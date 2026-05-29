import type { ReactNode } from "react"
import { useGittenbergSnapshotQuery } from "../hooks/use-gittenberg-snapshot-query.js"
import { useGittenbergService } from "./gittenberg-service-context.js"

type GittenbergSnapshotGateProps = {
  children: ReactNode
  loadingFallback: ReactNode
  errorFallback?: (
    error: Error,
    actions: { retry: () => void; resetToSeed: () => Promise<void> },
  ) => ReactNode
}

function DefaultErrorFallback({
  error,
  onRetry,
  onReset,
  resetting,
}: {
  error: Error
  onRetry: () => void
  onReset: () => void
  resetting: boolean
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 font-body-md text-on-surface-variant">
      <p>Failed to load Gittenberg archives.</p>
      <p className="max-w-md text-center text-sm text-destructive">{error.message}</p>
      <p className="max-w-md text-center text-sm">
        Local data may be from an older schema (for example missing agent <code>role</code>).
        Reset loads the current demo seed.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="rounded-md border border-outline-variant px-4 py-2"
          onClick={onRetry}
          disabled={resetting}
        >
          Retry
        </button>
        <button
          type="button"
          className="rounded-md bg-primary px-4 py-2 text-on-primary disabled:opacity-60"
          onClick={onReset}
          disabled={resetting}
        >
          {resetting ? "Resetting…" : "Reset to seed data"}
        </button>
      </div>
    </div>
  )
}

export function GittenbergSnapshotGate({
  children,
  loadingFallback,
  errorFallback,
}: GittenbergSnapshotGateProps) {
  const { service } = useGittenbergService()
  const query = useGittenbergSnapshotQuery()

  if (query.isPending) {
    return loadingFallback
  }

  if (query.isError) {
    const resetToSeed = async () => {
      await service.resetToSeed()
      await query.refetch()
    }

    if (errorFallback) {
      return errorFallback(query.error, {
        retry: () => {
          void query.refetch()
        },
        resetToSeed,
      })
    }

    return (
      <DefaultErrorFallback
        error={query.error}
        onRetry={() => {
          void query.refetch()
        }}
        onReset={() => {
          void resetToSeed()
        }}
        resetting={query.isFetching}
      />
    )
  }

  return children
}
