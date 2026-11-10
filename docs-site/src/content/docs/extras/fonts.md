---
title: "Fonts"
description: "Relayout names the common font families, weights, sizes and line heights, and has classes for the usual text styles. They are optional: nothing changes on a page until you add a class."
---

Classes: `rl-font-*`, `rl-text-*`, `rl-textline-*`

Relayout names the common font families, weights, sizes and line heights, and has classes for the usual text styles. The classes are optional: Relayout never sets a font on the page itself, so nothing changes until you add one. A class applies to the element it is on and to what that element contains.

## Families

### `rl-font-*`

Apply class `rl-font-*` to set the font family, where `*` can be `sans`, `serif`, `mono`, `sans-alt`, `serif-alt`, or `mono-alt`.

| Class | Font stack |
|---|---|
| `rl-font-sans` | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| `rl-font-serif` | `Georgia, 'Times New Roman', Times, serif` |
| `rl-font-mono` | `ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace` |

The three `-alt` classes start out as the same stacks. Override them to add a second family.

```html preview
<div class="rl-column rl-gap-s">
    <div class="rl-font-sans">Sans: The quick brown fox jumps over the lazy dog</div>
    <div class="rl-font-serif">Serif: The quick brown fox jumps over the lazy dog</div>
    <div class="rl-font-mono">Mono: The quick brown fox jumps over the lazy dog</div>
</div>
```

## Weight

### `rl-font-*`

Apply class `rl-font-bold` (700), `rl-font-medium` (500), or `rl-font-regular` (400).

```html preview
<div class="rl-column rl-gap-s">
    <div class="rl-font-bold">Bold</div>
    <div class="rl-font-medium">Medium</div>
    <div class="rl-font-regular">Regular</div>
</div>
```

## Size

### `rl-text-*`

Apply class `rl-text-*` to set the font size, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

| Class | Size |
|---|---|
| `rl-text-xs` | 0.625rem (10px) |
| `rl-text-s` | 0.75rem (12px) |
| `rl-text-m` | 0.875rem (14px) |
| `rl-text-l` | 1rem (16px) |
| `rl-text-xl` | 1.5rem (24px) |
| `rl-text-2xl` | 2.25rem (36px) |

```html preview
<div class="rl-column rl-gap-s">
    <div class="rl-text-xs">Extra small</div>
    <div class="rl-text-s">Small</div>
    <div class="rl-text-m">Medium</div>
    <div class="rl-text-l">Large</div>
    <div class="rl-text-xl">Extra large</div>
    <div class="rl-text-2xl">Double extra large</div>
</div>
```

## Line height

### `rl-textline-*`

Apply class `rl-textline-tight` (1.25), `rl-textline-normal` (1.5), or `rl-textline-loose` (2).

```html preview
<div class="rl-row rl-gap-l rl-align-start">
    <div class="rl-textline-tight" style="width: 12em;">Tight: the lines of this text sit close together.</div>
    <div class="rl-textline-normal" style="width: 12em;">Normal: the lines of this text sit at the usual distance.</div>
    <div class="rl-textline-loose" style="width: 12em;">Loose: the lines of this text sit far apart.</div>
</div>
```

## Text styles

These classes style the text of the element they are on.

| Classes | Effect |
|---|---|
| `rl-text-italic`, `rl-text-underline`, `rl-text-strike` | Italic, underline, line through |
| `rl-text-left`, `rl-text-center`, `rl-text-right` | Text alignment |
| `rl-text-uppercase`, `rl-text-lowercase`, `rl-text-capitalize` | Letter case |
| `rl-text-wrap`, `rl-text-nowrap` | Wrap the text, or keep it on one line |
| `rl-text-truncate` | One line, with an ellipsis where it is cut off. The element needs a width |
| `rl-text-muted` | Dims the whole element to half its opacity |

`rl-text-muted` dims everything in the element. To give text a muted color instead, use `rl-color-text-muted` from the [palette](/docs/extras/palette/).

```html preview
<div class="rl-column rl-gap-s" style="width: 16em;">
    <div class="rl-text-italic">Italic</div>
    <div class="rl-text-underline">Underline</div>
    <div class="rl-text-strike">Strike</div>
    <div class="rl-text-center">Centered</div>
    <div class="rl-text-uppercase">Uppercase</div>
    <div class="rl-text-truncate">A long line that is cut off with an ellipsis where it no longer fits</div>
    <div class="rl-text-muted">Muted</div>
</div>
```

## Customizing

Families and sizes are CSS variables: `--rl-font-sans`, `--rl-font-serif`, `--rl-font-mono`, their `-alt` versions, and `--rl-text-xs` to `--rl-text-2xl`. Override them on `:root`:

```css
:root {
    --rl-font-sans: 'Inter', system-ui, sans-serif;
    --rl-text-m: 0.9375rem;
}
```

## Web components

The font and text classes have no attribute form. Put them as classes on the element, or on an element inside it.
