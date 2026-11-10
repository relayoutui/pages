---
title: "Column"
description: "The column arranges the elements vertically, with consistent spacing between them. The elements in a column can be aligned horizontally to the start, center, or end, or they can stretch and fill the horizontal space."
---

Class: `rl-column`

The column arranges the elements vertically, with consistent spacing between them. The elements in a column can be aligned horizontally to the start, center, or end, or they can stretch and fill the horizontal space.

Columns are well suited for forms, text, and ensuring consistent spacing between elements in the document flow.

### `rl-column`

By default, items in the column are stretched, filling the available width.

```html preview debug
<div class="rl-column">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

## Utilities

Utilities adjust the positioning of the column:

- [Gap](/docs/utilities/gap/) spaces the elements. By default there is none.
- [Align](/docs/utilities/align/) positions the elements horizontally. The default is `stretch`, which fills the width.
- [Justify](/docs/utilities/justify/) positions the elements vertically. It shows only when the column is taller than its elements. The default is `start`.
- [Fill and scroll](/docs/utilities/height/) let one element take the height the others leave, and choose which area scrolls.
- [Padding](/docs/utilities/padding/) and [width](/docs/utilities/width/) shape the column itself.

Extras add the fine touch: [border](/docs/extras/border/), [radius](/docs/extras/radius/) and the [divider](/docs/extras/divider/) between elements.

## Usage notes

The column layout is a fundamental vertical layout pattern with specific characteristics:

- **Main axis**: Vertical (controlled by `justify-content`)
- **Cross axis**: Horizontal (controlled by `align-items`)
- **Text alignment**: The `rl-align-*` classes also set `text-align` for proper text positioning
- **Gap behavior**: Uses CSS flexbox `gap` property for consistent spacing
- **Vertical space**: By default, columns only take as much vertical space as their content needs
- **No shrinking**: Elements keep their height; only an `rl-height-fill` element grows or shrinks

The column is ideal when you need consistent vertical spacing and want elements to sit one below another without manual margin management.
