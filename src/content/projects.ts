import type { PortfolioProject } from "@/types/project";

export const projects: PortfolioProject[] = [
  {
    slug: "mnemonote",
    category: "application",
    title: "MnemoNote",
    tagline: "Local-first workspace for documents, tasks and boards",
    description:
      "A cross-platform productivity concept that keeps notes, tasks and kanban views close to the device, then synchronizes intentionally.",
    stack: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "TypeScript",
      "Electron",
      "Yjs",
      "SQLite",
    ],
    platforms: ["Android", "Desktop"],
    links: [
      { type: "github", label: "Source", href: "https://github.com/nvshink" },
    ],
    renderer: "mnemonote",
    featured: true,
    status: "Product concept and technical direction",
    highlights: [
      "Documents, tasks and boards in a shared workspace model",
      "Local persistence first, synchronization second",
      "Encrypted sync architecture and AI-assisted text workflows",
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Knowledge work tools often separate notes, tasks and planning boards into disconnected surfaces. MnemoNote treats them as different projections of the same workspace state.",
          "The main constraint is resilience: the product should remain useful without permanent connectivity and should not depend on a remote backend for everyday work.",
        ],
      },
      {
        title: "Architecture",
        paragraphs: [
          "Shared domain logic lives in Kotlin Multiplatform. Desktop-specific shell and editor integrations can be exposed through Electron and TypeScript where needed, while storage stays local via SQLite.",
          "Collaboration is modeled with CRDT-oriented primitives so synchronization remains conflict-tolerant and incremental instead of centralizing all edits in one online session.",
        ],
        bullets: [
          "Shared domain and sync logic in Kotlin",
          "Local database as the source of truth",
          "CRDT-oriented collaboration strategy",
          "AI features attached as optional assistants, not mandatory infrastructure",
        ],
      },
      {
        title: "Product Focus",
        paragraphs: [
          "The strongest product angle is not a generic note editor, but a workspace where structure evolves from text into tasks, linked views and operational boards without data duplication.",
        ],
      },
    ],
    codeSample: `interface WorkspaceSyncEngine {\n  suspend fun applyLocal(operation: WorkspaceOperation)\n  suspend fun mergeRemote(batch: SyncBatch)\n  suspend fun snapshot(): WorkspaceSnapshot\n}`,
  },
  {
    slug: "horizon",
    category: "application",
    title: "Horizon",
    tagline: "Compass and inclination tool built around Android sensors",
    description:
      "A compact Android utility for orientation, tilt measurement and sensor-driven feedback with a deliberate instrument-like visual language.",
    stack: ["Kotlin", "Android SDK", "Sensors API", "Jetpack Compose"],
    platforms: ["Android"],
    links: [
      { type: "github", label: "Source", href: "https://github.com/nvshink" },
    ],
    renderer: "horizon",
    featured: true,
    status: "Utility app prototype",
    highlights: [
      "Compass heading and angle visualization",
      "Lean UI designed around precise readings",
      "Real-time sensor processing on Android",
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "Generic utility apps often bury the most important reading under chrome, ads or ornamental UI. Horizon approaches the screen more like a measuring instrument than a content feed.",
        ],
      },
      {
        title: "Implementation",
        paragraphs: [
          "The application consumes orientation and motion sensors, applies smoothing where needed and renders the final state with clear contrast so the reading remains legible outdoors and in motion.",
        ],
        bullets: [
          "Sensor fusion and sampling discipline",
          "Compose-driven interface with large touch targets",
          "Minimal visual theme inspired by physical tools",
        ],
      },
    ],
    codeSample: `data class HorizonReading(\n  val azimuth: Float,\n  val pitch: Float,\n  val roll: Float,\n  val calibrationState: CalibrationState,\n)`,
  },
  {
    slug: "luma-compose",
    category: "library",
    title: "luma-compose",
    tagline: "Reusable Kotlin Multiplatform visual effects for Jetpack Compose",
    description:
      "A multi-module KMP library with app-agnostic visual effects for Compose, built around reusable patterned backgrounds and glow interactions instead of product-specific widgets.",
    stack: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "Compose Multiplatform",
      "Android",
      "Desktop JVM",
      "JavaScript",
      "iOS",
    ],
    platforms: ["Android", "Desktop", "iOS", "JS"],
    links: [
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/nvshink/luma-compose",
      },
      {
        type: "docs",
        label: "README",
        href: "https://github.com/nvshink/luma-compose#readme",
      },
    ],
    renderer: "default-library",
    status: "Published artifact: io.github.nvshink:luma-compose:1.0.0",
    highlights: [
      "Shared public API for Android, Desktop, iOS and JS targets",
      "PatternBackground and FollowGlow as reusable app-agnostic composables",
      "Demo apps for Android and Desktop to validate the same effects across targets",
    ],
    sections: [
      {
        title: "Purpose",
        paragraphs: [
          "luma-compose extracts decorative and interactive visual effects into a reusable library so applications can compose them without copying rendering logic into each product.",
          "The API is intentionally app-agnostic: the library does not hardcode domain models like compass, tilt or level, which keeps it usable across unrelated UI concepts.",
        ],
      },
      {
        title: "Design",
        paragraphs: [
          "The shared API lives in common source sets, while the repository also includes Android and Desktop demo applications to exercise the same visual primitives in concrete environments.",
          "The main surface area is immutable style plus runtime state: `PatternStyle` and `PatternState` for patterned backgrounds, `GlowState` and related defaults for point-following glow effects.",
        ],
        bullets: [
          "Pattern presets like soft dots, ferrite stripes and floating sprites",
          "Point-based interaction, blur, shadow and parallax-like depth controls",
          "Published KMP root artifact plus target-specific publications",
        ],
      },
    ],
    codeSample: `commonMain.dependencies {\n  implementation("io.github.nvshink:luma-compose:1.0.0")\n}\n\nval patternStyle = PatternDefaults.softDots()\nval glowStyle = GlowDefaults.softRadial()`,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const applicationProjects = projects.filter(
  (project) => project.category === "application" && project.slug !== "mnemonote",
);
export const libraryProjects = projects.filter(
  (project) => project.category === "library",
);
