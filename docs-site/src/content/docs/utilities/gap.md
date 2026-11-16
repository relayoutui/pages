---
title: "Gap"
description: "The gap utility sets the spacing between the children of a layout from a fixed scale, so items need no margins of their own. It works in every layout."
head:
  - tag: title
    content: "Relayout gap: even spacing between the elements of a layout"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout gap: even spacing between the elements of a layout"
---

Classes: `rl-gap-*`, `rl-gap-wrap-*`

The gap utility puts space between the elements of a layout. The space is between the elements only, none before the first or after the last, so no element needs a margin. It works in a column, a row, a grid and a frame.

## Sizes

Apply `rl-gap-*` to a layout:

| Class | Size |
|---|---|
| `rl-gap-0` | 0 |
| `rl-gap-xs` | 0.125rem (2px) |
| `rl-gap-s` | 0.25rem (4px) |
| `rl-gap-m` | 0.5rem (8px) |
| `rl-gap-l` | 1rem (16px) |
| `rl-gap-xl` | 1.5rem (24px) |
| `rl-gap-2xl` | 2.25rem (36px) |

The sizes are the spacing scale, `--rl-space-*`, which padding and radius use too.

A column, a row and a grid have the gap `--rl-gap-default` until a class sets one. It is 0. A frame has no default gap.

## Gap with column layout

In column layouts, gap creates vertical spacing between stacked elements.

### `rl-gap-m`

```html preview debug
<div class="rl-column rl-gap-m">
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
</div>
```

### `rl-gap-l`

```html preview debug
<div class="rl-column rl-gap-l">
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
</div>
```

### Comparing sizes

```html preview debug
<div class="rl-column rl-gap-l">
    <div class="rl-column rl-gap-xs rl-border rl-padding-m">
        <div>Gap XS</div>
        <div>Gap XS</div>
        <div>Gap XS</div>
    </div>
    <div class="rl-column rl-gap-s rl-border rl-padding-m">
        <div>Gap S</div>
        <div>Gap S</div>
        <div>Gap S</div>
    </div>
    <div class="rl-column rl-gap-m rl-border rl-padding-m">
        <div>Gap M</div>
        <div>Gap M</div>
        <div>Gap M</div>
    </div>
</div>
```

## Gap with row layout

In row layouts, gap creates both horizontal and vertical spacing between items as they wrap.

### `rl-gap-s`

```html preview debug
<div class="rl-row rl-gap-s" style="width: 20em;">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

### `rl-gap-l`

```html preview debug
<div class="rl-row rl-gap-l" style="width: 20em;">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

## Gap with grid layout

In grid layouts, gap creates both horizontal and vertical spacing between grid items.

### `rl-gap-m`

```html preview debug
<div class="rl-grid rl-gap-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
    <div>Card 6</div>
</div>
```

### `rl-gap-xl`

```html preview debug
<div class="rl-grid rl-gap-xl">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
    <div>Card 6</div>
</div>
```

## Between wrapped lines

`rl-gap-wrap-*` sets the gap between the lines of a row that wraps, or between the rows of a grid, apart from the gap between the elements. The sizes are those of `rl-gap-*`, from `rl-gap-wrap-0` to `rl-gap-wrap-2xl`. A row of links 24px apart looks right across, and loose when its second line sits 24px below the first:

```html preview debug
<div class="rl-row rl-gap-xl rl-gap-wrap-s" style="max-width: 18em;">
    <a href="#">Product</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
    <a href="#">Blog</a>
    <a href="#">Changelog</a>
    <a href="#">Support</a>
</div>
```

With `rl-gap-l rl-gap-wrap-xs`, the elements are 16px apart across and the lines 2px apart, whatever the order of the two classes. It goes on a row or a grid. A column's lines are its elements, so in a column it does nothing: use `rl-gap-*`.

## Gap with frame layout

In frame layouts, gap creates spacing between multiple items when the frame contains more than one child.

### `rl-gap-m`

```html preview debug
<div class="rl-frame rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

### `rl-gap-xl`

```html preview debug
<div class="rl-frame rl-gap-xl" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

## Gap with other utilities

Gap values can be combined with other layout utilities for sophisticated designs:

```html preview
<div class="rl-column rl-gap-l">
    <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-m">
        <div>Badge</div>
        <div>Badge</div>
        <div>Badge</div>
    </div>
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m rl-radius-m">
        <div>Left</div>
        <div>Right</div>
    </div>
    <div class="rl-grid rl-gap-m rl-border rl-padding-m rl-radius-m">
        <div>Grid 1</div>
        <div>Grid 2</div>
        <div>Grid 3</div>
        <div>Grid 4</div>
    </div>
</div>
```

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-gap-*` goes on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-column rl-gap-m">...</rl-div>
```

## Customizing

Set the default, or a step of the scale, on `:root`. A step changes gap, padding and radius together:

```css
:root {
  --rl-gap-default: var(--rl-space-m);
  --rl-space-l: 1.25rem;
}
```
