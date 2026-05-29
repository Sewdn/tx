import { useQuery, useQueryClient, type UseQueryOptions, type UseQueryResult } from "@tanstack/react-query"
import { loadGittenbergSnapshot, type GittenbergSnapshot } from "../context/load-snapshot.js"
import { useGittenbergService } from "../context/gittenberg-service-context.js"
import { gittenbergKeys } from "../query/query-keys.js"

export type UseGittenbergSnapshotQueryOptions = Omit<
  UseQueryOptions<GittenbergSnapshot, Error, GittenbergSnapshot, ReturnType<typeof gittenbergKeys.snapshot>>,
  "queryKey" | "queryFn"
>

export function useGittenbergSnapshotQuery(
  options?: UseGittenbergSnapshotQueryOptions,
): UseQueryResult<GittenbergSnapshot, Error> {
  const { service, namespace } = useGittenbergService()

  return useQuery({
    queryKey: gittenbergKeys.snapshot(namespace),
    queryFn: () => loadGittenbergSnapshot(service),
    ...options,
  })
}

export function useInvalidateGittenbergSnapshot() {
  const queryClient = useQueryClient()
  const { namespace } = useGittenbergService()

  return () =>
    queryClient.invalidateQueries({
      queryKey: gittenbergKeys.snapshot(namespace),
    })
}

export function useGittenbergQueryClient() {
  return useQueryClient()
}
