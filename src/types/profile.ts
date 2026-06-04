export type SocialType = "github" | "linkedin" | "telegram" | "email";

export interface SocialLink {
  type: SocialType;
  label: string;
  href: string;
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  role: string;
  summary: string;
  location: string;
  about: string[];
  technologies: string[];
  socials: SocialLink[];
}
