::: details Example

<div class="ExampleSnippet">
<a href="../../examples/preset/bare">Bare</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { DocumentBuilder } from 'graffle/extensions/document-builder'
import { Introspection } from 'graffle/extensions/introspection'
import { GraffleBare } from 'graffle/presets/bare'

const graffle1 = GraffleBare.create()

/**
 * Because we have no transports registered, the `transport` method
 * is not available to us. Nor are the request methods.
 */

const _t: never = graffle1.transport
const _e1: 'Error: You cannot send requests yet. You must setup a transport.' = graffle1.gql

/**
 * As well, request methods from extensions also check the status of the transport.
 */

const graffle2 = graffle1.use(DocumentBuilder()).use(Introspection())

const _e2: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.document
const _e3: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.query.$batch
const _e4: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.query.pokemons
const _e5: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.mutation.$batch
const _e6: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.mutation.addPokemon
const _e7: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.introspect
```
<!-- dprint-ignore-end -->

</div>
:::
