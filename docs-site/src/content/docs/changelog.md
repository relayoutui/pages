---
title: "Changelog"
description: "Changes between Relayout versions that affect markup written for an earlier version."
---

Relayout is before 1.0, so a release can rename classes. This page lists the changes that affect markup written for an earlier version.

## 0.4.0

- `rl-div` is new: a plain block with no layout of its own, for a box that needs padding, a border or a width. See [Web components](/docs/web-components/).
- The `rl-column`, `rl-row`, `rl-grid` and `rl-frame` elements are `border-box`, as the classes always were. Before 0.4.0 they were `content-box`, so `rl-padding-*` or `rl-border` added to their `rl-width-*` pushed them past their parent.

## 0.3.0

- `rl-width-*` only limits the width, and `rl-center-self` centers. Before 0.3.0, `rl-width-*` also centered, and `rl-center-self` didn't exist. Markup with both classes lays out the same on either version.
