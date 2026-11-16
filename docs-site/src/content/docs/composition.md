---
title: "Composition"
description: "Build interfaces step by step by nesting layouts and adding utilities, from one column to a full page, with the common patterns, recipes and practices."
head:
  - tag: title
    content: "Build a page with Relayout: nesting, recipes and patterns"
  - tag: meta
    attrs:
      property: og:title
      content: "Build a page with Relayout: nesting, recipes and patterns"
---

This page builds interfaces step by step, from one layout to a full page, and ends with recipes for the common needs.

## Building blocks

Every layout element has two parts:

**1. Layout class** - defines the arrangement pattern (only one per element):

```html
<div class="rl-column">...</div>
<div class="rl-row">...</div>
<div class="rl-grid">...</div>
```

**2. Utility classes** - customize the layout (multiple can be applied):

```html
<div class="rl-column rl-gap-m rl-padding-l rl-border">...</div>
```

## Simple composition

Start with a basic column and add utilities:

```html preview
<div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

The utilities enhance the layout:
- `rl-gap-m` adds spacing between items
- `rl-padding-l` adds internal padding
- `rl-border` adds a border
- `rl-radius-m` rounds the corners

## Nesting layouts

Nest different layouts to create structure:

```html preview
<div class="rl-column rl-gap-l rl-padding-l rl-border rl-radius-m">
    <div>Column container</div>
    <div class="rl-row rl-gap-m">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
    <div class="rl-row rl-justify-between rl-gap-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

A column contains two rows, one of them with its items pushed apart - each layout maintains its own behavior.

## Progressive enhancement

Build complexity incrementally by adding utilities:

**Step 1: Basic structure**

```html preview
<div class="rl-row">
    <div>Logo</div>
    <div class="rl-width-fill">Navigation</div>
</div>
```

**Step 2: Add spacing**

```html preview
<div class="rl-row rl-gap-m">
    <div>Logo</div>
    <div class="rl-width-fill">Navigation</div>
</div>
```

**Step 3: Add visual styling**

```html preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
    <div>Logo</div>
    <div class="rl-width-fill">Navigation</div>
</div>
```

## Header composition

Nest a row in a row for a navigation header:

```html preview
<div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
    <div style="font-weight: bold;">Brand</div>
    <div class="rl-row rl-gap-m rl-width-fill">
        <div>Home</div>
        <div>Products</div>
        <div>About</div>
        <div>Contact</div>
    </div>
</div>
```

The outer row positions brand and navigation, and the menu row takes the remaining width with `rl-width-fill` and handles the menu items.

## Card composition

Column with nested layouts creates a card:

```html preview
<div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div style="font-weight: bold;">Card Title</div>
    <div class="rl-divider"></div>
    <div>Card content goes here with enough text to show the layout structure.</div>
    <div class="rl-row rl-gap-s">
        <div class="rl-border rl-padding-s rl-radius-s">Tag 1</div>
        <div class="rl-border rl-padding-s rl-radius-s">Tag 2</div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-justify-between rl-gap-m">
        <div>Date: Feb 14</div>
        <div>Author: John</div>
    </div>
</div>
```

Multiple layouts compose a rich card interface: column for vertical flow, dividers for separation, rows for tags and for metadata pushed apart.

## Grid of cards

Nest card composition inside a grid:

```html preview
<div class="rl-grid rl-gap-m">
    <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Card 1</div>
        <div>Content for card one</div>
        <div class="rl-row rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">New</div>
        </div>
    </div>
    <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Card 2</div>
        <div>Content for card two</div>
        <div class="rl-row rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">Popular</div>
        </div>
    </div>
    <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Card 3</div>
        <div>Content for card three</div>
        <div class="rl-row rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">Featured</div>
        </div>
    </div>
</div>
```

The grid gives each card a cell of the same width, while each card is a column internally.

## Form composition

Column creates vertical form flow with varied input patterns:

