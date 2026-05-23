# Plugin & Pipeline detail pages with GitHub README

**Status**: design approved, ready for plan
**Date**: 2026-05-23

## Goal

Add detail pages for plugins and pipelines that surface the upstream GitHub `README` as rendered HTML. Clicking a plugin/pipeline in the existing list pages routes to a per-entity page that shows metadata, the README, and (for plugins) related-plugin recommendations.

## Out of scope (explicit)

- Client-side markdown rendering
- Syntax highlighting beyond what GitHub embeds in returned HTML
- "Edit on GitHub" UI affordances
- README search
- Local-storage / per-client caching of detail pages
- GitHub webhook subscriptions for instant cache invalidation

## Routes

| Path | Backing files |
|------|---------------|
| `/plugins/[id]` | `src/routes/plugins/[id]/+page.server.ts`, `+page.svelte` |
| `/pipelines/[id]` | `src/routes/pipelines/[id]/+page.server.ts`, `+page.svelte` |

`[id]` is the integer Prisma primary key (matches the existing `/api/plugins/[id]/recommendations` convention). Non-integer ids return 400; integers that don't resolve return 404.

The existing list pages (`src/routes/plugins/+page.svelte`, `src/routes/pipelines/+page.svelte`) change the plugin/pipeline name link from external `githubUrl` to the internal detail page. The small GitHub link below the row stays as-is.

## Data layout

Add one Prisma model. No FK back to `Plugin`/`Pipeline` — the cache is independent state, not part of the catalog row.

```prisma
enum ReadmeOwner {
  Plugin
  Pipeline
}

model ReadmeCache {
  ownerType  ReadmeOwner
  ownerId    Int
  // Sanitized HTML body served straight into the page.
  html       String       @db.Text
  // GitHub ETag for conditional GET; null until first non-304 response.
  etag       String?
  // Last GitHub response status (200, 304, 404, 403, 0 for network error).
  // Used by the page loader to pick a fallback when the cache itself is empty.
  lastStatus Int
  fetchedAt  DateTime     @default(now())
  updatedAt  DateTime     @updatedAt

  @@id([ownerType, ownerId])
  @@index([fetchedAt])
}
```

A periodic cleanup job (not in this spec) may prune rows whose `ownerId` no longer exists in the corresponding table; missing rows are benign (treated as cold cache).

## Server library

New module: `src/lib/server/readme.ts`.

```ts
export type ReadmeStatus = 'ok' | 'missing' | 'rate_limited' | 'error';

export interface ReadmeResult {
  html?: string;       // present iff status === 'ok'
  status: ReadmeStatus;
}

export async function getReadme(args: {
  ownerType: 'Plugin' | 'Pipeline';
  ownerId: number;
  githubUrl: string;
}): Promise<ReadmeResult>;
```

Behaviour:

