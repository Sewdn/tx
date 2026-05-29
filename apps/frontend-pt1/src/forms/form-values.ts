import type {
  ActivityEvent,
  Agent,
  CreateActivityEventInput,
  CreateAgentInput,
  CreateLibraryEditionInput,
  CreateLiteraryBuildInput,
  CreateManuscriptFileInput,
  CreateMetricSnapshotInput,
  CreateReaderChapterInput,
  CreateRepositoryInput,
  CreateRevisionInput,
  LibraryEdition,
  LiteraryBuild,
  ManuscriptFile,
  MetricSnapshot,
  ReaderChapter,
  Repository,
  Revision,
} from "@tx/domain-shared"
import {
  emptyActivityEventInput,
  emptyAgentInput,
  emptyLibraryEditionInput,
  emptyLiteraryBuildInput,
  emptyManuscriptFileInput,
  emptyMetricSnapshotInput,
  emptyReaderChapterInput,
  emptyRepositoryInput,
  emptyRevisionInput,
} from "@/crud/defaults"
import { parseJsonField, slugify, stringifyJsonField } from "@/crud/utils"

export type RepositoryFormValues = {
  slug: string
  title: string
  subtitle: string
  coverUrl: string
  heroTitle: string
  heroSubtitle: string
  branchName: string
  branchLabel: string
  lastUpdate: string
  tagsJson: string
  metadataJson: string
  readmeExcerpt: string
}

export type ManuscriptFileFormValues = {
  repositoryId: string
  icon: string
  name: string
  description: string
  timestamp: string
  highlighted: boolean
  highlightLabel: string
}

export type RevisionFormValues = {
  repositoryId: string
  title: string
  status: string
  author: string
  timestamp: string
  fileName: string
  breadcrumbsJson: string
  diffLinesJson: string
  commentsJson: string
}

export type AgentFormValues = {
  repositoryId: string
  name: string
  description: string
  status: string
  statusVariant: string
  icon: string
  iconVariant: string
}

export type LiteraryBuildFormValues = {
  repositoryId: string
  version: string
  statusLabel: string
  title: string
  description: string
  commitHash: string
  progressPercent: string
  statusMessage: string
  lineageJson: string
  artifactsJson: string
  buildStatusJson: string
  archivalVersionsJson: string
  stylingJson: string
  formatsJson: string
  presetsJson: string
}

export type ReaderChapterFormValues = {
  repositoryId: string
  label: string
  title: string
  sortOrder: string
  paragraphsJson: string
}

export type LibraryEditionFormValues = {
  title: string
  author: string
  genre: string
  year: string
  coverUrl: string
  commit: string
  formatsJson: string
  badge: string
}

export type ActivityEventFormValues = {
  timestamp: string
  title: string
  body: string
  tag: string
  tagVariant: string
  actionLabel: string
  dotVariant: string
}

export type MetricSnapshotFormValues = {
  label: string
  value: string
  delta: string
  deltaPositive: boolean
  scope: string
}

export function repositoryFormInitialValues(initial?: Repository): RepositoryFormValues {
  const source = initial
    ? {
        slug: initial.slug,
        title: initial.title,
        subtitle: initial.subtitle,
        coverUrl: initial.coverUrl,
        heroTitle: initial.heroTitle,
        heroSubtitle: initial.heroSubtitle,
        branchName: initial.branchName,
        branchLabel: initial.branchLabel,
        lastUpdate: initial.lastUpdate,
        tags: initial.tags,
        metadata: initial.metadata,
        readmeExcerpt: initial.readmeExcerpt,
      }
    : emptyRepositoryInput()
  return {
    slug: source.slug,
    title: source.title,
    subtitle: source.subtitle,
    coverUrl: source.coverUrl,
    heroTitle: source.heroTitle,
    heroSubtitle: source.heroSubtitle,
    branchName: source.branchName,
    branchLabel: source.branchLabel,
    lastUpdate: source.lastUpdate,
    tagsJson: stringifyJsonField(source.tags),
    metadataJson: stringifyJsonField(source.metadata),
    readmeExcerpt: source.readmeExcerpt,
  }
}

