import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { PlatformBadges } from "@/components/projects/PlatformBadges";
import { assetPath } from "@/lib/asset-path";
import type { PortfolioProject } from "@/types/project";

type HorizonBlockProps = {
  project: PortfolioProject;
};

export function HorizonBlock({ project }: HorizonBlockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] bg-[radial-gradient(circle_at_8px_8px,_rgba(166,83,9,0.16)_1.5px,_transparent_1.7px)] bg-[length:28px_28px] p-5 shadow-[0_8px_8px_rgba(92,43,13,0.12)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center">
          <img
            src={assetPath("/images/projects/horizon/icon.svg")}
            alt="Horizon app icon"
            className="w-44 rounded-2xl shadow-[0_0_28px_10px_rgba(255,217,199,0.9)]"
          />
        </div>
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.12em] text-[color:var(--accent)]">
            FIELD INSTRUMENT
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-3 text-lg text-[color:var(--muted)]">{project.tagline}</p>
          <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">
            {project.description}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="[&>ul>li]:bg-[color:var(--accent)] [&>ul>li]:text-[color:var(--surface)]">
              <PlatformBadges platforms={project.platforms} />
            </div>
            <div className="[&>ul>li]:border-[color:var(--border)] [&>ul>li]:bg-[color:var(--accent-soft)] [&>ul>li]:text-[color:var(--muted)]">
              <ProjectTechStack stack={project.stack} />
            </div>
          </div>
          <div className="mt-6">
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </div>
  );
}
