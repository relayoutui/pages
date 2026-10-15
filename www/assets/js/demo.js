// <relayout-demo>: preset layouts, each rendered live in a shadow root with Relayout's CSS, and its source on a
// toggle. Each preset is a <template data-label="…"> inside the element, the one source for both views, so the two
// can't disagree. `data-padded` sets a preset in from the frame's edges; the others meet them. Plain JS, as the rest
// of www/: there is no build step.

// Relative to the page, as the stylesheets in its head are. Fetched once, however many demos the page has.
const STYLESHEETS = ['assets/css/relayout.css', 'assets/css/demo-preset.css'];

/** A stylesheet the demo needs didn't load. */
class DemoStylesError extends Error
{
    /**
     * @param {string} url the stylesheet
     * @param {number} status the HTTP status it answered with
     */
    constructor(url, status)
    {
        super(`${url} answered ${status}`);
        this.name = 'DemoStylesError';
    }
}

/**
 * Loads the stylesheets every preset's shadow root adopts. Relayout sets its tokens on :root, which a shadow root
 * doesn't have, so they move to :host, as in the docs' previews.
 * @returns {Promise<CSSStyleSheet[]>} the sheets, in cascade order
 */
async function loadSheets()
{
    return Promise.all(STYLESHEETS.map(async url =>
    {
        const response = await fetch(url);
        if (!response.ok) throw new DemoStylesError(url, response.status);
        const sheet = new CSSStyleSheet();
        sheet.replaceSync((await response.text()).replace(/:root\b/g, ':host'));
        return sheet;
    }));
}

/**
 * A template's markup as it reads in the page, without the blank lines round it or the indent it has there.
 * @param {string} markup the template's innerHTML
 * @returns {string} the markup, its least indented lines at the left edge
 */
function dedent(markup)
{
    const lines = markup.replace(/^\s*\n/, '').trimEnd().split('\n');
    const indent = Math.min(...lines.filter(line => line.trim()).map(line => line.match(/^ */)[0].length));
    return lines.map(line => line.slice(indent)).join('\n');
}

/**
 * Appends HTML source to an element as text, with tag names, attribute names and values in spans for the page's
 * syntax colours (.t-tag, .t-attr and .t-val in pages-base.css). It only ever creates text, so nothing in the source
 * is parsed as markup.
 * @param {HTMLElement} target where the text goes
 * @param {string} source the markup
 */
function appendHighlighted(target, source)
{
    const append = (text, className) =>
    {
        if (!text) return;
        if (!className)
        {
            target.append(text);
            return;
        }
        const span = document.createElement('span');
        span.className = className;
        span.textContent = text;
        target.append(span);
    };

    for (const part of source.split(/(<[^>]+>)/))
    {
        const tag = part.match(/^(<\/?)([\w-]+)([\s\S]*?)(\/?>)$/);
        if (!tag)
        {
            append(part);
            continue;
        }
        const [, open, name, attributes, close] = tag;
        append(open + name, 't-tag');
        for (const [, space, attribute, equals, value] of attributes.matchAll(/(\s+)([^\s=]+)(?:(=)("[^"]*"))?/g))
        {
            append(space);
            append(attribute, 't-attr');
            append(equals);
            append(value, 't-val');
        }
        append(close, 't-tag');
    }
}

/**
 * Makes an element with classes, and the attributes given.
 * @param {string} tag the element's name
 * @param {string} className its classes
 * @param {Record<string, string>} [attributes] the rest
 * @returns {HTMLElement} the element
 */
function element(tag, className, attributes = {})
{
    const result = document.createElement(tag);
    result.className = className;
    for (const [name, value] of Object.entries(attributes)) result.setAttribute(name, value);
    return result;
}

/** The layout demo on the home page. */
class RelayoutDemo extends HTMLElement
{
    static _sheets;

    connectedCallback()
    {
        if (this._presets) return;

        this._presets = [...this.querySelectorAll(':scope > template')];
        if (!this._presets.length) return;

        this._build();
        this._select(0);
        this._showView('preview');

        RelayoutDemo._sheets ??= loadSheets();
        RelayoutDemo._sheets.then(
            sheets =>
            {
                this._root.adoptedStyleSheets = sheets;
                this._stage.classList.remove('is-loading');
            },
            () =>
            {
                // Unstyled, a preset would show as a jumble of text, so the frame says what went wrong instead
                const message = element('p', '');
                message.textContent = 'The demo couldn\'t load its styles. Reload the page to try again.';
                this._content.replaceChildren(message);
                this._stage.classList.remove('is-loading');
            });
    }

    /** Builds the preset buttons, the Preview and Source toggle, the frame and the source view. */
    _build()
    {
        const presetGroup = element('div', 'rl-row rl-gap-s', { role: 'group', 'aria-label': 'Preset layouts' });
        this._presetButtons = this._presets.map((template, index) =>
        {
            const button = element('button', 'btn btn-sm btn-secondary', { type: 'button' });
            button.textContent = template.dataset.label;
            button.addEventListener('click', () => this._select(index));
            return button;
        });
        presetGroup.append(...this._presetButtons);

        const viewGroup = element('div', 'rl-row rl-gap-s', { role: 'group', 'aria-label': 'View' });
        this._viewButtons = ['preview', 'source'].map(view =>
        {
            const button = element('button', 'btn btn-sm btn-secondary', { type: 'button' });
            button.dataset.view = view;
            button.textContent = view === 'preview' ? 'Preview' : 'Source';
            button.addEventListener('click', () => this._showView(view));
            return button;
        });
        viewGroup.append(...this._viewButtons);

        const bar = element('div', 'rl-row rl-justify-between rl-gap-m');
        bar.append(presetGroup, viewGroup);

        // The preset renders in a shadow root, so the page's styles stay out and Relayout's stay in
        this._stage = element('div', 'demo-stage is-loading');
        this._root = this._stage.attachShadow({ mode: 'open' });
        const frame = element('div', 'frame');
        this._content = element('div', 'content');
        frame.append(this._content);
        this._root.append(frame);

        this._source = element('div', 'demo-source code-window');
        const pre = element('pre', 'code-body');
        this._code = element('code', '');
        pre.append(this._code);
        this._source.append(pre);

        this._hint = element('p', 'demo-hint');
        this._hint.textContent = 'Drag the frame\'s lower right corner to see the layout at another width.';

        const body = element('div', 'rl-column rl-gap-m');
        body.append(bar, this._stage, this._source, this._hint);
        this.append(body);
    }

    /**
     * Shows a preset, in the frame and as source.
     * @param {number} index the preset's position among the templates
     */
    _select(index)
    {
        const template = this._presets[index];
        this._presetButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));

        this._content.className = 'padded' in template.dataset ? 'content is-padded' : 'content';
        this._content.replaceChildren(template.content.cloneNode(true));

        this._code.replaceChildren();
        appendHighlighted(this._code, dedent(template.innerHTML));
    }

    /**
     * Shows the rendered preset or its source, in the same place.
     * @param {'preview' | 'source'} view which one
     */
    _showView(view)
    {
        this._viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
        this._stage.hidden = view !== 'preview';
        this._hint.hidden = view !== 'preview';
        this._source.hidden = view !== 'source';
    }
}

customElements.define('relayout-demo', RelayoutDemo);
