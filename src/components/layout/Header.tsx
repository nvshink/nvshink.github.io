import { assetPath } from "@/lib/asset-path";

const navigationItems = [
  { href: "/#applications", label: "Applications" },
  { href: "/#libraries", label: "Libraries" },
  { href: "/#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[color:var(--background)]/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href={assetPath("/#top")}
          className="font-script text-3xl leading-none text-[color:var(--accent)] transition hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          nvshink
        </a>
        <nav aria-label="Primary navigation">
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
        </nav>
      </div>
    </header>
  );
}
