---
title: Ship small, ship often
date: 2026-10-14
author: Minh Nguyen
tags: Engineering, Product
cover: /images/shipping.jpg
excerpt: Why we cut every feature into the smallest useful slice — and how it changed our release cadence.
---
Big releases feel exciting, but they hide risk. Over the last year we moved to shipping tiny, independent changes several times a day.

## What changed

1. Pull requests got smaller — most are under 200 lines.
2. Reviews got faster, because reviewers could actually hold the change in their head.
3. Rollbacks became boring, which is exactly what you want.

## A simple rule

If a change can't be explained in one sentence, it's probably two changes.

```js
// Feature flags let unfinished work ship safely
if (flags.newCheckout) {
  renderNewCheckout()
}
```

Small steps, taken constantly, go a long way.
