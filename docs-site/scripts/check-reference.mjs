// Checks the built Reference page against the stylesheet it is built from: every class and every custom property of the
// installed @relayoutui/relayout has a row in its first column. The page is made by scripts/build-reference.mjs, which
// reads the stylesheet with a CSS parser; this reads it again with a plain pattern and the built page with another, so a
// class the generator skipped, or a row that didn't render, is found.
//
// Usage: node scripts/check-reference.mjs   in docs-site, after `npm run build`; lists what is missing and exits 1 if any

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stylesheet = path.join(root, 'node_modules', '@relayoutui', 'relayout', 'dist', 'css', 'relayout.css');
const built = path.join(root, 'dist', 'reference', 'index.html');

let css;
let html;
try
{
    css = (await fs.readFile(stylesheet, 'utf8')).replace(/\/\*[\s\S]*?\*\//g, '');
}
catch
{
    console.error('@relayoutui/relayout is not installed in docs-site: run `npm install` first');
    process.exit(1);
}
try
{
    html = await fs.readFile(built, 'utf8');
}
catch
{
    console.error('dist/reference/index.html is missing: run `npm run build` first (it writes the page from the stylesheet)');
    process.exit(1);
}

const classes = [...new Set([...css.matchAll(/\.(rl-[a-z0-9-]+)/g)].map(match => match[1]))];
const variables = [...new Set([...css.matchAll(/--rl-[a-z0-9-]+/g)].map(match => match[0]))];

/** Whether the page has a table row that starts with the name in code. */
const hasRow = name => new RegExp(`<td[^>]*>\\s*<code[^>]*>${name}</code>\\s*</td>`).test(html);

const missing = [...classes, ...variables].filter(name => !hasRow(name));

const problems = [];
if (missing.length) problems.push(`${missing.length} of ${classes.length + variables.length} classes and variables have no row on the Reference page: ${missing.join(', ')}`);

const counted = /There are (\d+) classes and (\d+) custom properties/.exec(html);
if (!counted || Number(counted[1]) !== classes.length || Number(counted[2]) !== variables.length)
{
    problems.push(`the page says ${counted ? `${counted[1]} classes and ${counted[2]} custom properties` : 'nothing about how many there are'}, and the stylesheet has ${classes.length} and ${variables.length}`);
}

if (problems.length)
{
    console.error(`${problems.length} problems with the Reference page:\n  ${problems.join('\n  ')}`);
    process.exit(1);
}
console.log(`ok    the Reference page has a row for each of the ${classes.length} classes and ${variables.length} custom properties of the stylesheet`);
