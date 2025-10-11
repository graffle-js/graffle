---
aside: false
---

# Bare

This example shows use of the `bare` preset which is Graffle at
its most minimal. It uses no extensions, not even a transport.

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
 * Because we have no transports registered,
 * the execution methods are not available to us.
 * We can call `.gql()` to build document senders,
 * but their execution methods (like `.$send()`)
 * will be unavailable.
 */

const _e1: 'Error: You cannot send requests yet. You must setup a transport.' = graffle1.gql('{ __typename }').$send

const graffle2 = graffle1.use(DocumentBuilder).use(Introspection())

const _e2: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.gql('{ __typename }').$send
const _e3: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.query.$batch
const _e4: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.query.pokemons
const _e5: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.mutation.$batch
const _e6: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.mutation.addPokemon
const _e7: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.introspect
```
<!-- dprint-ignore-end -->
