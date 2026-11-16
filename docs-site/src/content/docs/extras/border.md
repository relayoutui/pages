---
title: "Border"
description: "The border utility adds a border around an element or on one of its sides, drawn from the --rl-border-default variable, a placeholder you set to your own."
head:
  - tag: title
    content: "Relayout border: add a border to a layout container"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout border: add a border to a layout container"
---

Classes: `rl-border`, `rl-border-top`, `rl-border-bottom`, `rl-border-start`, `rl-border-end`

The border utility adds a border around an element, drawn from `--rl-border-default`: a solid 1px line, `hsl(0, 0%, 50%)`, on all four sides. That gray is a placeholder that keeps a boundary in sight until you set your own ([Customizing](#customizing)). The border is inside the element's width (`box-sizing: border-box`). It goes on any element, a layout or an item inside one.

`rl-border` also rounds the corners by `--rl-radius-default`, which is 0, so the corners are square until you set it or add [`rl-radius-*`](/docs/extras/radius/).

## One side

`rl-border-top`, `rl-border-bottom`, `rl-border-start` and `rl-border-end` draw the same line on one side, with no radius. Start and end follow the reading direction, as `rl-text-start` does: in a page that reads from right to left, start is the right side. Two classes draw two sides, such as `rl-border-top rl-border-bottom`.

A side border separates elements of the same kind, such as the items of a list or a sidebar from its content, with no element of its own. A [divider](/docs/extras/divider/) is an element between two others, and has to be a direct child of a layout: use it where the line isn't part of either side.

```html preview
<div class="rl-column">
    <div class="rl-border-bottom rl-padding-m">Invoice 1042</div>
    <div class="rl-border-bottom rl-padding-m">Invoice 1043</div>
    <div class="rl-padding-m">Invoice 1044</div>
</div>
```

```html preview
<div class="rl-row rl-nowrap rl-align-stretch" style="height: 8em;">
    <div class="rl-column rl-gap-s rl-padding-m rl-border-end" style="width: 10em;">
        <div>Overview</div>
        <div>Invoices</div>
        <div>Settings</div>
    </div>
    <div class="rl-width-fill rl-padding-m">The sidebar's border is on its end, beside the content.</div>
</div>
```

## Border with column

Borders on columns create clear visual boundaries for vertical content groups.

### `rl-border`

```html preview
<div class="rl-column rl-border rl-padding-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

```html preview
<div class="rl-column rl-border rl-gap-m rl-padding-l">
    <div>Profile Information</div>
    <div>Account Settings</div>
    <div>Privacy Options</div>
</div>
```

## Border with row

Borders on rows are useful for creating contained groups of tags, badges, or buttons.

```html preview
<div class="rl-row rl-border rl-gap-m rl-padding-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

```html preview
<div class="rl-row rl-border rl-gap-s rl-padding-l">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
</div>
```

## Border with grid

Borders on grids create framed grid layouts, useful for card collections or galleries.

```html preview
<div class="rl-grid rl-border rl-gap-m rl-padding-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

```html preview
<div class="rl-grid rl-grid-fit-m rl-border rl-gap-l rl-padding-l">
    <div>Item A</div>
    <div>Item B</div>
    <div>Item C</div>
    <div>Item D</div>
    <div>Item E</div>
    <div>Item F</div>
</div>
```

## Border with frame

Borders on frames create clear boundaries for centered content, useful for modals or hero sections.

```html preview
<div class="rl-frame rl-border rl-padding-m" style="height: 12em;">
    <div>Centered Content</div>
</div>
```

```html preview
<div class="rl-frame rl-border rl-padding-l" style="height: 15em;">
    <div>
        <h3>Hero Section</h3>
        <p>Centered with border</p>
    </div>
</div>
```

## Combining border with radius

Borders can be combined with border-radius utilities to create rounded corners. The `--rl-radius-default` variable controls the default radius when `rl-border` is applied.

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-border rl-radius-s rl-padding-m rl-gap-s">
        <div>Small radius (0.25rem)</div>
        <div>Creates subtle rounded corners</div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Medium radius (0.5rem)</div>
        <div>Moderate rounded corners</div>
    </div>
    <div class="rl-column rl-border rl-radius-l rl-padding-m rl-gap-s">
        <div>Large radius (1rem)</div>
        <div>Prominent rounded corners</div>
    </div>
</div>
```

```html preview
<div class="rl-row rl-border rl-radius-xl rl-gap-m rl-padding-l">
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
</div>
```

## Borders on individual items

While the border utility is typically applied to containers, individual items can also have borders for more complex designs.

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-m rl-padding-m">Item with border 1</div>
    <div class="rl-border rl-radius-m rl-padding-m">Item with border 2</div>
    <div class="rl-border rl-radius-m rl-padding-m">Item with border 3</div>
</div>
```

```html preview
<div class="rl-grid rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Card A</div>
    <div class="rl-border rl-radius-s rl-padding-m">Card B</div>
    <div class="rl-border rl-radius-s rl-padding-m">Card C</div>
    <div class="rl-border rl-radius-s rl-padding-m">Card D</div>
</div>
```

## Nested borders

Borders can be applied at multiple levels to create layered visual hierarchies.

```html preview
<div class="rl-column rl-border rl-radius-m rl-gap-m rl-padding-l">
    <div>Outer container with border</div>
    <div class="rl-column rl-border rl-radius-s rl-gap-s rl-padding-m">
        <div>Nested container</div>
        <div>Also with border</div>
    </div>
</div>
```

```html preview
<div class="rl-column rl-border rl-radius-l rl-gap-l rl-padding-xl">
    <div class="rl-row rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
    <div class="rl-row rl-justify-between rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

## Complex bordered layouts

Borders combine with other utilities to create complete UI components.

```html preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Header Section</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Content Area</div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-justify-between rl-gap-m rl-padding-m">
        <div>Cancel</div>
        <div>Save</div>
    </div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-border rl-radius-s rl-gap-m rl-padding-m">
        <div>Navigation</div>
        <div class="rl-width-fill">User Menu</div>
    </div>
    <div class="rl-grid rl-border rl-radius-s rl-gap-m rl-padding-l">
        <div>Dashboard 1</div>
        <div>Dashboard 2</div>
        <div>Dashboard 3</div>
        <div>Dashboard 4</div>
    </div>
</div>
```

## Cards and panels

Borders on cards and panels.

```html preview
<div class="rl-column rl-border rl-radius-l rl-gap-m rl-padding-l">
    <div class="rl-column rl-gap-s">
        <h3>Card Title</h3>
        <p>Card description goes here with relevant information.</p>
    </div>
    <div class="rl-row rl-gap-s">
        <div>Tag A</div>
        <div>Tag B</div>
        <div>Tag C</div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-justify-between rl-gap-m">
        <div>Details</div>
        <div>Action</div>
    </div>
</div>
```

```html preview
<div class="rl-grid rl-gap-m">
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Product 1</div>
        <div>$99.99</div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Product 2</div>
        <div>$149.99</div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <div>Product 3</div>
        <div>$199.99</div>
    </div>
</div>
```

## Border with dividers

Borders and dividers work together to create well-structured layouts with clear sections.

```html preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Dashboard</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Projects</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Team</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Settings</div>
</div>
```

```html preview
<div class="rl-row rl-border rl-radius-s rl-gap-m rl-padding-m">
    <div>Home</div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-gap-m rl-width-fill">
        <div>Products</div>
        <div class="rl-divider"></div>
        <div>Services</div>
        <div class="rl-divider"></div>
        <div>About</div>
    </div>
</div>
```

## Customizing

The gray line is a placeholder. `--rl-border-default` holds the whole border, its width, style and color, so one change restyles every `rl-border`, side border and [divider](/docs/extras/divider/):

```css
:root {
  --rl-border-default: solid 1px #e0e0e0;
}
```

Set it on a section to change the borders inside it only. With `light-dark()` in it, the border follows the theme, as the [palette](/docs/extras/palette/#light-and-dark) does:

```css
:root {
  --rl-border-default: solid 1px light-dark(#ddd, #333);
}

.callout {
  --rl-border-default: solid 3px var(--rl-color-accent);
}
```

To round every bordered element, set `--rl-radius-default`:

```css
:root {
  --rl-radius-default: 0.5rem;
}
```

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-border` and the side borders go on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-border rl-padding-m">...</rl-div>
```
