---
title: "Height, fill and scroll"
description: "Make an element fill the space around it with rl-height-full, rl-height-fill or rl-width-fill, and choose which area scrolls with rl-scroll."
head:
  - tag: title
    content: "Relayout fill and scroll: take the space, pick what scrolls"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout fill and scroll: take the space, pick what scrolls"
---

Classes: `rl-height-full`, `rl-height-fill`, `rl-width-fill`, `rl-height-screen`, `rl-height-screen-min`, `rl-scroll`

By default, a layout container takes only the height its content needs, and the elements of a row take only the width they need. These utilities make an element fill the space around it, and choose which area scrolls.

- **`rl-height-full`** makes the element as tall as its parent (`height: 100%`). The parent needs a height.
- **`rl-height-fill`** and **`rl-width-fill`** go on an element inside a column or a row, and make it take the space the other elements leave. What each one does depends on the parent's direction.
- **`rl-height-screen`** and **`rl-height-screen-min`** make the element exactly, or at least, as tall as the window.
- **`rl-scroll`** makes the element scroll when its content doesn't fit (`overflow: auto`).

None of the height and fill classes scrolls on its own. Add `rl-scroll` to the area that should scroll, and only to that one: a scrolling area clips dropdowns, tooltips and shadows, and an element with [`rl-sticky-top`](/docs/utilities/sticky/) inside it sticks to that area, not to the window.

## Full or fill

`rl-height-full`: as tall as my parent, whatever the others are. `rl-height-fill`: whatever the others leave.

The names differ by one letter, and the two do different things next to other elements. In a column 400px tall, with a header and a footer 50px tall each, the middle element measures:

| The middle element has | Its height | The footer ends at |
|---|---|---|
| `rl-height-full` | 400px, the parent's height, whatever the others are | 500px, 100px past the parent |
| `rl-height-fill` | 300px, what the header and the footer leave | 400px, the bottom of the parent |

```html preview debug
<div class="rl-row rl-nowrap rl-align-start rl-gap-l" style="min-height: 520px;">
    <div class="rl-column rl-width-fill" style="height: 400px;">
        <div style="height: 50px;">Header</div>
        <div class="rl-height-full">rl-height-full</div>
        <div style="height: 50px;">Footer, past the column</div>
    </div>
    <div class="rl-column rl-width-fill" style="height: 400px;">
        <div style="height: 50px;">Header</div>
        <div class="rl-height-fill">rl-height-fill</div>
        <div style="height: 50px;">Footer</div>
    </div>
</div>
```

- **`rl-height-full`** for a single child that should be as tall as its parent, such as the root of an app in a parent with a height.
- **`rl-height-fill`** for one child among others, such as the main area between a header and a footer.
- `rl-height-full` among other children is the trap: it takes the parent's whole height, and pushes the elements after it out of the parent.

`rl-height-fill` works only in a column or a row. In any other parent it does nothing, and the element stays as tall as its content. `rl-height-full` works in any parent that has a height.

## Fill classes, by parent

The fill classes are named after what you see: `rl-width-fill` fills the width, `rl-height-fill` fills the height. Each one grows along the parent's direction and stretches across it, so it goes on the element, not on the parent.

| Class | In a column | In a row |
|---|---|---|
| `rl-height-fill` | Grows to take the remaining height | Stretches to the row's height |
| `rl-width-fill` | Stretches across the column's width | Grows to take the remaining width |

Any element can fill, not only the first or the last. An element can have both classes. Outside a column or a row, such as in a grid, the fill classes have no effect.

## Filling a column

### `rl-height-fill`

The fill element takes the height the other elements leave. Here the column has a `min-height`, so the footer sits at the bottom, and when the content is longer, the column grows and the page scrolls.

```html preview debug
<div class="rl-column rl-gap-m" style="min-height: 15em;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-height-fill rl-border rl-padding-m">Main content takes the remaining height</div>
    <div class="rl-border rl-padding-m">Footer</div>
</div>
```

### `rl-height-fill rl-scroll`

When the column has a set `height`, the fill element can get shorter than its content. Add `rl-scroll` to scroll what doesn't fit, while the other elements stay in place.

```html preview debug
<div class="rl-column rl-gap-m" style="height: 15em;">
    <div class="rl-border rl-padding-m">Fixed header</div>
    <div class="rl-column rl-gap-m rl-height-fill rl-scroll rl-border rl-padding-m">
        <div>Content item 1</div>
        <div>Content item 2</div>
        <div>Content item 3</div>
        <div>Content item 4</div>
        <div>Content item 5</div>
        <div>Content item 6</div>
        <div>Content item 7</div>
        <div>Content item 8</div>
        <div>This area scrolls when content overflows</div>
    </div>
    <div class="rl-border rl-padding-m">Fixed footer</div>
</div>
```