export function repositoryFormToInput(values: RepositoryFormValues): CreateRepositoryInput {
  return {
    slug: values.slug.trim() || slugify(values.title),
    title: values.title,
    subtitle: values.subtitle,
    coverUrl: values.coverUrl,
    heroTitle: values.heroTitle,
    heroSubtitle: values.heroSubtitle,
    branchName: values.branchName,
    branchLabel: values.branchLabel,
    lastUpdate: values.lastUpdate,
    tags: parseJsonField(values.tagsJson, []),
    metadata: parseJsonField(values.metadataJson, []),
    readmeExcerpt: values.readmeExcerpt,
  }
}

export function manuscriptFileFormInitialValues(
  repositoryId: string,
  initial?: ManuscriptFile,
): ManuscriptFileFormValues {
  const source = initial
    ? {
        repositoryId: initial.repositoryId,
        icon: initial.icon,
        name: initial.name,
        description: initial.description,
        timestamp: initial.timestamp,
        highlighted: initial.highlighted,
        highlightLabel: initial.highlightLabel,
      }
    : emptyManuscriptFileInput(repositoryId)
  return { ...source }
}

export function manuscriptFileFormToInput(values: ManuscriptFileFormValues): CreateManuscriptFileInput {
  return { ...values }
}

export function revisionFormInitialValues(repositoryId: string, initial?: Revision): RevisionFormValues {
  const source = initial
    ? {
        repositoryId: initial.repositoryId,
        title: initial.title,
        status: initial.status,
        author: initial.author,
        timestamp: initial.timestamp,
        fileName: initial.fileName,
        breadcrumbs: initial.breadcrumbs,
        diffLines: initial.diffLines,
        comments: initial.comments,
      }
    : emptyRevisionInput(repositoryId)
  return {
    repositoryId: source.repositoryId,
    title: source.title,
    status: source.status,
    author: source.author,
    timestamp: source.timestamp,
    fileName: source.fileName,
    breadcrumbsJson: stringifyJsonField(source.breadcrumbs),
    diffLinesJson: stringifyJsonField(source.diffLines),
    commentsJson: stringifyJsonField(source.comments),
  }
}

export function revisionFormToInput(values: RevisionFormValues): CreateRevisionInput {
  return {
    repositoryId: values.repositoryId,
    title: values.title,
    status: values.status,
    author: values.author,
    timestamp: values.timestamp,
    fileName: values.fileName,
    breadcrumbs: parseJsonField(values.breadcrumbsJson, []),
    diffLines: parseJsonField(values.diffLinesJson, []),
    comments: parseJsonField(values.commentsJson, []),
  }
}

export function agentFormInitialValues(repositoryId: string, initial?: Agent): AgentFormValues {
  const source = initial
    ? {
        repositoryId: initial.repositoryId,
        name: initial.name,
        description: initial.description,
        status: initial.status,
        statusVariant: initial.statusVariant,
        icon: initial.icon,
        iconVariant: initial.iconVariant,
      }
    : emptyAgentInput(repositoryId)
  return { ...source }
}

export function agentFormToInput(values: AgentFormValues): CreateAgentInput {
  return { ...values }
}

export function literaryBuildFormInitialValues(
  repositoryId: string,
  initial?: LiteraryBuild,
): LiteraryBuildFormValues {
  const source = initial
    ? {
        repositoryId: initial.repositoryId,
        version: initial.version,
        statusLabel: initial.statusLabel,
        title: initial.title,
        description: initial.description,
        commitHash: initial.commitHash,
        progressPercent: initial.progressPercent,
        statusMessage: initial.statusMessage,
        lineage: initial.lineage,
        artifacts: initial.artifacts,
        buildStatus: initial.buildStatus,
        archivalVersions: initial.archivalVersions,
        styling: initial.styling,
        formats: initial.formats,
        presets: initial.presets,
      }
    : emptyLiteraryBuildInput(repositoryId)
  return {
    repositoryId: source.repositoryId,
    version: source.version,
    statusLabel: source.statusLabel,
    title: source.title,
    description: source.description,
    commitHash: source.commitHash,
    progressPercent: String(source.progressPercent),
    statusMessage: source.statusMessage,
    lineageJson: stringifyJsonField(source.lineage),
    artifactsJson: stringifyJsonField(source.artifacts),
    buildStatusJson: stringifyJsonField(source.buildStatus),
    archivalVersionsJson: stringifyJsonField(source.archivalVersions),
    stylingJson: stringifyJsonField(source.styling),
    formatsJson: stringifyJsonField(source.formats),
    presetsJson: stringifyJsonField(source.presets),
  }
}

