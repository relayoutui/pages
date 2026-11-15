---
title: "Radius"
description: "The radius utility rounds the corners of an element that has a border or a background, on the same scale as gap and padding, from extra small to 2xl."
head:
  - tag: title
    content: "Relayout radius: round the corners on a fixed scale"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout radius: round the corners on a fixed scale"
---

Class: `rl-radius-*`

The radius utility rounds the corners of an element, all four by the same amount. It shows where the element has something at its corners: a border, a background, a gradient or a shadow.

## Sizes

| Class | Size |
|---|---|
| `rl-radius-0` | 0 (square corners) |
| `rl-radius-xs` | 0.125rem (2px) |
| `rl-radius-s` | 0.25rem (4px) |
| `rl-radius-m` | 0.5rem (8px) |
| `rl-radius-l` | 1rem (16px) |
| `rl-radius-xl` | 1.5rem (24px) |
| `rl-radius-2xl` | 2.25rem (36px) |

The sizes are the spacing scale, `--rl-space-*`, which gap and padding use too.

## Default radius

`rl-border` rounds its corners by `--rl-radius-default`, which is 0, so they are square. Set it on `:root` to round every bordered element the same:

```css
:root {
  --rl-radius-default: var(--rl-space-m); /* 0.5rem */
}
```

`rl-radius-*` wins over the default, and so does a page's own `border-radius`, whatever the order of the style sheets.

## Radius with column

Radius on columns creates rounded corners for vertical containers, useful for cards, panels, and forms.

### `rl-radius-s`

```html preview
<div class="rl-column rl-border rl-radius-s rl-padding-m rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-radius-m`

```html preview
<div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-radius-l`

```html preview
<div class="rl-column rl-border rl-radius-l rl-padding-m rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-radius-xl`

```html preview
<div class="rl-column rl-border rl-radius-xl rl-padding-l rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### `rl-radius-2xl`

```html preview
<div class="rl-column rl-border rl-radius-2xl rl-padding-l rl-gap-s">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

## Radius with row

Rounded corners on row layouts create softer, more approachable groups of tags or buttons.

```html preview
<div class="rl-row rl-border rl-radius-s rl-gap-m rl-padding-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

```html preview
<div class="rl-row rl-border rl-radius-m rl-gap-m rl-padding-l">
    <div>Button A</div>
    <div>Button B</div>
    <div>Button C</div>
</div>
```

```html preview
<div class="rl-row rl-border rl-radius-xl rl-gap-s rl-padding-l">
    <div>Badge 1</div>
    <div>Badge 2</div>
    <div>Badge 3</div>
    <div>Badge 4</div>
    <div>Badge 5</div>
</div>
```

## Radius with grid

Rounded corners on grids create softer container edges for card layouts and galleries.

```html preview
<div class="rl-grid rl-border rl-radius-s rl-gap-m rl-padding-m">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
</div>
```

```html preview
<div class="rl-grid rl-grid-fit-m rl-border rl-radius-m rl-gap-m rl-padding-l">
    <div>Item A</div>
    <div>Item B</div>
    <div>Item C</div>
    <div>Item D</div>
    <div>Item E</div>
    <div>Item F</div>
</div>
```

```html preview
<div class="rl-grid rl-border rl-radius-l rl-gap-l rl-padding-l">
    <div>Product 1</div>
    <div>Product 2</div>
    <div>Product 3</div>
    <div>Product 4</div>
</div>
```

## Radius with frame

Rounded corners on frames create polished presentation areas for centered content.

```html preview
<div class="rl-frame rl-border rl-radius-m rl-padding-m" style="height: 10em;">
    <div>Centered Content</div>
</div>
```

```html preview
<div class="rl-frame rl-border rl-radius-l rl-padding-l" style="height: 12em;">
    <div>
        <h3>Hero Section</h3>
        <p>With rounded corners</p>
    </div>
</div>
```

```html preview
<div class="rl-frame rl-border rl-radius-xl rl-padding-xl" style="height: 15em;">
    <div>Large radius frame</div>
</div>
```

## Radius on individual items

Radius can be applied to individual items within containers for varied visual effects.

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Small radius item</div>
    <div class="rl-border rl-radius-m rl-padding-m">Medium radius item</div>
    <div class="rl-border rl-radius-l rl-padding-m">Large radius item</div>
</div>
```

```html preview
<div class="rl-grid rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Card A</div>
    <div class="rl-border rl-radius-m rl-padding-m">Card B</div>
    <div class="rl-border rl-radius-l rl-padding-m">Card C</div>
    <div class="rl-border rl-radius-xl rl-padding-m">Card D</div>
</div>
```

```html preview
<div class="rl-row rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-s">Tag 1</div>
    <div class="rl-border rl-radius-s rl-padding-s">Tag 2</div>
    <div class="rl-border rl-radius-s rl-padding-s">Tag 3</div>
    <div class="rl-border rl-radius-s rl-padding-s">Tag 4</div>
</div>
```

## Radius size comparison

