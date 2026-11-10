---
title: "Rethink the layout"
description: "Relayout takes the simple parts of flexbox and grid and applies them in a simple, repeatable, predictable way: four layouts, utilities for the rest, no media queries."
---

Relayout takes the simple parts of flexbox and grid and applies them in a simple, repeatable, predictable way. Four layouts place everything. Utilities set the rest. No media queries.

## The idea

Most of layout is positioning: what sits beside what, what sits under what, how far apart, what lines up. Flexbox and grid can do all of it, with dozens of properties and many ways to say the same thing. Relayout keeps the few that cover positioning and gives each one a fixed name and a fixed behavior.

## Four layouts

- **[Column](/docs/layouts/column/)** stacks items vertically.
- **[Row](/docs/layouts/row/)** places items side by side, and wraps them when they don't fit.
- **[Grid](/docs/layouts/grid/)** places items in equal cells, as many per line as the width allows.
- **[Frame](/docs/layouts/frame/)** centers its content in the space of its parent.

An element takes one layout. You build the complex ones by nesting: a page is a column, its header is a row, its cards are a grid, and each card is a column. [Composition](/docs/composition/) builds up from one layout to a full page, and ends with [recipes](/docs/composition/#recipes) for the common ones.

## Utilities

A layout sets the direction. Utilities set the rest: [gap](/docs/utilities/gap/), [align](/docs/utilities/align/) and [justify](/docs/utilities/justify/), [padding](/docs/utilities/padding/), [size](/docs/utilities/width/), [wrapping](/docs/utilities/wrapping/), and [fill and scroll](/docs/utilities/height/). Each utility has one job and one name. `rl-gap-m` is the same gap on every page.

Sizes come from a scale of named steps, `xs` to `2xl`. Gap, padding and radius share one spacing scale (which also has `0`), and width and grid cells each have their own. Every step is a CSS variable, so you change the scale once and every page follows.

## Extras

Extras add the fine touch: [border](/docs/extras/border/), [radius](/docs/extras/radius/), the [divider](/docs/extras/divider/) line, a [palette](/docs/extras/palette/) of colors, [fonts](/docs/extras/fonts/) and [shadows](/docs/extras/shadows/). They are optional: nothing changes on a page until you add the class.

## Why it holds together

- **Simple:** four layouts and a short list of utilities. You write no `display`, no `flex-wrap` and no breakpoints.
- **Repeatable:** the same classes give the same arrangement anywhere. Gap and padding come from one scale, so spacing lines up without measuring.
- **Predictable:** the parent decides. A row wraps, a column stretches, a fill grows along its parent's direction, and a grid fits as many cells as the width allows. Read the classes and you know the result.
- **Responsive:** wrapping rows and fitting grids adapt to the space they get, so a layout follows its container, not the screen.

## Where it stops

Relayout doesn't solve every UI problem, and it isn't meant to. It handles positioning. The extras give the common colors, fonts and shadows a name, but the look of your components is yours, in whatever CSS you already use.

For any layout, consider using Relayout. Most of the time, you will find that it just works. When it does not, custom CSS is always available.
