// Writes src/content/docs/reference.md, the Reference page: every class and every custom property of the installed
// @relayoutui/relayout, read from its `dist/css/relayout.css`. Nothing about a class or a variable is written here, so the
// page lists what ships and can't drift from it. The file isn't committed, as src/build-info.json isn't: `npm run dev` and
// `npm run build` write it first, and `npm run check` (scripts/check-reference.mjs) compares the built page with the
// stylesheet.
//
// What is written here is how the page is laid out: the sections of the classes, which follow the docs' own pages, and
// the groups of the variables. A class that no section names is listed under "Other classes", so none is ever missing.
//
// Usage: node scripts/build-reference.mjs   in docs-site, after `npm install`

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import { version } from './build-info.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stylesheet = path.join(root, 'node_modules', '@relayoutui', 'relayout', 'dist', 'css', 'relayout.css');
const output = path.join(root, 'src', 'content', 'docs', 'reference.md');

/**
 * The sections of the classes, in the order of the docs' sidebar. A class goes to the first section whose pattern matches
 * its name, and to "Other classes" when none does.
 */
const SECTIONS = [
    { group: 'Layouts', title: 'Column', page: '/docs/layouts/column/', test: /^rl-column$/ },
    { group: 'Layouts', title: 'Row', page: '/docs/layouts/row/', test: /^rl-row$/ },
    { group: 'Layouts', title: 'Grid', page: '/docs/layouts/grid/', test: /^rl-grid($|-)/ },
    { group: 'Layouts', title: 'Frame', page: '/docs/layouts/frame/', test: /^rl-frame$/ },
    { group: 'Utilities', title: 'Gap', page: '/docs/utilities/gap/', test: /^rl-gap-/ },
    { group: 'Utilities', title: 'Align', page: '/docs/utilities/align/', test: /^rl-align-/ },
    { group: 'Utilities', title: 'Justify', page: '/docs/utilities/justify/', test: /^rl-justify-/ },
    { group: 'Utilities', title: 'Padding', page: '/docs/utilities/padding/', test: /^rl-padding-/ },
    { group: 'Utilities', title: 'Wrapping', page: '/docs/utilities/wrapping/', test: /^rl-(nowrap|nowrap-scroll|wrap-reverse)$/ },
    { group: 'Utilities', title: 'Height, fill and scroll', page: '/docs/utilities/height/', test: /^rl-(width-fill|height-|scroll$)/ },
    { group: 'Utilities', title: 'Width', page: '/docs/utilities/width/', test: /^rl-(width-|center-self$)/ },
    { group: 'Utilities', title: 'Sticky', page: '/docs/utilities/sticky/', test: /^rl-sticky-/ },
    { group: 'Extras', title: 'Border', page: '/docs/extras/border/', test: /^rl-border($|-)/ },
    { group: 'Extras', title: 'Radius', page: '/docs/extras/radius/', test: /^rl-radius-/ },
    { group: 'Extras', title: 'Divider', page: '/docs/extras/divider/', test: /^rl-divider$/ },
    { group: 'Extras', title: 'Palette', page: '/docs/extras/palette/', test: /^rl-(bg|color)-/ },
    { group: 'Extras', title: 'Fonts', page: '/docs/extras/fonts/', test: /^rl-(font|text|textline)-/ },
    { group: 'Extras', title: 'Shadows', page: '/docs/extras/shadows/', test: /^rl-shadow-/ },
    { group: 'Extras', title: 'Outline', page: '/docs/extras/outline/', test: /^rl-outline-/ },
];

/** The groups of the custom properties by the word after `--rl-`. The rest are the defaults and limits a page sets. */
const VARIABLE_GROUPS = {
    space: 'Spacing',
    width: 'Widths',
    grid: 'Grid cells',
    font: 'Font families',
    text: 'Text sizes',
    color: 'Colors',
    shadow: 'Shadows',
};
const OTHER_VARIABLES = 'Defaults and limits';

/**
 * Removes what is between brackets and parentheses, such as `[hidden]` and `:not(.rl-nowrap)`, so what is left is the
 * selector's own compounds and combinators.
 * @param selector a selector
 * @returns the selector without its attribute and function arguments
 */
function bare(selector)
{
    let depth = 0;
    let result = '';
    for (const char of selector)
    {
        if (char === '(' || char === '[') depth += 1;
        else if (char === ')' || char === ']') depth -= 1;
        else if (depth === 0) result += char;
    }
    return result;
}

/**
 * Finds the class a rule is for: the last class of the selector's last compound, which is `rl-width-fill` for
 * `.rl-row > .rl-width-fill`, and `rl-align-center` for `.rl-column.rl-align-center`. A selector whose last compound has
 * no class, such as `.rl-column > *`, is for the last class before it.
 * @param selector one selector of a rule
 * @returns the class name, or null when the selector has none outside its arguments
 */
