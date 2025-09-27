::: details Example

<div class="ExampleSnippet">
<a href="../../examples/extension/extension_throws__throws">Throws</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Throws } from 'graffle/extensions/throws'
import { Graffle } from './graffle/_namespace.js'

const pokemon = Graffle
  .create({ output: { defaults: { errorChannel: `return` } } })
  .use(Throws)
  .anyware(({ encode: _ }) => {
    throw new Error(`Something went wrong.`)
  })

const result1 = await pokemon.query.pokemons({ name: true })
console.log(result1)

await pokemon.throws().query.pokemons({ name: true })
//            ^^^^^^
console.log(`This line will never be reached because of thrown error.`)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX)
    at async Module.run (/some/path/to/run.ts:XX:XX)
    at async sendRequest (/some/path/to/send.ts:XX:XX)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX)
    at async <anonymous> (/some/path/to/extension_throws__throws.ts:XX:XX) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/some/path/to/extension_throws__throws.ts:XX:XX)
      at applyBody (/some/path/to/runner.ts:XX:XX)
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
UNCAUGHT EXCEPTION:

ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX)
    at async Module.run (/some/path/to/run.ts:XX:XX)
    at async sendRequest (/some/path/to/send.ts:XX:XX)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX)
    at async <anonymous> (/some/path/to/extension_throws__throws.ts:XX:XX) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/some/path/to/extension_throws__throws.ts:XX:XX)
      at applyBody (/some/path/to/runner.ts:XX:XX)
}
```
<!-- dprint-ignore-end -->

</div>
:::
