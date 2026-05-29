import type { ReactNode } from "react"
import type { AnyFieldApi } from "@tanstack/react-form"
import { Checkbox, Input, Textarea } from "@tx/ui"
import { useEntityForm } from "@/forms/entity-form-context"

function FieldErrors({ field }: { field: AnyFieldApi }) {
  if (!field.state.meta.isTouched && !field.state.meta.isDirty) return null
  const message = field.state.meta.errors
    .map((error) => (typeof error === "string" ? error : String(error)))
    .filter(Boolean)
    .join(", ")
  if (!message) return null
  return <span className="text-xs text-destructive">{message}</span>
}

type FormTextFieldProps = {
  name: string
  label: string
  type?: string
  placeholder?: string
  hint?: string
  // TanStack Form field listeners (e.g. slug sync from title)
  listeners?: Record<string, unknown>
}

export function FormTextField({
  name,
  label,
  type = "text",
  placeholder,
  hint,
  listeners,
}: FormTextFieldProps) {
  const form = useEntityForm()

  return (
    <form.Field name={name} listeners={listeners}>
      {(field) => (
        <label className="flex flex-col gap-1.5">
          <span className="font-ui-label-md text-ui-label-md text-on-surface-variant">{label}</span>
          <Input
            type={type}
            placeholder={placeholder}
            value={String(field.state.value ?? "")}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
          {hint ? <span className="text-xs text-on-surface-variant">{hint}</span> : null}
          <FieldErrors field={field} />
        </label>
      )}
    </form.Field>
  )
}

type FormJsonFieldProps = {
  name: string
  label: string
  rows?: number
  hint?: string
}

export function FormJsonField({ name, label, rows = 6, hint }: FormJsonFieldProps) {
  const form = useEntityForm()

  return (
    <form.Field name={name}>
      {(field) => (
        <label className="flex flex-col gap-1.5">
          <span className="font-ui-label-md text-ui-label-md text-on-surface-variant">{label}</span>
          <Textarea
            rows={rows}
            className="font-mono text-sm"
            value={String(field.state.value ?? "")}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
          {hint ? <span className="text-xs text-on-surface-variant">{hint}</span> : null}
          <FieldErrors field={field} />
        </label>
      )}
    </form.Field>
  )
}

type FormCheckboxFieldProps = {
  name: string
  label: string
}

export function FormCheckboxField({ name, label }: FormCheckboxFieldProps) {
  const form = useEntityForm()

  return (
    <form.Field name={name}>
      {(field) => (
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={Boolean(field.state.value)}
              onBlur={field.handleBlur}
              onCheckedChange={(value) => field.handleChange(value === true)}
            />
            <span className="font-ui-label-md text-ui-label-md">{label}</span>
          </label>
          <FieldErrors field={field} />
        </div>
      )}
    </form.Field>
  )
}

type FormSelectFieldProps = {
  name: string
  label: string
  options: ReadonlyArray<{ value: string; label: string }>
}

export function FormSelectField({ name, label, options }: FormSelectFieldProps) {
  const form = useEntityForm()

  return (
    <form.Field name={name}>
      {(field) => (
        <label className="flex flex-col gap-1.5">
          <span className="font-ui-label-md text-ui-label-md text-on-surface-variant">{label}</span>
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            value={String(field.state.value ?? "")}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldErrors field={field} />
        </label>
      )}
    </form.Field>
  )
}

export function FormBody({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>
}
