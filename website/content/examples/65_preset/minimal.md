---
aside: false
---

# Minimal

This example shows use of the `minimal` preset which is the
default preset used when importing Graffle. It bundles the
Transport HTTP extension.

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'
import { create } from 'graffle/presets/minimal'

console.log(`Is the default preset`, Graffle.create === create)

const graffle = create()

console.log(`The current transport is`, graffle._.transports.current)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
Is the default preset true
The current transport is http
```
<!-- dprint-ignore-end -->
