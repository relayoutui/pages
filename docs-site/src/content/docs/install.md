---
title: "Installation"
description: "Install Relayout from a CDN, as a local CSS file, or with npm and Sass, which embeds it in your own CSS. rl-div loads from a script beside the CSS."
head:
  - tag: title
    content: "Install Relayout from a CDN, as a local file or with npm"
  - tag: meta
    attrs:
      property: og:title
      content: "Install Relayout from a CDN, as a local file or with npm"
---

You can load Relayout from a CDN, as a local CSS file in your project, or with `npm` and a tool such as Sass that embeds Relayout in your own CSS.

Relayout is before 1.0, so a release can rename classes. Each example below names a version: use the one your project was written for, and move to a newer one on purpose. The [changelog](/docs/changelog/) lists the changes.

## Browsers

Relayout supports the current versions of Chrome, Edge, Firefox and Safari. Its tests run in Chrome, Firefox and WebKit, the engine of Safari, on every change.

## CDN installation

Add the following code to your page in the `<head>` section, where `0.8.0` is the version to load.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.8.0/dist/css/relayout.css" />
```

## Local installation

Download the CSS file from the CDN, `https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.8.0/dist/css/relayout.css`, and link it in your project. Include it in the build.

```
<link rel="stylesheet" href="assets/vendors/relayout-0.8.0/relayout.css" />
```

## Web components

[`rl-div`](/docs/web-components/), the element for markup inside a shadow root, is a script that you load beside the CSS. From the CDN, `relayout.bundle.js` is one file with everything it needs, [Lit](https://lit.dev) included. With npm, the package depends on Lit and npm installs it with the package, so your bundler includes one copy of Lit for your code and for Relayout. [Web components](/docs/web-components/#loading) has the code to load it.

## npm installation

To embed Relayout in your own CSS, or to import it from your code, use npm.

If your project does not have a `package.json` file, you can create one using `npm init`.

Embedding the CSS with Sass needs Relayout only when you build, so install it as a dev dependency.

```
npm install @relayoutui/relayout --save-dev
```

A project that imports [`rl-div`](/docs/web-components/), whose script runs in the browser, installs it as a dependency instead: `npm install @relayoutui/relayout`.

Create the file which will import Relayout (e.g. `scss/app.scss`):

```
@use "@relayoutui/relayout/dist/css/relayout";

// ...rest of CSS code
```

The package ships its compiled CSS in `dist/css/relayout.css`, which Sass loads from `node_modules`, as in the command below.

### With a bundler

A bundler such as Vite or webpack can load the CSS from your code. The package exports it as `@relayoutui/relayout/relayout.css`:

```js
import '@relayoutui/relayout/relayout.css';
```

Import `rl-div` the same way, once, anywhere in your code:

```js
import '@relayoutui/relayout';
```

### Using `sass` to build CSS

Install `sass` as a dev dependency.

```
npm install sass --save-dev
```

Run the following command to build your `app.css`. `npx` runs the `sass` you installed in `node_modules`, and `--load-path=node_modules` instructs Sass to search `node_modules` for Relayout.

```
npx sass --load-path=node_modules scss/app.scss assets/css/app.css
```

Add a `build-css` script to your `package.json` to build your SCSS into CSS:

```
{
  "name": "myapp",
  "scripts": {
    "build-css": "sass --load-path=node_modules scss/app.scss assets/css/app.css"
  },
  "devDependencies": {
    "@relayoutui/relayout": "^0.8.0",
    "sass": "^1.93.3"
  }
}
```

Now you can run `npm run build-css`.

## Existing projects

Relayout loads beside Bootstrap, Tailwind or your own CSS. See [Using Relayout in an existing project](/docs/existing-projects/).
