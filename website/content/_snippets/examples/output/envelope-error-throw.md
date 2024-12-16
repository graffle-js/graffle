<div class="ExampleSnippet">
<a href="../../examples/output/envelope-error-throw">Envelope Error Throw</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

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

<!-- dprint-ignore-start -->
```txt
/some/path/to/runPipeline.ts:XX:XX
          return new ContextualError(message, {
                 ^


ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX:18)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX:20)
    at async Module.run (/some/path/to/run.ts:XX:XX:10)
    at async executeDocument (/some/path/to/requestMethods.ts:XX:XX:18)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX:18)
    at async <anonymous> (/some/path/to/output_envelope_envelope_error-throw__envelope-error-throw.ts:XX:XX:1) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/some/path/to/output_envelope_envelope_error-throw__envelope-error-throw.ts:XX:XX:11)
      at applyBody (/some/path/to/runner.ts:XX:XX:28)
}

Node.js vXX.XX.XX
```
<!-- dprint-ignore-end -->

</div>
