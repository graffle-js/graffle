---
aside: false
---

# None

This example shows use of the `bare` preset which is Graffle at
its most minimal. It uses no extensions, not even a transport.

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

#### Outputs

<!-- dprint-ignore-start -->
```txt
node:internal/per_context/domexception:53
    ErrorCaptureStackTrace(this);
    ^
DOMException [DataCloneError]: input=>{const sddm=input.state.schemaMap;const scalars=input.state.scalars.map;if(sddm){const request=normalize...<omitted>...t} could not be cloned.
    at new DOMException (node:internal/per_context/domexception:XX:XX)
    at create (/some/path/to/client.ts:XX:XX:5)
    at <anonymous> (/some/path/to/preset_none.ts:XX:XX:17)
    at ModuleJob.run (node:internal/modules/esm/module_job:XX:XX)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:XX:XX)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:XX:XX)

Node.js vXX.XX.XX
```
<!-- dprint-ignore-end -->
