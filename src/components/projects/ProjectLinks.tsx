import type { ReactElement } from "react";
import { assetPath } from "@/lib/asset-path";
import type { ProjectLink, ProjectLinkType } from "@/types/project";

const linkIcons: Record<ProjectLinkType, ReactElement | null> = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.32 9.32 0 0 1 12 6.92c.85 0 1.71.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.21 2.49.11 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.82-4.56 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  ),
  demo: null,
  docs: null,
  store: null,
};

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
          className={`inline-flex items-center transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)] ${link.type === "store" ? "rounded-lg hover:opacity-85" : "gap-2 rounded-full border border-[color:var(--foreground)]/15 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"}`}
        >
          {link.type === "store" ? (
            <img
              src={assetPath("/images/projects/horizon/GetItOnGooglePlay_Badge_Web_color_English.svg")}
              alt={link.label}
              className="h-10 w-auto"
            />
          ) : (
            <>
              {linkIcons[link.type]}
              {link.label}
            </>
          )}
        </a>
      ))}
    </div>
  );
}
