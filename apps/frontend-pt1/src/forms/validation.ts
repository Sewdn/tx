import { requiredField, validateJsonField } from "@/crud/utils"
import type { FormFieldErrors } from "@/forms/form-types"
import type {
  ActivityEventFormValues,
  AgentFormValues,
  LibraryEditionFormValues,
  LiteraryBuildFormValues,
  ManuscriptFileFormValues,
  MetricSnapshotFormValues,
  ReaderChapterFormValues,
  RepositoryFormValues,
  RevisionFormValues,
} from "@/forms/form-values"

export function validateRepositoryForm(values: RepositoryFormValues): FormFieldErrors<RepositoryFormValues> {
  const errors: FormFieldErrors<RepositoryFormValues> = {}
  const titleError = requiredField("Title")(values.title)
  if (titleError) errors.title = titleError
  const tagsError = validateJsonField(values.tagsJson)
  if (tagsError) errors.tagsJson = tagsError
  const metadataError = validateJsonField(values.metadataJson)
  if (metadataError) errors.metadataJson = metadataError
  return errors
}

export function validateManuscriptFileForm(
  values: ManuscriptFileFormValues,
): FormFieldErrors<ManuscriptFileFormValues> {
  const errors: FormFieldErrors<ManuscriptFileFormValues> = {}
  const nameError = requiredField("Name")(values.name)
  if (nameError) errors.name = nameError
  return errors
}

export function validateRevisionForm(values: RevisionFormValues): FormFieldErrors<RevisionFormValues> {
  const errors: FormFieldErrors<RevisionFormValues> = {}
  const titleError = requiredField("Title")(values.title)
  if (titleError) errors.title = titleError
  const breadcrumbsError = validateJsonField(values.breadcrumbsJson)
  if (breadcrumbsError) errors.breadcrumbsJson = breadcrumbsError
  const diffLinesError = validateJsonField(values.diffLinesJson)
  if (diffLinesError) errors.diffLinesJson = diffLinesError
  const commentsError = validateJsonField(values.commentsJson)
  if (commentsError) errors.commentsJson = commentsError
  return errors
}

export function validateAgentForm(values: AgentFormValues): FormFieldErrors<AgentFormValues> {
  const errors: FormFieldErrors<AgentFormValues> = {}
  const nameError = requiredField("Name")(values.name)
  if (nameError) errors.name = nameError
  return errors
}

export function validateLiteraryBuildForm(
  values: LiteraryBuildFormValues,
): FormFieldErrors<LiteraryBuildFormValues> {
  const errors: FormFieldErrors<LiteraryBuildFormValues> = {}
  const jsonFields = [
    "lineageJson",
    "artifactsJson",
    "buildStatusJson",
    "archivalVersionsJson",
    "stylingJson",
    "formatsJson",
    "presetsJson",
  ] as const
  for (const field of jsonFields) {
    const jsonError = validateJsonField(values[field])
    if (jsonError) errors[field] = jsonError
  }
  const progress = Number(values.progressPercent)
  if (Number.isNaN(progress) || progress < 0 || progress > 100) {
    errors.progressPercent = "Enter a number between 0 and 100"
  }
  return errors
}

export function validateReaderChapterForm(
  values: ReaderChapterFormValues,
): FormFieldErrors<ReaderChapterFormValues> {
  const errors: FormFieldErrors<ReaderChapterFormValues> = {}
  const titleError = requiredField("Title")(values.title)
  if (titleError) errors.title = titleError
  const paragraphsError = validateJsonField(values.paragraphsJson)
  if (paragraphsError) errors.paragraphsJson = paragraphsError
  const sortOrder = Number(values.sortOrder)
  if (Number.isNaN(sortOrder)) errors.sortOrder = "Sort order must be a number"
  return errors
}

export function validateLibraryEditionForm(
  values: LibraryEditionFormValues,
): FormFieldErrors<LibraryEditionFormValues> {
  const errors: FormFieldErrors<LibraryEditionFormValues> = {}
  const titleError = requiredField("Title")(values.title)
  if (titleError) errors.title = titleError
  const formatsError = validateJsonField(values.formatsJson)
  if (formatsError) errors.formatsJson = formatsError
  return errors
}

export function validateActivityEventForm(
  values: ActivityEventFormValues,
): FormFieldErrors<ActivityEventFormValues> {
  const errors: FormFieldErrors<ActivityEventFormValues> = {}
  const titleError = requiredField("Title")(values.title)
  if (titleError) errors.title = titleError
  return errors
}

export function validateMetricSnapshotForm(
  values: MetricSnapshotFormValues,
): FormFieldErrors<MetricSnapshotFormValues> {
  const errors: FormFieldErrors<MetricSnapshotFormValues> = {}
  const labelError = requiredField("Label")(values.label)
  if (labelError) errors.label = labelError
  return errors
}
