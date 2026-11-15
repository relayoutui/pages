// Checks that the site names one Relayout version everywhere: the version the previews run, which is the one
// installed from package.json, against the version the dependency asks for, each version a docs page writes in an
// example, and the home page's copy of the CSS. A page that is left on an older version shows its readers code for
// a version the previews don't run.
//
// The changelog is left out: it names the versions that changed things, and says so with "Before 0.7.0".
//
// Usage: node scripts/check-relayout-version.mjs   in docs-site, after `npm install`; lists each mismatch with its
// file and line, and exits 1 if there are any

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '..');
const pages = path.join(root, 'src', 'content', 'docs');
const installed = path.join(root, 'node_modules', '@relayoutui', 'relayout');
const homeCopy = path.join(repo, 'www', 'assets', 'css', 'relayout.css');
const homePage = path.join(repo, 'www', 'index.html');

/**
 * How an example names a version: a CDN address, a folder of a downloaded copy, an npm dependency, and the sentence
 * that says which part of an example is the version.
 */
const PINS = [
    /@relayoutui\/relayout@(\d+\.\d+\.\d+)/g,
    /\brelayout-(\d+\.\d+\.\d+)\b/g,
    /"@relayoutui\/relayout":\s*"[\^~]?(\d+\.\d+\.\d+)"/g,
    /`(\d+\.\d+\.\d+)` is the version/g,
];

/**
 * Lists the pages of a folder, at any depth.
 * @param folder the folder to list
 * @returns the paths of its markdown files
 */
async function pagesIn(folder)
{
    const found = [];
    for (const entry of await fs.readdir(folder, { withFileTypes: true }))
    {
        const full = path.join(folder, entry.name);
        if (entry.isDirectory()) found.push(...await pagesIn(full));
        else if (/\.mdx?$/.test(entry.name)) found.push(full);
    }
    return found;
}

/**
 * Finds the versions a file writes in its examples.
 * @param file the file to read
 * @returns each version with the line it is on, 1-based
 */
async function pinsIn(file)
{
    const found = [];
    const lines = (await fs.readFile(file, 'utf8')).split('\n');
    lines.forEach((text, index) =>
    {
        for (const pattern of PINS)
        {
            for (const match of text.matchAll(pattern)) found.push({ version: match[1], line: index + 1 });
        }
    });
    return found;
}

let installedPackage;
try
{
    installedPackage = JSON.parse(await fs.readFile(path.join(installed, 'package.json'), 'utf8'));
}
catch
{
    console.error('@relayoutui/relayout is not installed in docs-site: run `npm install` first');
    process.exit(1);
}
const version = installedPackage.version;

let ownPackage;
try
{
    ownPackage = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
}
catch (error)
{
    console.error(`docs-site/package.json can't be read: ${error.message}`);
    process.exit(1);
}
const dependency = ownPackage.dependencies?.['@relayoutui/relayout'];
if (!dependency)
{
    console.error('docs-site/package.json has no dependency on @relayoutui/relayout');
    process.exit(1);
}

const problems = [];
const shown = file => path.relative(repo, file).split(path.sep).join('/');

const asked = /\d+\.\d+\.\d+/.exec(dependency)?.[0];
if (asked !== version) problems.push(`docs-site/package.json asks for @relayoutui/relayout ${dependency}, and ${version} is installed: run \`npm install\``);

const files = (await pagesIn(pages)).filter(file => path.basename(file) !== 'changelog.md');
let pinned = 0;
for (const file of [...files, homePage])
{
    for (const { version: written, line } of await pinsIn(file))
    {
        pinned += 1;
        if (written !== version) problems.push(`${shown(file)}:${line} names ${written}, and the previews run ${version}`);
    }
}

const copy = await fs.readFile(homeCopy, 'utf8');
const copied = /Relayout v(\d+\.\d+\.\d+)/.exec(copy.slice(0, 300))?.[1];
if (copied !== version)
{
    problems.push(`${shown(homeCopy)} is Relayout ${copied ?? 'of no version'}, and the previews run ${version}: copy node_modules/@relayoutui/relayout/dist/css/relayout.css over it`);
}
else if (copy !== await fs.readFile(path.join(installed, 'dist', 'css', 'relayout.css'), 'utf8'))
{
    problems.push(`${shown(homeCopy)} says ${version} and differs from the package's relayout.css: copy node_modules/@relayoutui/relayout/dist/css/relayout.css over it`);
}

if (problems.length)
{
    console.error(`${problems.length} problems with the Relayout version:\n  ${problems.join('\n  ')}`);
    process.exit(1);
}
console.log(`ok    the previews, the dependency, ${pinned} versions in examples and the home page's CSS are all Relayout ${version}`);
