---
title: "Palette"
description: "Relayout names nine colors as roles, each with a light and a dark value that follows the page's color-scheme, with classes for backgrounds and text."
head:
  - tag: title
    content: "Relayout palette: color roles for light and dark themes"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout palette: color roles for light and dark themes"
---

Classes: `rl-bg-*`, `rl-color-*`

Relayout names the common colors as roles, such as `primary`, `danger` and `surface`. Each role has a light and a dark value. The classes are optional: nothing changes on a page until you add one.

## Light and dark

The roles are light until the page sets a `color-scheme`. To follow the system's light or dark mode, write this once in the page's CSS:

```css
:root {
    color-scheme: light dark;
}
```

A role takes its dark value wherever the element that uses it has a dark `color-scheme`, so the same property makes a theme switch or a single dark panel:

- **A theme switch:** set `color-scheme` on `html`, which wins over the system. From a toggle, `document.documentElement.style.colorScheme = 'dark'`, or `'light'`, or `''` to follow the system again.
- **A dark panel in a light page:** `color-scheme: dark` on the panel. The roles inside it are dark, and the rest of the page stays light.

```html preview
<div class="rl-row rl-gap-m">
    <div class="rl-column rl-gap-xs rl-bg-surface rl-color-primary rl-border rl-padding-m rl-radius-s" style="color-scheme: light;">
        <strong>Light panel</strong>
        <span class="rl-color-muted">color-scheme: light</span>
    </div>
    <div class="rl-column rl-gap-xs rl-bg-surface rl-color-primary rl-border rl-padding-m rl-radius-s" style="color-scheme: dark;">
        <strong>Dark panel</strong>
        <span class="rl-color-muted">color-scheme: dark</span>
    </div>
</div>
```

Relayout never sets `color-scheme` itself, so it doesn't change the browser's own colors: the page's background and text, its form controls and its scrollbars keep what the page gives them.

The roles get their two values from `light-dark()`, which browsers have had since 2024: Chrome and Edge 123, Firefox 120, Safari 17.5. An older browser shows the light values.

## Roles

| Role | For | Light | Dark |
|---|---|---|---|
| `primary` | The text color, and a band of inverted color as a fill | hsl(0, 0%, 10%) | hsl(0, 0%, 95%) |
| `muted` | Secondary text, and an icon that draws in the text color | hsl(0, 0%, 45%) | hsl(0, 0%, 65%) |
| `accent` | The brand color: highlights and marks | hsl(30, 90%, 50%) | hsl(30, 90%, 60%) |
| `success` | Done, saved, valid | hsl(142, 60%, 35%) | hsl(142, 60%, 50%) |
| `warning` | Take care | hsl(38, 95%, 45%) | hsl(38, 95%, 60%) |
| `danger` | Errors, destructive actions | hsl(0, 70%, 50%) | hsl(0, 75%, 65%) |
| `info` | Neutral notices | hsl(200, 75%, 45%) | hsl(200, 80%, 60%) |
| `surface` | The page or panel background, and the text on a colored fill | hsl(0, 0%, 100%) | hsl(0, 0%, 12%) |
| `surface-alt` | A second background, for contrast | hsl(0, 0%, 96%) | hsl(0, 0%, 18%) |

As text on `surface`, every role reaches 4.5:1 in the dark theme. In the light theme `primary` (17.4:1), `muted` (4.7) and `danger` (4.9) do, and `accent` (2.7), `success` (4.1), `warning` (2.6) and `info` (3.6) don't: use those four for fills, borders and marks, and keep text in the others. The ratios on `surface-alt` are lower.

## Background

### `rl-bg-*`

Apply class `rl-bg-*` to set the background color, where `*` can be `primary`, `accent`, `success`, `warning`, `danger`, `info`, `surface`, or `surface-alt`.

On a colored role, the class also sets the text to the `surface` color: white in the light theme and near black in the dark one. So `rl-bg-primary` is an inverted band, dark with light text in the light theme. An `rl-color-*` class beside it sets another text color. `rl-bg-surface` and `rl-bg-surface-alt` leave the text color as it is.

