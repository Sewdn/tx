import type { Repository } from "@tx/domain-shared"

export function resolveRepository(
  repositories: readonly Repository[],
  slugOrId: string,
): Repository | undefined {
  const normalized = slugOrId.trim().toLowerCase()
  return repositories.find(
    (repository) =>
      repository.id === slugOrId ||
      repository.slug === slugOrId ||
      repository.slug.toLowerCase() === normalized,
  )
}
