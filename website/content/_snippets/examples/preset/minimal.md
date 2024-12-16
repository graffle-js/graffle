<div class="ExampleSnippet">
<a href="../../examples/preset/minimal">Minimal</a>

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

<!-- dprint-ignore-start -->
```txt
Is the default preset true
The current transport is http
```
<!-- dprint-ignore-end -->

</div>
