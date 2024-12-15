<div class="ExampleSnippet">
<a href="../../examples/preset/none">None</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { create } from 'graffle/presets/bare'
import { Introspection } from '../../src/extensions/Introspection/Introspection.js'

const graffle = create()

/**
 * Because we have no transports registered, the `transport` method
 * is not available to us. Nor are the request methods.
 *
 * As well, request methods from extensions also check the status of the transport.
 */

const _t: never = graffle.transport
const _e1: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.gql
const _e2: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.document
const _e3: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.query.$batch
const _e4: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.query.id
const _e5: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.mutation.$batch
const _e6: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.mutation.id
const _e7: 'Error: You cannot send requests yet. You must setup a transport.' = graffle.use(Introspection()).introspect
```
<!-- dprint-ignore-end -->

</div>
