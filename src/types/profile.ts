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
  about: string[];
  programLanguages: string[];
  languages: string[];
  architecture: string[];
  mobileTools: string[];
  backendTools: string[];
  socials: SocialLink[];
}
