---
title: "Shadows"
description: "Relayout names a scale of shadows, from extra small to extra large, plus an inner shadow and one to remove a shadow. They are optional: nothing changes on a page until you add a class."
---

Class: `rl-shadow-*`

Relayout names a scale of shadows, from extra small to extra large, plus an inner shadow and one that removes a shadow. The classes are optional: nothing changes on a page until you add one.

## Shadow sizes

### `rl-shadow-*`

Apply class `rl-shadow-*` to an element, where `*` can be `xs`, `s`, `m`, `l`, `xl`, `inner`, or `none`.

| Class | Shadow |
|---|---|
| `rl-shadow-xs` | `0 1px 2px hsl(0 0% 0% / 0.08)` |
| `rl-shadow-s` | `0 1px 4px hsl(0 0% 0% / 0.12)` |
| `rl-shadow-m` | `0 2px 8px hsl(0 0% 0% / 0.16)` |
| `rl-shadow-l` | `0 4px 16px hsl(0 0% 0% / 0.20)` |
| `rl-shadow-xl` | `0 8px 32px hsl(0 0% 0% / 0.24)` |
| `rl-shadow-inner` | `inset 0 1px 3px hsl(0 0% 0% / 0.12)` |
| `rl-shadow-none` | No shadow |

```html preview
<div class="rl-row rl-gap-l rl-padding-l rl-bg-surface-alt rl-radius-s">
    <div class="rl-shadow-xs rl-bg-surface rl-color-text rl-padding-m rl-radius-s">xs</div>
    <div class="rl-shadow-s rl-bg-surface rl-color-text rl-padding-m rl-radius-s">s</div>
    <div class="rl-shadow-m rl-bg-surface rl-color-text rl-padding-m rl-radius-s">m</div>
    <div class="rl-shadow-l rl-bg-surface rl-color-text rl-padding-m rl-radius-s">l</div>
    <div class="rl-shadow-xl rl-bg-surface rl-color-text rl-padding-m rl-radius-s">xl</div>
    <div class="rl-shadow-inner rl-bg-surface rl-color-text rl-padding-m rl-radius-s">inner</div>
</div>
```

A shadow shows outside the element, so leave room around it: a parent with `rl-scroll` clips the shadow of what it contains.

## Customizing

Every shadow is a CSS variable, such as `--rl-shadow-m`. Override it on `:root`:

```css
:root {
    --rl-shadow-m: 0 2px 12px hsl(220 40% 20% / 0.2);
}
```

## Web components

`rl-shadow-*` is an attribute of `<rl-column>`, `<rl-row>`, `<rl-grid>`, `<rl-frame>` and `<rl-div>`: `<rl-div rl-shadow-m rl-padding-m>`.
