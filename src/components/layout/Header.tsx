"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { assetPath } from "@/lib/asset-path";
import { LocaleToggle } from "@/components/localization/LocaleToggle";

const navigationItems = [
  { href: "/#contacts", label: "Contacts" },
  { href: "/#applications", label: "Applications" },
  { href: "/#libraries", label: "Libraries" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const mobileMenu = (
    <>
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-x-0 bottom-0 top-[73px] z-[55] bg-[#1b2733]/20 backdrop-blur-[2px] transition-opacity duration-200 sm:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
        className={`fixed bottom-0 right-0 top-[73px] z-[60] flex w-72 flex-col gap-6 rounded-l-[2rem] border border-r-0 border-white/50 bg-[color:var(--background)]/95 p-6 shadow-[-18px_0_50px_rgba(23,39,51,0.18)] backdrop-blur-xl transition-transform duration-300 ease-out sm:hidden ${menuOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
        <ul className="space-y-2 text-lg text-[color:var(--foreground)]">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={assetPath(item.href)}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 transition hover:bg-white/70 hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[color:var(--background)]/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href={assetPath("/#top")}
          className="font-script text-3xl leading-none text-[color:var(--accent)] transition hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          nvshink
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-3 sm:flex">
          <ul className="flex flex-wrap items-center justify-end gap-2 text-sm text-[color:var(--muted)] sm:gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={assetPath(item.href)}
                  className="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LocaleToggle />
        </nav>
        <div className="flex items-center gap-3 sm:hidden">
          <LocaleToggle />
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d={menuOpen ? "m6 6 12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>
    </header>
    {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
