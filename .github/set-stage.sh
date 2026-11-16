#!/usr/bin/env bash
#
# Points an assembled site at one stage: pre (pre.relayout.net) or prod (relayout.net).
#
# The pages carry nothing that differs between the stages. Their canonical addresses, Open Graph URLs and sitemap
# name relayout.net on both, so the same files go to pre and then to prod: what was looked at on pre is what ships.
# What a stage adds is beside the pages:
#
#   pre    a CNAME of pre.relayout.net, which GitHub Pages reads from the gh-pages branch of relayoutui/pages-pre, and
#          a robots.txt that disallows everything, so pre stays out of search results.
#   prod   www/robots.txt as it is, which allows everything and names the sitemap. No CNAME: the custom domain of
#          relayout.net is set in the Pages settings of relayoutui/pages, which a workflow deploy reads in place of
#          a file.
#
# Then it checks what it wrote, so a stage never ships with another stage's host or robots.txt.
#
# Usage: set-stage.sh <site-dir> pre|prod
set -euo pipefail

site=${1:?usage: set-stage.sh <site-dir> pre|prod}
stage=${2:?usage: set-stage.sh <site-dir> pre|prod}

if [ ! -f "$site/index.html" ]; then
    echo "::error::$site/index.html is missing: assemble the site first (.github/assemble-site.sh)"
    exit 1
fi

case "$stage" in
    pre)
        echo "pre.relayout.net" > "$site/CNAME"
        printf 'User-agent: *\nDisallow: /\n' > "$site/robots.txt"
        ;;
    prod)
        # The site as assembled is prod's. Nothing to write, only to check.
        ;;
    *)
        echo "::error::unknown stage '$stage': expected pre or prod"
        exit 1
        ;;
esac

if [ ! -f "$site/robots.txt" ]; then
    echo "::error::$site/robots.txt is missing"
    exit 1
fi

if [ "$stage" = pre ]; then
    if [ "$(tr -d '[:space:]' < "$site/CNAME")" != "pre.relayout.net" ]; then
        echo "::error file=$site/CNAME::CNAME is not pre.relayout.net"
        exit 1
    fi
    if ! grep -qx 'Disallow: /' "$site/robots.txt"; then
        echo "::error file=$site/robots.txt::pre's robots.txt does not disallow everything"
        exit 1
    fi
else
    if [ -e "$site/CNAME" ]; then
        echo "::error file=$site/CNAME::prod has a CNAME: relayout.net is set in the repository's Pages settings, and a file here would only be a second place to say it"
        exit 1
    fi
    if grep -qx 'Disallow: /' "$site/robots.txt"; then
        echo "::error file=$site/robots.txt::prod's robots.txt disallows everything"
        exit 1
    fi
    # Text files only (-I skips binaries): no page, sitemap or script of prod may name the pre host.
    refs=$(grep -rIl 'pre\.relayout\.net' "$site" || true)
    if [ -n "$refs" ]; then
        echo "::error::prod refers to pre.relayout.net in:"
        echo "$refs"
        exit 1
    fi
fi

echo "Set $site to $stage"
