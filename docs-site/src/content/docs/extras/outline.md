---
title: "Outline"
description: "Relayout leaves the browser's focus ring on what a keyboard can reach, and rl-outline-none takes a ring off on purpose."
---

Class: `rl-outline-none`

The focus ring is the outline a browser draws around what has the keyboard, so a user who tabs through a page can see where they are. Relayout leaves it where the keyboard can stop, and gives you one class to take it off.

## What keeps its ring

An element with an `rl-` class keeps the browser's focus ring when the keyboard can stop on it:

- a link, a button, an `input`, a `select`, a `textarea` and a `summary`
- an element with `tabindex` (any value) or `contenteditable`
- a box that scrolls, with `rl-scroll` or `rl-nowrap-scroll`, which Chrome lets the keyboard reach so the arrow keys scroll it

So `<input class="rl-width-fill">` shows where the keyboard is, and so does `<div class="rl-column rl-scroll">`. The same holds for the elements: `<rl-column rl-scroll>` shows its ring, as the class does. A layout container the keyboard can't stop on has no outline.

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

`rl-outline-none` is an attribute of `<rl-column>`, `<rl-row>`, `<rl-grid>`, `<rl-frame>` and `<rl-div>`: `<rl-column rl-scroll rl-outline-none>`.
