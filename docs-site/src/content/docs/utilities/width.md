---
title: "Width"
description: "The width utility sets the maximum width of a container, which fills its parent below that, and rl-center-self centers it in its parent."
head:
  - tag: title
    content: "Relayout width: limit a container's width and center it"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout width: limit a container's width and center it"
---

Classes: `rl-width-*`, `rl-center-self`

`rl-width-*` limits an element's width: it sets a `max-width` from the scale, and `width: 100%` below it. The element is as wide as its parent until the parent is wider than the limit. It doesn't center: a limited element sits at the start of its parent, or where the parent's `rl-align-*` and `rl-justify-*` put it. `rl-center-self` centers it.

`rl-width-fill` is not one of the limits: it makes an element take the width a row leaves. In a row that wraps it is at least `--rl-fill-min` wide, 16rem by default, or the row's width when that is less, and moves to a line of its own before it gets narrower. Set the variable to a smaller length to keep it beside the others longer ([The minimum in a row that wraps](/docs/utilities/height/#the-minimum-in-a-row-that-wraps)).

## Sizes

| Class | Size |
|---|---|
| `rl-width-xs` | 20rem (320px) |
| `rl-width-s` | 30rem (480px) |
| `rl-width-m` | 40rem (640px) |
| `rl-width-l` | 48rem (768px) |
| `rl-width-xl` | 64rem (1024px) |
| `rl-width-2xl` | 80rem (1280px) |

Each size is the variable `--rl-width-*`.

## Centering

`rl-center-self` centers an element in its parent horizontally, with `margin-inline: auto`. It works in any parent: a plain block, a column, a row or a grid cell. It goes on the element itself, unlike `rl-align-center` and `rl-justify-center`, which go on the parent and place all of its children. Most previews on this page use both. For how this differs before 0.3.0, see the [changelog](/docs/changelog/).

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs">At the start</div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs rl-center-self">Centered with rl-center-self</div>
</div>
```

```html preview
<div class="rl-column rl-align-end rl-gap-m">
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs">At the end, from the column's rl-align-end</div>
</div>
```

## Width with column

Width utilities help constrain vertical content for better readability.

```html preview
<div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-m rl-center-self">
    <div>This is a column with medium width constraint</div>
    <div>Perfect for text content and articles</div>
    <div>Centered horizontally with rl-center-self</div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs rl-center-self">
        <div>Extra small width</div>
        <div>Narrow column</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-l rl-center-self">
        <div>Large width</div>
        <div>Wider content area</div>
    </div>
</div>
```

## Width with row

Width utilities constrain the wrapping behavior of rows by limiting the available space.

```html preview
<div class="rl-row rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-s rl-center-self">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-xs rl-center-self">
        <div>Narrow</div>
        <div>Row</div>
        <div>Wraps</div>
        <div>Early</div>
    </div>
    <div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-xl rl-center-self">
        <div>Wide</div>
        <div>Row</div>
        <div>More</div>
        <div>Space</div>
        <div>To</div>
        <div>Flow</div>
    </div>
</div>
```

## Width with grid

Width utilities constrain the overall grid container, affecting how many columns can fit.

```html preview
<div class="rl-grid rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-l rl-center-self">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
    <div>Card 4</div>
    <div>Card 5</div>
    <div>Card 6</div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-grid rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-s rl-center-self">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
    </div>
    <div class="rl-grid rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-xl rl-center-self">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
    </div>
</div>
```

## Width with frame

Width utilities can constrain frame containers, which still center their own content.

```html preview
<div class="rl-frame rl-padding-l rl-border rl-radius-m rl-width-m rl-center-self" style="height: 12em;">
    <div>Centered content in medium width frame</div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-frame rl-padding-m rl-border rl-radius-m rl-width-xs rl-center-self" style="height: 10em;">
        <div>Small frame</div>
    </div>
    <div class="rl-frame rl-padding-m rl-border rl-radius-m rl-width-l rl-center-self" style="height: 10em;">
        <div>Large frame with more horizontal space</div>
    </div>
</div>
```

## Visual size comparison

All width sizes shown together for easy comparison:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xs rl-center-self">
        <div>xs (20rem / 320px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-s rl-center-self">
        <div>s (30rem / 480px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-m rl-center-self">
        <div>m (40rem / 640px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-l rl-center-self">
        <div>l (48rem / 768px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-xl rl-center-self">
        <div>xl (64rem / 1024px)</div>
    </div>
    <div class="rl-border rl-padding-m rl-radius-m rl-width-2xl rl-center-self">
        <div>2xl (80rem / 1280px)</div>
    </div>
</div>
```

## Nested containers with varying widths

Demonstrate visual hierarchy through width variation:

