---
title: "Using Relayout in an existing project"
description: "Add Relayout to a page that already has a CSS framework or your own styles: Relayout places the elements, and your styles decide how they look."
---

Relayout adds to a page. `relayout.css` styles nothing until a class is added, and every class starts with `rl-` and every custom property with `--rl-`. You can load it beside Bootstrap, Tailwind or your own CSS, and use it for one part of one page.

## Relayout places, your styles decide the look

Relayout decides where elements go: the direction, the gap, the alignment, the size. It does not decide how a component looks. Buttons, inputs, cards and menus keep the style your framework or your CSS gives them.

So put `rl-` classes on the layouts and wrappers around components, not on the components:

```html
<div class="rl-row rl-justify-end rl-gap-m">
    <button class="btn btn-secondary">Cancel</button>
    <button class="btn btn-primary">Save</button>
</div>
```

The row places the two buttons, and Bootstrap, in this example, draws them.

- Classes that say where an element sits in its parent, such as `rl-center-self` and `rl-width-fill`, are fine on a component.
- Padding, border, radius and shadow belong on your own wrappers and panels. A component already has its own.
- An element with an `rl-` class gets `box-sizing: border-box` and loses its focus outline. A button or a link with an `rl-` class would lose its focus ring, which is another reason to keep the classes off components.

## One part of a page at a time

Pick one part, such as a toolbar, a form or a grid of cards, and give it a Relayout layout. The rest of the page stays as it is, and you move on when you want to.

```html
<section class="rl-column rl-gap-l">
    <div class="card">...</div>
    <div class="rl-grid rl-gap-m">
        <div class="card">...</div>
        <div class="card">...</div>
    </div>
</section>
```

Where a layout is outside what Relayout does, write plain CSS for that part and keep Relayout for the rest. [Where it stops](/docs/introduction/#where-it-stops) says more.

## Both on one element

Classes from both can sit on one element when they set different properties. `d-flex rl-gap-l` in Bootstrap, or `flex rl-gap-l` in Tailwind, is a flex row from the framework with Relayout's gap.

Set each property from one source. When both set the same one, for example `p-3` and `rl-padding-m`, one of them wins, and which one depends on the framework, not on the order of the stylesheets:

- With Bootstrap 5.3.8, Bootstrap wins, because its utilities are marked `!important`.
- With Tailwind CSS 4.3.5, Relayout wins, because Tailwind keeps its utilities in a cascade layer, and layered CSS loses to CSS outside a layer.

## Colors, fonts and shadows

The [extras](/docs/extras/palette/) are optional. If your framework owns the colors, fonts and shadows, add no `rl-bg-*`, `rl-color-*`, `rl-font-*` or `rl-shadow-*` class, and the palette stays as unused variables.
