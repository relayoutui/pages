// <rl-preview>: renders a docs snippet in a shadow root with Relayout's CSS, so Starlight's styles stay
// out and Relayout's stay in. The snippet is the <template> inside the element (src/plugins/preview-blocks.mjs).

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

// Relayout sets its tokens on :root, which a shadow root doesn't have
const SHEETS = [sheet(relayoutCss.replace(/:root\b/g, ':host')), sheet(previewCss)];

/** A live preview of the snippet in its template, with debug outlines when it has the `debug` attribute. */
class RelayoutPreview extends HTMLElement
{
    connectedCallback(): void
    {
        const template = this.querySelector('template');
        if (this.shadowRoot || !template) return;

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
