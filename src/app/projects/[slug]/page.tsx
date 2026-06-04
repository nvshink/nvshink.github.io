import Link from "next/link";
import { notFound } from "next/navigation";
import { PlatformBadges } from "@/components/projects/PlatformBadges";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[color:var(--border)] bg-white/85 p-8 shadow-[0_24px_70px_rgba(23,23,23,0.08)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
          {project.category === "application" ? "Application" : "Library"}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
          {project.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <PlatformBadges platforms={project.platforms} />
          <ProjectTechStack stack={project.stack} />
          <ProjectLinks links={project.links} />
        </div>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Highlights
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="rounded-2xl bg-[color:var(--background)] px-4 py-3">
                {highlight}
              </li>
            ))}
          </ul>
          {project.codeSample ? (
            <div className="mt-6 rounded-[1.4rem] bg-[#131722] p-4 font-mono text-sm leading-7 text-[#d6e2ff]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7c8db4]">
                Code sample
              </p>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap">
                <code>{project.codeSample}</code>
              </pre>
            </div>
          ) : null}
        </aside>
        <div className="space-y-6">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(23,23,23,0.06)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[color:var(--muted)]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--muted)] sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl bg-[color:var(--background)] px-4 py-3"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/#applications"
          className="inline-flex items-center rounded-full border border-[color:var(--foreground)]/15 px-5 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          Back to projects
        </Link>
      </div>
    </main>
  );
}
