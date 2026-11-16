// Checks the stamp in the header of the built docs, the version and revision after the "Docs" label: on every page it
// names the installed version of Relayout, which is what the previews run, and the same revision as on the others. In
// CI the revision is required: a build without the history (a checkout that is not fetch-depth: 0) would put a docs
// header on pre that no longer says which merge it shows.
//
// Usage: node scripts/check-build-info.mjs   after `npm run build`; lists the problems and exits 1 if there are any

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

/** The pages of a built folder: every index.html in it, at any depth. */
async function pagesIn(folder)
{
    const found = [];
    for (const entry of await fs.readdir(folder, { withFileTypes: true }))
    {
        const full = path.join(folder, entry.name);
        if (entry.isDirectory()) found.push(...await pagesIn(full));
        else if (entry.name === 'index.html') found.push(full);
    }
    return found;
}

let installed;
try
{
    installed = JSON.parse(await fs.readFile(path.join(root, 'node_modules', '@relayoutui', 'relayout', 'package.json'), 'utf8')).version;
}
catch
{
    console.error('@relayoutui/relayout is not installed: run `npm install` first');
    process.exit(1);
}

let pages;
try
{
    pages = await pagesIn(dist);
}
catch
{
    console.error('dist/ is missing: run `npm run build` first');
    process.exit(1);
}

// One line for each cause, with the pages it is on, so a build with no history is one line and not one for each page
const causes = new Map();
const report = (cause, page) => causes.set(cause, [...(causes.get(cause) ?? []), page]);
const seen = new Set();
for (const page of pages)
{
    const name = path.relative(root, page);
    const html = await fs.readFile(page, 'utf8');
    const stamp = /<span class="stamp[^"]*" title="[^"]*">([^<]*)(?:<span class="rev[^"]*">([^<]*)<\/span>)?<\/span>/.exec(html);
    if (!stamp)
    {
        report('the header has no version stamp', name);
        continue;
    }
    const [, version, rev = ''] = stamp;
    if (version !== `v${installed}`) report(`the stamp says ${version}, and the installed Relayout is v${installed}`, name);
    if (rev && !/^-r\d{4}\.\d+$/.test(rev)) report(`the revision "${rev}" is not -r<mmdd>.<n>`, name);
    if (!rev && process.env.CI) report('the stamp has no revision (the checkout needs the whole history)', name);
    seen.add(`${version}${rev}`);
}
const problems = [...causes].map(([cause, names]) => `${cause}: ${names.length === 1 ? names[0] : `${names.length} pages, such as ${names[0]}`}`);
if (seen.size > 1) problems.push(`the pages carry different stamps: ${[...seen].join(', ')}`);

if (problems.length)
{
    console.error(problems.join('\n'));
    process.exit(1);
}
console.log(`The header's stamp is ${[...seen][0]} on all ${pages.length} pages`);
