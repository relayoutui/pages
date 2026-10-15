// Turns a code block marked `preview` into a live preview with its source under it:
//
//     ```html preview          the snippet rendered by <rl-preview> (src/scripts/preview-element.ts)
//     ```html preview debug    the same, with outlines around the layouts and their children
//
// The source is a plain html code block in a closed <details>, so Starlight highlights it as usual.
// Both stay out of the search index: a result should quote the prose, not a snippet's markup.

/**
 * Satteri mdast plugin for the docs' preview blocks.
 * @returns {{ name: string, code: Function }} the plugin, for `satteri({ mdastPlugins })`
 */
export function previewBlocks()
{
    return {
        name: 'relayout-preview-blocks',
        code(node, ctx)
        {
            const flags = (node.meta ?? '').split(/\s+/);
            if (node.lang !== 'html' || !flags.includes('preview')) return;

            const debug = flags.includes('debug') ? ' debug' : '';
            ctx.replaceNode(node, [
                { type: 'html', value: `<rl-preview${debug} data-pagefind-ignore="all"><template>${node.value}</template></rl-preview>` },
                { type: 'html', value: '<details class="preview-source" data-pagefind-ignore="all"><summary>Source code</summary>' },
                { type: 'code', lang: 'html', meta: null, value: node.value },
                { type: 'html', value: '</details>' },
            ]);
        },
    };
}