export function literaryBuildFormToInput(values: LiteraryBuildFormValues): CreateLiteraryBuildInput {
  return {
    repositoryId: values.repositoryId,
    version: values.version,
    statusLabel: values.statusLabel,
    title: values.title,
    description: values.description,
    commitHash: values.commitHash,
    progressPercent: Number(values.progressPercent) || 0,
    statusMessage: values.statusMessage,
    lineage: parseJsonField(values.lineageJson, []),
    artifacts: parseJsonField(values.artifactsJson, []),
    buildStatus: parseJsonField(values.buildStatusJson, []),
    archivalVersions: parseJsonField(values.archivalVersionsJson, []),
    styling: parseJsonField(values.stylingJson, { sliders: [], toggles: [] }),
    formats: parseJsonField(values.formatsJson, []),
    presets: parseJsonField(values.presetsJson, []),
  }
}

export function readerChapterFormInitialValues(
  repositoryId: string,
  sortOrder: number,
  initial?: ReaderChapter,
): ReaderChapterFormValues {
  const source = initial
    ? {
        repositoryId: initial.repositoryId,
        label: initial.label,
        title: initial.title,
        paragraphs: initial.paragraphs,
        sortOrder: initial.sortOrder,
      }
    : emptyReaderChapterInput(repositoryId, sortOrder)
  return {
    repositoryId: source.repositoryId,
    label: source.label,
    title: source.title,
    sortOrder: String(source.sortOrder),
    paragraphsJson: stringifyJsonField(source.paragraphs),
  }
}

export function readerChapterFormToInput(values: ReaderChapterFormValues): CreateReaderChapterInput {
  return {
    repositoryId: values.repositoryId,
    label: values.label,
    title: values.title,
    sortOrder: Number(values.sortOrder) || 0,
    paragraphs: parseJsonField(values.paragraphsJson, [""]),
  }
}

export function libraryEditionFormInitialValues(initial?: LibraryEdition): LibraryEditionFormValues {
  const source = initial
    ? {
        title: initial.title,
        author: initial.author,
        genre: initial.genre,
        year: initial.year,
        coverUrl: initial.coverUrl,
        commit: initial.commit,
        formats: initial.formats,
        badge: initial.badge,
      }
    : emptyLibraryEditionInput()
  return {
    title: source.title,
    author: source.author,
    genre: source.genre,
    year: source.year,
    coverUrl: source.coverUrl,
    commit: source.commit,
    formatsJson: stringifyJsonField(source.formats),
    badge: source.badge,
  }
}

export function libraryEditionFormToInput(values: LibraryEditionFormValues): CreateLibraryEditionInput {
  return {
    title: values.title,
    author: values.author,
    genre: values.genre,
    year: values.year,
    coverUrl: values.coverUrl,
    commit: values.commit,
    formats: parseJsonField(values.formatsJson, []),
    badge: values.badge,
  }
}

export function activityEventFormInitialValues(initial?: ActivityEvent): ActivityEventFormValues {
  const source = initial
    ? {
        timestamp: initial.timestamp,
        title: initial.title,
        body: initial.body,
        tag: initial.tag,
        tagVariant: initial.tagVariant,
        actionLabel: initial.actionLabel,
        dotVariant: initial.dotVariant,
      }
    : emptyActivityEventInput()
  return { ...source }
}

export function activityEventFormToInput(values: ActivityEventFormValues): CreateActivityEventInput {
  return { ...values }
}

export function metricSnapshotFormInitialValues(
  scope: string,
  initial?: MetricSnapshot,
): MetricSnapshotFormValues {
  const source = initial
    ? {
        label: initial.label,
        value: initial.value,
        delta: initial.delta,
        deltaPositive: initial.deltaPositive,
        scope: initial.scope,
      }
    : emptyMetricSnapshotInput(scope)
  return { ...source }
}

export function metricSnapshotFormToInput(values: MetricSnapshotFormValues): CreateMetricSnapshotInput {
  return { ...values }
}
