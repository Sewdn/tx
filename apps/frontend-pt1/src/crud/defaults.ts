import type {
  CreateActivityEventInput,
  CreateAgentInput,
  CreateLibraryEditionInput,
  CreateLiteraryBuildInput,
  CreateManuscriptFileInput,
  CreateMetricSnapshotInput,
  CreateReaderChapterInput,
  CreateRepositoryInput,
  CreateRevisionInput,
} from "@tx/domain-shared"

export function emptyRepositoryInput(): CreateRepositoryInput {
  return {
    slug: "",
    title: "",
    subtitle: "",
    coverUrl: "",
    heroTitle: "",
    heroSubtitle: "",
    branchName: "main",
    branchLabel: "Current Branch",
    lastUpdate: "Just now",
    tags: [],
    metadata: [],
    readmeExcerpt: "",
  }
}

export function emptyManuscriptFileInput(repositoryId: string): CreateManuscriptFileInput {
  return {
    repositoryId,
    icon: "description",
    name: "",
    description: "",
    timestamp: "Just now",
    highlighted: false,
    highlightLabel: "",
  }
}

export function emptyRevisionInput(repositoryId: string): CreateRevisionInput {
  return {
    repositoryId,
    title: "",
    status: "open",
    author: "",
    timestamp: "Just now",
    fileName: "",
    breadcrumbs: [],
    diffLines: [],
    comments: [],
  }
}

export function emptyAgentInput(repositoryId: string): CreateAgentInput {
  return {
    repositoryId,
    name: "",
    description: "",
    status: "Operational",
    statusVariant: "operational",
    icon: "smart_toy",
    iconVariant: "secondary",
    role: "curator",
    studioEnabled: false,
  }
}

export function emptyLiteraryBuildInput(repositoryId: string): CreateLiteraryBuildInput {
  return {
    repositoryId,
    version: "v0.1",
    statusLabel: "Draft",
    title: "",
    description: "",
    commitHash: "",
    progressPercent: 0,
    statusMessage: "",
    lineage: [],
    artifacts: [],
    buildStatus: [],
    archivalVersions: [],
    styling: { sliders: [], toggles: [] },
    formats: [],
    presets: [],
  }
}

export function emptyReaderChapterInput(repositoryId: string, sortOrder: number): CreateReaderChapterInput {
  return {
    repositoryId,
    label: `Chapter ${sortOrder}`,
    title: "",
    paragraphs: [""],
    sortOrder,
  }
}

export function emptyLibraryEditionInput(): CreateLibraryEditionInput {
  return {
    title: "",
    author: "",
    genre: "",
    year: new Date().getFullYear().toString(),
    coverUrl: "",
    commit: "",
    formats: [],
    badge: "",
    isEternal: false,
  }
}

export function emptyActivityEventInput(): CreateActivityEventInput {
  return {
    timestamp: "Just now",
    title: "",
    body: "",
    tag: "",
    tagVariant: "secondary",
    actionLabel: "",
    dotVariant: "secondary",
  }
}

export function emptyMetricSnapshotInput(scope: string): CreateMetricSnapshotInput {
  return {
    label: "",
    value: "",
    delta: "",
    deltaPositive: true,
    scope,
  }
}
