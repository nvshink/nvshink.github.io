import type { ProjectLink } from "@/types/project";

type ProjectLinksProps = {
  links: ProjectLink[];
};

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={`${link.type}-${link.label}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-[color:var(--foreground)]/15 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
