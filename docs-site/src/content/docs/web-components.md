---
title: "Web components"
description: "<rl-div> takes Relayout's classes inside another component's shadow root, where the page's CSS doesn't reach. In the page, a plain div does the same."
head:
  - tag: title
    content: "Relayout in a shadow root: the rl-div element"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout in a shadow root: the rl-div element"
---

Element: `rl-div`

A web component with a shadow root keeps the page's CSS out of it, `relayout.css` included. A `<div class="rl-row rl-gap-m">` there is a plain block, with no row and no gap. `<rl-div>` carries the rules of Relayout's classes with it, so inside a shadow root it takes the same classes, through the same `class` attribute:

```html
<rl-div class="rl-row rl-gap-m rl-padding-m rl-border">...</rl-div>
```

The rule:

- **In the page**, use a plain `div`, or the HTML element that carries the meaning, with the classes.
- **Inside a shadow root**, use `rl-div` for every element that carries an `rl-` class, not only for the layouts. A plain `div` there gets none of the page's CSS.

`rl-div` takes every class of Relayout: the layouts, the utilities, and the extras, the font and text classes too. A class does the same on a `div` in the page and on an `rl-div` in a shadow root. `rl-div` also works in the page, where it is never wrong, only not needed.

## Loading

The element reads its sizes and colors from the CSS custom properties that `relayout.css` defines, and they reach a shadow root from the page. So load the CSS in the page as in [Installation](/docs/install/), and the script beside it.

From the CDN, where `0.8.1` is the version to load. The bundled file includes everything it needs, [Lit](https://lit.dev) too, so there is no other script to add:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@relayoutui/relayout@0.8.1/dist/js/relayout.bundle.js"></script>
```

With `npm`, import the package once, anywhere in your code:

```js
import '@relayoutui/relayout';
```

The package depends on Lit, so npm installs it with the package, and your bundler includes one copy of Lit for your code and for Relayout.

Loading the script registers `rl-div`. A page can load it more than once, such as two versions of Relayout or two apps that each bring it: the element stays as the first copy registered it, and the others add nothing. React and Vue need a setting and a type import: see [Frameworks](/docs/frameworks/).

In the page, `relayout.css` styles the classes on `rl-div` as on any element, and makes a plain `rl-div` a block, so the page has its layout before the script runs, and nothing moves when it does. Inside a shadow root, the classes take effect once the script has run.

## In a component

The component's own markup goes in its shadow root, with `rl-div` where it needs a class:

```js
class ProfileCard extends HTMLElement
{
    connectedCallback()
    {
        this.attachShadow({ mode: 'open' }).innerHTML = `
            <rl-div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
                <img src="avatar.png" alt="" width="48" height="48">
                <rl-div class="rl-column rl-gap-xs rl-width-fill">
                    <strong>Ada Lovelace</strong>
                    <rl-div class="rl-text-s rl-color-muted">Analyst</rl-div>
                </rl-div>
            </rl-div>`;
    }
}
customElements.define('profile-card', ProfileCard);
```

What a layout sets on its children, such as [`rl-width-fill`](/docs/utilities/height/) in a row or the [divider](/docs/extras/divider/)'s direction, reaches every child of the `rl-div`. A child's own classes need it to be an `rl-div` too: in the example, the middle column is one, so it is both a column and the part of the row that fills. An element that can't be an `rl-div`, such as an `img` or an `input`, gets what its layout sets on it, and not the rules of its own classes, such as `box-sizing: border-box`.

`hidden` hides an `rl-div`, as it hides any element, and an image inside one with `rl-frame`, and `hidden="until-found"` leaves the page's find to reach it.

## When the element matters

A web component is an element of its own, so `rl-div` can't be an `<article>`, a `<nav>`, a `<ul>` or a `<form>`. In the page, put the classes on the HTML element that carries the meaning:

```html
<article class="rl-column rl-gap-m rl-padding-l rl-border">
    <h2>Title</h2>
    <p>Text</p>
</article>
```

Inside a shadow root, keep the HTML element, and put an `rl-div` with the classes inside it:

```html
<nav>
    <rl-div class="rl-row rl-gap-m">
        <a href="/">Home</a>
        <a href="/docs/">Docs</a>
    </rl-div>
</nav>
```

## Versions

Until 0.8.0 there were six elements, with a utility as an attribute: `<rl-row rl-gap-m>`. The [changelog](/docs/changelog/) says what to write instead.