```html preview
<div class="rl-column rl-gap-l rl-padding-l rl-border rl-radius-m">
    <div style="font-weight: bold; font-size: 1.2em;">Contact Form</div>
    <div class="rl-column rl-gap-s">
        <div>Name</div>
        <div class="rl-border rl-padding-m rl-radius-s">Input field</div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>Email</div>
        <div class="rl-border rl-padding-m rl-radius-s">Input field</div>
    </div>
    <div class="rl-column rl-gap-s">
        <div>Message</div>
        <div class="rl-border rl-padding-m rl-radius-s" style="min-height: 5em;">Textarea field</div>
    </div>
    <div class="rl-row rl-justify-end rl-gap-m">
        <div class="rl-border rl-padding-m rl-radius-s">Cancel</div>
        <div class="rl-border rl-padding-m rl-radius-s">Submit</div>
    </div>
</div>
```

Column for vertical fields, and a row justified to the end for the buttons.

## Sidebar layout composition

Combine multiple layouts for a complete page structure:

```html preview
<div class="rl-column rl-border rl-radius-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border">
        <div style="font-weight: bold;">Application</div>
        <div class="rl-row rl-gap-m rl-width-fill">
            <div>Search</div>
            <div>Profile</div>
        </div>
    </div>
    <div class="rl-row rl-gap-0">
        <div class="rl-column rl-gap-m rl-padding-m rl-border" style="min-width: 12em;">
            <div style="font-weight: bold;">Navigation</div>
            <div class="rl-divider"></div>
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Settings</div>
        </div>
        <div class="rl-column rl-gap-m rl-padding-l rl-width-fill">
            <div style="font-weight: bold; font-size: 1.2em;">Page Title</div>
            <div>Main content area shows the power of composition. Multiple simple layouts combine to create complex interfaces.</div>
            <div class="rl-grid rl-gap-m">
                <div class="rl-border rl-padding-m rl-radius-m">Widget 1</div>
                <div class="rl-border rl-padding-m rl-radius-m">Widget 2</div>
            </div>
        </div>
    </div>
</div>
```

Outer column for vertical sections, a row for the header, a row for sidebar and content, grid for widgets.

## Responsive by default

Composition creates naturally responsive layouts:

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div>Rows wrap automatically</div>
        <div>when space runs out</div>
        <div>no media queries needed</div>
        <div>resize to see</div>
    </div>
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div>Logo</div>
        <div class="rl-width-fill">Fill elements wrap when narrow</div>
    </div>
    <div class="rl-grid rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div>Grids adjust</div>
        <div>cells per line</div>
        <div>automatically</div>
    </div>
</div>
```

Layouts adapt to available space without media queries.

## Constraining composition

Use width utilities to control layout boundaries:

```html preview
<div class="rl-column rl-gap-l rl-width-s rl-center-self">
    <div class="rl-row rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Constrained Header</div>
        <div class="rl-row rl-gap-m rl-width-fill">
            <div>Nav 1</div>
            <div>Nav 2</div>
            <div>Nav 3</div>
        </div>
    </div>
    <div class="rl-column rl-gap-m rl-padding-l rl-border rl-radius-m">
        <div>Centered content area with maximum width for readability.</div>
        <div>The width utility constrains the entire composition, and rl-center-self centers it.</div>
    </div>
</div>
```

Width utilities constrain entire composed layouts, and `rl-center-self` centers them.

## Vertical space composition

Combine height utilities with nested layouts:

```html preview
<div class="rl-column" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-row rl-justify-between rl-gap-m rl-padding-m rl-border">
        <div style="font-weight: bold;">Header</div>
        <div>Actions</div>
    </div>
    <div class="rl-row rl-nowrap rl-height-fill">
        <div class="rl-column rl-gap-m rl-padding-m rl-border rl-height-fill" style="min-width: 10em;">
            <div>Sidebar</div>
            <div>Menu 1</div>
            <div>Menu 2</div>
        </div>
        <div class="rl-column rl-gap-m rl-padding-l rl-width-fill rl-height-fill rl-scroll">
            <div style="font-weight: bold;">Content</div>
            <div>Fills the available width and height with the fill utilities.</div>
            <div>Scroll appears if content overflows.</div>
        </div>
    </div>
