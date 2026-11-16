---
title: "Grid"
description: "The grid places elements in cells of equal width: as many fit on a line as the width allows, and the cells widen to share what is left over."
head:
  - tag: title
    content: "Relayout grid: equal cells that share the width and wrap"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout grid: equal cells that share the width and wrap"
---

Class: `rl-grid`

The grid places elements in cells of equal width. Each cell has a minimum width, and as many cells fit side by side as the available width allows; the elements that don't fit continue on a new line. The cells widen to share the space that's left. A cell is never wider than the grid: in a grid narrower than one cell's minimum, the one column shrinks to fit.

Grids are well suited for card layouts, image galleries, product listings, dashboard widgets, and any collection of similar items that should be displayed in a uniform grid structure. A grid is also the way to make equal columns that stack on narrow screens; for equal columns that never stack, use a [row](/docs/layouts/row/) with `rl-nowrap` and `rl-width-fill` on each element.

## `rl-grid`

By default, the grid uses `auto-fit` behavior with cells that have a minimum width of `6.25rem` (100px). The cells share the row.

```html preview debug
<div class="rl-grid">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

## Grid auto-fit variants

Auto-fit behavior collapses empty cells, so the cells in use widen to share the whole row.

Apply class `rl-grid-fit-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

### `rl-grid-fit-xs` (3.125rem min)

```html preview debug
<div class="rl-grid rl-grid-fit-xs">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fit-s` (6.25rem min)

```html preview debug
<div class="rl-grid rl-grid-fit-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fit-m` (9.375rem min)

```html preview debug
<div class="rl-grid rl-grid-fit-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fit-l` (12.5rem min)

```html preview debug
<div class="rl-grid rl-grid-fit-l">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fit-xl` (15.625rem min)

```html preview debug
<div class="rl-grid rl-grid-fit-xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fit-2xl` (20rem min)

```html preview debug
<div class="rl-grid rl-grid-fit-2xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

## Grid auto-fill variants

Auto-fill behavior keeps room for empty cells, creating a more rigid grid structure even when a line isn't full. The names are CSS's own, `auto-fit` and `auto-fill`: `fill` doesn't fill the row, it keeps room for cells that aren't there.

Apply class `rl-grid-fill-*` to the grid container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

### `rl-grid-fill-xs` (3.125rem min)

```html preview debug
<div class="rl-grid rl-grid-fill-xs">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fill-s` (6.25rem min)

```html preview debug
<div class="rl-grid rl-grid-fill-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fill-m` (9.375rem min)

```html preview debug
<div class="rl-grid rl-grid-fill-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fill-l` (12.5rem min)

```html preview debug
<div class="rl-grid rl-grid-fill-l">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fill-xl` (15.625rem min)

```html preview debug
<div class="rl-grid rl-grid-fill-xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

### `rl-grid-fill-2xl` (20rem min)

```html preview debug
<div class="rl-grid rl-grid-fill-2xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
</div>
```

## Fit or fill

The same five elements in `rl-grid-fit-s` and in `rl-grid-fill-s`, with cells of at least 100px and a gap of 8px. With `fit`, the five cells share the whole row. With `fill`, the row keeps room for every column that fits, so where six fit, the five cells take five of them and the end of the row stays empty:

```html preview debug
<div class="rl-column rl-gap-l">
    <div class="rl-grid rl-grid-fit-s rl-gap-m">
        <div>fit 1</div>
        <div>fit 2</div>
        <div>fit 3</div>
        <div>fit 4</div>
        <div>fit 5</div>
    </div>
    <div class="rl-grid rl-grid-fill-s rl-gap-m">
        <div>fill 1</div>
        <div>fill 2</div>
        <div>fill 3</div>
        <div>fill 4</div>
        <div>fill 5</div>
    </div>
</div>
```

The two differ only while the row has room for more columns than there are elements: here from 640px, six columns and their gaps. In a narrower row they look the same.

## Centering the last row

A grid has one set of columns for all its rows, so a last row that isn't full sits in the first columns, with or without justify. To center or right-align a last row, use a [row](/docs/layouts/row/) that wraps, with a width on each element: a row places each of its lines on its own. Five elements 150px wide in a row 500px wide make a line of three and a line of two. The line of two starts at 100px and 250px with `rl-justify-center`, and at 200px and 350px with `rl-justify-end`, where in a grid 500px wide with three columns it starts at 0 and 167px, whatever the justify. The elements don't widen to share the line, so each needs its width.

```html preview debug
<div class="rl-row rl-justify-center" style="max-width: 500px;">
    <div style="width: 150px;">1</div>
    <div style="width: 150px;">2</div>
    <div style="width: 150px;">3</div>
    <div style="width: 150px;">4</div>
    <div style="width: 150px;">5</div>
</div>
```

## Narrower than a cell

A grid narrower than its cells' minimum width has one column, as wide as the grid, so it never overflows its container. Here `rl-grid-fit-2xl` (20rem cells) is in a 12rem container.

```html preview debug
<div style="width: 12rem;">
    <div class="rl-grid rl-grid-fit-2xl rl-gap-m">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
</div>
```

A grid needs a width from its parent to fit cells into. When its width comes from its content instead, it has one column as wide as that content. This happens in a row without `rl-width-fill`, in a column with `rl-align-start` or `rl-align-center`, and in an inline-block. To place the cells side by side, give the grid a width. In a row, use `rl-width-fill`.

```html preview debug
<div class="rl-column rl-gap-m">
    <div class="rl-row">
        <div class="rl-grid rl-grid-fit-s rl-gap-m">
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </div>
    </div>
    <div class="rl-row">
        <div class="rl-grid rl-grid-fit-s rl-gap-m rl-width-fill">
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </div>
    </div>
</div>
```

## Utilities

Utilities adjust the positioning of the grid:

- [Gap](/docs/utilities/gap/) spaces the cells. By default there is none.
- [Align](/docs/utilities/align/) places each element down its cell. [Justify](/docs/utilities/justify/) does nothing in a grid: the cells share the whole width ([Centering the last row](#centering-the-last-row)).
- [Padding](/docs/utilities/padding/) and [width](/docs/utilities/width/) shape the grid itself. The width decides how many cells fit on a line.
- [Fill and scroll](/docs/utilities/height/) let a grid take the height left in a column.

Extras add the fine touch: [border](/docs/extras/border/) and [radius](/docs/extras/radius/).

## Usage notes

The grid layout uses CSS Grid for responsive cells of equal width:

- **Base class required**: All grid variants (`rl-grid-fit-*`, `rl-grid-fill-*`) must include `rl-grid` class
- **Auto-fit behavior**: Collapses empty cells, so the cells in use share the row
- **Auto-fill behavior**: Keeps room for empty cells, creating a more rigid grid structure
- **Cell sizing**: Uses `grid-template-columns: repeat(auto-fit/fill, minmax(min(MIN, 100%), 1fr))`
- **Minimum widths**: Six size options from `xs` (3.125rem) to `2xl` (20rem), capped at the grid's width
- **Default variant**: `rl-grid` alone uses auto-fit with 6.25rem minimum (same as `rl-grid-fit-s`)
- **Responsive cells**: The number of cells per line adjusts automatically based on container width and minimum size
- **Alignment**: `rl-align-*` places elements down their cell. `rl-justify-*` does nothing in a grid

The grid is ideal for card layouts, image galleries, product listings, and any collection where items should be displayed in cells of equal width that adapt responsively. Use auto-fit when the cells should share the row, auto-fill when you want a more rigid structure.
