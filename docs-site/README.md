# Relayout docs

The docs for [Relayout](https://github.com/relayoutui/relayout), built as a static site with [Starlight](https://starlight.astro.build/) and served at https://relayout.net/docs/, beside the home page in `../www`. The pages are written here, in `src/content/docs`.

## Commands

Run from this folder, in PowerShell or any shell. The first time, install the dependencies:

    npm install

| Command | What it does |
|---|---|
| `npm run dev` | Dev server at http://localhost:4321/docs/. Search says it is unavailable in dev |
| `npm run build` | Writes the header's version and revision (*Version in the header*) and the Reference page (*Reference page*), then builds the static site into `dist/`, with the search index and a sitemap |
| `npm run check` | Fails if a page names another Relayout version than the one installed (*Relayout version*), and, after a build, if a page's header stamp isn't that version, if the Reference page lacks a class or a custom property of the stylesheet, or if a page's title is over 60 characters or its description is outside 120 to 160, as search results show them (the docs and the home page) |
| `npm run preview` | Serves `dist/` at http://localhost:4321/docs/, as it would be deployed |

**On relayout.local.** The Caddyfile in `_local` serves `dist/` at http://relayout.local/docs, beside the home page. Run `npm run build`, then reload; there is no server to restart.

**Search works only after a build.** The index is built with the site, so use `npm run build`, then reload relayout.local or run `npm run preview`, and press Ctrl+K or click Search.

## Pages

The pages are markdown in `src/content/docs`, and the sidebar is set in `astro.config.mjs`. `index.mdx` is the docs' landing page, a short intro and links, reached from the "Docs" label in the header; the long introduction is `introduction.md`. Links between pages include the base: `/docs/layouts/row/`.

A code block marked `preview` shows the snippet live, with its source in a closed "Source code" section under it:

````md
```html preview
<div class="rl-row rl-gap-m">
    <div>One</div>
    <div>Two</div>
</div>
```
````

`html preview debug` adds outlines around the layouts and their children. `src/plugins/preview-blocks.mjs` turns the block into an `<rl-preview>` element, which renders the snippet in a shadow root with Relayout's CSS (`src/scripts/preview-element.ts`), so the site's styles don't reach it. Neither the preview nor its source is in the search index.

Astro caches the rendered markdown, and a change to the plugin doesn't clear that cache. After editing it, delete `node_modules/.astro` before building.

## Relayout version

The previews use the CSS of the `@relayoutui/relayout` version in `package.json`, so the docs describe a released version. After a Relayout release, move everything that names the version, in one pull request:

1. `npm install @relayoutui/relayout@^<version>` in this folder, which changes `package.json` and the lockfile.
2. The examples in `src/content/docs/install.md` (CDN, local file and npm) and `src/content/docs/web-components.md` name the version, written by hand: write the new one.
3. The home page's copy of the CSS, `../www/assets/css/relayout.css`: copy it again from `node_modules/@relayoutui/relayout/dist/css/`.
4. The pages the release changes, with its entry in `src/content/docs/changelog.md`.

`npm run check` finds what was missed. It lists each example, by file and line, that names another version than the installed one, a dependency that isn't the installed version, and a copy of the CSS on the home page that is another version or differs from the package's file, and CI runs it before the build is deployed. The changelog is left out, since it names the versions that changed things. The check can't see the README of the Relayout repo, which names the version in its CDN example too: change it there.

## Version in the header

The header shows `v0.8.0-r1116.2` after the "Docs" label: the version of Relayout the previews run, and the revision of the build. Hovering over it says both in words. It is hidden at 64rem and below, where it would crowd the search box.

- The version is the installed `@relayoutui/relayout`, which `npm run check` holds equal to the dependency, the examples and the home page's CSS.
- The revision is `r<mmdd>.<n>`: the date of the latest commit and its place among that day's commits. The same commit gets the same revision on any machine, and re-running a workflow doesn't change it. It needs the whole history, so a shallow clone shows the version only, and CI, which checks out with `fetch-depth: 0`, fails the check without a revision. `DOCS_REVISION` sets it by hand.
- `scripts/build-info.mjs` writes both to `src/build-info.json`, which isn't committed. `npm run dev` and `npm run build` run it first.

## Reference page

`src/content/docs/reference.md` lists every class and custom property of the installed `@relayoutui/relayout`, with the rules each class sets, the variables it reads and each variable's default, light and dark. It isn't written by hand and isn't committed: `scripts/build-reference.mjs` reads `node_modules/@relayoutui/relayout/dist/css/relayout.css` with PostCSS and writes it, and `npm run dev` and `npm run build` run it first. So the page changes with the version, and no row of it can drift from what ships.

What the script decides is the layout: its `SECTIONS` follow the docs' own pages, so each group of classes links to its page. A class that no section names goes under "Other classes", so adding a class to Relayout needs no change here, only a section when it belongs to a page. `npm run check` reads the stylesheet with a plain pattern and the built page, and fails when a class or a custom property has no row.

## Deploy

The workflow, `.github/workflows/deploy.yml`, builds the site once and ships the same files to two places: pre at https://pre.relayout.net, and prod at https://relayout.net. What was looked at on pre is what ships.

1. A pull request builds the site, checks it for both stages and deploys nothing. Its `Build the site` job is the check the ruleset on `main` requires.
2. A push to `main` deploys to pre at once. Pre is the GitHub Pages site of the `relayoutui/pages-pre` repository, from its `gh-pages` branch, which the workflow pushes with a deploy key (the `PAGES_PRE_DEPLOY_KEY` secret).
3. Prod deploys after pre has, and waits for the `production` approval. Look at pre first, and compare the revision in its header with the one in the name of the run's jobs. The build's artifact is kept for 30 days, the longest a deployment can wait for approval, so the approval can be given after a release and still deploys the files that were looked at.

The pages say `https://relayout.net` on both stages, in their canonical addresses and the sitemap. The stages differ only in what `.github/set-stage.sh <dir> pre|prod` puts beside the pages: pre gets a `CNAME` and a `robots.txt` that disallows everything, so it stays out of search results, and prod keeps `www/robots.txt`. The script checks what it wrote, and fails the build if prod names the pre host. To look at a stage locally, run `npm run build` here, then `bash .github/assemble-site.sh <dir>` and `bash .github/set-stage.sh <dir> pre` at the top of the repo.

The Umami script is added only when the build has `UMAMI_WEBSITE_ID` set, from the repository variable of that name. It counts visits to relayout.net only (`data-domains`), so pre isn't counted.

## Other files

The look is the other product docs' (lpdf.io, authstack.id), copied from authstack's `docs-site`, with Relayout's mark and tones:

- `src/styles/docs.css`: the neutral surfaces and greys, the accent tones and the brand magenta, with their measured contrast.
- `src/components/page-frame.astro`: with a mouse, the content scrolls in Starlight's own `.main-frame`, below the header, not in the window (see "Scrolling" in `docs.css`), so the header never shifts between pages that scroll and pages that don't. This component gives the frame keyboard focus on load and keeps a clicked tab in place. A touch screen scrolls the window.
- `src/components/header.astro`: Starlight's header with the pre-release notice as a second, full-width row under it. Its height is `--docs-notice-height` in `docs.css`. Remove the component, its entry in `astro.config.mjs` and that variable at v1.0.
- `src/components/site-title.astro`: the header lockup: the mark at 24px (`codesense/logos/dist/relayout-mark.svg`) and the word, which go to the home page, a "Docs" label, which goes to the docs home, and the version stamp (*Version in the header*).
- `src/components/theme-toggle.astro` and `theme-provider.astro`: the half-circle theme toggle in place of Starlight's three-way picker. Dark by default, stored the way the other product sites store it (`src/theme.ts`, key `cs-theme`).
- `src/components/head.astro`: Starlight's head, plus the script that defines `<rl-preview>`.
