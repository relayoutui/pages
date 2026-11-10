---
title: "Row"
description: "The row arranges elements horizontally. A row wraps by default: when the elements don't fit in the available width, they continue on the next line. Apply rl-nowrap to keep them on one line."
---

Class: `rl-row`

The row arranges elements horizontally. **A row wraps by default**: when the elements don't fit in the available width, they continue on the next line. Apply `rl-nowrap` to keep them on one line.

Rows are well suited for headers, toolbars, navigation, button groups, tags, and any group of elements placed side by side. With the fill and justify utilities, a row also makes sidebars and elements pushed to opposite ends.

### `rl-row`

By default, items flow from left to right and wrap to the next line when needed.

```html preview debug
<div class="rl-row">
    <div>Tag one</div>
    <div>Tag two</div>
    <div>Tag three</div>
    <div>Tag four</div>
    <div>Tag five</div>
    <div>Tag six</div>
</div>
```

```html preview debug
<div class="rl-row" style="width: 15em;">
    <div>Action</div>
    <div>Edit</div>
    <div>Delete</div>
    <div>Share</div>
    <div>Export</div>
</div>
```

## Utilities

Utilities set the rest of the row:

- [Gap](/docs/utilities/gap/) spaces the elements. By default there is none.
- [Align](/docs/utilities/align/) positions the elements vertically. The default is `center`.
- [Justify](/docs/utilities/justify/) positions the elements horizontally. The default is `start`, and `between` pushes the first and last elements to the ends.
- [Wrapping](/docs/utilities/wrapping/) keeps the elements on one line (`rl-nowrap`), scrolls them (`rl-nowrap-scroll`) or reverses the wrap. A row wraps by default.
- [Fill and scroll](/docs/utilities/height/) let one element take the width the others leave, and choose which area scrolls.
- [Padding](/docs/utilities/padding/) and [width](/docs/utilities/width/) shape the row itself.

Extras add the fine touch: [border](/docs/extras/border/), [radius](/docs/extras/radius/) and the [divider](/docs/extras/divider/) between elements, vertical in a row.

The [recipes](/docs/composition/#recipes) show common patterns, such as a header, a sidebar and equal columns.

## Usage notes

The row layout creates a natural flowing horizontal arrangement:

- **Flow direction**: Horizontal (left to right by default)
- **Main axis**: Horizontal (controlled by `justify-content`)
- **Cross axis**: Vertical (controlled by `align-items`)
- **Intrinsic sizing**: Elements take only the space they need, unless they have `rl-width-fill`

The row is the layout for anything placed side by side: headers, toolbars, sidebars next to content, tags, and button groups. Unlike grid layouts with equal cells, rows adapt to the size of their content.
