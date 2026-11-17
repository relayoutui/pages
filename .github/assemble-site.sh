#!/usr/bin/env bash
#
# Builds the folder that gets deployed: the static pages in www/, with the docs site's build
# (docs-site/dist) at /docs. Run it after `npm run build` in docs-site.
#
# Usage: assemble-site.sh <output-dir>
set -euo pipefail

out=${1:?usage: assemble-site.sh <output-dir>}
docs=docs-site/dist

if [ ! -f "$docs/index.html" ]; then
    echo "::error::$docs/index.html is missing — build the docs first ('npm run build' in docs-site)"
    exit 1
fi
if [ -e www/docs ]; then
    echo "::error::www/docs would be replaced by the docs build: the docs are written in docs-site"
    exit 1
fi
if [ ! -f "$docs/sitemap-0.xml" ]; then
    echo "::error::$docs/sitemap-0.xml is missing: the site's sitemap lists the pages of the docs from it"
    exit 1
fi
if [ -e www/sitemap.xml ]; then
    echo "::error::www/sitemap.xml would be replaced by the one made here, from the home page and the docs"
    exit 1
fi

rm -rf "$out"
mkdir -p "$out/docs"
cp -a www/. "$out/"
cp -a "$docs/." "$out/docs/"

# The sitemap at the root lists the home page, then each page of the docs, which the docs build names in
# sitemap-0.xml. robots.txt (in www) points crawlers at it.
{
    echo '<?xml version="1.0" encoding="UTF-8"?>'
    echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    echo '  <url><loc>https://relayout.net/</loc></url>'
    grep -o '<loc>[^<]*</loc>' "$docs/sitemap-0.xml" | sed 's|^|  <url>|; s|$|</url>|'
    echo '</urlset>'
} > "$out/sitemap.xml"

# The visit counter. The docs load it from their own head (docs-site/astro.config.mjs), and the home page here, from
# the same OPENPANEL_CLIENT_ID. A build without it loads no counter. The id goes into HTML, so it is checked first.
if [ -n "${OPENPANEL_CLIENT_ID:-}" ]; then
    if ! [[ "$OPENPANEL_CLIENT_ID" =~ ^[A-Za-z0-9-]+$ ]]; then
        echo "::error::OPENPANEL_CLIENT_ID has characters other than letters, digits and '-'"
        exit 1
    fi
    awk -v tag="<script defer src=\"assets/js/analytics.js\" data-client-id=\"$OPENPANEL_CLIENT_ID\"></script>" \
        '/<\/head>/ { print "    " tag } { print }' "$out/index.html" > "$out/index.html.new"
    mv "$out/index.html.new" "$out/index.html"
    if [ "$(grep -c 'assets/js/analytics.js' "$out/index.html")" != 1 ]; then
        echo "::error::the home page should load the visit counter once: www/index.html needs one </head>"
        exit 1
    fi
fi
if grep -rq '/assets/js/analytics.js' "$out/docs" && [ ! -f "$out/assets/js/analytics.js" ]; then
    echo "::error::the docs load www/assets/js/analytics.js, which is missing"
    exit 1
fi

# GitHub Pages answers a missing path with the 404.html at the site's root. Until www has its own,
# the docs' one serves: its links carry the full /docs/ path, so it works from there too.
if [ ! -f "$out/404.html" ]; then
    cp "$docs/404.html" "$out/404.html"
fi

# Fail here rather than deploy the wrong thing.
if [ ! -f "$out/index.html" ]; then
    echo "::error::www/index.html is missing: the site has no home page"
    exit 1
fi
if [ ! -f "$out/robots.txt" ]; then
    echo "::error::www/robots.txt is missing: crawlers are not pointed at the sitemap"
    exit 1
fi
if [ ! -f "$out/docs/pagefind/pagefind.js" ]; then
    echo "::error::the docs search index is missing from $out/docs/pagefind"
    exit 1
fi

echo "Assembled $out: $(find "$out" -type f | wc -l) files, docs at /docs"
