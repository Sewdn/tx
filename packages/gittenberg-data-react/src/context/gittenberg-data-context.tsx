import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import {
  createGittenbergDataService,
  GITTENBERG_DEFAULT_STORAGE_NAMESPACE,
  type CreateGittenbergDataServiceOptions,
  type GittenbergBackend,
  type GittenbergDataService,
} from "@tx/gittenberg-data"
import {
  useGittenbergQueryClient,
  useGittenbergSnapshotQuery,
  useInvalidateGittenbergSnapshot,
} from "../hooks/use-gittenberg-snapshot-query.js"
import { gittenbergKeys } from "../query/query-keys.js"
import type { GittenbergSnapshot } from "./load-snapshot.js"
import { GittenbergServiceProvider, useGittenbergService } from "./gittenberg-service-context.js"
import { GittenbergSnapshotGate } from "./gittenberg-snapshot-gate.js"

export type { GittenbergSnapshot } from "./load-snapshot.js"

export type GittenbergDataContextValue = GittenbergSnapshot & {
  readonly service: GittenbergDataService
  readonly backend: GittenbergBackend
  readonly refresh: () => Promise<void>
  readonly resetToSeed: () => Promise<void>
}

const defaultLoading = (
  <div className="flex min-h-screen items-center justify-center bg-background font-body-md text-on-surface-variant">
    Loading Gittenberg archives…
  </div>
)

export type GittenbergDataProviderProps = CreateGittenbergDataServiceOptions & {
  children: ReactNode
  loadingFallback?: ReactNode
  queryClient?: QueryClient
}

function createDefaultQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
      mutations: {
        retry: 0,
      },
    },
  })
}

export function GittenbergDataProvider({
  children,
  backend = "sqlite",
  namespace: namespaceOption,
  seedIfEmpty,
  loadingFallback = defaultLoading,
  queryClient: queryClientProp,
}: GittenbergDataProviderProps) {
  const namespace = namespaceOption ?? GITTENBERG_DEFAULT_STORAGE_NAMESPACE
  const [serviceState, setServiceState] = useState<{
    service: GittenbergDataService
    backend: GittenbergBackend
  } | null>(null)
  const serviceRef = useRef<GittenbergDataService | null>(null)
  const queryClient = useMemo(
    () => queryClientProp ?? createDefaultQueryClient(),
    [queryClientProp],
  )

  useEffect(() => {
    let active = true

    void (async () => {
      const service = await createGittenbergDataService({ backend, namespace, seedIfEmpty })
      if (!active) {
        await service.dispose()
        return
      }

      serviceRef.current = service
      setServiceState({ service, backend: service.backend })
    })()

    return () => {
      active = false
      const service = serviceRef.current
      serviceRef.current = null
      void service?.dispose()
    }
  }, [backend, namespace, seedIfEmpty])

  if (!serviceState) {
    return loadingFallback
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GittenbergServiceProvider
        value={{
          service: serviceState.service,
          ui: serviceState.service.ui,
          backend: serviceState.backend,
          namespace,
        }}
      >
        <GittenbergSnapshotGate loadingFallback={loadingFallback}>{children}</GittenbergSnapshotGate>
      </GittenbergServiceProvider>
    </QueryClientProvider>
  )
}

export function useGittenbergData(): GittenbergDataContextValue {
  const { service, backend } = useGittenbergService()
  const { data } = useGittenbergSnapshotQuery()
  const invalidate = useInvalidateGittenbergSnapshot()
  const queryClient = useGittenbergQueryClient()

  if (!data) {
    throw new Error(
      "Gittenberg snapshot is not available. Ensure the app is wrapped in GittenbergDataProvider.",
    )
  }

  const refresh = useCallback(async () => {
    await invalidate()
  }, [invalidate])

  const resetToSeed = useCallback(async () => {
    await service.resetToSeed()
    await queryClient.invalidateQueries({ queryKey: gittenbergKeys.all })
  }, [service, queryClient])

  return useMemo(
    () => ({
      ...data,
      service,
      backend,
      refresh,
      resetToSeed,
    }),
    [data, service, backend, refresh, resetToSeed],
  )
}

export function useGittenbergPorts() {
  return useGittenbergService().service.ports
}

export function useGittenbergRefresh() {
  const invalidate = useInvalidateGittenbergSnapshot()
  return useCallback(async () => {
    await invalidate()
  }, [invalidate])
}

export { useGittenbergMutation } from "../hooks/use-gittenberg-mutations.js"
