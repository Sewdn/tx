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
} from "@tx/domain-shared";
import type { GittenbergUiSeed } from "../ports.js";
import {
  AGENT_DURER_ID,
  AGENT_MORRIS_ID,
  ANCHOR_MOBY_ID,
  AUTHOR_ASIMOV_ID,
  AUTHOR_MELVILLE_ID,
  BUILD_FOUNDATION_ID,
  LIB_FOUNDATION_EMPIRE_ID,
  LIB_FOUNDATION_ID,
  LIB_FOUNDATION_SECOND_ID,
} from "./gittenberg-seed-v2.js";
import { MOBY_REPOSITORY_ID, FOUNDATION_REPOSITORY_ID } from "../ports.js";

const NOW = "2026-05-28T12:00:00.000Z";

const mobyCover =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAA0UkIAY4hplX4eZPYhGk1_ylzDZeUFB14H5C7a4nIk_BASxHcCTefiYEKjSsJaRR5V0_Ji_lI9XLl_kF9IwXmucdkHzox13UnKKkTZbX2wwGm4hWa04UiJqkYMHYy27MvWGCUVMtHiP19LkAiKpBsRUf1-5nfqSaJrOg8r-GjvBNdnGXidEsXtQZ1VWI5Tgb6veV46eeS-1GAbQmwjlfL6Km_wc4xccLbPMuXNL8RsaX9hJOp0luWvEwUAVT1wkiX1mi-y92JziaN";

