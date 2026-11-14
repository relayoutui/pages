---
title: "Frame"
description: "The frame centers its content in a container that fills its parent, and keeps each child inside it. A child that should scroll takes rl-scroll."
---

Class: `rl-frame`

The frame centers content both horizontally and vertically within a container that fills 100% of its parent's width and height. Each child of the frame is kept inside it, and one that should scroll takes [`rl-scroll`](/docs/utilities/height/).

Frames are well suited for image displays, hero sections, modal content, media viewers, and any situation where you need to center and constrain content within a defined area.

### `rl-frame`

By default, the frame centers its content and constrains it to fit within the frame boundaries.

```html preview debug
<div class="rl-frame" style="height: 15em; border: 1px solid #ccc;">
    <div>Centered content</div>
</div>
```

The frame automatically handles images by maintaining their aspect ratio and fitting them within the available space.

```html preview
<div class="rl-frame" style="height: 15em; border: 1px solid #ccc;">
    <img src="https://picsum.photos/400/300" alt="Sample image" />
</div>
```

## Nested frames

Frames can be nested to create complex centered layouts or to constrain content at different levels.

```html preview
<div class="rl-frame rl-border rl-padding-m" style="height: 20em;">
    <div class="rl-frame rl-border rl-radius-m" style="width: 80%; height: 80%;">
        <div>Nested centered content</div>
    </div>
</div>
```

## Utilities

Utilities adjust the positioning of the frame:

- [Gap](/docs/utilities/gap/) spaces the elements when the frame holds more than one.
- [Align](/docs/utilities/align/) positions the content vertically. The default is `center`.
- [Justify](/docs/utilities/justify/) positions the content horizontally. The default is `space-around`, which centers it.
- [Padding](/docs/utilities/padding/) and [width](/docs/utilities/width/) shape the frame itself.

Extras add the fine touch: [border](/docs/extras/border/) and [radius](/docs/extras/radius/).

## Usage notes

The frame layout is designed to fill 100% of its parent container's width and height by default. To use frames effectively:

- Ensure the parent container has a defined height (frames need a height context to center content vertically)
- Content inside frames is automatically constrained with `max-width: 100%` and `max-height: 100%`
- A child that is bigger than the frame doesn't scroll on its own, so a shadow or a focus ring on it isn't clipped. Put `rl-scroll` on the child that should scroll
- Images are handled specially to maintain aspect ratio with `object-fit: contain`

A child that takes `rl-scroll` scrolls inside the frame:

```html preview
<div class="rl-frame rl-border" style="height: 10em;">
    <div class="rl-scroll rl-padding-m" style="width: 20em;">
        <p>The frame keeps this box inside its height, and <code>rl-scroll</code> makes the box scroll.</p>
        <p>Without it, the box would stay as tall as its content and spill out of the frame, with nothing clipped.</p>
        <p>A third paragraph, so there is more than the frame can show.</p>
        <p>And a fourth.</p>
    </div>
</div>
```

```html preview
<div class="rl-column rl-gap-m">
    <div class="rl-frame rl-border rl-radius-m rl-padding-m" style="height: 12em;">
        <div>
            <h3>Hero Content</h3>
            <p>Perfectly centered in the frame</p>
        </div>
    </div>
    <div class="rl-frame rl-border rl-radius-m" style="height: 12em;">
        <img src="https://picsum.photos/500/300" alt="Responsive image" />
    </div>
</div>
```
