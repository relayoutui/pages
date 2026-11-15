---
title: "Changelog"
description: "Changes between Relayout versions that affect markup written for an earlier version: renamed classes, removed attributes and changed behavior."
head:
  - tag: title
    content: "Relayout changelog: changes that affect your markup"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout changelog: changes that affect your markup"
---

Relayout is before 1.0, so a release can rename classes. This page lists the changes that affect markup written for an earlier version.

## 0.6.0

- The script that loads the web components from the CDN is `relayout.bundle.js`. `relayout.js` imports Lit, which a page with no bundler can't resolve, so a page that loads it from the CDN has to load the bundle. With `npm`, nothing changes in your code: Lit is now a dependency of the package, so npm installs it and your bundler includes one copy for your code and for Relayout. See [Web components](/docs/web-components/#loading).
- The children of `rl-frame` no longer scroll on their own: they stay inside the frame, and a child that should scroll takes `rl-scroll`, as in the other layouts. A scrolling box clips shadows and focus rings, so a frame that centers a card or a button no longer cuts them off. A frame whose child relied on the scrolling needs `rl-scroll` on that child. See [Frame](/docs/layouts/frame/).
- `rl-divider` takes its direction from the layout it is in: a horizontal line in an `rl-column`, a vertical line in an `rl-row`, and a horizontal line anywhere else. The `vertical` class and attribute are gone, and do nothing. Where you wrote `<div class="rl-divider vertical">` in a row, write `<div class="rl-divider">`, and the same for `<rl-divider vertical>`. A divider has to be a direct child of the row, as fill has to be, so a horizontal line between the items of a row needs a column around them. See [Divider](/docs/extras/divider/).
- `rl-color-text-muted` is `rl-color-muted`, as a class and as an attribute of the elements, and the variable `--rl-color-text-muted` is `--rl-color-muted`, so every color class is `rl-color-` and the name of its variable. The values are the same in the light and the dark theme. The old names do nothing, so replace them, and a stylesheet that overrides the variable overrides the new one. See [Palette](/docs/extras/palette/).
- `rl-text-muted` is gone. It set the whole element to half its opacity, which in the light theme gives the default text 3.3:1 contrast on the default surface, below the 4.5:1 normal text needs. Use `rl-color-muted`, which gives 4.7:1.
- An element with an `rl-` class keeps its focus ring where the keyboard can stop. Before 0.6.0 every element with an `rl-` class had `outline: none`, so `<input class="rl-width-fill">`, `<a class="rl-padding-m">` and `<button class="rl-row">` showed no focus ring when a keyboard user tabbed to them, and a box that scrolled with `rl-scroll` showed none either, though the same box as an element did. Now a link, button, `input`, `select`, `textarea`, `summary`, an element with `tabindex` or `contenteditable`, and a box that scrolls with `rl-scroll` or `rl-nowrap-scroll` keep the browser's focus ring, as classes and as elements, and a layout container the keyboard can't stop on has none. `box-sizing: border-box` is unchanged. See [Outline](/docs/extras/outline/).
- `rl-outline-none` is new: a class, and an attribute of the elements, that takes the focus ring off. A page that relied on the missing ring puts it on the element, and draws its own sign of where the keyboard is. See [Outline](/docs/extras/outline/).
- A page that loads the script twice, such as two versions of Relayout or two apps that each bring it, no longer throws: the elements stay as the first copy registered them.

## 0.5.0

- The base rule, which gives every element with an `rl-` class `box-sizing: border-box`, matches only class names that start with `rl-`. Before 0.5.0 it matched any class that contained `rl-`, so an element with a class such as `girl-card` or `pearl-button` got `box-sizing: border-box` and lost its focus outline too. An element that relied on that sets `box-sizing: border-box` itself.

## 0.4.0

- `rl-div` is new: a plain block with no layout of its own, for a box that needs padding, a border or a width. See [Web components](/docs/web-components/).
- The `rl-column`, `rl-row`, `rl-grid` and `rl-frame` elements are `border-box`, as the classes always were. Before 0.4.0 they were `content-box`, so `rl-padding-*` or `rl-border` added to their `rl-width-*` pushed them past their parent.

## 0.3.0

- `rl-width-*` only limits the width, and `rl-center-self` centers. Before 0.3.0, `rl-width-*` also centered, and `rl-center-self` didn't exist. Markup with both classes lays out the same on either version.
