/** TanStack Query keys for Gittenberg data (backend-agnostic). */
export const gittenbergKeys = {
  all: ["gittenberg"] as const,
  snapshot: (namespace: string) => [...gittenbergKeys.all, "snapshot", namespace] as const,
}
