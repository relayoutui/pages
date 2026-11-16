---
title: "Sticky"
description: "rl-sticky-top keeps a header at the top of the window, or of an area that scrolls, while the content below it scrolls under it, with one class."
head:
  - tag: title
    content: "Relayout sticky: a header that stays while the page scrolls"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout sticky: a header that stays while the page scrolls"
---

Class: `rl-sticky-top`

`rl-sticky-top` keeps an element at the top while the content below it scrolls: `position: sticky; top: 0; z-index: 1`. It sticks to the nearest box that scrolls: the window, for a page header, or an `rl-scroll` area, for the header cells of a table inside it.

Give the element a background of its own, such as `rl-bg-surface`, or the content shows through it as it scrolls under.

## A header that stays

```html
<body>
    <header class="rl-sticky-top rl-bg-surface rl-row rl-justify-between rl-padding-m">…</header>
    <main>…</main>
</body>
```

The window's scrollbar runs the full height of the window, beside the header. A preview can't scroll the window, so the previews on this page scroll an area of their own, which the header sticks to the same way:

```html preview debug
<div class="rl-column rl-scroll" style="height: 12em;">
    <header class="rl-sticky-top rl-bg-surface rl-row rl-justify-between rl-gap-m rl-padding-m rl-border-bottom">
        <strong>Acme</strong>
        <nav class="rl-row rl-gap-m">
            <a href="#">Docs</a>
            <a href="#">Pricing</a>
        </nav>
    </header>
    <main class="rl-column rl-gap-m rl-padding-m">
        <p>Scroll this area: the header stays at its top.</p>
        <div class="rl-border rl-padding-m" style="position: relative;">A card with position: relative, as for a badge, scrolls under the header.</div>
        <p>More content, to scroll.</p>
        <p>More content, to scroll.</p>
        <p>The end of the content.</p>
    </main>
</div>
```

`z-index: 1` keeps content that has a position of its own, such as a card with `position: relative` for a badge, under the header as it scrolls. Without it, that card would scroll over the header. The page's dropdowns and dialogs, which set a higher `z-index`, stay above it.

## Where it stops sticking

A sticky element stays inside its parent: it sticks while its parent is in view, and scrolls away with the end of it. So keep it a sibling of the content that scrolls under it. In a wrapper with only the elements above the content, the whole wrapper scrolls away.

### A subheader that stays

With `rl-sticky-top` on the subheader alone, the header scrolls away and the subheader holds at the top. The header, the subheader and the content are siblings:

```html preview debug
<div class="rl-column rl-scroll" style="height: 12em;">
    <header class="rl-bg-surface-alt rl-padding-m">Acme, which scrolls away</header>
    <nav class="rl-sticky-top rl-bg-surface rl-row rl-gap-m rl-padding-m rl-border-bottom">
        <a href="#">Overview</a>
        <a href="#">Activity</a>
        <a href="#">Settings</a>
    </nav>
    <main class="rl-column rl-gap-m rl-padding-m">
        <p>Scroll this area: the header goes, and the subheader stays.</p>
        <p>More content, to scroll.</p>
        <p>More content, to scroll.</p>
        <p>The end of the content.</p>
    </main>
</div>
```

### Both stay

With both sticky, the second needs a `top` of its own, the height of the first, from your own CSS or a variable. Without it, the second sticks at the top too, and covers the first:

```html preview debug
<div class="rl-column rl-scroll" style="height: 12em; --header-height: 3rem;">
    <header class="rl-sticky-top rl-bg-surface-alt rl-padding-m" style="height: var(--header-height);">Acme</header>
    <nav class="rl-sticky-top rl-bg-surface rl-row rl-gap-m rl-padding-m rl-border-bottom" style="top: var(--header-height);">
        <a href="#">Overview</a>
        <a href="#">Activity</a>
        <a href="#">Settings</a>
    </nav>
    <main class="rl-column rl-gap-m rl-padding-m">
        <p>Scroll this area: both stay, one under the other.</p>
        <p>More content, to scroll.</p>
        <p>More content, to scroll.</p>
        <p>The end of the content.</p>
    </main>
</div>
```

## Table header cells

In a table inside an `rl-scroll` area, `rl-sticky-top` on the `<th>` cells keeps them at the top of the area:

```html preview
<div class="rl-scroll rl-border" style="height: 10em;">
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th class="rl-sticky-top rl-bg-surface-alt rl-padding-s rl-text-start">Invoice</th>
                <th class="rl-sticky-top rl-bg-surface-alt rl-padding-s rl-text-end">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr><td class="rl-padding-s">1042</td><td class="rl-padding-s rl-text-end">120.00</td></tr>
            <tr><td class="rl-padding-s">1043</td><td class="rl-padding-s rl-text-end">75.50</td></tr>
            <tr><td class="rl-padding-s">1044</td><td class="rl-padding-s rl-text-end">310.00</td></tr>
            <tr><td class="rl-padding-s">1045</td><td class="rl-padding-s rl-text-end">48.20</td></tr>
            <tr><td class="rl-padding-s">1046</td><td class="rl-padding-s rl-text-end">99.90</td></tr>
            <tr><td class="rl-padding-s">1047</td><td class="rl-padding-s rl-text-end">12.00</td></tr>
        </tbody>
    </table>
</div>
```

## A header outside the area that scrolls

The other design leaves nothing to stick: a column as tall as the window, the header, and below it the area that scrolls, with `rl-height-fill rl-scroll`. The header stays because it is outside that area, and the scrollbar starts under it. The [app shell](/docs/composition/#app-shell-header-and-sidebar-stay-the-sidebar-and-main-area-scroll) recipe is built this way.

## Usage notes

- An `rl-scroll` area between the element and the window is what it sticks to, so a header inside an area that scrolls stays at the top of that area, not of the window.
- A corner badge, a dropdown and a dialog need `position: absolute` or `fixed` against an element of your choice, and have no class: write them in your own CSS.

## Web components

Inside a shadow root, where the page's CSS doesn't reach, `rl-sticky-top` goes on an [`rl-div`](/docs/web-components/), as on a `div` in the page:

```html
<rl-div class="rl-sticky-top rl-bg-surface rl-padding-m">...</rl-div>
```
