---
title: "Justify"
description: "The justify utility places elements along the main axis of a layout: horizontally in a row, vertically in a column, with start, center, end and between."
head:
  - tag: title
    content: "Relayout justify: position elements along the main axis"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout justify: position elements along the main axis"
---

Class: `rl-justify-*`

The justify utility places the elements of a layout along its main axis, the direction they flow: horizontally in a row, vertically in a column.

## Values

| Class | Places the elements |
|---|---|
| `rl-justify-start` | at the start of the main axis |
| `rl-justify-center` | in the middle of it |
| `rl-justify-end` | at the end of it |
| `rl-justify-between` | the first at the start and the last at the end, with the free space shared between the elements |

| Layout | Main axis | Default | Shows |
|---|---|---|---|
| Column | Vertical | `start` | Only when the column is taller than its elements |
| Row | Horizontal | `start` | On each wrapped line; there is no free space next to an element with `rl-width-fill` |
| Grid | | | Never: the cells share the whole width |
| Frame | Horizontal | `space-around` | Centers one element, and spaces several |

[Align](/docs/utilities/align/) places the elements across the main axis.

## Justify with column

In column layouts, the main axis is vertical, so justify controls vertical positioning. This only has visible effect when the column container has more height than its content needs.

### `rl-justify-start` (default)

```html preview debug
<div class="rl-column rl-justify-start rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-justify-center`

```html preview debug
<div class="rl-column rl-justify-center rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-justify-end`

```html preview debug
<div class="rl-column rl-justify-end rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-justify-between`

```html preview debug
<div class="rl-column rl-justify-between rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

## Justify with row

In row layouts, the main axis is horizontal, so justify controls horizontal positioning of the entire row of items.

### `rl-justify-start` (default)

```html preview debug
<div class="rl-row rl-justify-start rl-gap-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

### `rl-justify-center`

```html preview debug
<div class="rl-row rl-justify-center rl-gap-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

### `rl-justify-end`

```html preview debug
<div class="rl-row rl-justify-end rl-gap-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

### `rl-justify-between`

Usually with two elements, such as two groups pushed to the ends of a header. The gap is the smallest space left between elements; `rl-justify-between` adds the rest.

```html preview debug
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Logo</div>
    <div class="rl-row rl-gap-m">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
</div>
```

With three or more elements, each wrapped line is spaced on its own: a single element on a line sits at the start, and nothing lines up with the line above. Group the elements into two, as above, or use a [grid](/docs/layouts/grid/) when they should line up.

```html preview debug
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
</div>
```

## Justify with grid

Justify does nothing in a grid. The cells share the whole width, so there is no free space to place them in. To place an element within its cell, limit its width with [`rl-width-*`](/docs/utilities/width/) and center it with `rl-center-self`, and use [`rl-align-*`](/docs/utilities/align/) for the vertical position.

## Justify with frame

In frame layouts, justify controls horizontal positioning of the centered content.

### `rl-justify-start`

```html preview debug
<div class="rl-frame rl-justify-start" style="height: 10em; border: 1px solid #ccc;">
    <div>Content on left</div>
</div>
```

### `rl-justify-center`

```html preview debug
<div class="rl-frame rl-justify-center" style="height: 10em; border: 1px solid #ccc;">
    <div>Content centered</div>
</div>
```

### `rl-justify-end`

```html preview debug
<div class="rl-frame rl-justify-end" style="height: 10em; border: 1px solid #ccc;">
    <div>Content on right</div>
</div>
```

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-justify-*` goes on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-row rl-justify-between">...</rl-div>
```
