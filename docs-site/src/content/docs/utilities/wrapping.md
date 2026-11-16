---
title: "Wrapping"
description: "Wrapping utilities choose what a row does when its elements don't fit: stay on one line, scroll sideways, or wrap in reverse order. By default a row wraps."
head:
  - tag: title
    content: "Relayout wrapping: no wrap, sideways scroll and reverse wrap"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout wrapping: no wrap, sideways scroll and reverse wrap"
---

Classes: `rl-nowrap`, `rl-nowrap-scroll`, `rl-wrap-reverse`

A row wraps its elements onto the next line when they don't fit. These classes change what it does instead:

- `rl-nowrap` keeps the elements on one line (`flex-wrap: nowrap`). They shrink down to their content, and overflow the row beyond that. An element with `rl-width-fill` can get narrower than its content.
- `rl-nowrap-scroll` keeps the elements on one line and scrolls the row sideways (`overflow-x: auto`). Each element keeps its width, and anything that overflows the row vertically is hidden (`overflow-y: hidden`).
- `rl-wrap-reverse` wraps in reverse: a new line goes above the first, not below.

They are for a row. A row with `rl-nowrap-scroll` is a box that scrolls, so it keeps the browser's focus ring where the browser lets the keyboard reach it ([Outline](/docs/extras/outline/)).

## Wrapping with row

Rows naturally wrap by default. Wrapping utilities control this behavior.

### Default wrapping (wrap)

```html preview debug
<div class="rl-row rl-gap-m">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
    <div>TypeScript</div>
    <div>JavaScript</div>
</div>
```

### `rl-nowrap`

Prevents wrapping, causing overflow:

```html preview debug
<div class="rl-row rl-gap-m rl-nowrap">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
    <div>TypeScript</div>
    <div>JavaScript</div>
</div>
```

### `rl-nowrap-scroll`

Prevents wrapping and adds horizontal scrolling:

```html preview debug
<div class="rl-row rl-gap-m rl-nowrap-scroll">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
    <div>TypeScript</div>
    <div>JavaScript</div>
    <div>Python</div>
    <div>Ruby</div>
</div>
```

Scroll horizontally to see all items →

### `rl-wrap-reverse`

Wraps in reverse order (bottom to top):

```html preview debug
<div class="rl-row rl-gap-m rl-wrap-reverse">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
    <div>Tag 5</div>
    <div>Tag 6</div>
    <div>Tag 7</div>
    <div>Tag 8</div>
</div>
```

New lines appear above instead of below.

## Horizontal navigation menus

Wrapping utilities create different navigation patterns.

### Wrapping navigation (default)

```html preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
    <div>Home</div>
    <div>Products</div>
    <div>Services</div>
    <div>About Us</div>
    <div>Contact</div>
    <div>Blog</div>
    <div>Support</div>
</div>
```

### Scrollable navigation

```html preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-nowrap-scroll">
    <div>Home</div>
    <div>Products</div>
    <div>Services</div>
    <div>About Us</div>
    <div>Contact</div>
    <div>Blog</div>
    <div>Support</div>
    <div>Documentation</div>
    <div>Community</div>
</div>
```

## Tag and chip lists

Different wrapping behaviors for tag collections.

### Wrapping tags (recommended)

```html preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m">
    <div class="rl-border rl-padding-s rl-radius-s">JavaScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">TypeScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">React</div>
    <div class="rl-border rl-padding-s rl-radius-s">Vue</div>
    <div class="rl-border rl-padding-s rl-radius-s">Angular</div>
    <div class="rl-border rl-padding-s rl-radius-s">Svelte</div>
    <div class="rl-border rl-padding-s rl-radius-s">Node.js</div>
</div>
```

### Scrollable tags

```html preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-nowrap-scroll">
    <div class="rl-border rl-padding-s rl-radius-s">JavaScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">TypeScript</div>
    <div class="rl-border rl-padding-s rl-radius-s">React</div>
    <div class="rl-border rl-padding-s rl-radius-s">Vue</div>
    <div class="rl-border rl-padding-s rl-radius-s">Angular</div>
    <div class="rl-border rl-padding-s rl-radius-s">Svelte</div>
    <div class="rl-border rl-padding-s rl-radius-s">Node.js</div>
    <div class="rl-border rl-padding-s rl-radius-s">Deno</div>
</div>
```

## Toolbar layouts

Toolbars benefit from nowrap-scroll for many actions.

