---
title: "Installation"
description: "You can load Relayout from a CDN, as a local css file in your project, or with npm and a tool such as Sass that embeds Relayout in your own css."
---

You can load Relayout from a CDN, as a local css file in your project, or with `npm` and a tool such as Sass that embeds Relayout in your own css.

Relayout is before 1.0, so a release can rename classes. Each example below names a version: use the one your project was written for, and move to a newer one on purpose.

## CDN Installation

Add the following code to your page in the `<head>` section, where `0.2.0` is the version to load.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.2.0/dist/css/relayout.css" />
```

## Local Installation

Download the Relayout version from the CDN to a local css file, `https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.2.0/dist/css/relayout.css`, which you link in your project. Include this css file in the build.

```
<link rel="stylesheet" href="assets/vendors/relayout-0.2.0/relayout.css" />
```

## NPM Installation

If you would like to embed Relayout css in your css, you can use npm.

If your project does not have a `package.json` file, you can create one using `npm init`.

Install Relayout css library as a dev dependency.

```
npm install @relayoutui/relayout --save-dev
```

Create the file which will import Relayout (eg. `scss/app.scss`):

```
@use "@relayoutui/relayout/dist/css/relayout";

// ...rest of css code
```

The package ships its compiled css in `dist/css/relayout.css`, which Sass loads from `node_modules`, as in the command below.

### Using `sass` to build css

Install `sass` as a dev dependency.

```
npm install sass --save-dev
```

Run the following command to build your `app.css`. `npx` runs the `sass` you installed in `node_modules`, and `--load-path=node_modules` instructs Sass to search `node_modules` for Relayout.

```
npx sass --load-path=node_modules scss/app.scss assets/css/app.css
```

You can update `package.json` file and add a `build-css` script to build your scss into css:

```
{
  "name": "myapp",
  "scripts": {
    "build-css": "sass --load-path=node_modules scss/app.scss assets/css/app.css"
  },
  "dependencies": {
    "@relayoutui/relayout": "^0.2.0",
    "sass": "^1.93.3"
  }
}
```

Now you can run `npm run build-css`.
