import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { PlatformBadges } from "@/components/projects/PlatformBadges";
import type { PortfolioProject } from "@/types/project";

type DefaultLibraryBlockProps = {
  project: PortfolioProject;
};

export function DefaultLibraryBlock({ project }: DefaultLibraryBlockProps) {
  return (
    <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(23,23,23,0.08)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Library
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {project.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
              {project.description}
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--muted)]">
            <p className="font-medium text-[color:var(--foreground)]">Status</p>
            <p className="mt-1">{project.status}</p>
          </div>
        </div>
        <PlatformBadges platforms={project.platforms} />
        <ProjectTechStack stack={project.stack} />
        <div className="rounded-[1.4rem] bg-[#131722] p-4 font-mono text-sm leading-7 text-[#d6e2ff]">
          <p className="text-xs uppercase tracking-[0.18em] text-[#7c8db4]">
            API sketch
          </p>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap">
            <code>{project.codeSample}</code>
          </pre>
        </div>
        <ProjectLinks links={project.links} />
      </div>
    </div>
  );
}
