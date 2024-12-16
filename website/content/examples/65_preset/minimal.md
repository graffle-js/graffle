---
aside: false
---

# Minimal

This example shows use of the `minimal` preset which is the
default preset used when importing Graffle. It bundles the
Transport HTTP extension.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'
import { GraffleMinimal } from 'graffle/presets/minimal'

console.log(`Is the default preset`, Graffle.create === GraffleMinimal.create)

const graffle = GraffleMinimal.create()

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
