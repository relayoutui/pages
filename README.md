# Relayout pages

The website of [Relayout](https://github.com/relayoutui/relayout), served at https://relayoutui.github.io/pages/:

| Folder | What it is | Served at |
|---|---|---|
| `www/` | The home page, static files served as they are | https://relayoutui.github.io/pages/ |
| `docs-site/` | The docs, a [Starlight](https://starlight.astro.build/) site; see its README | https://relayoutui.github.io/pages/docs/ |

## Home page

`www/index.html`, with no build step: the look of the other product sites (lpdf.io, authstack.id), and the docs' theme choice (`cs-theme`), so dark or light carries between the two. Paths are relative, since the site lives under `/pages/`. What is in `www/assets`:

| File | What it is | Keep it in step |
|---|---|---|
| `css/relayout.css` | `dist/css/relayout.css` of the `@relayoutui/relayout` version the docs depend on | Copy it again from `docs-site/node_modules/@relayoutui/relayout` when the docs' dependency moves (see the docs' README, "Relayout version") |
| `css/pages-base.css`, `fonts/JetBrainsMono-Variable.ttf` | The product sites' shared look, copied unedited from `codesense/portal/ui/pages` and `ui/assets/fonts` | Copy them again after a change there; never edit the copy |
| `css/brand.css` | Relayout's tones for `pages-base.css`, with their measured contrast | |
| `css/home.css`, `js/home.js` | The page's own rules, and its theme toggle and cycling word | |
| `js/demo.js`, `css/demo-preset.css` | The layout demo, `<relayout-demo>`: each preset is a `<template>` inside it in `index.html`, rendered in a shadow root with `relayout.css` and `demo-preset.css`, and shown as source from the same template. Add or change a preset in `index.html` | |
| `images/relayout-mark.svg`, `favicon.ico` | From `codesense/logos/dist`, the same files as the docs' | |

The page loads nothing from another site.

## Locally

The Caddyfile in `_local` serves this repo at http://relayout.local: `www/` at `/pages/` and the docs' build at `/pages/docs/`, and `/` goes to `/pages/`. Clone the repo into `relayout/pages`, beside the Relayout code, for its paths to match. A change in `www/` shows on reload. The docs need `npm run build` in `docs-site` first, then reload; `/pages/docs` is 404 until a build has run.

## Deploy

`.github/workflows/deploy.yml` builds the docs and assembles the site on every pull request (`.github/assemble-site.sh`: `www/`, with the docs' build at `/docs`). A push to `main` deploys it to GitHub Pages once approved in the `production` environment. A Relayout release deploys nothing here.

Analytics: the docs add the Umami script only when the `UMAMI_WEBSITE_ID` repository variable is set. The home page has none yet.
