import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergMutation,
  useGittenbergPorts,
  useRepository,
  useRepositoryReaderChapters,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { ReaderChapterFormFields } from "@/forms/entity-form-fields"
import { readerChapterFormInitialValues, readerChapterFormToInput } from "@/forms/form-values"
import { validateReaderChapterForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function ReaderChapterFormPage() {
  const repository = useRepository()
  const { chapterId } = useParams<{ chapterId?: string }>()
  const isEdit = Boolean(chapterId)
  const chapters = useRepositoryReaderChapters()
  const existing = chapterId ? chapters.find((item) => item.id === chapterId) : undefined
  const nextSortOrder = chapters.length > 0 ? Math.max(...chapters.map((c) => c.sortOrder)) + 1 : 1
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Reader chapter not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit reader chapter" : "Add reader chapter"}
      backHref={routes.repositoryReader(repository.slug)}
      submitLabel={isEdit ? "Save chapter" : "Create chapter"}
      defaultValues={readerChapterFormInitialValues(
        repository.id,
        existing?.sortOrder ?? nextSortOrder,
        existing,
      )}
      validate={validateReaderChapterForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete chapter "${existing.title}"?`)) return
              void mutate(async () => {
                await ports.readerChapter.remove(existing.id)
                navigate(routes.repositoryReader(repository.slug))
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = readerChapterFormToInput(values)
        if (isEdit && existing) {
          await mutate(() => ports.readerChapter.update(existing.id, input))
        } else {
          await mutate(() => ports.readerChapter.create(input))
        }
        navigate(routes.repositoryReader(repository.slug))
      }}
    >
      <ReaderChapterFormFields />
    </EntityFormShell>
  )
}
