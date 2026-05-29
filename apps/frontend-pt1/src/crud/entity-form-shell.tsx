import { useEffect, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { useForm } from "@tanstack/react-form"
import { Button } from "@tx/ui"
import { EntityFormProvider, type EntityFormApi } from "@/forms/entity-form-context"
import { hasFormFieldErrors, type FormFieldErrors } from "@/forms/form-types"

type EntityFormShellProps<T extends object> = {
  title: string
  description?: string
  backHref: string
  submitLabel: string
  defaultValues: T
  validate?: (values: T) => FormFieldErrors<T>
  resetWhenDefaultValuesChange?: boolean
  onSubmit: (values: T) => Promise<void>
  onDelete?: () => void
  deleteLabel?: string
  children: ReactNode
}

export function EntityFormShell<T extends object>({
  title,
  description,
  backHref,
  submitLabel,
  defaultValues,
  validate,
  resetWhenDefaultValuesChange = false,
  onSubmit,
  onDelete,
  deleteLabel = "Delete",
  children,
}: EntityFormShellProps<T>) {
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm({
    defaultValues,
    validators: validate
      ? {
          onSubmit: ({ value }) => {
            const fieldErrors = validate(value as T)
            if (!hasFormFieldErrors(fieldErrors)) return undefined
            return { fields: fieldErrors }
          },
        }
      : undefined,
    onSubmit: async ({ value }) => {
      setServerError(null)
      try {
        await onSubmit(value as T)
      } catch (cause) {
        setServerError(cause instanceof Error ? cause.message : "Something went wrong")
      }
    },
  })

  useEffect(() => {
    if (resetWhenDefaultValuesChange) {
      form.reset(defaultValues)
    }
  }, [defaultValues, resetWhenDefaultValuesChange, form])

  return (
    <EntityFormProvider form={form as EntityFormApi}>
      <main className="mx-auto max-w-3xl px-boundary pt-shell pb-page md:px-boundary">
        <Link to={backHref} className="text-sm text-primary underline">
          ← Back
        </Link>
        <h1 className="mt-component font-headline-lg text-headline-lg text-primary">{title}</h1>
        {description ? <p className="mt-micro text-on-surface-variant">{description}</p> : null}
        <form
          className="mt-section space-y-6"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            event.stopPropagation()
            void form.handleSubmit()
          }}
        >
          {children}
          {serverError ? <p className="text-sm text-destructive">{serverError}</p> : null}
          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <div className="flex flex-wrap gap-component">
                <Button type="submit" disabled={isSubmitting}>
                  {submitLabel}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link to={backHref}>Cancel</Link>
                </Button>
                {onDelete ? (
                  <Button
                    type="button"
                    variant="destructive"
                    disabled={isSubmitting}
                    onClick={onDelete}
                  >
                    {deleteLabel}
                  </Button>
                ) : null}
              </div>
            )}
          </form.Subscribe>
        </form>
      </main>
    </EntityFormProvider>
  )
}
