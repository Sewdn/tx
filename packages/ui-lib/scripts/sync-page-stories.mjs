import fs from "node:fs"
import path from "node:path"

const pagesDir = path.join(import.meta.dirname, "../src/components/pages")

/** Storybook title literals per page story file (CSF requires static strings). */
const titleByFile = {
  "repository-home.stories.tsx": "Gittenberg/Pages/Repository Home",
  "revision-detail.stories.tsx": "Gittenberg/Pages/Revision Detail",
  "reader-preview.stories.tsx": "Gittenberg/Pages/Reader Preview",
  "build-export.stories.tsx": "Gittenberg/Pages/Build & Export",
  "edition-history.stories.tsx": "Gittenberg/Pages/Edition History",
  "international-builds.stories.tsx": "Gittenberg/Pages/International Builds",
  "library-of-builds.stories.tsx": "Gittenberg/Pages/Library of Builds",
  "agent-dashboard.stories.tsx": "Gittenberg/Pages/Agent Dashboard",
  "manuscript-editor.stories.tsx": "Gittenberg/Pages/Manuscript Editor",
}

for (const [file, title] of Object.entries(titleByFile)) {
  const filePath = path.join(pagesDir, file)
  if (!fs.existsSync(filePath)) {
    console.warn("skip missing", file)
    continue
  }
  let content = fs.readFileSync(filePath, "utf8")
  content = content.replace(
    /import \{ storyTitles \} from "@\/storybook\/titles"\n\n/g,
    "",
  )
  content = content.replace(
    /import \{ storyTitles \} from "@\/storybook\/titles"\n/g,
    "",
  )
  content = content.replace(
    /title: storyTitles\.pages\.\w+,/g,
    `title: "${title}",`,
  )
  const metaMatch = content.match(/const meta: Meta[^]*?title: "([^"]+)",/)
  if (metaMatch && metaMatch[1] !== title) {
    content = content.replace(
      /(const meta: Meta[^]*?title: )"[^"]+",/,
      `$1"${title}",`,
    )
  }
  fs.writeFileSync(filePath, content)
  console.log("updated", file)
}
