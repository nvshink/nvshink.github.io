import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">
        Project not found
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
        The requested project page was not generated for the current static
        export.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-[color:var(--foreground)]/15 px-5 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
      >
        Back to portfolio
      </Link>
    </main>
  );
}
