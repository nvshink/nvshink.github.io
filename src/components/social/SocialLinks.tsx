 "use client";

import { useState } from "react";
import type { ReactElement } from "react";
import type { SocialLink, SocialType } from "@/types/profile";

const socialIcons: Record<SocialType, ReactElement> = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.32 9.32 0 0 1 12 6.92c.85 0 1.71.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.21 2.49.11 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.82-4.56 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55a1.97 1.97 0 1 0-3.93 0 1.97 1.97 0 0 0 3.93 0ZM20 13.04c0-3.15-1.68-4.62-3.92-4.62-1.8 0-2.6.99-3.05 1.68V8.5H9.65c.04 1.05 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.93.27-.68.89-1.4 1.92-1.4 1.36 0 1.9 1.05 1.9 2.6V20H20v-6.96Z"
      />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M21.44 4.53c.36-.15.75.17.66.56l-2.9 13.67c-.08.39-.53.58-.88.37l-4.4-2.75-2.27 2.19c-.27.26-.73.09-.75-.29l-.22-4.22 7.63-6.89c.21-.19-.05-.51-.31-.38L8.2 13.1l-4.25-1.33c-.42-.13-.45-.72-.05-.9L21.44 4.53Z"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.03-.25 6.46 5.28a.8.8 0 0 0 1.02 0l6.46-5.28H5.03Zm14.47 1.32-5.98 4.88a2.4 2.4 0 0 1-3.04 0L4.5 7.82v9.43c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V7.82Z"
      />
    </svg>
  ),
};

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

export function SocialLinks({ links, className }: SocialLinksProps) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  async function handleCopy(label: string) {
    try {
      await navigator.clipboard.writeText(label);
      setCopiedLabel(label);
      window.setTimeout(() => {
        setCopiedLabel((current) => (current === label ? null : current));
      }, 1500);
    } catch {
      setCopiedLabel(null);
    }
  }

  return (
    <ul className={className}>
      {links.map((link) => {
        const isExternal = link.href.startsWith("http");
        const isCopied = copiedLabel === link.label;

        return (
          <li key={`${link.type}-${link.label}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-2 py-2 text-sm font-medium text-[color:var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)]">
              <a
                href={link.href}
                aria-label={link.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="inline-flex items-center gap-3 rounded-full px-2 py-1 transition hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
              >
                {socialIcons[link.type]}
                <span>{link.label}</span>
              </a>
              <button
                type="button"
                aria-label={`Copy label ${link.label}`}
                onClick={() => void handleCopy(link.label)}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
              >
                {isCopied ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      fill="currentColor"
                      d="M9.55 18.28 4.97 13.7l1.41-1.41 3.17 3.16 8.07-8.07 1.41 1.42-9.48 9.48Z"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      fill="currentColor"
                      d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
