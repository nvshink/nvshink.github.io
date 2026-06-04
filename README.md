# nvshink Portfolio

Static portfolio site built with Next.js App Router and exported for GitHub Pages.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- GitHub Actions
- GitHub Pages static export

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run lint
npm run build
```

The static export is generated into `out/`.

## Content editing

- Profile data: `src/content/profile.ts`
- Project data: `src/content/projects.ts`
- Renderers for custom project blocks: `src/components/projects/renderers/`

## GitHub Pages

The repository is configured for static export with automatic `basePath` detection:

- user site repositories like `username.github.io` deploy at `/`
- regular repositories deploy at `/<repo-name>`

The workflow file is located at `.github/workflows/deploy-pages.yml`.

## Before publishing

- replace placeholder `LinkedIn` and `Telegram` links in `src/content/profile.ts`
- update `siteUrl` in `src/app/layout.tsx` if the final Pages URL differs
- verify GitHub Pages source is set to `GitHub Actions`
