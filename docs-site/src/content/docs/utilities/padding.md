---
title: "Padding"
description: "The padding utility adds space inside a container, on all four sides, from a fixed scale from extra small to 2xl that works the same in every layout."
head:
  - tag: title
    content: "Relayout padding: space inside a container on every side"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout padding: space inside a container on every side"
---

Classes: `rl-padding-*`, `rl-padding-x-*`, `rl-padding-y-*`

The padding utility adds space inside an element, between its edge and its content. `rl-padding-*` pads all four sides, `rl-padding-x-*` the left and right, and `rl-padding-y-*` the top and bottom. It goes on any element, a layout or a plain `div`. The padding is inside the element's width (`box-sizing: border-box`), so a padded element is no wider than its parent.

## Sizes

`rl-padding-x-*` and `rl-padding-y-*` take the same sizes:

| Class | Size |
|---|---|
| `rl-padding-0` | 0 |
| `rl-padding-xs` | 0.125rem (2px) |
| `rl-padding-s` | 0.25rem (4px) |
| `rl-padding-m` | 0.5rem (8px) |
| `rl-padding-l` | 1rem (16px) |
| `rl-padding-xl` | 1.5rem (24px) |
| `rl-padding-2xl` | 2.25rem (36px) |

The sizes are the spacing scale, `--rl-space-*`, which gap and radius use too. Padding is the space around the content, and [gap](/docs/utilities/gap/) is the space between the elements: they work independently and combine.

## Default padding

A column, a row, a grid and a frame take their padding from `--rl-padding-default` until a class sets one. It is 0. Set it on `:root` to pad every layout the same, the nested ones included:

```css
:root {
  --rl-padding-default: var(--rl-space-m);
}
```

A page's own `padding` on a layout wins over the default, whatever the order of the style sheets, and so does `rl-padding-*`. `rl-div` and `rl-divider` have no default padding.

## Padding with column

Padding creates internal spacing around the column container, pushing content away from all edges.

### `rl-padding-0`

```html preview debug
<div class="rl-column rl-padding-0 rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-padding-s`

```html preview debug
<div class="rl-column rl-padding-s rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-padding-m`

```html preview debug
<div class="rl-column rl-padding-m rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-padding-l`

```html preview debug
<div class="rl-column rl-padding-l rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-padding-xl`

```html preview debug
<div class="rl-column rl-padding-xl rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-padding-2xl`

```html preview debug
<div class="rl-column rl-padding-2xl rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

## Padding with row

In row layouts, padding creates breathing room around the wrapped items, preventing them from touching the container edges.

### `rl-padding-m`

```html preview debug
<div class="rl-row rl-gap-s rl-padding-m rl-border" style="width: 20em;">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

### `rl-padding-l`

```html preview debug
<div class="rl-row rl-gap-m rl-padding-l rl-border">
    <div>Badge A</div>
    <div>Badge B</div>
    <div>Badge C</div>
    <div>Badge D</div>
</div>
```

### `rl-padding-xl`

```html preview debug
<div class="rl-row rl-gap-m rl-padding-xl rl-border">
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
</div>
```

## Padding with grid

Padding around grid containers creates a frame effect, with space between the grid items and the container edges.

### `rl-padding-m`

```html preview debug
<div class="rl-grid rl-gap-m rl-padding-m rl-border">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

### `rl-padding-l`

```html preview debug
<div class="rl-grid rl-grid-fit-m rl-gap-m rl-padding-l rl-border">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>
```

### `rl-padding-xl`

```html preview debug
<div class="rl-grid rl-gap-l rl-padding-xl rl-border">
    <div>Product 1</div>
    <div>Product 2</div>
    <div>Product 3</div>
    <div>Product 4</div>
</div>
```

## Padding with frame

In frame layouts, padding creates space between the container edges and the centered content.

### `rl-padding-m`

```html preview debug
<div class="rl-frame rl-padding-m rl-border" style="height: 12em;">
    <div>Centered with moderate padding</div>
</div>
```

### `rl-padding-l`

```html preview debug
<div class="rl-frame rl-padding-l rl-border" style="height: 12em;">
    <div>Centered with large padding</div>
</div>
```

### `rl-padding-xl`

```html preview debug
<div class="rl-frame rl-padding-xl rl-border" style="height: 15em;">
    <div>Centered with extra large padding</div>
</div>
```

## Combining padding with gap

Padding and gap work together: padding creates space around the container, while gap creates space between items inside it.

```html preview debug
<div class="rl-column rl-gap-m rl-padding-l rl-border">
    <div>Gap controls spacing between items</div>
    <div>Padding controls spacing from container edges</div>
    <div>They work independently</div>
</div>
```

```html preview debug
<div class="rl-row rl-gap-s rl-padding-m rl-border" style="width: 25em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>
```

```html preview debug
<div class="rl-grid rl-gap-l rl-padding-xl rl-border">
    <div>Card A</div>
    <div>Card B</div>
    <div>Card C</div>
    <div>Card D</div>
</div>
```

## Padding size comparison

Visual comparison of different padding sizes on the same layout:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-padding-xs rl-border">
        <div>Extra small (xs) - 0.125rem</div>
    </div>
    <div class="rl-column rl-padding-s rl-border">
        <div>Small (s) - 0.25rem</div>
    </div>
    <div class="rl-column rl-padding-m rl-border">
        <div>Medium (m) - 0.5rem</div>
    </div>
    <div class="rl-column rl-padding-l rl-border">
        <div>Large (l) - 1rem</div>
    </div>
    <div class="rl-column rl-padding-xl rl-border">
        <div>Extra large (xl) - 1.5rem</div>
    </div>
    <div class="rl-column rl-padding-2xl rl-border">
        <div>Double extra large (2xl) - 2.25rem</div>
    </div>
</div>
```

## Padding with complex layouts

Padding is particularly useful for creating structured, bordered layouts with proper internal spacing.

```html preview
<div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Profile Card</div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-gap-s">
        <div>Edit</div>
        <div>Share</div>
        <div>Delete</div>
    </div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-s">
        <div>Header</div>
        <div class="rl-width-fill">Actions</div>
    </div>
    <div class="rl-grid rl-gap-m rl-padding-l rl-border rl-radius-m">
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
        <div>Content 4</div>
    </div>
</div>
```

```html preview
<div class="rl-row rl-justify-between rl-gap-m rl-padding-l rl-border rl-radius-l">
    <div class="rl-column rl-gap-s">
        <div>Section A</div>
        <div>Details here</div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>Section B</div>
        <div>Details here</div>
    </div>
</div>
```

## Padding in nested layouts

Padding can be applied at different levels to create complex spacing hierarchies.

```html preview
<div class="rl-column rl-gap-l rl-padding-xl rl-border rl-radius-m">
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-s">
        <div>Nested container with its own padding</div>
        <div>Creates layered spacing</div>
    </div>
    <div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-s">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
</div>
```

## Web components

`rl-padding-*`, `rl-padding-x-*` and `rl-padding-y-*` are attributes of `<rl-column>`, `<rl-row>`, `<rl-grid>`, `<rl-frame>` and `<rl-div>`:

```html
<rl-column rl-padding-l>...</rl-column>
```