```html preview
<div class="rl-row rl-gap-m rl-padding-m rl-border">
    <div style="font-weight: bold;">Document.txt</div>
    <div class="rl-row rl-gap-s rl-nowrap-scroll rl-width-fill">
        <div class="rl-border rl-padding-s rl-radius-s">Save</div>
        <div class="rl-border rl-padding-s rl-radius-s">Undo</div>
        <div class="rl-border rl-padding-s rl-radius-s">Redo</div>
        <div class="rl-border rl-padding-s rl-radius-s">Cut</div>
        <div class="rl-border rl-padding-s rl-radius-s">Copy</div>
        <div class="rl-border rl-padding-s rl-radius-s">Paste</div>
        <div class="rl-border rl-padding-s rl-radius-s">Format</div>
    </div>
</div>
```

## Tab navigation

Scrollable tabs for interfaces with many tabs.

```html preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-row rl-gap-0 rl-nowrap-scroll rl-padding-s">
        <div class="rl-padding-m" style="border-bottom: 2px solid currentColor;">Tab 1</div>
        <div class="rl-padding-m">Tab 2</div>
        <div class="rl-padding-m">Tab 3</div>
        <div class="rl-padding-m">Tab 4</div>
        <div class="rl-padding-m">Tab 5</div>
        <div class="rl-padding-m">Tab 6</div>
        <div class="rl-padding-m">Tab 7</div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-padding-l">Tab content area</div>
</div>
```

## Button groups

Different wrapping strategies for action buttons.

### Wrapping buttons

```html preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m">
    <div class="rl-border rl-padding-m rl-radius-s">New</div>
    <div class="rl-border rl-padding-m rl-radius-s">Open</div>
    <div class="rl-border rl-padding-m rl-radius-s">Save</div>
    <div class="rl-border rl-padding-m rl-radius-s">Export</div>
    <div class="rl-border rl-padding-m rl-radius-s">Share</div>
</div>
```

### Non-wrapping buttons

```html preview
<div class="rl-row rl-gap-s rl-padding-m rl-border rl-radius-m rl-nowrap">
    <div class="rl-border rl-padding-m rl-radius-s">New</div>
    <div class="rl-border rl-padding-m rl-radius-s">Open</div>
    <div class="rl-border rl-padding-m rl-radius-s">Save</div>
</div>
```

## Comparison: wrap vs nowrap vs nowrap-scroll

Visual comparison of all three behaviors:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-column rl-gap-s">
        <div>Default (wrap):</div>
        <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-s">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>nowrap (overflow):</div>
        <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-s rl-nowrap">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>nowrap-scroll (scrollable):</div>
        <div class="rl-row rl-gap-s rl-border rl-padding-m rl-radius-s rl-nowrap-scroll">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
        </div>
    </div>
</div>
```

## Combining with other utilities

Wrapping utilities work well with gap, padding, align, and justify.

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-l rl-border rl-radius-m rl-justify-center rl-nowrap-scroll">
        <div>Action 1</div>
        <div>Action 2</div>
        <div>Action 3</div>
        <div>Action 4</div>
        <div>Action 5</div>
    </div>
    <div class="rl-row rl-gap-l rl-padding-m rl-border rl-radius-m rl-nowrap">
        <div>Label</div>
        <div class="rl-width-fill">Content area</div>
    </div>
</div>
```

## Responsive navigation pattern

Combining wrapping with width constraints:

```html preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m rl-width-l rl-center-self">
    <div class="rl-row rl-gap-s">
        <div class="rl-frame" style="height: 2em; width: 2em; background: #e0e0e0; border-radius: 0.25rem;"></div>
        <div style="font-weight: bold;">Brand</div>
    </div>
    <div class="rl-row rl-gap-m rl-nowrap-scroll rl-width-fill">
        <div>Products</div>
        <div>Solutions</div>
        <div>Resources</div>
        <div>Documentation</div>
        <div>Community</div>
        <div>Support</div>
    </div>
</div>
```

## Card carousels

Horizontal scrolling card layouts:

```html preview
<div class="rl-column rl-gap-m rl-border rl-radius-m rl-padding-m">
    <div style="font-weight: bold;">Featured Items</div>
    <div class="rl-row rl-gap-m rl-nowrap-scroll">
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 1</div>
            <div>Featured content</div>
        </div>
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 2</div>
            <div>Featured content</div>
        </div>
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 3</div>
            <div>Featured content</div>
        </div>
        <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
            <div>Card 4</div>
            <div>Featured content</div>
        </div>
    </div>
</div>
```

## Choosing

- The default, wrapping, suits links and tags, which should all stay visible.
- `rl-nowrap` suits a toolbar that must stay on one line, with `rl-width-fill` on the element that gives way.
- `rl-nowrap-scroll` suits tabs, long toolbars and carousels, which the user scrolls.
- `rl-wrap-reverse` suits a layout that grows upward, such as one anchored to the bottom.

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-nowrap`, `rl-nowrap-scroll` and `rl-wrap-reverse` go on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-row rl-nowrap-scroll rl-gap-s">...</rl-div>
```