</div>
```

Fill and scroll utilities enable full-height application layouts through composition: the inner row takes the height the header leaves, the sidebar stretches to it, and the content takes the rest of the width and scrolls.

## Visual hierarchy through composition

Layer compositions with varying visual weight:

```html preview
<div class="rl-column rl-gap-xl rl-padding-xl rl-border rl-radius-m">
    <div class="rl-column rl-gap-l rl-padding-l rl-border rl-radius-m">
        <div style="font-size: 1.2em; font-weight: bold;">Section Level 1</div>
        <div class="rl-column rl-gap-m rl-padding-m rl-border rl-radius-s">
            <div style="font-weight: bold;">Section Level 2</div>
            <div class="rl-row rl-gap-s">
                <div class="rl-border rl-padding-s rl-radius-s">Item</div>
                <div class="rl-border rl-padding-s rl-radius-s">Item</div>
                <div class="rl-border rl-padding-s rl-radius-s">Item</div>
            </div>
        </div>
    </div>
</div>
```

Decreasing gap, padding, and radius sizes as you nest creates visual hierarchy.

## Composition patterns

Common composition patterns emerge for different interfaces:

**Navigation pattern:**
```
row (container)
├─ brand/logo
└─ row, width-fill (menu items)
```

**Card pattern:**
```
column (container)
├─ title
├─ divider
├─ content
├─ row (tags)
└─ row, justify-between (metadata)
```

**Form pattern:**
```
column (container)
├─ column (field group)
├─ column (field group)
└─ row, justify-end (actions)
```

**Dashboard pattern:**
```
column (page)
├─ row, justify-between (header)
├─ row (content area)
│  ├─ column (sidebar)
│  └─ grid, width-fill (widgets)
└─ column (footer)
```

## Recipes

Relayout has four layouts, [column](/docs/layouts/column/), [row](/docs/layouts/row/), [grid](/docs/layouts/grid/) and [frame](/docs/layouts/frame/). Common patterns come from combining them with utilities. Each recipe below is a starting point to copy and adjust.

The page recipes use a fixed height in the previews, so they fit on this page. On a real page, the column takes `rl-height-screen-min` or `rl-height-screen` instead, as in the code above each preview ([The height of the window](/docs/utilities/height/#the-height-of-the-window)).

### Header: two groups pushed apart

`rl-justify-between` puts the logo at the start and the navigation at the end. When the header gets too narrow, the navigation wraps below the logo.

```html preview debug
<header class="rl-row rl-justify-between rl-gap-m">
    <a>Logo</a>
    <nav class="rl-row rl-gap-m">
        <a>Home</a>
        <a>Docs</a>
        <a>About</a>
    </nav>
</header>
```

### Sidebar that moves below the content on narrow screens

The content takes the width the sidebar leaves. It is at least 16rem (256px) wide, so when less is left next to the sidebar, it moves below it and takes the whole width: with a 12em sidebar and `rl-gap-m`, under 456px, which is every phone. The page scrolls as a whole; nothing scrolls inside. Resize the preview to see it wrap.

```html preview debug
<div class="rl-row rl-align-start rl-gap-m">
    <aside style="width: 12em;">Sidebar</aside>
    <main class="rl-width-fill">The main content takes the remaining width, and moves below the sidebar when less than 16rem is left.</main>
</div>
```

To keep the content beside the sidebar on narrower screens, set a smaller minimum on the row, such as `style="--rl-fill-min: 12rem;"` ([The minimum in a row that wraps](/docs/utilities/height/#the-minimum-in-a-row-that-wraps)).

### Sidebar after the content

With the sidebar last, it is on the right, and it is the sidebar that moves below the content on a narrow screen.

```html preview debug
<div class="rl-row rl-align-start rl-gap-m">
    <main class="rl-width-fill">The main content comes first. On a narrow screen the sidebar moves below it.</main>
    <aside style="width: 12em;">Sidebar</aside>
</div>
```

The order of the markup is the order on a phone. A sidebar on the left that should move below the content on a phone needs CSS of your own, such as `order` in a media or container query.

### A field and a button

The field takes the width the button leaves. `rl-nowrap` keeps them on one line, so the field gets narrower instead of wrapping.

```html preview debug
<div class="rl-row rl-nowrap rl-gap-m">
    <input class="rl-width-fill" placeholder="Search" />
    <button>Search</button>
