---
title: "Frameworks"
description: "Relayout's classes in React and Vue, and what rl-div needs there: class rather than className in React, isCustomElement in Vue, and the type imports."
head:
  - tag: title
    content: "Relayout in React and Vue: classes and rl-div"
  - tag: meta
    attrs:
      property: og:title
      content: "Relayout in React and Vue: classes and rl-div"
---

## The classes

The classes are plain class names, so they work in a framework as in HTML, with no setup: `className="rl-row rl-gap-m"` in React, `class="rl-row rl-gap-m"` in Vue. Load `relayout.css` once, as in [Installation](/docs/install/).

## `rl-div`

An app whose markup is in the page needs only the classes. [`rl-div`](/docs/web-components/) is for markup inside a shadow root: an app mounted into one to keep its styles apart from the page's, or a web component the app renders. It needs the script, and in React and Vue a setting and a type import.

### React

On `rl-div`, write `class`, which works in every version of React. React 19 turns `className` into `class` on a custom element too, but React 18 writes it as an attribute named `classname`, which does nothing:

```jsx
import '@relayoutui/relayout';

export function Toolbar()
{
    return (
        <rl-div class="rl-row rl-gap-m rl-padding-m">
            <button>Save</button>
            <rl-div class="rl-width-fill">Draft</rl-div>
        </rl-div>
    );
}
```

For TypeScript, import the declaration of `rl-div` once, anywhere in the project:

```ts
import type {} from '@relayoutui/relayout/types/react';
```

Without it, TypeScript reports that `rl-div` doesn't exist on `JSX.IntrinsicElements`.

### Vue

Vue looks for a component named `rl-div` unless it is told that the tag is a custom element. With Vite, that is a compiler option of the Vue plugin:

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue({ template: { compilerOptions: { isCustomElement: tag => tag === 'rl-div' } } })],
});
```

Then `rl-div` takes `class` and `:class` like any element:

```html
<rl-div :class="['rl-row', 'rl-gap-m']">
    <button>Save</button>
    <rl-div class="rl-width-fill">Draft</rl-div>
</rl-div>
```

For `vue-tsc` and the editor, import the declaration of `rl-div` once, anywhere in the project:

```ts
import type {} from '@relayoutui/relayout/types/vue';
```

The two type paths hold types only, and nothing in them runs: the element registers with `import '@relayoutui/relayout'`.

## Editors

The package ships `custom-elements.json`, which describes `rl-div` for editors and tools that read a custom elements manifest.