Visual comparison of all radius sizes on the same layout type:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-0 rl-padding-m">
        No radius (0) - Square corners
    </div>
    <div class="rl-border rl-radius-xs rl-padding-m">
        Extra small (xs) - 0.125rem
    </div>
    <div class="rl-border rl-radius-s rl-padding-m">
        Small (s) - 0.25rem
    </div>
    <div class="rl-border rl-radius-m rl-padding-m">
        Medium (m) - 0.5rem
    </div>
    <div class="rl-border rl-radius-l rl-padding-m">
        Large (l) - 1rem
    </div>
    <div class="rl-border rl-radius-xl rl-padding-m">
        Extra large (xl) - 1.5rem
    </div>
    <div class="rl-border rl-radius-2xl rl-padding-m">
        Double extra large (2xl) - 2.25rem
    </div>
</div>
```

## Nested containers with varying radius

Different radius values at different nesting levels create visual hierarchy and depth.

```html preview
<div class="rl-column rl-border rl-radius-l rl-gap-m rl-padding-l">
    <div>Outer container with large radius</div>
    <div class="rl-column rl-border rl-radius-s rl-gap-s rl-padding-m">
        <div>Nested container with small radius</div>
        <div>Creates visual hierarchy</div>
    </div>
</div>
```

```html preview
<div class="rl-column rl-border rl-radius-xl rl-gap-l rl-padding-xl">
    <div class="rl-row rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Tag A</div>
        <div>Tag B</div>
        <div>Tag C</div>
    </div>
    <div class="rl-row rl-justify-between rl-border rl-radius-m rl-gap-m rl-padding-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

## Complex layouts with radius

Radius combined with other utilities creates polished UI components.

```html preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-padding-m">Header Section</div>
    <div class="rl-divider"></div>
    <div class="rl-column rl-gap-s rl-padding-m">
        <div>Content Line 1</div>
        <div>Content Line 2</div>
        <div>Content Line 3</div>
    </div>
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
        <div class="rl-width-fill">Actions</div>
    </div>
    <div class="rl-grid rl-border rl-radius-m rl-gap-m rl-padding-l">
        <div>Widget 1</div>
        <div>Widget 2</div>
        <div>Widget 3</div>
        <div>Widget 4</div>
    </div>
</div>
```

## Card layouts with radius

Rounded corners on the cards of a grid.

```html preview
<div class="rl-grid rl-gap-m">
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <h3>Card Title 1</h3>
        <p>Card content goes here.</p>
        <div class="rl-row rl-gap-s">
            <div>Tag</div>
            <div>Label</div>
        </div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <h3>Card Title 2</h3>
        <p>Card content goes here.</p>
        <div class="rl-row rl-gap-s">
            <div>Tag</div>
            <div>Label</div>
        </div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-m rl-gap-s">
        <h3>Card Title 3</h3>
        <p>Card content goes here.</p>
        <div class="rl-row rl-gap-s">
            <div>Tag</div>
            <div>Label</div>
        </div>
    </div>
</div>
```

## Radius with different border radii

Combining varying radius values creates distinct visual styles.

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-m">Subtle rounded corners</div>
    <div class="rl-border rl-radius-l rl-padding-m">Prominent rounded corners</div>
    <div class="rl-border rl-radius-2xl rl-padding-m">Very rounded corners</div>
</div>
```

```html preview
<div class="rl-row rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-s">Tag</div>
    <div class="rl-border rl-radius-m rl-padding-s">Chip</div>
    <div class="rl-border rl-radius-xl rl-padding-s">Pill</div>
    <div class="rl-border rl-radius-2xl rl-padding-m">Button</div>
</div>
```

## Menu and navigation with radius

Rounded corners soften navigation components and menus.

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
<div class="rl-row rl-border rl-radius-l rl-gap-m rl-padding-m">
    <div>Logo</div>
    <div class="rl-row rl-gap-m rl-width-fill">
        <div>Home</div>
        <div>Products</div>
        <div>About</div>
        <div>Contact</div>
    </div>
</div>
```

## Panels and sections with radius

Rounded panels create distinct, organized sections in layouts.

```html preview
<div class="rl-column rl-gap-l">
    <div class="rl-column rl-border rl-radius-m rl-padding-l rl-gap-m">
        <h3>Profile Information</h3>
        <div class="rl-column rl-gap-s">
            <div>Name: John Doe</div>
            <div>Email: john@example.com</div>
            <div>Role: Developer</div>
        </div>
    </div>
    <div class="rl-column rl-border rl-radius-m rl-padding-l rl-gap-m">
        <h3>Account Settings</h3>
        <div class="rl-column rl-gap-s">
            <div>Theme: Auto</div>
            <div>Language: English</div>
            <div>Notifications: On</div>
        </div>
    </div>
</div>
```

## Radius for different use cases

Different radius sizes for different component types:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-radius-s rl-padding-s">
        Small radius - Subtle, for compact UI elements
    </div>
    <div class="rl-border rl-radius-m rl-padding-m">
        Medium radius - Balanced, for standard cards and containers
    </div>
    <div class="rl-border rl-radius-l rl-padding-l">
        Large radius - Prominent, for hero sections and featured content
    </div>
    <div class="rl-border rl-radius-2xl rl-padding-xl">
        Extra large radius - Bold, for special emphasis or pill shapes
    </div>
</div>
```

## Web components

`rl-radius-*` is an attribute of `<rl-column>`, `<rl-row>`, `<rl-grid>`, `<rl-frame>` and `<rl-div>`:

```html
<rl-div rl-border rl-radius-m>...</rl-div>
```
