# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual portfolio and blog website built with Next.js 14 (App Router), TypeScript, and SCSS. The site showcases both blog posts and project portfolio pieces with i18n support for English and French.

## Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
```

## Architecture

### Internationalization (i18n)

The site uses Next.js App Router with dynamic `[lang]` segments for internationalization:

- **Supported locales**: `en` (default), `fr` - defined in `src/lib/constants.ts:4`
- **Middleware** (`src/middleware.ts`): Automatically detects user's preferred language using `@formatjs/intl-localematcher` and `negotiator`, then redirects to the appropriate locale if not already in the URL (e.g., `/` → `/en/` or `/fr/`)
- **URL structure**: All routes are prefixed with language code: `/{lang}/`, `/{lang}/blog`, `/{lang}/projects`, etc.
- **All page components receive `params.lang`** - use this to fetch localized content

### Content Management

Content is managed through Markdown files with front matter, organized by language:

- **Blog posts**: `/_posts/{lang}/*.md`
- **Projects**: `/_projects/{lang}/*.md`

Content parsing uses:
- `gray-matter` for front matter extraction
- `remark` and `remark-html` for Markdown → HTML conversion

**API functions** (`src/lib/api.ts`):
- `getAllPosts(lang)` / `getAllProjects(lang)` - Get all content for a language
- `getPostBySlug(lang, slug)` / `getProjectBySlug(lang, slug)` - Get single item
- `getPostSlugs(lang)` / `getProjectSlugs(lang)` - List available slugs
- All functions call `notFound()` if content doesn't exist

### Content Types

**Post interface** (`src/interfaces/post.ts`):
```typescript
{
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: { url: string }
  content: string
  preview?: boolean
  tags?: string[]
}
```

**Project interface** (`src/interfaces/project.ts`):
```typescript
{
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: { url: string }
  content: string
  tags?: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  screenshots?: string[]
}
```

### Component Organization

Components follow atomic design principles:
- `src/app/_components/04_templates/` - Page-level templates
  - `HomeTemplate` - Portfolio home page (featured projects)
  - `AboutTemplate` - About page
  - `PostTemplate` - Individual blog post
  - `ProjectTemplate` - Individual project
  - `ProjectsTemplate` - Projects listing
  - `PortfolioHomeTemplate` - Alternative home layout
  - `NotFoundTemplate` - 404 page
- All templates receive `lang` prop for localization

### Route Structure

```
/[lang]                           → Portfolio home (page.tsx)
/[lang]/about                     → About page
/[lang]/blog                      → Blog posts listing
/[lang]/blog/posts/[slug]         → Individual blog post
/[lang]/projects                  → Projects listing
/[lang]/projects/[slug]           → Individual project
```

### Path Aliases

The project uses TypeScript path aliases:
- `@/*` maps to `./src/*` (configured in `tsconfig.json:20-22`)

### Styling

- Primary styling: SCSS modules in `src/app/_styles/`
- Global styles: `src/app/_styles/main.scss`
- Component-specific: Template-specific SCSS files (e.g., `navigation.scss`, `projectTemplate.scss`)
- Font: Inter (Google Fonts) loaded in root layout

## Important Patterns

### Adding New Content

1. **New blog post**: Create `_posts/{lang}/{slug}.md` with required front matter fields (title, date, coverImage, excerpt, ogImage, content)
2. **New project**: Create `_projects/{lang}/{slug}.md` with project front matter (same as post + optional: tags, demoUrl, githubUrl, featured, screenshots)
3. Content is automatically discovered via filesystem - no manual registration needed

### Working with Localized Content

Always pass the `lang` parameter through the component tree:
```typescript
// In page.tsx
export default function Page({ params }: { params: { lang: string } }) {
  const posts = getAllPosts(params.lang);
  return <Template posts={posts} lang={params.lang} />;
}
```

### Featured Projects

Projects with `featured: true` in front matter appear on the portfolio home page (`src/app/[lang]/page.tsx:13`). The home page shows up to 3 featured projects.

## Notes

- The site uses Next.js Static Generation - all pages are pre-rendered at build time
- Middleware matcher excludes: `assets`, `favicon`, `_next` directories (`src/middleware.ts:43`)
- Site metadata in `src/lib/constants.ts`: `SITE_NAME`, `SITE_URL`, `HOME_OG_IMAGE_URL`
- No testing framework currently configured
- No linting configuration (ESLint/Prettier) in package.json