Several fill elements in a column don't get the same height. Each gets the height of its content plus an equal share of the space left, so they are the same height only when their content is. In a column 300px tall, a fill element with one line of text and one with five lines, each line 20px tall, are 110px and 190px. When the content doesn't fit a column with a set height, they shrink in proportion to their content, and what doesn't fit shows past them: give each one that can run long `rl-scroll`.

```html preview debug
<div class="rl-column rl-gap-m" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed header</div>
    <div class="rl-column rl-height-fill rl-border rl-padding-m">
        <div>One line of content</div>
    </div>
    <div class="rl-column rl-height-fill rl-border rl-padding-m">
        <div>Three lines of content,</div>
        <div>so this area is taller:</div>
        <div>each gets the same share of the space left</div>
    </div>
    <div class="rl-border rl-padding-m">Fixed footer</div>
</div>
```

Panes of the same height, whatever their content, take a line of your own CSS on each: `flex: 1 1 0; min-height: 0;`, with `rl-scroll` on each.

The other elements of a column keep their height: they don't shrink to make room. Only a fill element grows or shrinks.

### `rl-width-fill`

The fill element stretches across the column, even when the column aligns its elements with `rl-align-*`.

```html preview debug
<div class="rl-column rl-align-start rl-gap-m">
    <div class="rl-border rl-padding-m">Takes the width it needs</div>
    <div class="rl-width-fill rl-border rl-padding-m">Stretches across the column</div>
</div>
```

## Filling a row

### `rl-width-fill`

The fill element takes the width the other elements leave. In a row that wraps, it is at least 16rem (256px) wide, so when less is left next to the others, it moves to a line of its own and takes the whole line. Resize the preview to see it wrap.

```html preview debug
<div class="rl-row rl-align-start rl-gap-m">
    <div class="rl-border rl-padding-m" style="width: 10em;">Sidebar</div>
    <div class="rl-width-fill rl-border rl-padding-m">Main content takes the remaining width, and moves below the sidebar when less than 16rem is left.</div>
</div>
```

In a row with `rl-nowrap`, the fill element never wraps, has no minimum, and can get narrower than its content instead. In a strip that scrolls, `rl-nowrap-scroll`, it has no minimum either: it takes what the others leave, down to its longest word.

Several fill elements share the remaining width equally, whatever their content. With `rl-nowrap`, they never wrap and stay the same width. In a row that wraps, each one is at least the minimum, so two of them stack when the row is narrower than two minimums and the gap between them: 520px with an 8px gap. Use a [grid](/docs/layouts/grid/) for equal cells that stack on narrow screens.

### The minimum in a row that wraps

The minimum keeps the content beside a sidebar from being squeezed. Without it, a fill element moved to its own line only when its longest word no longer fit, so on a phone 360px wide, the text beside a 12em sidebar was a column 160px wide. With it, the content beside a 12em sidebar and an 8px gap moves below the sidebar under 456px, which is every phone, and stays beside it on a tablet and up.

The minimum is the variable `--rl-fill-min`, a length, `16rem` by default. It is never more than the row's width, so a fill element on a line of its own is as wide as the row and no wider. Set it on `:root` for the whole page, or on one row:

```css
:root {
    --rl-fill-min: 20rem;
}

.site-header {
    --rl-fill-min: 0px;
}
```

A smaller value keeps the fill element beside the others longer, and `0px` keeps it beside them at any width, getting narrower. In a header with a 120px logo, an 8px gap and a navigation that fills the rest, the default moves the navigation below the logo on a screen narrower than 384px. With `0px` on the header, as above, it stays beside the logo.

Content wider than the fill element, such as a long line of code or a wide table, doesn't widen it: it shows past the element. Put `rl-scroll` on that content, and it scrolls inside the element while the page doesn't.

A fill element needs a row whose width comes from its parent, as a page section or a header has. A row as wide as its content has no space to fill: a row inside a column with `rl-align-center`, `rl-align-start` or `rl-align-end`, in a popover or an absolutely positioned menu, or in an inline-block. The browser sizes such a row as if the minimum were 0, so the space beside the others is only the fill element's content, and a fill element whose content is narrower than the minimum moves below them. Leave `rl-width-fill` off in such a row, or set `--rl-fill-min: 0px` on it.

