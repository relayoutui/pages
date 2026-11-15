// Checks what search results show for each page of the site: a title of at most 60 characters and a description
// of 120 to 160, the lengths a search result shows in full. It reads the built pages, so it checks what Starlight
// made of the frontmatter: the docs in dist/, and the home page in ../www.
//
// Usage: node scripts/check-page-meta.mjs   after `npm run build`; lists the problems and exits 1 if there are any

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_TITLE = 60;
const MIN_DESCRIPTION = 120;
const MAX_DESCRIPTION = 160;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const home = path.join(root, '..', 'www', 'index.html');

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&#x27;': "'" };

function decode(text)
{
    return text.replace(/&(?:amp|lt|gt|quot|#39|#x27);/g, entity => ENTITIES[entity]);
}

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

function metaOf(html)
{
    const title = /<title>([^<]*)<\/title>/.exec(html)?.[1];
    const description = /<meta name="description" content="([^"]*)"/.exec(html)?.[1];
    const ogTitle = /<meta property="og:title" content="([^"]*)"/.exec(html)?.[1];
    return {
        title: title === undefined ? undefined : decode(title),
        description: description === undefined ? undefined : decode(description),
        ogTitle: ogTitle === undefined ? undefined : decode(ogTitle),
    };
}

try
{
    await fs.access(path.join(dist, 'index.html'));
}
catch
{
    console.error('dist/index.html is missing: run `npm run build` first');
    process.exit(1);
}

const files = [...await pagesIn(dist), home];
const problems = [];
for (const file of files)
{
    const name = file === home ? 'home page' : '/' + path.relative(dist, path.dirname(file)).split(path.sep).join('/');
    const { title, description, ogTitle } = metaOf(await fs.readFile(file, 'utf8'));
    if (!title) problems.push(`${name}: no title`);
    else if (title.length > MAX_TITLE) problems.push(`${name}: title is ${title.length} characters, over ${MAX_TITLE}: ${title}`);
    if (!description) problems.push(`${name}: no description`);
    else if (description.length < MIN_DESCRIPTION || description.length > MAX_DESCRIPTION)
    {
        problems.push(`${name}: description is ${description.length} characters, outside ${MIN_DESCRIPTION}-${MAX_DESCRIPTION}: ${description}`);
    }
    if (title && ogTitle !== title && file !== home)
    {
        // A docs page says the same in both: the head frontmatter sets the two
        problems.push(`${name}: og:title is "${ogTitle}", not the title "${title}": set both in the head frontmatter`);
    }
}

if (problems.length)
{
    console.error(`${problems.length} problems with page titles and descriptions:\n  ${problems.join('\n  ')}`);
    process.exit(1);
}
console.log(`ok    ${files.length} pages have a title of at most ${MAX_TITLE} characters and a description of ${MIN_DESCRIPTION}-${MAX_DESCRIPTION}`);
