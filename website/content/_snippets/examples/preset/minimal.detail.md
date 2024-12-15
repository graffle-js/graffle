::: details Example

<div class="ExampleSnippet">
<a href="../../examples/preset/minimal">Minimal</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'
import { create } from 'graffle/presets/minimal'

console.log(`Is the default preset`, Graffle.create === create)

const graffle = create()

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
:::
