export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function parseJsonField<T>(raw: string, fallback: T): T {
  const trimmed = raw.trim()
  if (!trimmed) return fallback
  return JSON.parse(trimmed) as T
}

export function stringifyJsonField(value: unknown) {
  return JSON.stringify(value, null, 2)
}

export function validateJsonField(value: string): string | undefined {
  const trimmed = value.trim()
  if (!trimmed) return undefined
  try {
    JSON.parse(trimmed)
    return undefined
  } catch {
    return "Invalid JSON"
  }
}

export function requiredField(label: string) {
  return (value: string): string | undefined => {
    if (!value?.trim()) return `${label} is required`
    return undefined
  }
}
