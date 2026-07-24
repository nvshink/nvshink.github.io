import Link from "next/link";
import { projectRenderers } from "@/lib/project-renderers";
import type { PortfolioProject } from "@/types/project";

type ProjectBlockProps = {
  project: PortfolioProject;
};

export function ProjectBlock({ project }: ProjectBlockProps) {
  const Renderer = projectRenderers[project.renderer];

  if (!Renderer) {
    throw new Error(`Unknown renderer: ${project.renderer}`);
  }

  return (
    <article className={`group ${project.slug === "horizon" ? "horizon-theme-block" : ""}`}>
      <Renderer project={project} />
      <div className="mt-5 flex items-center justify-between gap-4">
        {project.status && project.renderer !== "default-library" && (
          <p className="text-sm text-[color:var(--muted)]">{project.status}</p>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)] transition hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          Open project page
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
