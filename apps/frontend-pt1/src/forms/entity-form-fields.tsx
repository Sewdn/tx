import {
  FormBody,
  FormCheckboxField,
  FormJsonField,
  FormSelectField,
  FormTextField,
} from "@/forms/form-fields"
import { useEntityForm } from "@/forms/entity-form-context"
import type { RepositoryFormValues } from "@/forms/form-values"
import { slugify } from "@/crud/utils"

export function RepositoryFormFields() {
  const form = useEntityForm<RepositoryFormValues>()

  return (
    <FormBody>
      <FormTextField
        name="title"
        label="Title"
        listeners={{
          onChange: ({ value }) => {
            const slugMeta = form.getFieldMeta("slug")
            if (!slugMeta?.isTouched) {
              form.setFieldValue("slug", slugify(String(value)))
            }
          },
        }}
      />
      <FormTextField
        name="slug"
        label="Slug"
        hint="Used in URLs: /repositories/your-slug"
      />
      <FormTextField name="subtitle" label="Subtitle" />
      <FormTextField name="coverUrl" label="Cover URL" />
      <FormTextField name="heroTitle" label="Hero title" />
      <FormTextField name="heroSubtitle" label="Hero subtitle" />
      <FormTextField name="branchName" label="Branch name" />
      <FormTextField name="branchLabel" label="Branch label" />
      <FormTextField name="lastUpdate" label="Last update" />
      <FormJsonField name="tagsJson" label="Tags (JSON)" rows={4} />
      <FormJsonField name="metadataJson" label="Metadata (JSON)" rows={8} />
      <FormTextField name="readmeExcerpt" label="README excerpt" />
    </FormBody>
  )
}

export function ManuscriptFileFormFields() {
  return (
    <FormBody>
      <FormTextField name="name" label="Name" />
      <FormTextField name="description" label="Description" />
      <FormTextField name="icon" label="Icon" />
      <FormTextField name="timestamp" label="Timestamp" />
      <FormCheckboxField name="highlighted" label="Highlighted" />
      <FormTextField name="highlightLabel" label="Highlight label" />
    </FormBody>
  )
}

export function RevisionFormFields() {
  return (
    <FormBody>
      <FormTextField name="title" label="Title" />
      <FormSelectField
        name="status"
        label="Status"
        options={[
          { value: "open", label: "Open" },
          { value: "merged", label: "Merged" },
          { value: "closed", label: "Closed" },
        ]}
      />
      <FormTextField name="author" label="Author" />
      <FormTextField name="timestamp" label="Timestamp" />
      <FormTextField name="fileName" label="File name" />
      <FormJsonField name="breadcrumbsJson" label="Breadcrumbs (JSON)" />
      <FormJsonField name="diffLinesJson" label="Diff lines (JSON)" rows={10} />
      <FormJsonField name="commentsJson" label="Comments (JSON)" rows={8} />
    </FormBody>
  )
}

export function AgentFormFields() {
  return (
    <FormBody>
      <FormTextField name="name" label="Name" />
      <FormTextField name="description" label="Description" />
      <FormTextField name="status" label="Status" />
      <FormTextField name="statusVariant" label="Status variant" />
      <FormTextField name="icon" label="Icon" />
      <FormTextField name="iconVariant" label="Icon variant" />
    </FormBody>
  )
}

export function LiteraryBuildFormFields() {
  return (
    <FormBody>
      <FormTextField name="version" label="Version" />
      <FormTextField name="statusLabel" label="Status label" />
      <FormTextField name="title" label="Title" />
      <FormTextField name="description" label="Description" />
      <FormTextField name="commitHash" label="Commit hash" />
      <FormTextField name="progressPercent" label="Progress %" type="number" />
      <FormTextField name="statusMessage" label="Status message" />
      <FormJsonField name="lineageJson" label="Lineage (JSON)" />
      <FormJsonField name="artifactsJson" label="Artifacts (JSON)" />
      <FormJsonField name="buildStatusJson" label="Build status (JSON)" />
      <FormJsonField name="archivalVersionsJson" label="Archival versions (JSON)" />
      <FormJsonField name="stylingJson" label="Styling (JSON)" rows={8} />
      <FormJsonField name="formatsJson" label="Formats (JSON)" />
      <FormJsonField name="presetsJson" label="Presets (JSON)" />
    </FormBody>
  )
}

export function ReaderChapterFormFields() {
  return (
    <FormBody>
      <FormTextField name="label" label="Label" />
      <FormTextField name="title" label="Title" />
      <FormTextField name="sortOrder" label="Sort order" type="number" />
      <FormJsonField
        name="paragraphsJson"
        label="Paragraphs (JSON array of strings)"
        rows={12}
      />
    </FormBody>
  )
}

export function LibraryEditionFormFields() {
  return (
    <FormBody>
      <FormTextField name="title" label="Title" />
      <FormTextField name="author" label="Author" />
      <FormTextField name="genre" label="Genre" />
      <FormTextField name="year" label="Year" />
      <FormTextField name="coverUrl" label="Cover URL" />
      <FormTextField name="commit" label="Commit" />
      <FormTextField name="badge" label="Badge" />
      <FormJsonField name="formatsJson" label="Formats (JSON)" />
    </FormBody>
  )
}

export function ActivityEventFormFields() {
  return (
    <FormBody>
      <FormTextField name="timestamp" label="Timestamp" />
      <FormTextField name="title" label="Title" />
      <FormTextField name="body" label="Body" />
      <FormTextField name="tag" label="Tag" />
      <FormTextField name="tagVariant" label="Tag variant" />
      <FormTextField name="actionLabel" label="Action label" />
      <FormTextField name="dotVariant" label="Dot variant" />
    </FormBody>
  )
}

export function MetricSnapshotFormFields() {
  return (
    <FormBody>
      <FormTextField name="label" label="Label" />
      <FormTextField name="value" label="Value" />
      <FormTextField name="delta" label="Delta" />
      <FormCheckboxField name="deltaPositive" label="Delta positive" />
      <FormSelectField
        name="scope"
        label="Scope"
        options={[
          { value: "repository", label: "Repository dashboard" },
          { value: "agents", label: "Agents dashboard" },
        ]}
      />
    </FormBody>
  )
}
