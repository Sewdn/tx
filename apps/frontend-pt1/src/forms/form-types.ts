/** Field-level validation errors returned from entity form validators. */
export type FormFieldErrors<T extends object> = Partial<Record<keyof T & string, string>>

export function hasFormFieldErrors<T extends object>(errors: FormFieldErrors<T>) {
  return Object.keys(errors).length > 0
}