function subject(selector)
{
    const plain = bare(selector).trim();
    const compounds = plain.split(/\s*[>+~]\s*|\s+/);
    const last = [...compounds.at(-1).matchAll(/\.(rl-[\w-]+)/g)].map(match => match[1]);
    if (last.length) return last.at(-1);
    const all = [...plain.matchAll(/\.(rl-[\w-]+)/g)].map(match => match[1]);
    return all.at(-1) ?? null;
}

/**
 * Splits `light-dark(a, b)` into its two values.
 * @param value a declaration's value
 * @returns the light and the dark value, or null when it isn't a `light-dark()`
 */
function lightDark(value)
{
    if (!value.startsWith('light-dark(') || !value.endsWith(')')) return null;
    const inner = value.slice('light-dark('.length, -1);
    let depth = 0;
    for (let index = 0; index < inner.length; index++)
    {
        if (inner[index] === '(') depth += 1;
        else if (inner[index] === ')') depth -= 1;
        else if (inner[index] === ',' && depth === 0) return { light: inner.slice(0, index).trim(), dark: inner.slice(index + 1).trim() };
    }
    return null;
}

/**
 * Reads the stylesheet.
 * @param css the text of relayout.css
 * @returns each class with the rules that are for it, and each custom property with its values and the classes that read it
 */
export function readStylesheet(css)
{
    const root = postcss.parse(css);
    const classes = new Map();
    const variables = new Map();
    const reads = new Map();

    const classNamed = name => classes.get(name) ?? classes.set(name, { name, rules: [], named: [] }).get(name);

    root.walkRules(rule =>
    {
        const layer = rule.parent?.type === 'atrule' && rule.parent.name === 'layer' ? rule.parent.params : null;
        const declarations = rule.nodes.filter(node => node.type === 'decl');
        const selectors = rule.selectors;
        const used = [...new Set(declarations.flatMap(declaration => [...declaration.value.matchAll(/var\((--rl-[\w-]+)/g)].map(match => match[1])))];

        for (const selector of selectors)
        {
            for (const match of selector.matchAll(/\.(rl-[\w-]+)/g)) classNamed(match[1]).named.push(selector);
            const name = subject(selector);
            if (!name) continue;
            classNamed(name).rules.push({
                selector,
                layer,
                declarations: declarations.filter(node => !node.prop.startsWith('--')).map(node => `${node.prop}: ${node.value}${node.important ? ' !important' : ''}`),
            });
            for (const variable of used) (reads.get(variable) ?? reads.set(variable, new Set()).get(variable)).add(name);
        }
    });

    root.walkDecls(declaration =>
    {
        if (!declaration.prop.startsWith('--rl-')) return;
        const entry = variables.get(declaration.prop) ?? variables.set(declaration.prop, { name: declaration.prop, value: null, dark: null }).get(declaration.prop);
        const split = lightDark(declaration.value);
        if (split) entry.dark = split.dark;
        else entry.value = declaration.value;
    });

    // A variable a rule reads with a fallback and no stylesheet defines, such as `--rl-padding-default`
    for (const [name] of reads)
    {
        if (!variables.has(name)) variables.set(name, { name, value: null, dark: null });
    }
    root.walkDecls(declaration =>
    {
        for (const match of declaration.value.matchAll(/var\((--rl-[\w-]+)\s*,\s*([^)]+)\)/g))
        {
            const entry = variables.get(match[1]);
            if (entry && entry.value === null) entry.fallback = match[2].trim();
        }
    });

    for (const entry of variables.values()) entry.readBy = [...(reads.get(entry.name) ?? [])];
    return { classes: [...classes.values()], variables: [...variables.values()] };
}

/** Escapes what would end a table cell. */
const cell = text => text.replace(/\|/g, '\\|');

/**
 * Writes the "what it sets" cell of a class: each rule, as in the stylesheet.
 * @param entry a class from readStylesheet()
 * @returns the cell's text
 */
function setsCell(entry)
{
    const rules = entry.rules.map(rule =>
    {
        const body = rule.declarations.join('; ');
        const text = rule.selector === `.${entry.name}` ? body : `${rule.selector} { ${body} }`;
        return `\`${cell(text)}\`${rule.layer ? ` in the \`${rule.layer}\` layer` : ''}`;
    });
    if (rules.length) return rules.join('<br>');
    return `named by ${[...new Set(entry.named)].map(selector => `\`${cell(selector)}\``).join(', ')}`;
}

/**
 * Writes the variables a class's rules read.
 * @param entry a class from readStylesheet()
 * @param variables the custom properties from readStylesheet()
 * @returns the cell's text
 */
function variablesCell(entry, variables)
{
    const names = variables.filter(variable => variable.readBy.includes(entry.name)).map(variable => `\`${variable.name}\``);
    return names.join(', ');
}

