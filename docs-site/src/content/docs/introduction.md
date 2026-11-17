---
title: "Rethink the layout"
description: "Relayout takes the parts of flexbox and grid that position elements and gives each a fixed name and behavior: four layouts, utilities for spacing, and extras."
head:
  - tag: title
    content: "Relayout: a simple, predictable way to lay out a page in CSS"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout: a simple, predictable way to lay out a page in CSS"
---

Relayout takes the parts of flexbox and grid that position elements and applies them in a simple, repeatable, predictable way.

Four layouts set the direction. Utilities adjust the positioning: gap, padding, alignment, wrapping, scrolling, sticking and size. Optional extras add the fine touch. Layouts adapt to the space they have.

## The idea

Most of layout is positioning: what sits beside what, what sits under what, how far apart, what lines up. Flexbox and grid can do all of it, with dozens of properties and many ways to say the same thing. Relayout keeps the few that cover positioning and gives each one a fixed name and a fixed behavior.

## Four layouts

- **[Column](/docs/layouts/column/)** stacks items vertically.
- **[Row](/docs/layouts/row/)** places items side by side, and wraps them when they don't fit.
- **[Grid](/docs/layouts/grid/)** places items in equal cells, as many per line as the width allows.
- **[Frame](/docs/layouts/frame/)** centers its content in the space of its parent.

An element takes one layout. You build the complex ones by nesting: a page is a column, its header is a row, its cards are a grid, and each card is a column. [Composition](/docs/composition/) builds up from one layout to a full page, and ends with [recipes](/docs/composition/#recipes) for the common ones.

## Utilities

A layout sets the direction. Utilities adjust the positioning: [gap](/docs/utilities/gap/), [align](/docs/utilities/align/) and [justify](/docs/utilities/justify/), [padding](/docs/utilities/padding/), [size](/docs/utilities/width/), [wrapping](/docs/utilities/wrapping/), [fill and scroll](/docs/utilities/height/), and [sticky](/docs/utilities/sticky/). Each utility has one job and one name. `rl-gap-m` is the same gap on every page.

Sizes come from a scale of named steps, `xs` to `2xl`. Gap, padding and radius share one spacing scale (which also has `0`), and width and grid cells each have their own. Every step is a CSS variable, so you change the scale once and every page follows.

## Extras

Extras add the fine touch: [border](/docs/extras/border/), [radius](/docs/extras/radius/), the [divider](/docs/extras/divider/) line, a [palette](/docs/extras/palette/) of colors, [fonts](/docs/extras/fonts/) and [shadows](/docs/extras/shadows/). They are optional: nothing changes on a page until you add the class.

## Why it holds together

- **Simple:** four layouts and a short list of utilities. You write no `display`, no `flex-wrap` and no breakpoints.
- **Repeatable:** the same classes give the same arrangement anywhere. Gap and padding come from one scale, so spacing lines up without measuring.
- **Predictable:** the parent decides. A row wraps, a column stretches, a fill grows along its parent's direction, and a grid fits as many cells as the width allows. Read the classes and you know the result.
- **Responsive:** wrapping rows and fitting grids adapt to the space they get, so a layout follows its container, not the screen.

## Where it stops

Relayout handles positioning, and it adapts by wrapping and fitting, not by breakpoints. The extras give the common colors, fonts and shadows a name, but the look of your components is yours, in whatever CSS you already use.

These are the things it has no class for, each with the CSS to write. Write it in your own stylesheet, and keep Relayout for everything around it.

- **A change at a width.** Hiding an element on a phone, or turning a row into a column all at once, needs a media query, or a container query to follow the width of an element instead of the window's. The [menu and the drawer](/docs/composition/#header-links-that-collapse-into-a-menu) recipes are built this way.

  ```css
  @media (max-width: 40rem) {
      .sidebar { display: none; }
      .rl-row.switcher { flex-direction: column; align-items: stretch; }
  }
  ```

- **Set columns and spans.** A grid fits as many equal cells as the width allows. A set number of columns, a column twice as wide, or a cell across the whole line is `grid-template-columns` and `grid-column`, on a grid of Relayout's or of your own.

  ```css
  .three { grid-template-columns: repeat(3, 1fr); }
  .main-and-side { grid-template-columns: 2fr 1fr; }
  .wide { grid-column: span 2; }
  .whole { grid-column: 1 / -1; }
  ```

- **A sidebar's width.** A sidebar has no standard width, so the number is yours. `rl-width-xs` gives 20rem (320px) when that suits.

  ```css
  .sidebar { width: 14rem; }
  ```

- **A shape for media.** `rl-frame` fits an image inside its parent and leaves empty bands. A ratio and a crop are lines on the image.

  ```css
  img.cover { aspect-ratio: 16 / 9; width: 100%; object-fit: cover; }
  img.avatar { aspect-ratio: 1; object-fit: cover; }
  ```

- **Badges, dropdowns and dialogs.** Anything laid over the page needs `position: absolute` against a parent that has `position: relative`, and the corner, the offset and the layer are yours. The `<dialog>` element does a dialog.

  ```css
  .has-badge { position: relative; }
  .badge { position: absolute; top: 0; right: 0; }
  ```

- **Equal shares.** Several `rl-width-fill` elements of a row share the width equally, but several `rl-height-fill` elements of a column share the height by their content. Panes of equal height, one above the other, take `flex: 1 1 0` on each, with `rl-scroll` on any that can run long. [Fill and scroll](/docs/utilities/height/) says what the classes do.

  ```css
  .pane { flex: 1 1 0; min-height: 0; } /* min-width: 0 for panes side by side */
  ```

- **A value outside a scale.** The spacing, text, width and grid scales are closed on purpose, so a page stays consistent and a value of your own is easy to find. A step between two, or beyond the last, is a line of CSS, or a change of the step's variable for the whole page.

  ```css
  .card { padding: 12px; }
  :root { --rl-space-m: 0.75rem; }
  ```

For any layout, consider using Relayout. Most of the time, you will find that it just works. When it does not, the CSS above is all it takes. [Reference](/docs/reference/) lists every class and variable.
