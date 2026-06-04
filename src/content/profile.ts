import type { DeveloperProfile } from "@/types/profile";

export const profile: DeveloperProfile = {
  name: "nvshink",
  handle: "@nvshink",
  role: "Kotlin Multiplatform Developer",
  summary:
    "I design cross-platform products, local-first workflows and reusable Kotlin libraries for Android and desktop.",
  location: "Omsk, Russia",
  about: [
    "I focus on Kotlin Multiplatform as a practical way to share domain logic, keep product quality high and avoid fragmented architecture between platforms.",
    "My strongest background is Android, but I also care about desktop tooling, local storage, synchronization and developer experience in internal libraries.",
    "I like products with clear mechanics: offline-first notes, technical utilities, productivity tools and infrastructure that stays maintainable as the codebase grows.",
  ],
  technologies: [
    "Kotlin Multiplatform",
    "Compose Multiplatform",
    "Android SDK",
    "Coroutines",
    "Ktor",
    "SQLDelight",
    "SQLite",
    "TypeScript",
    "Electron",
  ],
  socials: [
    {
      type: "github",
      label: "nvshink",
      href: "https://github.com/nvshink",
    },
    {
      type: "linkedin",
      label: "Nikita Shinkarev",
      href: "https://www.linkedin.com/in/nikita-shinkarev-2b5b213a5/",
    },
    {
      type: "telegram",
      label: "@nvshink",
      href: "https://t.me/nvshink",
    },
    {
      type: "email",
      label: "shinkarevnikita7@gmail.com",
      href: "mailto:sinkarevnikita7@gmail.com",
    },
  ],
};
