---
title: "Align"
description: "The align utility places elements along the cross axis of a layout: vertically in a row, horizontally in a column. It works with every layout type the same way."
head:
  - tag: title
    content: "Relayout align: position elements along the cross axis"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout align: position elements along the cross axis"
---

Class: `rl-align-*`

The align utility places the elements of a layout along its cross axis, the one across the direction the elements flow: vertically in a row, horizontally in a column.

## Values

| Class | Places the elements |
|---|---|
| `rl-align-start` | at the start of the cross axis |
| `rl-align-center` | in the middle of it |
| `rl-align-end` | at the end of it |
| `rl-align-stretch` | across all of it, unless an element has a size of its own |
| `rl-align-baseline` | so the first lines of their text sit on one line, whatever their size. For a row or a grid |

| Layout | Cross axis | Default |
|---|---|---|
| Column | Horizontal | `stretch` |
| Row | Vertical | `center` |
| Grid | Vertical, within each cell | `stretch` |
| Frame | Vertical | `center` |

In a column, `start`, `center` and `end` also set the text alignment, and make each element only as wide as it needs. The text alignment is a default: `rl-text-start`, `rl-text-center` or `rl-text-end` on the column, or a rule of your own, overrides it. `baseline` places the elements of a column as `start` does, and leaves the text alone. An element with `rl-width-fill` in a column, or `rl-height-fill` in a row, stretches whatever the value ([Fill and scroll](/docs/utilities/height/)). [Justify](/docs/utilities/justify/) places the elements along the main axis.

## Align with column layout

In column layouts, the **cross axis is horizontal** (since the main axis is vertical). Align controls how items are positioned horizontally and also affects text alignment. Except for `stretch`, all values make the elements take only as much space as they need.

### `rl-align-start`

```html preview debug
<div class="rl-column rl-align-start rl-gap-m">
    <div>Aligned to start</div>
    <div>Short text</div>
    <div>This is a longer piece of content</div>
</div>
```

### `rl-align-center`

```html preview debug
<div class="rl-column rl-align-center rl-gap-m">
    <div>Centered alignment</div>
    <div>Short</div>
    <div>This is a longer piece of content</div>
</div>
```

### `rl-align-end`

```html preview debug
<div class="rl-column rl-align-end rl-gap-m">
    <div>Aligned to end</div>
    <div>Short text</div>
    <div>This is a longer piece of content</div>
</div>
```

### `rl-align-stretch` (default)

```html preview debug
<div class="rl-column rl-align-stretch rl-gap-m">
    <div>Stretched to full width</div>
    <div>Short text</div>
    <div>This is a longer piece of content</div>
</div>
```

Column alignment also controls text alignment within elements:

```html preview
<div class="rl-column rl-gap-m rl-border rl-padding-m">
    <div class="rl-column rl-align-start rl-border rl-padding-s">
        <div>Start aligned text</div>
    </div>
    <div class="rl-column rl-align-center rl-border rl-padding-s">
        <div>Center aligned text</div>
    </div>
    <div class="rl-column rl-align-end rl-border rl-padding-s">
        <div>End aligned text</div>
    </div>
</div>
```

A paragraph that wraps fills the width of a centered column, and its lines are centered too. To keep the elements centered and start each line of text at the start, add `rl-text-start` to the column:

```html preview
<div class="rl-column rl-align-center rl-text-start rl-gap-m rl-border rl-padding-m">
    <strong>A centered heading</strong>
    <p>A paragraph long enough to wrap. The column centers its elements, and with rl-text-start every line of this text starts at the left edge, where without it each line would be centered.</p>
</div>
```

## Align with row layout

In row layouts, the **cross axis is vertical**. Align controls how items are positioned vertically within the container.

### `rl-align-start`

```html preview debug
<div class="rl-row rl-align-start rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

### `rl-align-center` (default)

```html preview debug
<div class="rl-row rl-align-center rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

### `rl-align-end`

```html preview debug
<div class="rl-row rl-align-end rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

### `rl-align-stretch`

```html preview debug
<div class="rl-row rl-align-stretch rl-gap-m" style="height: 8em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

### `rl-align-baseline`

The first lines of text sit on one line, whatever their size: a title beside a count and a link line up on their text, where `rl-align-center` lines up the middles of their boxes and `rl-align-start` their tops.

```html preview debug
<div class="rl-row rl-align-baseline rl-gap-m">
    <strong class="rl-text-2xl">Invoices</strong>
    <span class="rl-text-s rl-color-muted">12 open</span>
    <a href="#">View all</a>
</div>
```

## Align with grid layout

In grid layouts, align controls how items are positioned **within their grid cells** along the vertical axis.

### `rl-align-start`

```html preview debug
<div class="rl-grid rl-gap-m rl-align-start" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

### `rl-align-center`

```html preview debug
<div class="rl-grid rl-gap-m rl-align-center" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

### `rl-align-end`

```html preview debug
<div class="rl-grid rl-gap-m rl-align-end" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

### `rl-align-stretch`

```html preview debug
<div class="rl-grid rl-gap-m rl-align-stretch" style="min-height: 10em; border: 1px solid #ccc;">
    <div>Short</div>
    <div>Taller content that takes more vertical space</div>
    <div>Medium content</div>
    <div>Another item</div>
</div>
```

## Align with frame layout

In frame layouts, align controls **vertical positioning** of the content within the frame.

### `rl-align-start`

```html preview debug
<div class="rl-frame rl-align-start rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content at top</div>
</div>
```

### `rl-align-center` (default)

```html preview debug
<div class="rl-frame rl-align-center rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content centered vertically</div>
</div>
```

### `rl-align-end`

```html preview debug
<div class="rl-frame rl-align-end rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content at bottom</div>
</div>
```

### `rl-align-stretch`

```html preview debug
<div class="rl-frame rl-align-stretch rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Content stretched vertically</div>
</div>
```

## Combining with other utilities

Align works well with other layout utilities for sophisticated designs:

```html preview
<div class="rl-column rl-gap-l">
    <div class="rl-row rl-align-start rl-gap-m rl-border rl-padding-m rl-radius-m" style="height: 6em;">
        <div>Badge</div>
        <div>Tag</div>
        <div>Label</div>
    </div>
    <div class="rl-row rl-align-center rl-gap-m rl-border rl-padding-m rl-radius-m" style="height: 6em;">
        <div>Logo</div>
        <div class="rl-width-fill">Navigation</div>
    </div>
    <div class="rl-row rl-justify-between rl-align-end rl-gap-m rl-border rl-padding-m rl-radius-m" style="height: 6em;">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-align-*` goes on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-row rl-align-start">...</rl-div>
```
