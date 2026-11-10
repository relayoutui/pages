---
title: "Grid"
description: "The grid places elements in cells of equal width. Each cell has a minimum width, and as many cells fit side by side as the available width allows; the elements that don't fit continue on a new line. The cells widen to share the space that's left."
---

Class: `rl-grid`

The grid places elements in cells of equal width. Each cell has a minimum width, and as many cells fit side by side as the available width allows; the elements that don't fit continue on a new line. The cells widen to share the space that's left. A cell is never wider than the grid: in a grid narrower than one cell's minimum, the one column shrinks to fit.

Grids are well suited for card layouts, image galleries, product listings, dashboard widgets, and any collection of similar items that should be displayed in a uniform grid structure. A grid is also the way to make equal columns that stack on narrow screens; for equal columns that never stack, use a [row](/docs/layouts/row/) with `rl-nowrap` and `rl-width-fill` on each element.

### `rl-grid`

By default, the grid uses `auto-fit` behavior with cells that have a minimum width of `6.25rem` (100px). Cells expand to fill available space.

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

Auto-fit behavior collapses empty cells, allowing the cells in use to expand and fill the available space.

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

Auto-fill behavior keeps room for empty cells, creating a more rigid grid structure even when a line isn't full.

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

Utilities set the rest of the grid:

- [Gap](/docs/utilities/gap/) spaces the cells. By default there is none.
- [Align](/docs/utilities/align/) positions each element vertically within its cell, and [justify](/docs/utilities/justify/) horizontally.
- [Padding](/docs/utilities/padding/) and [width](/docs/utilities/width/) shape the grid itself. The width decides how many cells fit on a line.
- [Fill and scroll](/docs/utilities/height/) let a grid take the height left in a column.

Extras add the fine touch: [border](/docs/extras/border/) and [radius](/docs/extras/radius/).

## Usage notes

The grid layout uses CSS Grid for responsive cells of equal width:

- **Base class required**: All grid variants (`rl-grid-fit-*`, `rl-grid-fill-*`) must include `rl-grid` class
- **Auto-fit behavior**: Collapses empty cells, allowing the cells in use to expand and fill space
- **Auto-fill behavior**: Keeps room for empty cells, creating a more rigid grid structure
- **Cell sizing**: Uses `grid-template-columns: repeat(auto-fit/fill, minmax(min(MIN, 100%), 1fr))`
- **Minimum widths**: Six size options from `xs` (3.125rem) to `2xl` (20rem), capped at the grid's width
- **Default variant**: `rl-grid` alone uses auto-fit with 6.25rem minimum (same as `rl-grid-fit-s`)
- **Responsive cells**: The number of cells per line adjusts automatically based on container width and minimum size
- **Alignment**: `rl-align-*` controls vertical positioning within cells, `rl-justify-*` controls horizontal

The grid is ideal for card layouts, image galleries, product listings, and any collection where items should be displayed in cells of equal width that adapt responsively. Use auto-fit when you want cells to expand, auto-fill when you want a more rigid structure.
