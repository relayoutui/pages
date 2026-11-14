---
title: "Changelog"
description: "Changes between Relayout versions that affect markup written for an earlier version."
---

Relayout is before 1.0, so a release can rename classes. This page lists the changes that affect markup written for an earlier version.

## 0.6.0

- The script that loads the web components from the CDN is `relayout.bundle.js`. `relayout.js` imports Lit, which a page with no bundler can't resolve, so a page that loads it from the CDN has to load the bundle. With `npm`, nothing changes in your code: Lit is now a dependency of the package, so npm installs it and your bundler includes one copy for your code and for Relayout. See [Web components](/docs/web-components/#loading).
- The children of `rl-frame` no longer scroll on their own: they stay inside the frame, and a child that should scroll takes `rl-scroll`, as in the other layouts. A scrolling box clips shadows and focus rings, so a frame that centers a card or a button no longer cuts them off. A frame whose child relied on the scrolling needs `rl-scroll` on that child. See [Frame](/docs/layouts/frame/).
- A page that loads the script twice, such as two versions of Relayout or two apps that each bring it, no longer throws: the elements stay as the first copy registered them.

## 0.4.0

- `rl-div` is new: a plain block with no layout of its own, for a box that needs padding, a border or a width. See [Web components](/docs/web-components/).
- The `rl-column`, `rl-row`, `rl-grid` and `rl-frame` elements are `border-box`, as the classes always were. Before 0.4.0 they were `content-box`, so `rl-padding-*` or `rl-border` added to their `rl-width-*` pushed them past their parent.

## 0.3.0

- `rl-width-*` only limits the width, and `rl-center-self` centers. Before 0.3.0, `rl-width-*` also centered, and `rl-center-self` didn't exist. Markup with both classes lays out the same on either version.
