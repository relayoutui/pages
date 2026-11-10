---
title: "Installation"
description: "You can load Relayout from a CDN, as a local CSS file in your project, or with npm and a tool such as Sass that embeds Relayout in your own CSS."
---

You can load Relayout from a CDN, as a local CSS file in your project, or with `npm` and a tool such as Sass that embeds Relayout in your own CSS.

Relayout is before 1.0, so a release can rename classes. Each example below names a version: use the one your project was written for, and move to a newer one on purpose. The [changelog](/docs/changelog/) lists the changes.

## CDN installation

Add the following code to your page in the `<head>` section, where `0.4.0` is the version to load.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.4.0/dist/css/relayout.css" />
```

## Local installation

Download the CSS file from the CDN, `https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.4.0/dist/css/relayout.css`, and link it in your project. Include it in the build.

```
<link rel="stylesheet" href="assets/vendors/relayout-0.4.0/relayout.css" />
```

## npm installation

To embed Relayout in your own CSS, use npm.

If your project does not have a `package.json` file, you can create one using `npm init`.

Install Relayout as a dev dependency.

```
npm install @relayoutui/relayout --save-dev
```

Create the file which will import Relayout (e.g. `scss/app.scss`):

```
@use "@relayoutui/relayout/dist/css/relayout";

// ...rest of CSS code
```

The package ships its compiled CSS in `dist/css/relayout.css`, which Sass loads from `node_modules`, as in the command below.

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
  "dependencies": {
    "@relayoutui/relayout": "^0.4.0",
    "sass": "^1.93.3"
  }
}
```

Now you can run `npm run build-css`.

## Web components

The elements `<rl-column>`, `<rl-row>` and the others load from a script, beside the CSS above. See [Web components](/docs/web-components/).
