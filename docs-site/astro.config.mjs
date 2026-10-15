// The Relayout docs as a Starlight site, served at relayoutui.github.io/pages/docs, beside the home page in
// ../www. See README.md.

import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { previewBlocks } from './src/plugins/preview-blocks.mjs';

// Umami is added only when the build has a website id: the UMAMI_WEBSITE_ID repository variable in CI.
const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID;

export default defineConfig({
    site: 'https://relayoutui.github.io',
    base: '/pages/docs',
    markdown: {
        // Starlight adds its own plugins to this processor
        processor: satteri({ mdastPlugins: [previewBlocks()] }),
    },
    integrations: [
        starlight({
            title: 'Relayout Docs',
            description: 'Relayout is a lightweight, responsive layout system: compose interfaces from a few primitive layouts and modifiers, without media queries.',
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
                        { slug: 'recipes', label: 'Recipes' },
                    ],
                },
                {
                    label: 'Layouts',
                    items: [
                        { slug: 'layouts/column', label: 'Column' },
                        { slug: 'layouts/row', label: 'Row' },
                        { slug: 'layouts/grid', label: 'Grid' },
                        { slug: 'layouts/frame', label: 'Frame' },
                        { slug: 'layouts/divider', label: 'Divider' },
                    ],
                },
                {
                    label: 'Modifiers',
                    items: [
                        { slug: 'modifiers/gap', label: 'Gap' },
                        { slug: 'modifiers/align', label: 'Align' },
                        { slug: 'modifiers/justify', label: 'Justify' },
                        { slug: 'modifiers/padding', label: 'Padding' },
                        { slug: 'modifiers/wrapping', label: 'Wrapping' },
                        { slug: 'modifiers/border', label: 'Border' },
                        { slug: 'modifiers/radius', label: 'Radius' },
                        { slug: 'modifiers/width', label: 'Width' },
                        { slug: 'modifiers/height', label: 'Height, fill and scroll' },
                    ],
                },
            ],
        }),
    ],
});