1. Parse `owner/repo` from `githubUrl`. Malformed → return `{ status: 'error' }`.
2. Look up the cache row for `(ownerType, ownerId)`.
3. If a row exists and `fetchedAt` is < 24h old: return cached `html` immediately with `status: 'ok'` (or the stored fallback status if no html).
4. Otherwise fire a background refresh against `GET https://api.github.com/repos/{owner}/{repo}/readme` with headers:
   - `Accept: application/vnd.github.html`
   - `X-GitHub-Api-Version: 2022-11-28`
   - `If-None-Match: <etag>` when the row has one
   - `User-Agent: pluma-online`
   - No auth token (anonymous; 60 req/hr/IP, but ETags don't count against the limit on 304).
5. Bound the refresh to ~2s with `Promise.race(refresh, timeout(2000))`. On timeout, serve the stale cached row; the refresh continues and writes its eventual result.
6. On refresh completion:
   - **200**: sanitize the returned HTML; upsert `{ html, etag, lastStatus: 200, fetchedAt: now }`.
   - **304**: upsert `{ fetchedAt: now }` only — html and etag unchanged.
   - **404**: upsert `{ lastStatus: 404, fetchedAt: now }`, leave `html` and `etag` alone (may still hold a previously-valid cache; the loader picks the fallback based on status).
   - **403** with rate-limit headers: upsert `{ lastStatus: 403, fetchedAt: now }`.
   - Network error / non-2xx not above: upsert `{ lastStatus: 0, fetchedAt: now }`.
7. On any failure during sanitization, drop the response and keep the previous row.

Cold cache + GitHub failure means no `html` and no row to update beyond `lastStatus`. Returned `{ status }` tells the loader which fallback copy to render.

### Sanitization

Use `sanitize-html` (single npm dep, no jsdom). Config:

- Allowed tags: `h1`-`h6`, `p`, `blockquote`, `ul`, `ol`, `li`, `pre`, `code`, `em`, `strong`, `del`, `hr`, `br`, `a`, `img`, `table`, `thead`, `tbody`, `tr`, `th`, `td`, `details`, `summary`, `span`, `div`.
- Allowed attributes: `a` → `href`, `title`, `rel`, `target`; `img` → `src`, `alt`, `title`, `width`, `height`; `code`/`pre`/`span` → `class` (preserves GitHub's syntax-highlight classes); `*` → `id` (anchor links).
- Allowed schemes: `http`, `https`, `mailto`. Drops `javascript:`, `data:`, etc.
- `disallowedTagsMode: 'discard'`.
- All `on*` attributes stripped (default for `sanitize-html`).
- Every `<a>` gets `rel="noopener noreferrer"` and `target="_blank"` injected via `transformTags`.
- Relative `<img src="docs/foo.png">` and `<a href="docs/bar.md">` are rewritten via `transformTags` to absolute `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/docs/foo.png` and `https://github.com/{owner}/{repo}/blob/{branch}/docs/bar.md`. The default branch comes from the `/readme` response's `_links.html` URL (or a `?ref=` query — the API returns enough to derive it). Anything we can't resolve is dropped, not left dangling.

CSP in `src/hooks.server.ts` already blocks inline scripts; this is defense-in-depth.

## Page loaders

Both `+page.server.ts` files share the same shape:

```ts
export const load: PageServerLoad = async ({ params }) => {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) throw error(400, 'Invalid id');

  const entity = await db.<plugin|pipeline>.findUnique({
    where: { id },
    select: { /* fields needed by header + sidebar */ }
  });
  if (!entity) throw error(404, 'Not found');

  const [readme, recommendations] = await Promise.all([
    getReadme({ ownerType: '<Plugin|Pipeline>', ownerId: id, githubUrl: entity.githubUrl }),
    // plugin loader only:
    recommendationsFor(id, { direction: 'both', limit: 6 })
  ]);

  return {
    entity,
    readmeHtml: readme.html ?? null,
    readmeStatus: readme.status,
    recommendations  // plugin loader only
  };
};
```

The pipeline loader omits the `recommendations` branch.

## UI components

New components under `src/lib/components/`:

- **`DetailHeader.svelte`** — props: `{ name, githubUrl, badges: Array<{ kind, label }>, statusPill?: string }`. Used by both detail pages.
- **`ReadmeBody.svelte`** — props: `{ html: string | null, status: ReadmeStatus, fallbackDescription: string, githubUrl: string }`.
  - `status === 'ok'`: renders `{@html html}` inside `<article class="prose prose-pluma">`.
  - Otherwise: small notice ("README unavailable — showing the catalog description") + `fallbackDescription` in a styled card + link out to `githubUrl`. Copy varies by status (`missing` vs `rate_limited` vs `error`).
- **`DetailSidebar.svelte`** — props: `{ entity, kind: 'plugin' | 'pipeline', recommendations?: Recommendation[] }`. Top section: metadata table (category, language, author, rating, created/updated dates). Bottom section, only for `kind === 'plugin'`: "Used with" list — up to 6 chip-style links to `/plugins/{id}`. Hidden when `recommendations` is empty.

Page layout: two-column grid `md:grid-cols-[minmax(0,1fr)_280px]`. `ReadmeBody` left, `DetailSidebar` right with `sticky top-24`. Mobile: stacks, sidebar above body.

The `.prose-pluma` styling is a small Tailwind `@apply` block in `src/routes/layout.css` matching the existing serif/sans pair: serif for body, mono for code, primary-700 link colour, table borders matching `ink-200`.

## Error handling

| Surface | Failure mode | Behaviour |
|---------|-------------|-----------|
| Loader | Non-integer id | `error(400, 'Invalid id')` |
| Loader | Id not in DB | `error(404, 'Not found')` |
| `getReadme` | Malformed `githubUrl` | Returns `{ status: 'error' }`; loader still resolves; page falls back to description |
| `getReadme` | GitHub 404 (no README in repo) | Returns `{ status: 'missing' }`; fallback to description |
| `getReadme` | GitHub 403 + rate-limit header | Returns `{ status: 'rate_limited' }`; if a stale cached `html` exists it's served instead, page never breaks on rate limit if anything has ever been cached |
| `getReadme` | Network error / 5xx | Returns `{ status: 'error' }`; same stale-serve behaviour |
| `getReadme` | Refresh > 2s | Stale row served; refresh keeps running in the background |
| Sanitization | Throws | Refresh result discarded; previous row preserved |

No silent failures: every non-`ok` status maps to a visible notice with status-specific copy.

## Security

- Sanitization runs at **write time** (before storing). What we render is what we previously cleaned; we do not re-sanitize on read, and a sanitization failure never produces a cache row.
- `sanitize-html` config above strips all event handlers, scripts, and non-`http(s)|mailto` schemes.
- Existing CSP (`hooks.server.ts:PERMISSIONS_POLICY` and adjacent headers) prevents inline-script execution even if sanitization had a gap.
- Image and link rewriting forces all references to absolute github.com / raw.githubusercontent.com URLs so we never leak server-relative paths into user output.
- The READMECache table holds no PII; nothing to redact at retention time.

## Testing

Three new test files, all in `src/lib/server/`:

1. **`readme.test.ts`** — uses the existing `vi.mock('./db', …)` pattern from `recommendations.test.ts`:
   - URL parser: parses owner/repo from valid GitHub URLs; rejects malformed.
   - Sanitization: `<script>` removed, `javascript:` URL dropped from `<a href>`, `onclick` attribute stripped, relative `<img src="docs/foo.png">` rewritten to absolute raw URL, every output `<a>` carries `rel="noopener noreferrer"` and `target="_blank"`.
   - TTL: a row newer than 24h skips the GitHub call (verified via `fetch` mock call count).
   - ETag flow: cold cache → 200 stores html+etag; second call with stale cache → `If-None-Match` header present; 304 response → bumps `fetchedAt` without changing `html`; a later 200 replaces html and etag.
   - Fallback statuses: 404, 403, network error each return the right `ReadmeStatus` and don't clobber a previously-valid cached `html`.
   - Refresh timeout: GitHub mock that resolves after 3s → loader returns the stale row within 2s; subsequent test waits for the background promise and verifies the eventual upsert.

2. **`src/routes/plugins/[id]/+page.server.test.ts`** — id validation paths (400 / 404), composition: that `getReadme` and `recommendationsFor` are both called once with the right args and their results land in the returned payload.

3. **`src/routes/pipelines/[id]/+page.server.test.ts`** — symmetric, no recommendations branch.

A render smoke test (one per route) via `@testing-library/svelte`:

- Mounts with a fixture payload where `readmeStatus === 'ok'` and asserts the README HTML is present and the fallback notice is not.
- Mounts again with `readmeStatus === 'missing'` and asserts the inverse.

All existing tests (74) keep passing; new tests follow the same vitest + `vi.mock` style.

## Migration

One Prisma migration `add_readme_cache` adds the `ReadmeOwner` enum and the `ReadmeCache` table. Existing data is untouched; the cache starts empty and warms on first visit.

## Dependencies

- Runtime: `sanitize-html` (single addition).
- Dev: `@types/sanitize-html`, plus `@testing-library/svelte` and `jsdom` for the two render smoke tests (the project currently has no DOM-rendering tests; existing tests are pure-Node).
- No client-side deps added.

Note on relative-link rewriting: GitHub's `application/vnd.github.html` response already absolutizes most relative image and link paths (via Camo for images). The rewriting step in `sanitize-html`'s `transformTags` is defensive — most READMEs won't need it — but it's the only guard against a relative reference slipping through.