```html preview
<div class="rl-column rl-gap-s">
    <div class="rl-bg-primary rl-padding-m rl-radius-s">An inverted band, with rl-bg-primary</div>
    <div class="rl-bg-danger rl-padding-m rl-radius-s">The payment failed. Check the card and try again.</div>
</div>
```

The `surface` text on each fill, measured:

| Fill | Light | Dark |
|---|---|---|
| `primary` | 17.4:1 | 14.7:1 |
| `accent` | 2.7:1 | 7.5:1 |
| `success` | 4.1:1 | 7.8:1 |
| `warning` | 2.6:1 | 9.1:1 |
| `danger` | 4.9:1 | 5.0:1 |
| `info` | 3.6:1 | 7.1:1 |

Text needs 4.5:1. In the light theme the text on `success` and `info` is below it, and on `accent` and `warning` below 3:1, so give text on those fills a dark color, such as `rl-color-primary`, or set lighter values for them. White text stays readable on a fill only up to a lightness that depends on its hue: for 4.5:1, about 61% for a purple, 52% for a red, 46% for a blue, 38% for an orange, 30% for a green and 26% for a yellow. A site whose brand color is light, such as a yellow, a light green or a cyan, puts a dark text color on its fill. Check the ratios of the values your site sets.

The roles are mid-tones, so the swatches below put each name on a `surface` chip:

```html preview
<div class="rl-row rl-gap-s">
    <div class="rl-bg-primary rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">primary</span></div>
    <div class="rl-bg-accent rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">accent</span></div>
    <div class="rl-bg-success rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">success</span></div>
    <div class="rl-bg-warning rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">warning</span></div>
    <div class="rl-bg-danger rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">danger</span></div>
    <div class="rl-bg-info rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">info</span></div>
</div>
```

```html preview
<div class="rl-row rl-gap-s">
    <div class="rl-bg-surface rl-color-primary rl-border rl-padding-m rl-radius-s">surface</div>
    <div class="rl-bg-surface-alt rl-color-primary rl-border rl-padding-m rl-radius-s">surface-alt</div>
</div>
```

## Text color

### `rl-color-*`

Apply class `rl-color-*` to set the text color, where `*` can be `primary`, `muted`, `accent`, `success`, `warning`, `danger`, or `info`.

```html preview
<div class="rl-column rl-gap-s rl-bg-surface rl-border rl-padding-m rl-radius-s">
    <div class="rl-color-primary">primary</div>
    <div class="rl-color-muted">muted</div>
    <div class="rl-color-accent">accent</div>
    <div class="rl-color-success">success</div>
    <div class="rl-color-warning">warning</div>
    <div class="rl-color-danger">danger</div>
    <div class="rl-color-info">info</div>
</div>
```

## Gradients

Relayout has no gradient classes. A gradient is a line of your own CSS, and with the role variables in it, it follows the theme:

```css
.hero {
    background-image: linear-gradient(135deg, var(--rl-color-accent), var(--rl-color-danger));
}
```

```html preview
<div class="rl-padding-l rl-radius-m" style="background-image: linear-gradient(135deg, var(--rl-color-accent), var(--rl-color-danger));">
    <span class="rl-bg-surface rl-color-primary rl-padding-xs rl-radius-xs">accent to danger</span>
</div>
```

## Customizing

Every role is a CSS variable, such as `--rl-color-accent`. Set it on `:root` with `light-dark()`, the light value first, to keep both themes:

```css
:root {
    --rl-color-accent: light-dark(hsl(160, 70%, 35%), hsl(160, 70%, 55%));
}
```

A value without `light-dark()` is the same in both themes. Relayout puts its own `light-dark()` values inside `@supports (color: light-dark(red, blue))`, after a plain light value, for the browsers from before 2024. Do the same with yours if your site supports them.

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-bg-*` and `rl-color-*` go on an [`rl-div`](/docs/web-components/), as on a `div` in the page. The `color-scheme` of the page reaches the shadow root, so the roles there follow it too:

```html
<rl-div class="rl-bg-primary rl-padding-m">...</rl-div>
```
