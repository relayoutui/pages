# Relayout docs

The docs for [Relayout](https://github.com/relayoutui/relayout), built as a static site with [Starlight](https://starlight.astro.build/) and served at https://relayoutui.github.io/pages/docs/, beside the home page in `../www`. The pages are written here, in `src/content/docs`.

## Commands

Run from this folder, in PowerShell or any shell. The first time, install the dependencies:

    npm install

| Command | What it does |
|---|---|
| `npm run dev` | Dev server at http://localhost:4321/pages/docs/. Search says it is unavailable in dev |
| `npm run build` | Builds the static site into `dist/`, with the search index and a sitemap |
| `npm run preview` | Serves `dist/` at http://localhost:4321/pages/docs/, as it would be deployed |

**On relayout.local.** The Caddyfile in `_local` serves `dist/` at http://relayout.local/pages/docs, beside the home page (see the README one folder up). Run `npm run build`, then reload; there is no server to restart.

**Search works only after a build.** The index is built with the site, so use `npm run build`, then reload relayout.local or run `npm run preview`, and press Ctrl+K or click Search.

## Pages

The pages are markdown in `src/content/docs`, and the sidebar is set in `astro.config.mjs`. `index.mdx` is the docs' landing page, a short intro and links, reached from the "Docs" label in the header; the long introduction is `introduction.md`. Links between pages include the base: `/pages/docs/layouts/row/`.

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

The previews use the CSS of the `@relayoutui/relayout` version in `package.json`, so the docs describe a released version. After a Relayout release, update the dependency and the pages that change with it, in one pull request. `src/content/docs/install.md` names the version in its CDN, local file and npm examples (`0.2.0` at the time of writing): move it with the dependency. So does the home page's copy of the CSS, `../www/assets/css/relayout.css`: copy it again from `node_modules/@relayoutui/relayout/dist/css/`.

## Deploy

The repo's workflow builds this site and deploys it with the home page; see the README one folder up. The Umami script is added only when the build has `UMAMI_WEBSITE_ID` set, from the repository variable of that name.

## Other files

The look is the other product docs' (lpdf.io, authstack.id), copied from authstack's `docs-site`, with Relayout's mark and tones:

- `src/styles/docs.css`: the neutral surfaces and greys, the accent tones and the brand magenta, with their measured contrast.
- `src/components/page-frame.astro`: with a mouse, the content scrolls in Starlight's own `.main-frame`, below the header, not in the window (see "Scrolling" in `docs.css`), so the header never shifts between pages that scroll and pages that don't. This component gives the frame keyboard focus on load and keeps a clicked tab in place. A touch screen scrolls the window.
- `src/components/header.astro`: Starlight's header with the pre-release notice as a second, full-width row under it. Its height is `--docs-notice-height` in `docs.css`. Remove the component, its entry in `astro.config.mjs` and that variable at v1.0.
- `src/components/site-title.astro`: the header lockup: the mark at 24px (`codesense/logos/dist/relayout-mark.svg`) and the word, which go to the home page, and a "Docs" label, which goes to the docs home.
- `src/components/theme-toggle.astro` and `theme-provider.astro`: the half-circle theme toggle in place of Starlight's three-way picker. Dark by default, stored the way the other product sites store it (`src/theme.ts`, key `cs-theme`).
- `src/components/head.astro`: Starlight's head, plus the script that defines `<rl-preview>`.
