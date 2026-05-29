import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query"
import { useCallback } from "react"
import type { GittenbergSnapshot } from "../context/load-snapshot.js"
import { useGittenbergService } from "../context/gittenberg-service-context.js"
import { gittenbergKeys } from "../query/query-keys.js"
import {
  optimisticAppendToSnapshot,
  optimisticMergeInSnapshot,
  optimisticRemoveFromSnapshot,
  optimisticUpsertInSnapshot,
  type GittenbergSnapshotCollection,
} from "../query/snapshot-cache.js"

type SnapshotMutationContext = {
  previousSnapshot: GittenbergSnapshot | undefined
}

function useSnapshotMutationContext() {
  const queryClient = useQueryClient()
  const { namespace } = useGittenbergService()
  const queryKey = gittenbergKeys.snapshot(namespace)

  const cancelAndSnapshot = async () => {
    await queryClient.cancelQueries({ queryKey })
    return queryClient.getQueryData<GittenbergSnapshot>(queryKey)
  }

  const restore = (previousSnapshot: GittenbergSnapshot | undefined) => {
    if (previousSnapshot) {
      queryClient.setQueryData(queryKey, previousSnapshot)
    }
  }

  const invalidate = () => queryClient.invalidateQueries({ queryKey })

  const setSnapshot = (updater: (snapshot: GittenbergSnapshot) => GittenbergSnapshot) => {
    queryClient.setQueryData<GittenbergSnapshot>(queryKey, (current) =>
      current ? updater(current) : current,
    )
  }

  return { queryKey, cancelAndSnapshot, restore, invalidate, setSnapshot }
}

export type UseGittenbergCreateMutationOptions<TEntity extends { id: string }, TInput> = {
  collection: GittenbergSnapshotCollection
  mutationFn: (input: TInput) => Promise<TEntity>
  /** Optional optimistic row before the server responds (e.g. temp id). */
  optimisticEntity?: (input: TInput) => TEntity
} & Omit<
  UseMutationOptions<TEntity, Error, TInput, SnapshotMutationContext>,
  "mutationFn" | "onMutate" | "onError" | "onSettled"
>

export function useGittenbergCreateMutation<TEntity extends { id: string }, TInput>(
  options: UseGittenbergCreateMutationOptions<TEntity, TInput>,
): UseMutationResult<TEntity, Error, TInput, SnapshotMutationContext> {
  const { collection, mutationFn, optimisticEntity, ...mutationOptions } = options
  const { cancelAndSnapshot, restore, invalidate, setSnapshot } = useSnapshotMutationContext()

  return useMutation({
    mutationFn,
    onMutate: async (input) => {
      const previousSnapshot = await cancelAndSnapshot()
      if (optimisticEntity && previousSnapshot) {
        setSnapshot((snapshot) =>
          optimisticAppendToSnapshot(snapshot, collection, optimisticEntity(input)),
        )
      }
      return { previousSnapshot }
    },
    onError: (_error, _input, context) => {
      restore(context?.previousSnapshot)
    },
    onSuccess: (entity) => {
      setSnapshot((snapshot) => optimisticUpsertInSnapshot(snapshot, collection, entity))
    },
    onSettled: () => {
      void invalidate()
    },
    ...mutationOptions,
  })
}

export type UseGittenbergUpdateMutationOptions<
  TEntity extends { id: string },
  TInput,
> = {
  collection: GittenbergSnapshotCollection
  mutationFn: (params: { id: string; input: TInput }) => Promise<TEntity>
  optimisticPatch?: (input: TInput) => Partial<TEntity>
} & Omit<
  UseMutationOptions<TEntity, Error, { id: string; input: TInput }, SnapshotMutationContext>,
  "mutationFn" | "onMutate" | "onError" | "onSettled"
>

export function useGittenbergUpdateMutation<TEntity extends { id: string }, TInput>(
  options: UseGittenbergUpdateMutationOptions<TEntity, TInput>,
): UseMutationResult<TEntity, Error, { id: string; input: TInput }, SnapshotMutationContext> {
  const { collection, mutationFn, optimisticPatch, ...mutationOptions } = options
  const { cancelAndSnapshot, restore, invalidate, setSnapshot } = useSnapshotMutationContext()

  return useMutation({
    mutationFn,
    onMutate: async ({ id, input }) => {
      const previousSnapshot = await cancelAndSnapshot()
      if (previousSnapshot) {
        setSnapshot((snapshot) =>
          optimisticMergeInSnapshot(
            snapshot,
            collection,
            id,
            (optimisticPatch?.(input) ?? input) as Partial<TEntity>,
          ),
        )
      }
      return { previousSnapshot }
    },
    onError: (_error, _variables, context) => {
      restore(context?.previousSnapshot)
    },
    onSuccess: (entity) => {
      setSnapshot((snapshot) => optimisticUpsertInSnapshot(snapshot, collection, entity))
    },
    onSettled: () => {
      void invalidate()
    },
    ...mutationOptions,
  })
}

export type UseGittenbergRemoveMutationOptions = {
  collection: GittenbergSnapshotCollection
  mutationFn: (id: string) => Promise<void>
} & Omit<
  UseMutationOptions<void, Error, string, SnapshotMutationContext>,
  "mutationFn" | "onMutate" | "onError" | "onSettled"
>

export function useGittenbergRemoveMutation(
  options: UseGittenbergRemoveMutationOptions,
): UseMutationResult<void, Error, string, SnapshotMutationContext> {
  const { collection, mutationFn, ...mutationOptions } = options
  const { cancelAndSnapshot, restore, invalidate, setSnapshot } = useSnapshotMutationContext()

  return useMutation({
    mutationFn,
    onMutate: async (id) => {
      const previousSnapshot = await cancelAndSnapshot()
      if (previousSnapshot) {
        setSnapshot((snapshot) => optimisticRemoveFromSnapshot(snapshot, collection, id))
      }
      return { previousSnapshot }
    },
    onError: (_error, _id, context) => {
      restore(context?.previousSnapshot)
    },
    onSettled: () => {
      void invalidate()
    },
    ...mutationOptions,
  })
}

/**
 * Runs an arbitrary async port operation, then invalidates the Gittenberg snapshot query.
 * Prefer {@link useGittenbergCreateMutation}, {@link useGittenbergUpdateMutation}, or
 * {@link useGittenbergRemoveMutation} for optimistic cache updates.
 */
export function useGittenbergMutation() {
  const invalidate = useInvalidateGittenbergSnapshotFromMutation()

  return useCallback(
    async <T>(operation: () => Promise<T>): Promise<T> => {
      const result = await operation()
      await invalidate()
      return result
    },
    [invalidate],
  )
}

function useInvalidateGittenbergSnapshotFromMutation() {
  const queryClient = useQueryClient()
  const { namespace } = useGittenbergService()

  return useCallback(
    () =>
      queryClient.invalidateQueries({
        queryKey: gittenbergKeys.snapshot(namespace),
      }),
    [queryClient, namespace],
  )
}
