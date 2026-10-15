# Relayout pages

The website of [Relayout](https://github.com/relayoutui/relayout), served at https://relayoutui.github.io/pages/:

| Folder | What it is | Served at |
|---|---|---|
| `www/` | The home page, static files served as they are | https://relayoutui.github.io/pages/ |
| `docs-site/` | The docs, a [Starlight](https://starlight.astro.build/) site; see its README | https://relayoutui.github.io/pages/docs/ |

Until the home page is built, `www/index.html` sends visitors to the docs.

## Locally

The Caddyfile in `_local` serves this repo at http://relayout.local: `www/` at `/pages/` and the docs' build at `/pages/docs/`, and `/` goes to `/pages/`. Clone the repo into `relayout/pages`, beside the Relayout code, for its paths to match. A change in `www/` shows on reload. The docs need `npm run build` in `docs-site` first, then reload; `/pages/docs` is 404 until a build has run.

## Deploy

`.github/workflows/deploy.yml` builds the docs and assembles the site on every pull request (`.github/assemble-site.sh`: `www/`, with the docs' build at `/docs`). A push to `main` deploys it to GitHub Pages once approved in the `production` environment. A Relayout release deploys nothing here.

Analytics: the docs add the Umami script only when the `UMAMI_WEBSITE_ID` repository variable is set.
