// The Relayout docs as a Starlight site, served at relayout.net/docs, beside the home page in
// ../www. See README.md.

import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { previewBlocks } from './src/plugins/preview-blocks.mjs';

// Umami is added only when the build has a website id: the UMAMI_WEBSITE_ID repository variable in CI.
const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID;

export default defineConfig({
    site: 'https://relayout.net',
    base: '/docs',
    markdown: {
        // Starlight adds its own plugins to this processor
        processor: satteri({ mdastPlugins: [previewBlocks()] }),
    },
    integrations: [
        starlight({
            title: 'Relayout Docs',
            description: 'Relayout takes the simple parts of flexbox and grid and applies them in a simple, repeatable, predictable way: four layouts, utilities for the rest, no media queries.',
            favicon: '/favicon.ico',
            head: umamiWebsiteId
                ? [
                    {
                        tag: 'script',
                        attrs: { defer: true, src: 'https://cloud.umami.is/script.js', 'data-website-id': umamiWebsiteId },
                    },
                ]
                : [],
            // The header, frame, title, header links and theme toggle of the other product docs
            // (lpdf.io, authstack.id). The GitHub and npm links are in social-icons.astro.
            components: {
                Head: './src/components/head.astro',
                Header: './src/components/header.astro',
                PageFrame: './src/components/page-frame.astro',
                SiteTitle: './src/components/site-title.astro',
                SocialIcons: './src/components/social-icons.astro',
                ThemeProvider: './src/components/theme-provider.astro',
                ThemeSelect: './src/components/theme-toggle.astro',
            },
            customCss: ['./src/styles/docs.css'],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { slug: 'introduction', label: 'Introduction' },
                        { slug: 'install', label: 'Installation' },
                        { slug: 'composition', label: 'Composition' },
                        { slug: 'web-components', label: 'Web components' },
                        { slug: 'recipes', label: 'Recipes' },
                        { slug: 'changelog', label: 'Changelog' },
                    ],
                },
                {
                    label: 'Layouts',
                    items: [
                        { slug: 'layouts/column', label: 'Column' },
                        { slug: 'layouts/row', label: 'Row' },
                        { slug: 'layouts/grid', label: 'Grid' },
                        { slug: 'layouts/frame', label: 'Frame' },
                    ],
                },
                {
                    label: 'Utilities',
                    items: [
                        { slug: 'utilities/gap', label: 'Gap' },
                        { slug: 'utilities/align', label: 'Align' },
                        { slug: 'utilities/justify', label: 'Justify' },
                        { slug: 'utilities/padding', label: 'Padding' },
                        { slug: 'utilities/wrapping', label: 'Wrapping' },
                        { slug: 'utilities/width', label: 'Width' },
                        { slug: 'utilities/height', label: 'Height, fill and scroll' },
                    ],
                },
                {
                    label: 'Extras',
                    items: [
                        { slug: 'extras/border', label: 'Border' },
                        { slug: 'extras/radius', label: 'Radius' },
                        { slug: 'extras/divider', label: 'Divider' },
                        { slug: 'extras/palette', label: 'Palette' },
                        { slug: 'extras/fonts', label: 'Fonts' },
                        { slug: 'extras/shadows', label: 'Shadows' },
                    ],
                },
            ],
        }),
    ],
});
