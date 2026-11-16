---
title: "Divider"
description: "The divider is a separator line between elements. It runs across a column and down a row, so it takes its direction from the layout it is in."
head:
  - tag: title
    content: "Relayout divider: a line that follows its layout's direction"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout divider: a line that follows its layout's direction"
---

Class: `rl-divider`

The divider creates a visual separator line between elements. It takes its direction from the layout it is in: a horizontal line across a column, and a vertical line down a row. Dividers are simple, empty elements that stretch to fill the available space in their container.

Dividers are well suited for separating list items, sections of content, menu items, and creating visual distinction between groups of elements.

## `rl-divider`

In a column, the divider is a horizontal line that stretches across the full width of the column.

```html preview
<div class="rl-column rl-gap-m">
    <div>Acta non verba</div>
    <div class="rl-divider"></div>
    <div>Tempus fugit</div>
    <div class="rl-divider"></div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

## Dividers in different layouts

A divider follows the layout it is a direct child of, as `rl-width-fill` and `rl-height-fill` do. Outside a column and a row, in a grid, a frame or a plain `div`, it is a horizontal line.

### Dividers in column

```html preview
<div class="rl-column rl-border">
    <div class="rl-padding-m">First item</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Second item</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Third item</div>
</div>
```

### Dividers in row

In a row the divider is a vertical line as tall as the row.

```html preview
<div class="rl-row rl-gap-m">
    <div>Tag 1</div>
    <div class="rl-divider"></div>
    <div>Tag 2</div>
    <div class="rl-divider"></div>
    <div>Tag 3</div>
</div>
```

### Dividers in a row with `rl-justify-between`

```html preview
<div class="rl-row rl-justify-between rl-gap-m">
    <div>Left item</div>
    <div class="rl-divider"></div>
    <div>Right item</div>
</div>
```

## Vertical dividers

A vertical divider is a divider in a row, so there is nothing to add. The line is as tall as the row: it stretches with the row's content, or fills the height you give the row.

```html preview debug
<div class="rl-row rl-gap-m" style="height: 5em;">
    <div>Navigation</div>
    <div class="rl-divider"></div>
    <div class="rl-width-fill">Content</div>
</div>
```

Vertical dividers are particularly useful in rows.

```html preview
<div class="rl-row rl-gap-l rl-padding-m rl-border">
    <div>Home</div>
    <div class="rl-divider"></div>
    <div>About</div>
    <div class="rl-divider"></div>
    <div class="rl-width-fill">Contact</div>
</div>
```

## Combining with borders and padding

Dividers work well with bordered containers and padded elements to create clean, separated layouts.

```html preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Profile Information</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Account Settings</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Privacy Options</div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-border rl-radius-m">
        <div class="rl-padding-m">Item 1</div>
        <div class="rl-divider"></div>
        <div class="rl-padding-m">Item 2</div>
    </div>
    <div class="rl-column rl-border rl-radius-m">
        <div class="rl-padding-m">Item 3</div>
        <div class="rl-divider"></div>
        <div class="rl-padding-m">Item 4</div>
    </div>
</div>
```

## Menu and navigation examples

Dividers are commonly used in menus and navigation components.

```html preview
<div class="rl-row rl-gap-m rl-border rl-padding-m rl-radius-m">
    <div>Logo</div>
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

```html preview
<div class="rl-column rl-border rl-radius-m rl-width-xs rl-center-self">
    <div class="rl-padding-m">Dashboard</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Projects</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Team</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Settings</div>
</div>
```

## Usage notes

The divider has these characteristics:

- Dividers are empty elements (no content should be placed inside them)
- In a column, and anywhere that isn't a row, the divider stretches to 100% width with zero height and a top border
- In a row, the divider stretches to the height of the row with zero width and a left border
- The divider has to be a direct child of the column or the row, as `rl-width-fill` has to be. To put a horizontal line between the items of a row, wrap them in a column
- The divider follows the layout it is in, on a `div`, an `hr` or an [`rl-div`](/docs/web-components/), which is the one to use inside a shadow root
- Dividers use the `--rl-border-default` CSS variable for styling
- Dividers automatically align themselves using `align-self: stretch`
- They work best when paired with gap or padding classes for proper spacing

To customize the divider appearance globally, override the `--rl-border-default` CSS variable:

```css
:root {
  --rl-border-default: solid 2px #e0e0e0;
}
```
