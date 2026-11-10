---
title: "Justify"
description: "The justify utility controls how elements are positioned along the main axis of a layout. The main axis is the primary direction in which elements flow - vertical for columns, horizontal for rows."
---

Class: `rl-justify-*`

The justify utility controls how elements are positioned along the main axis of a layout. The main axis is the primary direction in which elements flow - vertical for columns, horizontal for rows.

Apply class `rl-justify-*` to a layout container, where `*` can be `start`, `center`, `end`, or `between`.

## Justify values

- **`rl-justify-start`** - Positions elements at the start of the main axis
- **`rl-justify-center`** - Positions elements at the center of the main axis
- **`rl-justify-end`** - Positions elements at the end of the main axis
- **`rl-justify-between`** - Places the first element at the start and the last at the end, with the space shared between the elements

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

In grid layouts, justify controls how items are positioned horizontally within their individual grid cells. This is most visible when grid items are narrower than their cells.

### `rl-justify-start`

```html preview debug
<div class="rl-grid rl-grid-fit-l rl-justify-start rl-gap-m">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

### `rl-justify-center`

```html preview debug
<div class="rl-grid rl-grid-fit-l rl-justify-center rl-gap-m">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

### `rl-justify-end`

```html preview debug
<div class="rl-grid rl-grid-fit-l rl-justify-end rl-gap-m">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

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

## Justify behavior comparison

| Layout | Main Axis | What Justify Controls | Default | Notes |
|--------|-----------|----------------------|---------|-------|
| **Column** | Vertical | Vertical positioning of all items | `start` | Only visible when container height > content height |
| **Row** | Horizontal | Horizontal positioning of each wrapped line | `start` | `between` pushes the first and last elements to the ends |
| **Grid** | N/A | Horizontal positioning within cells | `stretch` | Uses `justify-items` property |
| **Frame** | Horizontal | Horizontal positioning of content | `space-around` | Centers content by default |

## Usage notes

The justify utility controls main-axis positioning, but its behavior varies significantly across layouts:

**Column layouts** (vertical main axis):
- Justify controls vertical positioning
- Only visible when the column has explicit height greater than content
- Values: `start` (top), `center` (middle), `end` (bottom), `between` (first at the top, last at the bottom)

**Row layouts** (horizontal main axis):
- Justify controls horizontal positioning of the entire row
- Affects each line when content wraps
- Values: `start` (left), `center`, `end` (right), `between` (first at the left, last at the right)
- No effect when an element has `rl-width-fill`, since it takes all the free space

**Grid layouts**:
- Justify controls horizontal positioning within individual cells
- Uses `justify-items` property (not `justify-content`)
- Most visible when items are narrower than their cells

**Frame layouts**:
- Justify controls horizontal positioning of centered content
- Default `space-around` centers content horizontally
- Values: `start` (left), `center`, `end` (right)

**Understanding main axis vs cross axis:**
- Main axis: The primary direction elements flow (vertical for column, horizontal for others)
- Cross axis: Perpendicular to main axis (controlled by `align`)
- Justify always controls the main axis
- In flexbox: `justify-content` controls main axis distribution
- In grid: `justify-items` controls horizontal positioning within cells

The justify utility is most useful for columns (vertical positioning) and rows (horizontal positioning, and pushing elements apart with `between`).