```html preview
<div class="rl-column rl-gap-l rl-padding-xl rl-border rl-radius-m rl-width-2xl rl-center-self">
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-xl rl-center-self">
        <div>Extra large container (xl)</div>
        <div class="rl-column rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-l rl-center-self">
            <div>Large container (l)</div>
            <div class="rl-padding-m rl-border rl-radius-m rl-width-m rl-center-self">
                Medium container (m)
            </div>
        </div>
    </div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-padding-m rl-border rl-radius-m rl-width-2xl rl-center-self">
        Full width header (2xl)
    </div>
    <div class="rl-column rl-gap-m rl-width-l rl-center-self">
        <div class="rl-padding-m rl-border rl-radius-m">
            Content area (l)
        </div>
        <div class="rl-padding-m rl-border rl-radius-m rl-width-s rl-center-self">
            Sidebar (s)
        </div>
    </div>
</div>
```

## Complex layouts with width constraints

Width utilities create focused, readable layouts:

```html preview
<div class="rl-column rl-gap-l">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-2xl rl-center-self">
        <div>Logo</div>
        <div class="rl-row rl-gap-m rl-width-fill">
            <div>Home</div>
            <div>Products</div>
            <div>About</div>
        </div>
    </div>
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-l rl-center-self">
        <div>Main Article Content</div>
        <div>Constrained to large width for readability</div>
        <div>Perfect for blog posts and documentation</div>
    </div>
    <div class="rl-grid rl-gap-m rl-width-xl rl-center-self">
        <div class="rl-padding-m rl-border rl-radius-m">Card 1</div>
        <div class="rl-padding-m rl-border rl-radius-m">Card 2</div>
        <div class="rl-padding-m rl-border rl-radius-m">Card 3</div>
    </div>
</div>
```

## Form layouts with width constraints

Width utilities help create focused, scannable forms:

```html preview
<div class="rl-column rl-gap-l rl-padding-l rl-border rl-radius-m rl-width-s rl-center-self">
    <div class="rl-column rl-gap-s">
        <div>Email Address</div>
        <div class="rl-border rl-padding-m rl-radius-s">input field</div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>Password</div>
        <div class="rl-border rl-padding-m rl-radius-s">input field</div>
    </div>
    <div class="rl-row rl-justify-between rl-gap-m">
        <div class="rl-border rl-padding-m rl-radius-m">Cancel</div>
        <div class="rl-border rl-padding-m rl-radius-m">Submit</div>
    </div>
</div>
```

## Card and content layouts

Width utilities create visual structure for cards and content blocks:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m rl-width-m rl-center-self">
        <div style="font-weight: bold;">Featured Article</div>
        <div>This card uses medium width for article previews</div>
        <div class="rl-row rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">Read More</div>
            <div class="rl-border rl-padding-s rl-radius-s">Share</div>
        </div>
    </div>
    <div class="rl-grid rl-gap-m rl-width-xl rl-center-self">
        <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
            <div>Card 1</div>
            <div>Preview text</div>
        </div>
        <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
            <div>Card 2</div>
            <div>Preview text</div>
        </div>
        <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
            <div>Card 3</div>
            <div>Preview text</div>
        </div>
    </div>
</div>
```

## Dashboard and panel layouts

Width utilities organize complex dashboard layouts:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-2xl rl-center-self">
        <div>Dashboard</div>
        <div class="rl-row rl-gap-m rl-width-fill">
            <div>Settings</div>
            <div>Profile</div>
            <div>Logout</div>
        </div>
    </div>
    <div class="rl-column rl-gap-m rl-width-xl rl-center-self">
        <div class="rl-row rl-gap-m">
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-fill">
                <div>Total Users</div>
                <div>1,234</div>
            </div>
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m rl-width-fill">
                <div>Revenue</div>
                <div>$56,789</div>
            </div>
        </div>
        <div class="rl-column rl-gap-s rl-padding-l rl-border rl-radius-m">
            <div>Recent Activity</div>
            <div class="rl-divider"></div>
            <div>Activity item 1</div>
            <div class="rl-divider"></div>
            <div>Activity item 2</div>
        </div>
    </div>
</div>
```

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-width-*` and `rl-center-self` go on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-column rl-width-m rl-center-self">...</rl-div>
```

## Customizing

Override the variables on `:root` to change a size everywhere:

```css
:root {
  --rl-width-xs: 18rem;   /* ~288px */
  --rl-width-s: 28rem;    /* ~448px */
  --rl-width-m: 42rem;    /* ~672px */
  --rl-width-l: 52rem;    /* ~832px */
  --rl-width-xl: 68rem;   /* ~1088px */
  --rl-width-2xl: 84rem;  /* ~1344px */
}
```
