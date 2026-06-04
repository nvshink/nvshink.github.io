import { ProjectBlock } from "@/components/projects/ProjectBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialLinks } from "@/components/social/SocialLinks";
import {
  applicationProjects,
  featuredProjects,
  libraryProjects,
} from "@/content/projects";
import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <main id="top">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-18 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="font-script text-2xl leading-none text-[color:var(--accent)] sm:text-3xl">
            {profile.handle}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
            {profile.role}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[color:var(--muted)] sm:text-xl">
            {profile.summary}
          </p>
          <SocialLinks links={profile.socials} className="mt-8 flex flex-wrap gap-3" />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(237,246,254,0.92)_46%,_rgba(220,237,251,0.98))] p-6 shadow-[0_28px_80px_rgba(88,166,239,0.12)]">
          <div className="absolute inset-x-8 top-8 h-28 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
          <div className="relative grid gap-4 md:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[1.6rem] border border-white/70 bg-white/78 p-5">
              <p className="font-script text-2xl leading-none text-[color:var(--accent)]">
                Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                <li>Cross-platform product architecture with Kotlin Multiplatform.</li>
                <li>Android and desktop experiences with deliberate UI systems.</li>
                <li>Local-first data models, sync boundaries and reusable libraries.</li>
              </ul>
            </div>
            <div className="rounded-[1.6rem] border border-[color:var(--accent)]/20 bg-[rgba(88,166,239,0.12)] p-5 text-[color:var(--foreground)]">
              <p className="font-script text-2xl leading-none text-[color:var(--accent)]">
                Snapshot
              </p>
              <div className="mt-4 space-y-3">
                {featuredProjects.map((project) => (
                  <div key={project.slug} className="rounded-2xl border border-white/70 bg-white/72 p-4">
                    <p className="text-sm font-semibold">{project.title}</p>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{project.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.4rem] border border-white/55 bg-white/65 p-4">
              <p className="font-script text-xl leading-none text-[color:var(--accent)]">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">
                {profile.location}
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/55 bg-white/65 p-4">
              <p className="font-script text-xl leading-none text-[color:var(--accent)]">
                Stack
              </p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">
                KMP + Android
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/55 bg-white/65 p-4">
              <p className="font-script text-xl leading-none text-[color:var(--accent)]">
                Style
              </p>
              <p className="mt-2 text-lg font-semibold text-[color:var(--foreground)]">
                Local-first
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Applications"
          title="Product work with distinct visual and technical direction"
          description="Each application uses its own renderer so the homepage can stay maintainable while the projects still look intentionally different."
        />
        <div className="mt-10 grid gap-8">
          {applicationProjects.map((project) => (
            <ProjectBlock key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        id="libraries"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Libraries"
          title="Reusable Kotlin modules with explicit API boundaries"
          description="Library cards stay more technical: supported platforms, API sketch and direct repository/documentation links."
        />
        <div className="mt-10 grid gap-8">
          {libraryProjects.map((project) => (
            <ProjectBlock key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="About"
          title="Kotlin Multiplatform as architecture, not just code sharing"
          description="The main interest area is keeping product logic coherent across targets while preserving the strengths of each platform."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(23,23,23,0.06)] sm:p-8">
            <div className="space-y-5 text-base leading-8 text-[color:var(--muted)]">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
            <p className="font-script text-3xl leading-none text-[color:var(--accent)]">
              Key technologies
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {profile.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