</div>
```

### Page: footer at the bottom, the page scrolls

The column is at least as tall as the window, with `rl-height-screen-min`, and the main area takes the height the header and footer leave. With more content, the column grows and the page scrolls.

```html
<div class="rl-column rl-height-screen-min">
    <header>…</header>
    <main class="rl-height-fill">…</main>
    <footer>…</footer>
</div>
```

```html preview debug
<div class="rl-column" style="min-height: 15em;">
    <header class="rl-padding-m">Header</header>
    <main class="rl-height-fill rl-padding-m">Main</main>
    <footer class="rl-padding-m">Footer</footer>
</div>
```

To keep the header in view while the page scrolls, give it `rl-sticky-top` and a background, such as `rl-bg-surface` ([Sticky](/docs/utilities/sticky/)).

### App shell: header and sidebar stay, the sidebar and main area scroll

The column is exactly as tall as the window, with `rl-height-screen`. The row below the header takes the remaining height, and the sidebar and the main area each scroll on their own. The row needs `rl-nowrap`: a row that wraps grows to fit its tallest element, so nothing inside it would scroll.

```html
<div class="rl-column rl-height-screen">
    <header>…</header>
    <div class="rl-row rl-nowrap rl-height-fill">
        <nav class="rl-height-fill rl-scroll" style="width: 12em;">…</nav>
        <main class="rl-width-fill rl-height-fill rl-scroll">…</main>
    </div>
</div>
```

```html preview debug
<div class="rl-column" style="height: 13em;">
    <header class="rl-padding-m">Header</header>
    <div class="rl-row rl-nowrap rl-height-fill">
        <nav class="rl-column rl-gap-s rl-height-fill rl-scroll rl-padding-m" style="width: 12em;">
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Team</div>
            <div>Analytics</div>
            <div>Reports</div>
            <div>Settings</div>
            <div>Help</div>
        </nav>
        <main class="rl-column rl-gap-m rl-width-fill rl-height-fill rl-scroll rl-padding-m">
            <div>The main area scrolls on its own.</div>
            <div style="height: 20em;">Tall content</div>
            <div>The end of the content</div>
        </main>
    </div>
</div>
```

### Header links that collapse into a menu

Wrapping moves a header's links below the logo when they don't fit. To fold them behind a button instead, put the links in a `<details>`. The `<summary>` is the button and the links sit inside it, so nothing points at anything by `id`, and no JavaScript is needed.

This recipe needs a width, which Relayout's layouts don't ask for: whether to collapse is a choice, and a layout can't make it for you. It uses a container query, a CSS rule that reacts to the width of an element instead of the window, so the menu collapses when the area it sits in is narrow, whatever the window's width. Below `32em` the links are a menu under a ⋮ button, and from `32em` up they sit in the row. Pick your own width. Drag the corner of the preview to make it narrower and wider.

```html preview
<style>
    .shell {
        container-type: inline-size;
    }

    .menu {
        position: relative;
    }

    .menu > summary {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 2.25rem;
        height: 2.25rem;
        border: var(--rl-border-default);
        border-radius: 0.5rem;
        list-style: none;
        cursor: pointer;
    }

    .menu > summary::-webkit-details-marker {
        display: none;
    }

    /* A layer over the page that belongs to the summary: a click outside the menu closes it */
    .menu[open] > summary::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: 1;
    }

    .menu > nav {
        position: absolute;
        top: calc(100% + 0.5rem);
        right: 0;
        z-index: 2;
        width: max-content;
        border: var(--rl-border-default);
        border-radius: 0.5rem;
        background: var(--rl-color-surface-alt);
        box-shadow: var(--rl-shadow-m);
    }

    @container (min-width: 32em) {
        /* The links show inline, whether the details is open or not */
        .menu::details-content {
            content-visibility: visible;
        }

        .menu > summary {
            display: none;
        }

        /* The nav is a column in the menu and a row here: a class can't change with the width */
        .menu > nav {
            position: static;
            flex-direction: row;
            width: auto;
            padding: 0;
            border: 0;
            background: none;
            box-shadow: none;
        }
    }
