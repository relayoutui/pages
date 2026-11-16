---
title: "Palette"
description: "Relayout names colors as roles, each with a light and a dark value, and has classes for backgrounds, text and gradients. Nothing changes until you add one."
head:
  - tag: title
    content: "Relayout palette: color roles for light and dark themes"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout palette: color roles for light and dark themes"
---

Classes: `rl-bg-*`, `rl-color-*`, `rl-gradient-*`

Relayout names the common colors as roles, such as `primary`, `danger` and `surface`. Each role has a light and a dark value, and the dark one applies when the visitor's system uses a dark color scheme. The classes are optional: nothing changes on a page until you add one.

## Roles

| Role | For | Light | Dark |
|---|---|---|---|
| `primary` | The main brand color | hsl(215, 80%, 45%) | hsl(215, 85%, 65%) |
| `secondary` | A second brand color | hsl(260, 50%, 50%) | hsl(260, 60%, 70%) |
| `accent` | Highlights | hsl(30, 90%, 50%) | hsl(30, 90%, 60%) |
| `success` | Done, saved, valid | hsl(142, 60%, 35%) | hsl(142, 60%, 50%) |
| `warning` | Take care | hsl(38, 95%, 45%) | hsl(38, 95%, 60%) |
| `danger` | Errors, destructive actions | hsl(0, 70%, 50%) | hsl(0, 75%, 65%) |
| `info` | Neutral notices | hsl(200, 75%, 45%) | hsl(200, 80%, 60%) |
| `surface` | The page or panel background | hsl(0, 0%, 100%) | hsl(0, 0%, 12%) |
| `surface-alt` | A second background, for contrast | hsl(0, 0%, 96%) | hsl(0, 0%, 18%) |
| `text` | Body text | hsl(0, 0%, 10%) | hsl(0, 0%, 95%) |
| `muted` | Secondary text, and an icon that draws in the text color | hsl(0, 0%, 45%) | hsl(0, 0%, 65%) |

As text on `surface`, every role reaches 4.5:1 in the dark theme. In the light theme `primary`, `secondary`, `danger`, `text` and `muted` do, and `accent` (2.7:1), `success` (4.1), `warning` (2.6) and `info` (3.6) don't: use those four for fills, borders and marks, and keep text in the others. The ratios on `surface-alt` are lower.

## Background

### `rl-bg-*`

Apply class `rl-bg-*` to set the background color, where `*` can be `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `surface`, or `surface-alt`.

The class sets only the background, so the text color stays as it is. Pick it yourself, for example with `rl-color-text` on a surface. The roles are mid-tones, and no one text color reads on all of them in both themes, so the examples put each name on a `surface` chip.

```html preview
<div class="rl-row rl-gap-s">
    <div class="rl-bg-primary rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">primary</span></div>
    <div class="rl-bg-secondary rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">secondary</span></div>
    <div class="rl-bg-accent rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">accent</span></div>
    <div class="rl-bg-success rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">success</span></div>
    <div class="rl-bg-warning rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">warning</span></div>
    <div class="rl-bg-danger rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">danger</span></div>
    <div class="rl-bg-info rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">info</span></div>
</div>
```

```html preview
<div class="rl-row rl-gap-s">
    <div class="rl-bg-surface rl-color-text rl-border rl-padding-m rl-radius-s">surface</div>
    <div class="rl-bg-surface-alt rl-color-text rl-border rl-padding-m rl-radius-s">surface-alt</div>
</div>
```

## Text color

### `rl-color-*`

Apply class `rl-color-*` to set the text color, where `*` can be `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `text`, or `muted`.

```html preview
<div class="rl-column rl-gap-s rl-bg-surface rl-border rl-padding-m rl-radius-s">
    <div class="rl-color-text">text</div>
    <div class="rl-color-muted">muted</div>
    <div class="rl-color-primary">primary</div>
    <div class="rl-color-secondary">secondary</div>
    <div class="rl-color-accent">accent</div>
    <div class="rl-color-success">success</div>
    <div class="rl-color-warning">warning</div>
    <div class="rl-color-danger">danger</div>
    <div class="rl-color-info">info</div>
</div>
```

## Gradients

### `rl-gradient-*`

Apply class `rl-gradient-*` to set a gradient as the background image, where `*` can be `primary`, `accent`, `subtle`, `warm`, or `cool`.

`primary`, `accent` and `subtle` are built from the roles above, so they follow the dark values. `warm` and `cool` use fixed colors and look the same in both schemes.

```html preview
<div class="rl-row rl-gap-s">
    <div class="rl-gradient-primary rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">primary</span></div>
    <div class="rl-gradient-accent rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">accent</span></div>
    <div class="rl-gradient-subtle rl-color-text rl-border rl-padding-m rl-radius-s">subtle</div>
    <div class="rl-gradient-warm rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">warm</span></div>
    <div class="rl-gradient-cool rl-padding-m rl-radius-s"><span class="rl-bg-surface rl-color-text rl-padding-xs rl-radius-xs">cool</span></div>
</div>
```

## Customizing

Every role is a CSS variable, such as `--rl-color-primary`. Override it on `:root` for the light value, and inside `prefers-color-scheme: dark` for the dark one. The gradients built from the roles follow:

```css
:root {
    --rl-color-primary: hsl(160, 70%, 35%);
}

@media (prefers-color-scheme: dark) {
    :root {
        --rl-color-primary: hsl(160, 70%, 55%);
    }
}
```

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-bg-*`, `rl-color-*` and `rl-gradient-*` go on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-bg-primary rl-padding-m">...</rl-div>
```
