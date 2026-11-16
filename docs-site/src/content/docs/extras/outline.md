---
title: "Outline"
description: "Relayout leaves the browser's focus ring on what a keyboard can reach, a box that scrolls included, and rl-outline-none takes it off where a page draws its own."
head:
  - tag: title
    content: "Relayout outline: keep the focus ring, or take it off"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout outline: keep the focus ring, or take it off"
---

Class: `rl-outline-none`

The focus ring is the outline a browser draws around what has the keyboard, so a user who tabs through a page can see where they are. Relayout leaves it alone, and gives you one class to take it off.

## What keeps its ring

Relayout never touches the outline. An element keeps the focus ring its browser gives it, with an `rl-` class or without: a link, a button, a field, a `summary`, an element with `tabindex` or `contenteditable`, a video with controls, and a box that scrolls where the browser lets the keyboard reach it, so the arrow keys scroll it (Chrome and Firefox do, Safari doesn't). A page's own `outline` stays too.

So `<input class="rl-width-fill">` shows where the keyboard is, and so does `<div class="rl-column rl-scroll">`. The same holds for `rl-div`: `<rl-div class="rl-column rl-scroll">` shows its ring, as the `div` does. An element the keyboard can't reach never draws a ring.

An element with an `rl-` class gets `box-sizing: border-box`, and nothing else from the base rule.

## Taking a ring off

### `rl-outline-none`

Apply class `rl-outline-none` to an element to take its focus ring off.

The ring is the only sign of where the keyboard is, so use this where the page draws its own: a border, a background or a shadow that changes on `:focus-visible`.

```html
<style>
    .field:focus-visible { box-shadow: 0 0 0 3px var(--rl-color-primary); }
</style>

<input class="field rl-width-fill rl-outline-none" placeholder="Search" />
```

Without a sign of its own, an element with `rl-outline-none` can't be seen when a keyboard user reaches it.

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-outline-none` goes on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-column rl-scroll rl-outline-none">...</rl-div>
```