### `rl-height-fill`

The fill element stretches to the row's height, even when the row aligns its elements with `rl-align-*`.

```html preview debug
<div class="rl-row rl-gap-m" style="height: 8em;">
    <div class="rl-border rl-padding-m">Centered</div>
    <div class="rl-height-fill rl-border rl-padding-m">Stretches to the row's height</div>
</div>
```

## Full height

### `rl-height-full`

The element is as tall as its parent, which needs a set height. It doesn't scroll on its own: add `rl-scroll` when its content can be taller.

```html preview debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-column rl-height-full rl-border rl-padding-m">
        <div>Fills 100% of its parent's height</div>
        <div>The parent must have a height</div>
    </div>
</div>
```

Inside a column, an element with `rl-height-full` keeps that height and doesn't shrink next to the other elements. To take the height that's left, use `rl-height-fill` ([Full or fill](#full-or-fill)).

### The height of the window

`rl-height-screen` makes an element exactly as tall as the window, and `rl-height-screen-min` at least as tall. They go on the page's root, or on a section that should fill the window. Inside a layout, `rl-height-fill` is the one: it takes what the other elements leave.

- **`rl-height-screen`** (`height: 100dvh`): exactly a screen, for an app shell, with `rl-scroll` on the area that scrolls.
- **`rl-height-screen-min`** (`min-height: 100dvh`): at least a screen. The page grows with its content and scrolls as a whole, and the footer sits at the end of the content, or at the bottom of the window when the content is short.

Both use `dvh`, the height of the window as it is now. On a phone, `100vh` is the height with the browser's toolbar hidden, so while the toolbar shows, a page as tall as `100vh` has its bottom cut off.

### `rl-scroll`

```html preview debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-column rl-gap-s rl-height-full rl-scroll rl-padding-m">
        <div>Content item 1</div>
        <div>Content item 2</div>
        <div>Content item 3</div>
        <div>Content item 4</div>
        <div>Content item 5</div>
        <div>Content item 6</div>
        <div>This area scrolls</div>
    </div>
</div>
```

## Full-height layouts

### Page with the footer at the bottom

The column has a `min-height`, so it grows with its content and the page scrolls. On a page, write `rl-height-screen-min` on the column in place of the preview's `min-height`. To keep the header in view while the page scrolls, give it [`rl-sticky-top`](/docs/utilities/sticky/) and a background.

```html preview debug
<div class="rl-column" style="min-height: 20em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m">
        <div>Logo</div>
        <div class="rl-row rl-gap-m">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    </div>
    <div class="rl-column rl-height-fill rl-padding-l rl-gap-m">
        <div>Main Content Area</div>
        <div>This area fills the vertical space the header and footer leave</div>
    </div>
    <div class="rl-border rl-padding-m">
        <div>Footer content</div>
    </div>
</div>
```

### App shell

The column has a set `height`, so the header stays in place, and the sidebar and the main area each scroll on their own. On a page, write `rl-height-screen` on the column in place of the preview's `height`.

```html preview debug
<div class="rl-column" style="height: 16em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m">
        <div style="font-weight: bold;">Application</div>
        <div class="rl-row rl-gap-m">
            <div>Search</div>
            <div>Profile</div>
        </div>
    </div>
    <div class="rl-row rl-nowrap rl-height-fill">
        <div class="rl-column rl-gap-s rl-height-fill rl-scroll rl-border rl-padding-m" style="width: 12em;">
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Team</div>
            <div>Analytics</div>
            <div>Reports</div>
            <div>Settings</div>
            <div>Help</div>
            <div>Many more items...</div>
            <div>The sidebar scrolls</div>
        </div>
        <div class="rl-column rl-gap-m rl-width-fill rl-height-fill rl-scroll rl-padding-l">
            <div style="font-size: 1.2em; font-weight: bold;">Page Title</div>
            <div>The main area takes the remaining width and the full height of the row.</div>
            <div>It scrolls when its content is taller.</div>
            <div class="rl-grid rl-gap-m">
                <div class="rl-border rl-padding-m rl-radius-m" style="height: 6em;">Card 1</div>
                <div class="rl-border rl-padding-m rl-radius-m" style="height: 6em;">Card 2</div>
                <div class="rl-border rl-padding-m rl-radius-m" style="height: 6em;">Card 3</div>
            </div>
        </div>
    </div>
</div>
```

The row needs `rl-nowrap`. A row that wraps grows to fit its tallest element, so the areas inside it would never scroll.

### Dashboard

Fill elements nest: each panel column takes half the width, and inside it, the lower panel takes the remaining height and scrolls.

```html preview debug
<div class="rl-column" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-border rl-padding-m">
        <div>Dashboard</div>
        <div class="rl-row rl-gap-m">
            <div>Profile</div>
            <div>Settings</div>
        </div>
    </div>
    <div class="rl-row rl-nowrap rl-height-fill rl-gap-m rl-padding-m">
        <div class="rl-column rl-gap-m rl-width-fill rl-height-fill">
            <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Recent Activity</div>
                <div class="rl-divider"></div>
                <div>Activity 1</div>
                <div>Activity 2</div>
            </div>
            <div class="rl-column rl-gap-s rl-height-fill rl-scroll rl-border rl-radius-m rl-padding-m">
                <div>Main Content</div>
                <div class="rl-divider"></div>
                <div>Content grows to fill space</div>
                <div>Scrollable if needed</div>
            </div>
        </div>
        <div class="rl-column rl-gap-m rl-width-fill rl-height-fill">
            <div class="rl-column rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Stats</div>
                <div class="rl-divider"></div>
                <div>Users: 1,234</div>
                <div>Revenue: $56,789</div>
            </div>
            <div class="rl-column rl-gap-s rl-height-fill rl-scroll rl-border rl-radius-m rl-padding-m">
                <div>Notifications</div>
                <div class="rl-divider"></div>
                <div>Notification 1</div>
                <div>Notification 2</div>
                <div>Notification 3</div>
                <div>Notification 4</div>
                <div>Many more...</div>
                <div>Scrolls independently</div>
            </div>
        </div>
    </div>
</div>
```

### Dialog

```html preview
<div class="rl-frame" style="height: 25em; background: rgba(0,0,0,0.1);">
    <div class="rl-column rl-border rl-radius-m rl-bg-surface rl-color-primary" style="width: 25em; height: 18em;">
        <div class="rl-row rl-justify-between rl-gap-m rl-padding-m">
            <div style="font-weight: bold;">Dialog Title</div>
            <div>✕</div>
        </div>
        <div class="rl-divider"></div>
        <div class="rl-column rl-height-fill rl-scroll rl-padding-l rl-gap-m">
            <div>Dialog content area</div>
            <div>Fills the space between header and footer</div>
            <div>Scrolls if content is too long</div>
            <div>More content...</div>
            <div>Even more content...</div>
            <div>And the last line</div>
        </div>
        <div class="rl-divider"></div>
        <div class="rl-row rl-justify-end rl-gap-m rl-padding-m">
            <div class="rl-border rl-padding-s rl-radius-s">Cancel</div>
            <div class="rl-border rl-padding-s rl-radius-s">Save</div>
        </div>
    </div>
</div>
```

## Usage notes

- **`rl-height-full`**:
  - Sets `height: 100%`; the parent needs a set height
  - Doesn't scroll on its own; add `rl-scroll`
  - Inside a column, keeps its height instead of shrinking next to other elements

- **`rl-height-fill`**:
  - In a column: grows to take the remaining height, and can shrink below its content (`flex: 999 1 auto; min-height: 0`)
  - In a row: stretches to the row's height (`align-self: stretch`)

- **`rl-width-fill`**:
  - In a row: grows to take the remaining width (`flex: 999 1 0`). In a row that wraps it is at least `--rl-fill-min` wide, 16rem, or the row's width when that is less (`min-width: min(100%, var(--rl-fill-min))`), and moves to its own line before it gets narrower; with `rl-nowrap`, it can get narrower than its content instead
  - In a column: stretches across the column's width (`align-self: stretch`)

- **`rl-height-screen`**, **`rl-height-screen-min`**:
  - Set `height: 100dvh` and `min-height: 100dvh`: exactly, or at least, the height of the window
  - For the page's root, or a section that fills the window

- **`rl-scroll`**:
  - Sets `overflow: auto`, so the element scrolls when its content doesn't fit
  - Put it on the innermost area that should scroll

- **Common patterns**:
  - Header + content + footer: `rl-height-fill` on the content; the page scrolls when the column has `rl-height-screen-min`
  - Fixed header with a scrolling content area: a column with a set `height`, and `rl-height-fill rl-scroll` on the content
  - Sidebar next to content: `rl-width-fill` on the content
  - App shell: a column with `rl-height-screen`, an `rl-row rl-nowrap rl-height-fill` inside it, and `rl-height-fill rl-scroll` on each area that scrolls

The [recipes](/docs/composition/#recipes) put these together.
