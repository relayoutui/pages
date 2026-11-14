---
title: "Web components"
description: "Relayout also comes as web components: <rl-column>, <rl-row>, <rl-grid>, <rl-frame> and <rl-divider>, plus <rl-div> for a plain box. A utility is an attribute with the class's name."
---

Elements: `rl-column`, `rl-row`, `rl-grid`, `rl-frame`, `rl-divider`, `rl-div`

Each layout is also a web component, and a utility is an attribute with the class's name. `rl-gap-m` is a class in one form and an attribute in the other, and nothing else changes:

```html
<div class="rl-column rl-gap-m rl-border">...</div>
<rl-column rl-gap-m rl-border>...</rl-column>
```

The two forms mix freely. A web component can sit in a layout made of classes, and the other way round.

## Loading

The elements read their sizes from the css custom properties that `relayout.css` defines, so the css is loaded as in [Installation](/docs/install/), and the script beside it.

From the CDN, where `0.6.0` is the version to load. The bundled file includes everything it needs, [Lit](https://lit.dev) too, so there is no other script to add:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.6.0/dist/js/relayout.bundle.js"></script>
```

With `npm`, import the package once, anywhere in your code:

```js
import '@relayoutui/relayout';
```

The package depends on Lit, so npm installs it with the package, and your bundler includes one copy of Lit for your code and for Relayout.

Loading the script registers the six elements. A page can load it more than once, such as two versions of Relayout or two apps that each bring it: the elements stay as the first copy registered them, and the others add nothing.

## What each element takes

Every element takes the utilities of its layout as attributes. Some utilities are for a container, and a plain box has no children to arrange, which is why `rl-div` takes fewer.

- `rl-column`: [`rl-gap-*`](/docs/utilities/gap/), [`rl-align-*`](/docs/utilities/align/), [`rl-justify-*`](/docs/utilities/justify/), [`rl-padding-*`](/docs/utilities/padding/), [`rl-border`](/docs/extras/border/), [`rl-radius-*`](/docs/extras/radius/), [`rl-bg-*`, `rl-color-*` and `rl-gradient-*`](/docs/extras/palette/), [`rl-shadow-*`](/docs/extras/shadows/), [`rl-width-*` and `rl-center-self`](/docs/utilities/width/), and [`rl-height-full` and `rl-scroll`](/docs/utilities/height/)
- `rl-row`: the same, and [`rl-nowrap`, `rl-nowrap-scroll` and `rl-wrap-reverse`](/docs/utilities/wrapping/)
- `rl-grid`: the same as `rl-column`, and the `rl-grid-fit-*` and `rl-grid-fill-*` sizes of the [grid](/docs/layouts/grid/)
- `rl-frame`: the same as `rl-column`
- `rl-div`: `rl-padding-*`, `rl-border`, `rl-radius-*`, `rl-bg-*`, `rl-color-*`, `rl-gradient-*`, `rl-shadow-*`, `rl-width-*`, `rl-center-self`, `rl-height-full` and `rl-scroll`
- `rl-divider`: none. It is a line across an `rl-column` and down an `rl-row`, as the [divider](/docs/extras/divider/) is

The [font and text classes](/docs/extras/fonts/) have no attribute form: put them as classes on the element, or on one inside it.

`rl-width-fill` and `rl-height-fill` go on the child, as they do with classes: on any element inside an `rl-column` or an `rl-row`, a plain `div` or an `rl-div`.

## `rl-div`

`rl-div` is the Relayout flavor of the HTML `div`: a plain block with no layout of its own. It exists for the utilities. On a web component they are styles of the element itself, so `rl-padding-m` or `rl-border` needed one of the layouts, and a padded box with a single child had to be a column around it.

```html preview
<rl-column rl-gap-m>
    <rl-div rl-padding-m rl-border rl-radius-m>A padded box, with no layout of its own</rl-div>
    <rl-div rl-padding-m rl-border rl-radius-m rl-width-s rl-center-self>Limited to a width, and centered</rl-div>
</rl-column>
```

It has no class form, because a `div` is already a block and the classes go on any element.

## Fill and scroll

An element that takes the space the others leave is marked on itself, whether it is a web component or a plain `div`:

```html preview
<rl-row rl-gap-m rl-padding-m rl-border rl-radius-m>
    <div>Logo</div>
    <rl-div rl-width-fill>Takes the width the logo leaves</rl-div>
    <div>Profile</div>
</rl-row>
```

```html preview
<rl-column rl-border rl-radius-m style="height: 10em;">
    <rl-div rl-padding-m>Header</rl-div>
    <rl-div rl-padding-m rl-height-fill rl-scroll>
        Takes the height the header leaves, and scrolls when its content is taller. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </rl-div>
</rl-column>
```

## A divider

The divider follows its layout: a vertical line down an `rl-row`, and a horizontal line across an `rl-column`. It has to be a direct child, and in an element layout it is the `<rl-divider>` element.

```html preview
<rl-row rl-gap-m style="height: 3em;">
    <div>Navigation</div>
    <rl-divider></rl-divider>
    <div rl-width-fill>Content</div>
</rl-row>
```

## When the element matters, use the classes

A web component is an element of its own, so it can't be an `<article>`, a `<nav>`, a `<ul>` or a `<form>`. When the HTML element carries the meaning, put the classes on it:

```html
<article class="rl-column rl-gap-m rl-padding-l rl-border">
    <h2>Title</h2>
    <p>Text</p>
</article>
```

## Versions

Changes between versions, such as the arrival of `rl-div`, are in the [changelog](/docs/changelog/).
