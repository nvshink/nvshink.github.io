export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white/78">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 nvshink. Built with Next.js and exported for GitHub Pages.</p>
          <a
            href="https://github.com/nvshink"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          >
            GitHub profile
          </a>
        </div>
      </div>
    </footer>
  );
}
