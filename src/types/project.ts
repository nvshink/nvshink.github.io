export type ProjectCategory = "application" | "library";
export type ProjectLinkType = "github" | "demo" | "docs" | "store";

export interface ProjectLink {
  type: ProjectLinkType;
  label: string;
  href: string;
}

export interface ProjectSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PortfolioProject {
  slug: string;
  category: ProjectCategory;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  platforms: string[];
  links: ProjectLink[];
  renderer: string;
  featured?: boolean;
  status: string;
  highlights: string[];
  sections: ProjectSection[];
  codeSample?: string;
}
