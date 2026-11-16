---
title: "Changelog"
description: "Changes between Relayout versions that affect markup written for an earlier version: renamed classes, removed attributes and changed behavior."
head:
  - tag: title
    content: "Relayout changelog: changes that affect your markup"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout changelog: changes that affect your markup"
---

Relayout is before 1.0, so a release can rename classes. This page lists the changes that affect markup written for an earlier version.

## 0.8.0

- The colors follow the page's `color-scheme`, no longer the system's setting alone, and Relayout declares none, so they are light until the page sets one. A page that followed the system's dark mode adds one line to keep it:

  ```css
  :root { color-scheme: light dark; }
  ```

  `color-scheme: dark` or `light` on `html` switches the theme, and on any element turns the roles inside it dark or light. Each role is defined with `light-dark()`, and a browser from before 2024 without it shows the light values. A page that set the dark values inside `@media (prefers-color-scheme: dark)` keeps them, but they no longer follow its `color-scheme`; set each role with `light-dark()` instead. See [Palette](/docs/extras/palette/#light-and-dark).
- The palette has nine roles. `primary` is the text color, `hsl(0, 0%, 10%)` light and `hsl(0, 0%, 95%)` dark, in place of `text`: `rl-color-text` is now `rl-color-primary`, and `--rl-color-text` is `--rl-color-primary`. The blue that `primary` was is gone, and so is `secondary`: `rl-bg-secondary`, `rl-color-secondary` and `--rl-color-secondary` do nothing. A page that used `primary` for its brand color uses `accent` and sets `--rl-color-accent` to it. See [Palette](/docs/extras/palette/).
- The gradients are gone: the five `rl-gradient-*` classes and the `--rl-gradient-*` variables do nothing. A gradient is a line of your own CSS, with the role variables in it to follow the theme. See [Palette](/docs/extras/palette/#gradients).
- The colored `rl-bg-*` classes, `primary`, `accent`, `success`, `warning`, `danger` and `info`, also set the text to the `surface` color, so `rl-bg-primary` is an inverted band. Before 0.8.0 the text kept its color. An `rl-color-*` class beside one still sets another.
- `rl-text-left` and `rl-text-right` are `rl-text-start` and `rl-text-end`, which follow the reading direction as the rest of the classes do. The old names do nothing. See [Fonts](/docs/extras/fonts/#text-styles).
- A fill element in a row that wraps is at least 16rem (256px) wide, or the row's width when that is less. When less is left next to the others, it moves to a line of its own, where before 0.8.0 it got narrower until its longest word no longer fit. Content wider than it, such as a long line of code, no longer widens it: it shows past it, and scrolls inside it with `rl-scroll`. Set `--rl-fill-min` to another length to change the minimum, `0px` to keep the element beside the others at any width. A row with `rl-nowrap`, and a strip with `rl-nowrap-scroll`, are unchanged. In a row as wide as its content, such as a row in a centered column or in a popover, a fill element whose content is narrower than the minimum now moves below the others: leave `rl-width-fill` off there, or set `--rl-fill-min: 0px` on that row. See [Fill and scroll](/docs/utilities/height/#the-minimum-in-a-row-that-wraps).
- The text alignment that `rl-align-start`, `rl-align-center` and `rl-align-end` set on a column is a default in the `rl-defaults` cascade layer, so `rl-text-*` on the column, or a rule of the page whatever its weight, now wins over it. See [Align](/docs/utilities/align/).
- The web components are one element, `rl-div`, which takes the classes through `class`: `<rl-row rl-gap-m>` is now `<rl-div class="rl-row rl-gap-m">`. The `<rl-column>`, `<rl-row>`, `<rl-grid>`, `<rl-frame>` and `<rl-divider>` elements are gone, with no alias, and so is every attribute form of a class: `rl-gap-m`, `rl-width-fill` or `rl-scroll` as an attribute does nothing, on an element or on a `div`. Write `rl-div` for each element, with the old tag as its first class (`<rl-divider>` is `<rl-div class="rl-divider">`), and move each attribute into `class`. `rl-div` takes every class, the font and text classes too, which had no attribute form. See [Web components](/docs/web-components/).
- `rl-div` is for markup inside a shadow root, where the page's CSS doesn't reach. In the page, a `div` with the classes does the same. There, `relayout.css` gives an `rl-div` its layout before the script runs, so the page no longer jumps when the script loads.
- An `rl-div` with no `rl-` class is `content-box`, as a `div` is. Before 0.8.0 it was always `border-box`. With an `rl-` class it is `border-box`, as before.
- The package exports no classes. `Column`, `Row`, `Grid`, `Frame`, `Divider` and `Div` are gone. Importing the package registers `rl-div`, as before, and `document.createElement('rl-div')` is still typed.
- React and Vue get type declarations for `rl-div`, at `@relayoutui/relayout/types/react` and `@relayoutui/relayout/types/vue`, and the package ships `custom-elements.json` for editors. See [Frameworks](/docs/frameworks/).
- New classes: `rl-height-screen` and `rl-height-screen-min`, the height of the window ([Height](/docs/utilities/height/#the-height-of-the-window)); `rl-gap-wrap-*`, the gap between the lines of a row or the rows of a grid ([Gap](/docs/utilities/gap/#between-wrapped-lines)); `rl-align-baseline` ([Align](/docs/utilities/align/)); `rl-sticky-top`, a header that stays while the page scrolls ([Sticky](/docs/utilities/sticky/)); `rl-border-top`, `rl-border-bottom`, `rl-border-start` and `rl-border-end` ([Border](/docs/extras/border/#one-side)); and `rl-radius-full`, for round ends at any size ([Radius](/docs/extras/radius/#round-ends)).

## 0.7.0

- `hidden` hides a layout. Before 0.7.0 `<div class="rl-row" hidden>`, a column, a grid, a frame and `<rl-row hidden>` stayed on the page, because a layout's `display` beats the `display: none` the browser gives `hidden`. Now an element with a layout class, each of the elements, and an image inside a frame are hidden as any other element is. `hidden="until-found"` is left to the browser, so the page's find reaches it. See [Web components](/docs/web-components/).
- `--rl-padding-default` pads `rl-column`, `rl-row`, `rl-grid` and `rl-frame`. Before 0.7.0 it was documented and no rule read it, so setting it did nothing, and a page that set it now sees the padding. It isn't defined until you set it: a layout keeps the padding its element has, so a `ul` or a `button` with a layout class keeps its indent and its own padding, and takes the variable's value in place of the browser's own padding once it is set. The default is in a cascade layer, `rl-defaults`, so a rule of the page's own padding on a layout wins over it, whatever its weight and the order of the style sheets, a reset such as `* { padding: 0 }` included, unless the page keeps that rule in a cascade layer that comes before Relayout's. `rl-padding-*` still beats it. See [Padding](/docs/utilities/padding/).
- The radius that `rl-border` gives from `--rl-radius-default` is in the same cascade layer. Before 0.7.0 it had the weight of a class, so on an element with `rl-border` a page's own `border-radius` won only when its style sheet came after `relayout.css`. Now a rule of the page's own wins, whatever its weight and the order of the style sheets, unless the page keeps it in a cascade layer that comes before Relayout's, and `rl-radius-*` still beats the default. See [Radius](/docs/extras/radius/).
- What a layout sets on a child works for a child of either form in a layout of either form. `rl-width-fill` and `rl-height-fill` in a row or a column, `rl-scroll` in a row, a column, a grid or a frame, as a class or as an attribute, and a divider in a row or a column, as the class `rl-divider` or as `<rl-divider>`, now work in a class layout and in an element layout. Before 0.7.0 the class layouts took only the classes and the element layouts only the attributes, so an attribute in a class layout did nothing, and neither did a fill class or a divider class in `<rl-row>` or `<rl-column>`, and a divider of the other form stayed a horizontal line. A `rl-scroll` class already worked in an element layout, since it is a rule of its own. See [Web components](/docs/web-components/).
- The base rule no longer takes the outline off anything: it gives an element with an `rl-` class `box-sizing: border-box` and nothing else. Before 0.7.0 an element with an `rl-` class had `outline: none` except a link, button, field, `summary`, an element with `tabindex` or `contenteditable`, and a box with `rl-scroll` or `rl-nowrap-scroll`. So a box that the page's own CSS makes scroll, a `<video controls>`, an `<iframe>` and an outline of the page's own kept no ring or outline with an `rl-` class, and now keep it. An element the keyboard can't reach never draws a ring, so nothing else changes. `rl-outline-none` still takes a ring off. See [Outline](/docs/extras/outline/).

## 0.6.0

- The script that loads the web components from the CDN is `relayout.bundle.js`. `relayout.js` imports Lit, which a page with no bundler can't resolve, so a page that loads it from the CDN has to load the bundle. With `npm`, nothing changes in your code: Lit is now a dependency of the package, so npm installs it and your bundler includes one copy for your code and for Relayout. See [Web components](/docs/web-components/#loading).
- The children of `rl-frame` no longer scroll on their own: they stay inside the frame, and a child that should scroll takes `rl-scroll`, as in the other layouts. A scrolling box clips shadows and focus rings, so a frame that centers a card or a button no longer cuts them off. A frame whose child relied on the scrolling needs `rl-scroll` on that child. See [Frame](/docs/layouts/frame/).
- `rl-divider` takes its direction from the layout it is in: a horizontal line in an `rl-column`, a vertical line in an `rl-row`, and a horizontal line anywhere else. The `vertical` class and attribute are gone, and do nothing. Where you wrote `<div class="rl-divider vertical">` in a row, write `<div class="rl-divider">`, and the same for `<rl-divider vertical>`. A divider has to be a direct child of the row, as fill has to be, so a horizontal line between the items of a row needs a column around them. See [Divider](/docs/extras/divider/).
- `rl-color-text-muted` is `rl-color-muted`, as a class and as an attribute of the elements, and the variable `--rl-color-text-muted` is `--rl-color-muted`, so every color class is `rl-color-` and the name of its variable. The values are the same in the light and the dark theme. The old names do nothing, so replace them, and a stylesheet that overrides the variable overrides the new one. See [Palette](/docs/extras/palette/).
- `rl-text-muted` is gone. It set the whole element to half its opacity, which in the light theme gives the default text 3.3:1 contrast on the default surface, below the 4.5:1 normal text needs. Use `rl-color-muted`, which gives 4.7:1.
- An element with an `rl-` class keeps its focus ring where the keyboard can stop. Before 0.6.0 every element with an `rl-` class had `outline: none`, so `<input class="rl-width-fill">`, `<a class="rl-padding-m">` and `<button class="rl-row">` showed no focus ring when a keyboard user tabbed to them, and a box that scrolled with `rl-scroll` showed none either, though the same box as an element did. Now a link, button, `input`, `select`, `textarea`, `summary`, an element with `tabindex` or `contenteditable`, and a box that scrolls with `rl-scroll` or `rl-nowrap-scroll` keep the browser's focus ring, as classes and as elements, and a layout container the keyboard can't stop on has none. `box-sizing: border-box` is unchanged. See [Outline](/docs/extras/outline/).
- `rl-outline-none` is new: a class, and an attribute of the elements, that takes the focus ring off. A page that relied on the missing ring puts it on the element, and draws its own sign of where the keyboard is. See [Outline](/docs/extras/outline/).
- A page that loads the script twice, such as two versions of Relayout or two apps that each bring it, no longer throws: the elements stay as the first copy registered them.

## 0.5.0

- The base rule, which gives every element with an `rl-` class `box-sizing: border-box`, matches only class names that start with `rl-`. Before 0.5.0 it matched any class that contained `rl-`, so an element with a class such as `girl-card` or `pearl-button` got `box-sizing: border-box` and lost its focus outline too. An element that relied on that sets `box-sizing: border-box` itself.

## 0.4.0

- `rl-div` is new: a plain block with no layout of its own, for a box that needs padding, a border or a width. See [Web components](/docs/web-components/).
- The `rl-column`, `rl-row`, `rl-grid` and `rl-frame` elements are `border-box`, as the classes always were. Before 0.4.0 they were `content-box`, so `rl-padding-*` or `rl-border` added to their `rl-width-*` pushed them past their parent.

## 0.3.0

- `rl-width-*` only limits the width, and `rl-center-self` centers. Before 0.3.0, `rl-width-*` also centered, and `rl-center-self` didn't exist. Markup with both classes lays out the same on either version.