</style>

<div class="shell" style="min-height: 13em;">
    <header class="rl-row rl-nowrap rl-justify-between rl-gap-m rl-padding-m rl-border rl-radius-m">
        <strong>Acme</strong>
        <details class="menu">
            <summary aria-label="Menu">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                </svg>
            </summary>
            <nav class="rl-column rl-gap-l rl-padding-l">
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Docs</a>
            </nav>
        </details>
    </header>
</div>
```

- `container-type: inline-size` makes the `.shell` the element the query measures: the menu collapses when the `.shell` is narrow. On a real page it can be the header or the wrapper around the page.
- `position: relative` on the `<details>` puts the menu under its button.
- The `::before` layer on the summary covers the page while the menu is open, so a click anywhere outside the menu is a click on the summary, which closes it.
- `::details-content` is how a closed `<details>` shows its links on wide screens. It is a recent CSS feature, so check it against the browsers you support.
- Nothing closes the menu on Esc.

The Popover API is the other way to build this. Its `popover` attribute gives Esc to close and keyboard focus handling, and the button names the menu by its `id` in `popovertarget`. It has one catch: a popover that is open when the window becomes wide stays above the page, outside the layout, and only a script can close it.

### Sidebar that collapses into a drawer

The same `<details>` holds a sidebar. Below `32em` a button opens the sidebar as a drawer over the main area, under the header, and the rest of the main area is dimmed. From `32em` up the sidebar is a column of the row. The drawer is placed against the row that holds the sidebar and the main area, so it stays below the header without knowing its height. Drag the corner of the preview to make it narrower and wider.

```html preview
<style>
    .body {
        position: relative;
        container-type: inline-size;
    }

    .drawer {
        align-self: start;
        padding: 0.5rem;
    }

    .drawer > summary {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 2.25rem;
        height: 2.25rem;
        border: var(--rl-border-default);
        border-radius: 0.5rem;
        list-style: none;
        cursor: pointer;
    }

    .drawer > summary::-webkit-details-marker {
        display: none;
    }

    /* A layer over the main area that belongs to the summary: a click on it closes the drawer */
    .drawer[open] > summary::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: hsl(0 0% 0% / 0.5);
    }

    .drawer > aside {
        position: absolute;
        inset: 0 auto 0 0;
        z-index: 2;
        width: min(12rem, 85%);
        overflow: auto;
        border-right: var(--rl-border-default);
        background: var(--rl-color-surface);
        box-shadow: var(--rl-shadow-xl);
    }

    @container (min-width: 32em) {
        .drawer::details-content {
            content-visibility: visible;
        }

        .drawer > summary {
            display: none;
        }

        .drawer {
            align-self: stretch;
            padding: 0;
            border-right: var(--rl-border-default);
        }

        .drawer > aside {
            position: static;
            width: 12rem;
            border-right: 0;
            background: none;
            box-shadow: none;
        }
    }
</style>

<div class="rl-column" style="height: 16em;">
    <header class="rl-padding-m">Header</header>
    <div class="body rl-row rl-nowrap rl-height-fill">
        <details class="drawer">
            <summary aria-label="Sections">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                    <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </summary>
            <aside>
                <nav class="rl-column rl-gap-m rl-padding-m">
                    <a href="#">Overview</a>
                    <a href="#">Layouts</a>
                    <a href="#">Utilities</a>
                    <a href="#">Extras</a>
                    <a href="#">Recipes</a>
                </nav>
            </aside>
        </details>
        <main class="rl-column rl-gap-m rl-width-fill rl-height-fill rl-scroll rl-padding-m">
            <div>The main area takes the width the sidebar leaves, and scrolls on its own.</div>
            <div style="height: 20em;">Tall content</div>
            <div>The end of the content</div>
        </main>
    </div>
