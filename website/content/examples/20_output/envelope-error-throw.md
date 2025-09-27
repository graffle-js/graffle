---
aside: false
---

# Envelope Error Throw

This example shows how to configure output to throw errors even when using the envelope.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/_namespace.js'

const pokemon = Graffle
  .create({
    output: {
      envelope: {
        errors: {
          execution: false,
          other: false, // default
        }
      },
    },
  })
  .anyware(({ encode: _ }) => {
    throw new Error(`Something went wrong.`)
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  })

await pokemon.query.pokemons({ name: true })
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
/some/path/to/runPipeline.ts:XX
          return new ContextualError(message, {
                 ^


ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX)
    at async Module.run (/some/path/to/run.ts:XX:XX)
    at async sendRequest (/some/path/to/send.ts:XX:XX)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX)
    at async <anonymous> (/some/path/to/output_envelope_envelope_error-throw__envelope-error-throw.ts:XX:XX) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/some/path/to/output_envelope_envelope_error-throw__envelope-error-throw.ts:XX:XX)
      at applyBody (/some/path/to/runner.ts:XX:XX)
}

Node.js vXX.XX.XX
```
<!-- dprint-ignore-end -->