/**
 * Writes the Reference page.
 * @param css the text of relayout.css
 * @param relayoutVersion the version of Relayout, such as `0.8.0`
 * @returns the markdown of the page
 */
export function referencePage(css, relayoutVersion)
{
    const { classes, variables } = readStylesheet(css);
    const description = `Every class Relayout ${relayoutVersion} ships, what each sets and the variable it reads, and every custom property with its default, light and dark.`;
    const title = 'Relayout reference: every class and variable';
    const lines = [
        '---',
        'title: "Reference"',
        `description: "${description}"`,
        'head:',
        '  - tag: title',
        `    content: "${title}"`,
        '  - tag: meta',
        '    attrs:',
        '      property: og:title',
        `      content: "${title}"`,
        '---',
        '',
        `Every class and custom property of \`relayout.css\` ${relayoutVersion}, the version the previews on these pages run. This page is built from that file when the docs are built, so it lists what ships, and a class that isn't here doesn't exist.`,
        '',
        'A class is listed with the rules it sets, written as in the stylesheet, and the custom properties those rules read. A rule for a child, such as `rl-width-fill` in a row, shows its selector. The page linked under each heading says when to use its classes. The one element, [`rl-div`](/docs/web-components/), takes the same classes.',
        '',
        'A custom property set on `:root` changes the whole page, and one set on an element changes what is inside it.',
        '',
        `There are ${classes.length} classes and ${variables.length} custom properties.`,
        '',
    ];

    const assigned = new Map();
    const other = [];
    for (const entry of classes)
    {
        const section = SECTIONS.find(candidate => candidate.test.test(entry.name));
        if (section) (assigned.get(section) ?? assigned.set(section, []).get(section)).push(entry);
        else other.push(entry);
    }

    const table = entries =>
    {
        lines.push('| Class | What it sets | Variables |', '|---|---|---|');
        for (const entry of entries) lines.push(`| \`${entry.name}\` | ${setsCell(entry)} | ${variablesCell(entry, variables)} |`);
        lines.push('');
    };

    let group = null;
    for (const section of SECTIONS)
    {
        const entries = assigned.get(section);
        if (!entries) continue;
        if (section.group !== group)
        {
            group = section.group;
            lines.push(`## ${group}`, '');
        }
        lines.push(`### ${section.title}`, '', `See [${section.title}](${section.page}).`, '');
        table(entries);
    }
    if (other.length)
    {
        lines.push('## Other classes', '');
        table(other);
    }

    lines.push('## Custom properties', '');
    const grouped = new Map();
    for (const entry of variables)
    {
        const title = VARIABLE_GROUPS[/^--rl-([a-z0-9]+)-/.exec(entry.name)?.[1]] ?? OTHER_VARIABLES;
        (grouped.get(title) ?? grouped.set(title, []).get(title)).push(entry);
    }
    const order = [...Object.values(VARIABLE_GROUPS), OTHER_VARIABLES];
    for (const title of order)
    {
        const entries = grouped.get(title);
        if (!entries) continue;
        const themed = entries.some(entry => entry.dark !== null);
        lines.push(`### ${title}`, '');
        if (themed)
        {
            lines.push('| Variable | Light | Dark | Read by |', '|---|---|---|---|');
            for (const entry of entries) lines.push(`| \`${entry.name}\` | \`${cell(entry.value ?? '')}\` | \`${cell(entry.dark ?? entry.value ?? '')}\` | ${entry.readBy.map(name => `\`${name}\``).join(', ')} |`);
        }
        else
        {
            lines.push('| Variable | Default | Read by |', '|---|---|---|');
            for (const entry of entries)
            {
                const value = entry.value === null ? `not defined: the rule reads it with \`${cell(entry.fallback ?? 'no fallback')}\` as its fallback` : `\`${cell(entry.value)}\``;
                lines.push(`| \`${entry.name}\` | ${value} | ${entry.readBy.map(name => `\`${name}\``).join(', ')} |`);
            }
        }
        lines.push('');
    }
    return `${lines.join('\n')}\n`;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url))
{
    const installed = version();
    if (!installed)
    {
        console.error('@relayoutui/relayout is not installed in docs-site: run `npm install` first');
        process.exit(1);
    }
    const page = referencePage(readFileSync(stylesheet, 'utf8'), installed);
    writeFileSync(output, page);
    console.log(`[reference] Relayout ${installed}: ${page.split('\n').length} lines written to src/content/docs/reference.md`);
}