function repo(input: CreateRepositoryInput, id: string): Repository {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function file(input: CreateManuscriptFileInput, id: string): ManuscriptFile {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function revision(input: CreateRevisionInput, id: string): Revision {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function agentEntity(input: CreateAgentInput, id: string): Agent {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function build(input: CreateLiteraryBuildInput, id: string): LiteraryBuild {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function library(input: CreateLibraryEditionInput, id: string): LibraryEdition {
  return {
    id,
    createdAt: NOW,
    updatedAt: NOW,
    relatedEditionIds: input.relatedEditionIds ?? [],
    ...input,
  };
}

function activity(input: CreateActivityEventInput, id: string): ActivityEvent {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function chapter(input: CreateReaderChapterInput, id: string): ReaderChapter {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function metric(input: CreateMetricSnapshotInput, id: string): MetricSnapshot {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

export const seedRepositories: Repository[] = [
  repo({
    slug: "moby-dick",
    title: "Moby Dick",
    subtitle: "Herman Melville",
    coverUrl: mobyCover,
    heroTitle: "The Whale: Repository Home",
    heroSubtitle:
      '"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."',
    branchName: "master",
    branchLabel: "Current Branch",
    lastUpdate: "Last Update: 2 hours ago by Queequeg-Bot",
    tags: [
      { variant: "public-domain", label: "Public Domain" },
      { variant: "agent-curated", label: "Agent-Curated" },
      { variant: "version", label: "v2.4.0-prose" },
      { variant: "scholarly-edition", label: "Scholarly Edition" },
      { variant: "eternal", label: "Eternal" },
    ],
    metadata: [
      { label: "Source", value: "Project Gutenberg #2701", href: "#" },
      { label: "Word Count", value: "206,052 tokens" },
      { label: "Provenance", value: "Verified" },
      { label: "Citations", value: "1,842 scholarly references" },
      { label: "Archive Size", value: "42.8 MB" },
      { label: "Lens", value: "Nautical Modernism" },
    ],
    readmeExcerpt:
      "This repository contains the canonical, agent-audited version of Herman Melville's masterpiece, Moby Dick; or, The Whale.",
    authorId: AUTHOR_MELVILLE_ID,
    publicationYear: 1851,
    citationCount: 1842,
    provenanceStatus: "verified",
    eternalAnchorId: ANCHOR_MOBY_ID,
  }, MOBY_REPOSITORY_ID),
  repo({
    slug: "foundation",
    title: "Foundation",
    subtitle: "Isaac Asimov",
    coverUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBinX7S3M-OXFGiLfhbfaDT4S_Cmzqpm5sSfGVBCDlheh2pRc82HE81pDGpkQnzDrJCL3wxxEfQ0qjYXiHr5MyF9SzBZP0VEHllk8LiG9AWGygHGa8eE_8ce3gr-_1ewZ3uQJfzjcbTqj9sdGaHh4C1hWzYY-6_6kzfo0GClGX2Wa-qNmhgGUWvCC7Lp3i9OltEbXLZYbv5qn81xlSDGlRjDKE9qYDzGOi5D3H6FMsUnZudTxnvajL786qSsRLBMH0dOaHQak5r4ngI",
    heroTitle: "Foundation: Galactic Archive",
    heroSubtitle:
      "The psychohistorical saga that defined modern science fiction — canonical scholarly edition.",
    branchName: "master",
    branchLabel: "Canonical Branch",
    lastUpdate: "Last Update: 1 day ago by Agent-Hugo",
    tags: [
      { variant: "public-domain", label: "Public Domain" },
      { variant: "scholarly-edition", label: "Scholarly Edition" },
      { variant: "agent-curated", label: "Agent-Curated" },
    ],
    metadata: [
      { label: "Source", value: "Gittenberg Galactic Archive", href: "#" },
      { label: "Lens", value: "Sci-Fi Modernism" },
      { label: "Provenance", value: "Verified" },
    ],
    readmeExcerpt:
      "The first volume of the Foundation series — Hari Seldon's plan to preserve knowledge through the fall of the Galactic Empire.",
    authorId: AUTHOR_ASIMOV_ID,
    publicationYear: 1951,
    citationCount: 892,
    provenanceStatus: "verified",
  }, FOUNDATION_REPOSITORY_ID),
];

export const seedManuscriptFiles: ManuscriptFile[] = [
  file(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      icon: "folder",
      name: "src/manuscript",
      description: "Consolidated chapters 1-135",
      timestamp: "3 days ago",
      highlighted: false,
      highlightLabel: "",
    },
    "file-1",
  ),
  file(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      icon: "description",
      name: "README.md",
      description: "Update project overview and agent status",
      timestamp: "2 hours ago",
      highlighted: false,
      highlightLabel: "",
    },
    "file-2",
  ),
  file(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      icon: "markdown",
      name: "Chapter 3: The Spouter-Inn.md",
      description: "Open Revision #142",
      timestamp: "Just now",
      highlighted: true,
      highlightLabel: "Open Revision #142",
    },
    "file-3",
  ),
];

export const seedRevisions: Revision[] = [
  revision(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      title: "Normalize archaic punctuation in Chapter 3",
      status: "open",
      author: "ScholasticCurator",
      timestamp: "4 hours ago",
      fileName: "chapter_03.md",
      breadcrumbs: [{ label: "Revisions" }, { label: "PR #142" }],
      diffLines: [
        {
          id: "1",
          variant: "context",
          oldLine: 41,
          newLine: 41,
          content:
            '"I will have no man in my boat," said Ahab, "who is not afraid of a whale."',
        },
        {
          id: "2",
          variant: "removed",
          oldLine: 42,
          content:
            "By this he seemed to mean, not only that the most reckless bravery is ever the most untrustworthy;—but that a whale-ship was no place for any man...",
          icon: "remove",
        },
        {
          id: "3",
          variant: "added",
          newLine: 42,
          content:
            "By this he seemed to mean, not only that the most reckless bravery is ever the most untrustworthy, but that a whale-ship was no place for any man...",
          icon: "add",
        },
      ],
      comments: [
        {
          id: "1",
          author: "Curator",
          timestamp: "2h ago",
          body: "I've removed the em-dash following the semicolons.",
        },
      ],
    },
    "revision-142",
  ),
];

export const seedAgents: Agent[] = [
  agentEntity(
    {
      name: "Pequod-03",
      description: "Auditing Chapter 1",
      status: "Auditing Chapter 1",
      statusVariant: "operational",
      icon: "neurology",
      iconVariant: "secondary",
      repositoryId: MOBY_REPOSITORY_ID,
      role: "curation",
      studioEnabled: false,
    },
    "agent-repo-1",
  ),
  agentEntity(
    {
      name: "Gutenberg-Scraper",
      description:
        "Ingesting new public domain entries from Wikisource clusters.",
      status: "Operational",
      statusVariant: "operational",
      icon: "travel_explore",
      iconVariant: "secondary",
      repositoryId: MOBY_REPOSITORY_ID,
      role: "curation",
      studioEnabled: false,
    },
    "agent-dash-1",
  ),
  agentEntity(
    {
      name: "OCR-Correction-Bot",
      description:
        "Resolving character recognition ambiguities in 19th-century scans.",
      status: "Operational",
      statusVariant: "operational",
      icon: "spellcheck",
      iconVariant: "primary",
      repositoryId: MOBY_REPOSITORY_ID,
      role: "curation",
      studioEnabled: false,
    },
    "agent-dash-2",
  ),
  agentEntity(
    {
      name: "Style-Normalizer",
      description:
        "Standardizing punctuation and metadata against scholarly guidelines.",
      status: "Paused",
      statusVariant: "paused",
      icon: "auto_fix_high",
      iconVariant: "muted",
      repositoryId: MOBY_REPOSITORY_ID,
      role: "curation",
      studioEnabled: false,
    },
    "agent-dash-3",
  ),
  agentEntity(
    {
      name: "Agent-Dürer",
      description: "Woodcut cover design and chapter engraving specialist.",
      status: "Rendering cover master",
      statusVariant: "operational",
      icon: "architecture",
      iconVariant: "primary",
      repositoryId: MOBY_REPOSITORY_ID,
      role: "creative-studio",
      specialty: "woodcut",
      studioEnabled: true,
    },
    AGENT_DURER_ID,
  ),
  agentEntity(
    {
      name: "Agent-Morris",
      description: "Victorian pattern and ornamental layout specialist.",
      status: "Available",
      statusVariant: "operational",
      icon: "vignette",
      iconVariant: "secondary",
      repositoryId: MOBY_REPOSITORY_ID,
      role: "creative-studio",
      specialty: "victorian-pattern",
      studioEnabled: true,
    },
    AGENT_MORRIS_ID,
  ),
];

export const seedLiteraryBuilds: LiteraryBuild[] = [
  build(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      version: "v4.2",
      statusLabel: "Active Build: Production",
      title: "Scholarly Edition v4.2.0-alpha",
      description:
        "Latest orthographic corrections and footnote normalization.",
      commitHash: "7e3a9c1",
      progressPercent: 68,
      statusMessage: "Compiling chapter 42: The Whiteness of the Whale...",
      lineage: [
        {
          id: "master",
          title: "Master Branch",
          badge: "Default",
          description: "The canonical text based on the 1851 American edition.",
          formats: ["EPUB", "PDF", "WEB"],
          isDefault: true,
        },
        {
          id: "scholarly",
          title: "Scholarly Edition Fork",
          description:
            "Annotated version focusing on whale biology and maritime history of the 19th century.",
          formats: ["Print Ready (A4)", "Annotated PDF"],
        },
        {
          id: "modern",
          title: "Modern English Fork",
          description:
            "Simplified syntax for educational environments. Currently in experimental build.",
          formats: [],
        },
        {
          id: "french",
          title: "French Translation Fork (Automated)",
          description:
            "Full linguistic normalization and translation by Agent-Hugo. Optimized for modern French scholarship.",
          formats: ["EPUB (FR)", "PDF (FR)"],
        },
        {
          id: "dutch",
          title: "Dutch Translation Fork (Automated)",
          description:
            "Experimental Dutch localization fork with glossary annotations.",
          formats: ["EPUB (NL)"],
          isLast: true,
        },
      ],
      artifacts: [
        {
          id: "kindle",
          icon: "tablet_android",
          title: "Kindle EPUB",
          description:
            "Optimized for e-ink displays with embedded Literata font.",
          size: "12.4 MB",
        },
        {
          id: "pdf-a5",
          icon: "description",
          title: "Standard PDF (A5)",
          description: "Standard trade paperback layout with 1.4cm margins.",
          size: "42.8 MB",
        },
        {
          id: "large-print",
          icon: "print",
          title: "Large Print PDF",
          description:
            "Accessibility focused build with 18pt serif typography.",
          size: "58.1 MB",
        },
        {
          id: "html",
          icon: "html",
          title: "Static HTML",
          description: "Interlinked chapters for browser-based reading.",
          size: "3.2 MB",
        },
        {
          id: "print",
          icon: "print",
          title: "Print Edition",
          description: "Order Print ($42.00)",
          size: "—",
          printProductId: "print-product-moby",
          priceCents: 4200,
        },
      ],
      buildStatus: [
        { label: "Consistency Check", value: "Passed", variant: "success" },
        { label: "Metadata Sync", value: "Success", variant: "success" },
        {
          label: "Typography Engine",
          value: "Literata 3.0",
          variant: "neutral",
        },
      ],
      archivalVersions: [
        {
          id: "1",
          version: "v4.1.2",
          note: "Fixed footnote numbering in Ch. 32.",
          binding: "Two-column scholarly",
          date: "Oct 12, 1851*",
        },
        {
          id: "2",
          version: "v4.0.0",
          note: "Initial migration to Gittenberg archival format.",
          binding: "Single-column trade",
          date: "Aug 20, 1851*",
        },
        {
          id: "3",
          version: "v3.9.0",
          note: "Pre-release draft (Manuscript scan integration).",
          binding: "Draft Facsimile",
          date: "May 14, 1851*",
        },
      ],
      styling: {
        sliders: [
          {
            id: "font-size",
            label: "Base Font Size",
            value: "11.5pt",
            progress: 45,
          },
          {
            id: "margins",
            label: "Inner Margins",
            value: "24mm",
            progress: 60,
          },
        ],
        toggles: [
          { id: "drop-caps", label: "Enable Drop Caps", enabled: true },
          { id: "widows", label: "Widow/Orphan Protection", enabled: false },
        ],
      },
      formats: [
        {
          id: "epub",
          icon: "book",
          title: "E-Reader (EPUB)",
          description: "Optimized for Kindle and Apple Books",
          selected: true,
        },
        {
          id: "pdf",
          icon: "picture_as_pdf",
          title: "Print-Ready PDF",
          description: "CMYK colorspace, 300DPI assets",
        },
      ],
      presets: [
        { id: "classic", label: "Classic Scholarly", active: true },
        { id: "modern", label: "Modern Minimal" },
      ],
      permawebAnchorId: ANCHOR_MOBY_ID,
    },
    "build-moby-primary",
  ),
  build(
    {
      repositoryId: FOUNDATION_REPOSITORY_ID,
      version: "v1.0",
      statusLabel: "Active Build: Scholarly",
      title: "Foundation Scholarly Edition",
      description: "Canonical psychohistorical text with glossary annotations.",
      commitHash: "a3f9b2c",
      progressPercent: 100,
      statusMessage: "Build complete — all formats available.",
      lineage: [
        {
          id: "master",
          title: "Master Branch",
          badge: "HEAD",
          description: "Canonical Foundation text.",
          formats: ["EPUB", "PDF", "WEB"],
          isDefault: true,
          isHead: true,
          forkCount: 2,
        },
      ],
      artifacts: [
        {
          id: "epub",
          icon: "menu_book",
          title: "Kindle EPUB",
          description: "Optimized for e-ink displays.",
          size: "4.2 MB",
        },
        {
          id: "pdf",
          icon: "picture_as_pdf",
          title: "Scholarly PDF",
          description: "Academic layout with footnotes.",
          size: "18.6 MB",
        },
      ],
      buildStatus: [
        { label: "Consistency Check", value: "Passed", variant: "success" },
        { label: "Metadata Sync", value: "Success", variant: "success" },
      ],
      archivalVersions: [],
      styling: { sliders: [], toggles: [] },
      formats: [
        {
          id: "epub",
          icon: "menu_book",
          title: "E-Reader (EPUB)",
          description: "Optimized for Kindle and Apple Books",
          selected: true,
        },
      ],
      presets: [{ id: "galactic", label: "Galactic Scholarly", active: true }],
    },
    BUILD_FOUNDATION_ID,
  ),
];

export const seedLibraryEditions: LibraryEdition[] = [
  library(
    {
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Nautical",
      year: "1851",
      coverUrl: mobyCover,
      commit: "master @ a8f2c3b",
      formats: ["picture_as_pdf", "menu_book", "print"],
      badge: "Versioned",
      repositoryId: MOBY_REPOSITORY_ID,
      primaryBuildId: "build-moby-primary",
      authorId: AUTHOR_MELVILLE_ID,
      heroImageUrl: mobyCover,
      tagline: "The definitive scholarly whale",
      lensLabel: "Nautical Modernism",
      relatedEditionIds: ["lib-pride"],
      sortKey: "moby-dick",
      decadeLabel: "1850s",
      isEternal: true,
      anchorStatus: "high-fidelity",
      arweaveTxId: "z-H_7vK2mX-9wL7u8R_fPq2N1x0A9vM4bS6kL9",
      patronCreditName: "Alexandre V. Beaumont",
      provenance: {
        status: "verified",
        citationCount: 1842,
        archiveSizeLabel: "42.8 MB",
        lensLabel: "Nautical Modernism",
      },
    },
    "lib-moby",
  ),
  library(
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: "1813",
      coverUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsVAbPVAtC210lbwVrOHDO11H-8-SYPpsg9Z4uxW02ubGvS1s1m7EEXX51mRCpuKCRbKrQPVCvw-YD6VjdqWI7l-XMWdcDV2pU-vlIklIgGhwlr05SgonoremAHC5w-XSBOKqfyZ-TDC27BdbVY3zATc33FvjU08F-iiiZooA755UKmYjHVb4RFxvaK4fBFFgrAHUgyBB-Y-CWI8UNG4Tpf-3HPf1fFg4yRvH9Rqw_y66A75gX84qwyLUbt9HY2LyxKXlR75XqRy36",
      commit: "master @ f1a2b3c",
      formats: ["menu_book"],
      badge: "",
      relatedEditionIds: [],
      isEternal: false,
      decadeLabel: "1810s",
    },
    "lib-pride",
  ),
  library(
    {
      title: "Foundation",
      author: "Isaac Asimov",
      genre: "Science Fiction",
      year: "1951",
      coverUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBinX7S3M-OXFGiLfhbfaDT4S_Cmzqpm5sSfGVBCDlheh2pRc82HE81pDGpkQnzDrJCL3wxxEfQ0qjYXiHr5MyF9SzBZP0VEHllk8LiG9AWGygHGa8eE_8ce3gr-_1ewZ3uQJfzjcbTqj9sdGaHh4C1hWzYY-6_6kzfo0GClGX2Wa-qNmhgGUWvCC7Lp3i9OltEbXLZYbv5qn81xlSDGlRjDKE9qYDzGOi5D3H6FMsUnZudTxnvajL786qSsRLBMH0dOaHQak5r4ngI",
      commit: "master @ a3f9b2c",
      formats: ["menu_book", "picture_as_pdf"],
      badge: "Scholarly Edition",
      repositoryId: FOUNDATION_REPOSITORY_ID,
      primaryBuildId: BUILD_FOUNDATION_ID,
      authorId: AUTHOR_ASIMOV_ID,
      heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAxDFHX8-G_MaJAXXGq9S8E_EqwhNAawzIzialH7xwopS6eByvnrpRyVNgI5MKqs4nd1Q2aSOTcgdGHLRlD085fmAFHWd9NqgralZalPo7jxs7z1AgVQJfilgcK5ZqAc3Uz0Qt8F__xrf3vG81h6o08rNH8FVRe676kijCJx_2A_kLY2bewrIymf_66YOcLULU_TYFr3mzQIR6FyvNPla8PZYYhducyqeZ2QSJ1oq3mtMApDw_3TvJOcbO8R1Eko24e-TOLTsckzO1f",
      tagline: "Psychohistory begins here",
      lensLabel: "Sci-Fi Modernism",
      relatedEditionIds: [LIB_FOUNDATION_EMPIRE_ID, LIB_FOUNDATION_SECOND_ID],
      sortKey: "foundation",
      decadeLabel: "1950s",
      isEternal: false,
      provenance: {
        status: "verified",
        citationCount: 892,
        archiveSizeLabel: "18.6 MB",
        lensLabel: "Sci-Fi Modernism",
      },
    },
    LIB_FOUNDATION_ID,
  ),
  library(
    {
      title: "Foundation and Empire",
      author: "Isaac Asimov",
      genre: "Science Fiction",
      year: "1952",
      coverUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUMNhzQYbQRfOpEtn1ufxTuNr-kgPgiluakIbZ6YvQeWG2zdjZP7Zft6GDY7ZT9mloaBApftXIo7R_x8TYhWq2n2NfkQ3CLWvUKTc5OtCBcBjP8sMacLJh27OnwGZR0RJ4G9hL0lnNmDbgySW0Xq0Cw6l6IRV5Z0ARo8N4pvHDF-ETacusss8rU78uCVoLlyr2up3hCk5oTSrLYfvCe_jP80RtsE650PXnJCEG_cmAql-IadNwsZHw1z5cURmITttzb8v15pXzsXx0",
      commit: "master @ b4c8d1e",
      formats: ["menu_book"],
      badge: "",
      authorId: AUTHOR_ASIMOV_ID,
      relatedEditionIds: [LIB_FOUNDATION_ID],
      decadeLabel: "1950s",
      isEternal: false,
    },
    LIB_FOUNDATION_EMPIRE_ID,
  ),
  library(
    {
      title: "Second Foundation",
      author: "Isaac Asimov",
      genre: "Science Fiction",
      year: "1953",
      coverUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBinX7S3M-OXFGiLfhbfaDT4S_Cmzqpm5sSfGVBCDlheh2pRc82HE81pDGpkQnzDrJCL3wxxEfQ0qjYXiHr5MyF9SzBZP0VEHllk8LiG9AWGygHGa8eE_8ce3gr-_1ewZ3uQJfzjcbTqj9sdGaHh4C1hWzYY-6_6kzfo0GClGX2Wa-qNmhgGUWvCC7Lp3i9OltEbXLZYbv5qn81xlSDGlRjDKE9qYDzGOi5D3H6FMsUnZudTxnvajL786qSsRLBMH0dOaHQak5r4ngI",
      commit: "master @ c5d9e2f",
      formats: ["menu_book"],
      badge: "",
      authorId: AUTHOR_ASIMOV_ID,
      relatedEditionIds: [LIB_FOUNDATION_ID],
      decadeLabel: "1950s",
      isEternal: false,
    },
    LIB_FOUNDATION_SECOND_ID,
  ),
  library(
    {
      title: "19th Century Marginalia (Premier)",
      author: "Various",
      genre: "Reference",
      year: "1800s",
      coverUrl: mobyCover,
      commit: "premier @ locked",
      formats: ["picture_as_pdf"],
      badge: "Premier Only",
      requiredTier: "premier",
      relatedEditionIds: [],
      isEternal: false,
    },
    "lib-premier-locked",
  ),
];

export const seedActivityEvents: ActivityEvent[] = [
  activity(
    {
      timestamp: "14 minutes ago",
      title: "New Repository Created",
      body: '"The Voyage of the Beagle"',
      tag: "Source: Wikisource",
      tagVariant: "secondary",
      actionLabel: "",
      dotVariant: "secondary",
    },
    "activity-1",
  ),
  activity(
    {
      timestamp: "1 hour ago",
      title: "OCR Correction Completed",
      body: "3,400 typos corrected in Pride and Prejudice.",
      tag: "Agent: OCR-Bot-v4",
      tagVariant: "muted",
      actionLabel: "",
      dotVariant: "primary",
    },
    "activity-2",
  ),
  activity(
    {
      timestamp: "5 hours ago",
      title: "Validation Failed",
      body: "Encoding mismatch detected in Frankenstein (1818 Ed.)",
      tag: "",
      tagVariant: "muted",
      actionLabel: "Manual Review Required",
      dotVariant: "error",
      eventType: "validation-failed",
    },
    "activity-3",
  ),
  activity(
    {
      timestamp: "2 days ago",
      title: "Eternal Anchor Confirmed",
      body: "Moby Dick commit 8f2c011 anchored to Arweave permaweb.",
      tag: "Mécène: Alexandre V. Beaumont",
      tagVariant: "patronage",
      actionLabel: "View Certificate",
      dotVariant: "primary",
      eventType: "anchor-confirmed",
    },
    "activity-4",
  ),
];

export const seedReaderChapters: ReaderChapter[] = [
  chapter(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      label: "Chapter 1",
      title: "Loomings",
      sortOrder: 1,
      paragraphs: [
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        "Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet—then, I account it high time to get to sea as soon as I can.",
        "This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship.",
      ],
    },
    "chapter-1",
  ),
];

export const seedMetricSnapshots: MetricSnapshot[] = [
  metric(
    {
      label: "Active Agents",
      value: "12",
      delta: "+2",
      deltaPositive: true,
      scope: "agents",
    },
    "metric-active",
  ),
  metric(
    {
      label: "Tasks Completed",
      value: "8.4k",
      delta: "Last 24h",
      deltaPositive: true,
      scope: "agents",
    },
    "metric-tasks",
  ),
  metric(
    {
      label: "Error Rate",
      value: "0.04%",
      delta: "Stable",
      deltaPositive: true,
      scope: "agents",
    },
    "metric-errors",
  ),
  metric(
    {
      label: "Processing Vol",
      value: "1.2M",
      delta: "Words/m",
      deltaPositive: false,
      scope: "agents",
    },
    "metric-volume",
  ),
  metric(
    {
      label: "Active Agents",
      value: "12",
      delta: "+2",
      deltaPositive: true,
      scope: "repository",
    },
    "metric-repo-active",
  ),
  metric(
    {
      label: "Commits Today",
      value: "48",
      delta: "+12%",
      deltaPositive: true,
      scope: "repository",
    },
    "metric-repo-commits",
  ),
];

export const seedUi: GittenbergUiSeed = {
  footerLinks: [
    { label: "Terms of Use", href: "#" },
    { label: "Metadata Standards", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Scholarly Guidelines", href: "#" },
  ],
  sidebarFooter: [
    { id: "settings", label: "Settings", icon: "settings", href: "#" },
    { id: "support", label: "Support", icon: "help_outline", href: "#" },
  ],
  fileTree: [
    { id: "meta", name: "metadata.json", icon: "info" },
    { id: "front", name: "frontmatter.md", icon: "description" },
    {
      id: "manuscript",
      name: "Manuscript",
      icon: "keyboard_arrow_down",
      children: [
        { id: "ch1", name: "01_The_Threshold.md", icon: "article" },
        {
          id: "ch2",
          name: "02_Echoes_of_Dust.md",
          icon: "edit_note",
          active: true,
          highlighted: true,
        },
        { id: "ch3", name: "03_The_Spouter-Inn.md", icon: "article" },
      ],
    },
  ],
  curatorAvatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdz6Fs84GwlJoTpWJFL2UHiyZsBQmlBSAHJwNCt_3TqaG8VZTiRJwcG8b8BriSC4ExHYLWsJZhSevnmmLlhFhZUeA_rcYvletTnDWsTCjgmD3vvE1iDU-fcG6jKp4mW0L1EbzjMxoBuwf4XDaEMvlGWkphD5KH4PLhpPeuEmYD6Coe3eGmTPXkrXKiSJbBWcMQZwWoNL2v0lvEMHRlOFG2-kPZEDHF7cAnoVSvjGuOiIZiKIoWxF7Ak5czTLa0Ae2fuI3aqUcLIy0O",
  readerIllustration:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDl7Qeuxy76gKttCcWJrSdLueoxgesfBXiZXT2Jfs5jlYtc3AWeRtjW-gyWhU9HSIebqRrUPcCHzg3fv6eejwFTfC-rqBnPIizTs02H3psoSfKNTJRJxkcWoNmL89CEvbwnB5cg_R7emcWgWEa6HHnjghJD89X4QV9vowzaa5EIjqN1xDJMvii4OIab8j6bnDh32VVDwq5ljYfAK6fyk8CKy0pcba5xqdMRMblV0tDnth4PXe1h6j6sfKbMAwenGQ-g9tUjDZO1jl2L",
  libraryAuthors: [
    { id: "melville", label: "Herman Melville", checked: true },
    { id: "austen", label: "Jane Austen" },
    { id: "shelley", label: "Mary Shelley" },
    { id: "darwin", label: "Charles Darwin" },
  ],
  libraryFormats: ["EPUB", "PDF", "Press-Ready", "HTML"],
  curationBars: [
    { id: "mon", label: "Mon", heightPercent: 40, fillPercent: 50 },
    { id: "tue", label: "Tue", heightPercent: 60, fillPercent: 66 },
    { id: "wed", label: "Wed", heightPercent: 85, fillPercent: 75 },
    { id: "thu", label: "Thu", heightPercent: 55, fillPercent: 50 },
    { id: "fri", label: "Fri", heightPercent: 70, fillPercent: 66 },
    { id: "sat", label: "Sat", heightPercent: 95, fillPercent: 83 },
    { id: "sun", label: "Sun", heightPercent: 75, fillPercent: 75 },
  ],
  canvasThemes: [
    { id: "cream", color: "#fbf9f4", active: true },
    { id: "charcoal", color: "#30312e" },
    { id: "parchment", color: "#f4f1ea" },
  ],
  consumerNavItems: [
    { id: "explore", label: "Explore", icon: "explore", href: "#" },
    { id: "collections", label: "My Collections", icon: "collections_bookmark", href: "#" },
    { id: "library", label: "Library", icon: "local_library", href: "#" },
    { id: "subscribe", label: "Subscribe", icon: "workspace_premium", href: "#" },
  ],
  curatorNavItems: [
    { id: "explore", label: "Explore", icon: "explore", href: "#" },
    { id: "repositories", label: "Repositories", icon: "folder_copy", href: "#" },
    { id: "agents", label: "Agents", icon: "smart_toy", href: "#" },
    { id: "library", label: "Library", icon: "local_library", href: "#" },
  ],
};

export const editorSampleMarkdown = `# Echoes of Dust

The morning air hung heavy with salt and the promise of departure.

> "It is not down on any map; true places never are."

Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse...`;

export {
  seedAuthors,
  seedPatrons,
  seedPermawebAnchors,
  seedProvenanceCertificates,
  seedMembershipPlans,
  seedUserMemberships,
  seedUserCollections,
  seedCollectionItems,
  seedDiscoveryShelves,
  seedCuratedCollections,
  seedCreativeStudioSessions,
  seedPrintProducts,
  seedPrintOrders,
} from "./gittenberg-seed-v2.js";
