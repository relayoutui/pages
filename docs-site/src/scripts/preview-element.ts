// <rl-preview>: renders a docs snippet in a shadow root with Relayout's CSS, so Starlight's styles stay
// out and Relayout's stay in. The snippet is the <template> inside the element (src/plugins/preview-blocks.mjs).

// Registers <rl-column> and the other elements, so a snippet written with them renders too
import '@relayoutui/relayout';
import relayoutCss from '@relayoutui/relayout/css?raw';
import previewCss from '../styles/preview.css?raw';

/**
 * Builds a stylesheet that every preview's shadow root adopts.
 * @param text the CSS
 * @returns the constructed stylesheet
 */
function sheet(text: string): CSSStyleSheet
{
    const result = new CSSStyleSheet();
    result.replaceSync(text);
    return result;
}

/**
 * Relayout's dark colors apply when the visitor's system prefers dark. The docs have a theme of their own, a toggle
 * that can disagree with the system, and a preview that takes the system's colors beside the docs' text can't be read:
 * light text on a white surface. So the dark values move from the media query to `:host([data-theme="dark"])`, and
 * each preview takes its `data-theme` from the page's.
 * @param css Relayout's stylesheet
 * @returns the stylesheet with the dark values under the host's theme
 */
function followDocsTheme(css: string): string
{
    return css.replace(/@media\s*\(prefers-color-scheme:\s*dark\)\s*\{\s*:root\s*\{([^}]*)\}\s*\}/g, ':host([data-theme="dark"]){$1}');
}

// Relayout sets its tokens on :root, which a shadow root doesn't have
const SHEETS = [sheet(followDocsTheme(relayoutCss).replace(/:root\b/g, ':host')), sheet(previewCss)];

/** The theme the docs are in, which src/components/theme-provider.astro sets before the first paint. */
function docsTheme(): string
{
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

// A toggle of the docs' theme changes every preview on the page
new MutationObserver(() =>
{
    for (const preview of document.querySelectorAll('rl-preview')) preview.setAttribute('data-theme', docsTheme());
}).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

/** A live preview of the snippet in its template, with debug outlines when it has the `debug` attribute. */
class RelayoutPreview extends HTMLElement
{
    connectedCallback(): void
    {
        const template = this.querySelector('template');
        if (this.shadowRoot || !template) return;

        this.setAttribute('data-theme', docsTheme());
        const root = this.attachShadow({ mode: 'open' });
        root.adoptedStyleSheets = SHEETS;

        const frame = document.createElement('div');
        frame.className = 'frame';
        frame.part.add('frame');

        const content = document.createElement('div');
        content.className = this.hasAttribute('debug') ? 'content rl-debug' : 'content';
        content.append(template.content.cloneNode(true));

        frame.append(content);
        root.append(frame);
    }
}

customElements.define('rl-preview', RelayoutPreview);