</div>
```

- Neither the `<details>` nor the `<aside>` is positioned, so the drawer and the dimming layer are placed against `.body`, which is also the element the container query measures.
- Like the menu, the drawer closes on a click outside it and not on Esc, and it shows on wide screens through `::details-content`.

### Equal columns that stack on narrow screens

A grid gives its cells the same width, and moves them to new lines when they no longer fit side by side. The `rl-grid-fit-*` classes set how narrow a cell can get.

```html preview debug
<div class="rl-grid rl-gap-m">
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
</div>
```

### Equal columns that never stack

Fill elements in a row that doesn't wrap share the width equally, however narrow the row gets.

```html preview debug
<div class="rl-row rl-nowrap rl-gap-m">
    <div class="rl-width-fill">First</div>
    <div class="rl-width-fill">Second</div>
    <div class="rl-width-fill">Third</div>
</div>
```

## Best practices

**1. Start simple, add complexity**

Begin with basic layouts, add utilities and nesting as needed:

```html preview
<div class="rl-column rl-gap-m">
    <div>Start simple</div>
    <div class="rl-row rl-gap-s">
        <div>Add nested</div>
        <div>layouts</div>
        <div>progressively</div>
    </div>
</div>
```

**2. Use semantic HTML**

Compose with appropriate HTML elements:

```html
<header class="rl-row rl-justify-between rl-gap-m rl-padding-m">
    <h1>Title</h1>
    <nav class="rl-row rl-gap-m">
        <a href="#">Link</a>
    </nav>
</header>
```

**3. Consistent spacing**

Use the spacing scale consistently:

```html preview
<div class="rl-column rl-gap-l rl-padding-l rl-border rl-radius-m">
    <div>Large gaps and padding for major sections</div>
    <div class="rl-column rl-gap-m rl-padding-m rl-border rl-radius-s">
        <div>Medium gaps for related content</div>
        <div class="rl-row rl-gap-s">
            <div>Small gaps</div>
            <div>for tight groupings</div>
        </div>
    </div>
</div>
```

**4. Limit nesting depth**

Keep compositions readable by limiting nesting (typically 3-4 levels):

```html preview
<div class="rl-column rl-gap-m rl-border rl-radius-m rl-padding-m">
    <div>Level 1: Main container</div>
    <div class="rl-column rl-gap-s rl-border rl-padding-s">
        <div>Level 2: Sub-section</div>
        <div class="rl-row rl-gap-s">
            <div>Level 3: Items</div>
            <div>Readable depth</div>
        </div>
    </div>
</div>
```

**5. Compose for content**

Let content determine layout choices - don't force patterns that don't fit your data.

## From simple to complex

The power of composition is building sophisticated interfaces from simple, understandable pieces:

```html preview
<div class="rl-column rl-gap-l rl-border rl-radius-m">
    <div class="rl-row rl-gap-m rl-padding-m rl-border">
        <div class="rl-row rl-gap-s">
            <div style="width: 2em; height: 2em; background: #e0e0e0; border-radius: 0.25rem;"></div>
            <div style="font-weight: bold;">App</div>
        </div>
        <div class="rl-row rl-gap-l rl-nowrap-scroll rl-width-fill">
            <div>Home</div>
            <div>Features</div>
            <div>Pricing</div>
            <div>Docs</div>
            <div>Support</div>
        </div>
    </div>
    <div class="rl-column rl-gap-m rl-padding-l">
        <div style="font-weight: bold; font-size: 1.5em;">Welcome</div>
        <div>Complex layouts emerge from simple compositions. Each layout class does one thing well.</div>
        <div class="rl-grid rl-gap-m">
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
                <div style="font-weight: bold;">Feature 1</div>
                <div>Description text</div>
            </div>
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
                <div style="font-weight: bold;">Feature 2</div>
                <div>Description text</div>
            </div>
            <div class="rl-column rl-gap-s rl-padding-m rl-border rl-radius-m">
                <div style="font-weight: bold;">Feature 3</div>
                <div>Description text</div>
            </div>
        </div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-row rl-justify-between rl-gap-m rl-padding-m">
        <div>© 2026 App</div>
        <div class="rl-row rl-gap-m">
            <div>Privacy</div>
            <div>Terms</div>
        </div>
    </div>
</div>
```

This complete page layout uses: column for vertical structure, rows for the header, menus and footer, grid for features, and dividers for separation - all composed together.
