::: details Example

<div class="ExampleSnippet">
<a href="../../examples/output/output_return-error_return-error-execution__return-error-execution">Return Error Execution</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/_.js'

const pokemon = Graffle
  .create({
    output: {
      envelope: false,
      errors: {
        execution: `return`,
        other: `throw`,
      },
    },
  })

// 1. The __execution__ error of an empty Pokemon name will be ***returned***.

type _result = typeof result
const result = await pokemon.mutation.addPokemon({
  $: { name: ``, hp: 1, defense: 0, attack: 0, $type: `water` },
  //         ^^
  name: true,
})
console.log(result)

// 2. The __other__ error, in this case from the inline extension, will be ***thrown***.

try {
  await pokemon
    .anyware(({ encode: _ }) => {
      throw new Error(`Something went wrong.`)
    })
    .query
    .pokemons({ name: true })
} catch (error) {
  console.log(error)
}
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
ContextualAggregateError
    at handleOutput (/some/path/to/handle.ts:XX:XX)
    at sendRequest (/some/path/to/send.ts:XX:XX)
    ... 2 lines matching cause stack trace ...
    at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX) {
  errors: [
    ContextualError: [
      {
        "code": "too_small",
        "minimum": 1,
        "type": "string",
        "inclusive": true,
        "exact": false,
        "message": "Pokemon name cannot be empty.",
        "path": [
          "name"
        ]
      }
    ]
        at <anonymous> (/some/path/to/handle.ts:XX:XX)
        at Array.map (<anonymous>)
        at handleOutput (/some/path/to/handle.ts:XX:XX)
        at sendRequest (/some/path/to/send.ts:XX:XX)
        at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
        at async executeRootField (/some/path/to/requestMethods.ts:XX:XX)
        at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX) {
      context: { locations: [ { line: 2, column: 3 } ], path: [ 'addPokemon' ] },
      _tag: 'ContextualError'
    }
  ],
  context: {},
  _tag: 'ContextualAggregateError',
  [cause]: ContextualError: [
    {
      "code": "too_small",
      "minimum": 1,
      "type": "string",
      "inclusive": true,
      "exact": false,
      "message": "Pokemon name cannot be empty.",
      "path": [
        "name"
      ]
    }
  ]
      at <anonymous> (/some/path/to/handle.ts:XX:XX)
      at Array.map (<anonymous>)
      at handleOutput (/some/path/to/handle.ts:XX:XX)
      at sendRequest (/some/path/to/send.ts:XX:XX)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async executeRootField (/some/path/to/requestMethods.ts:XX:XX)
      at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX) {
    context: { locations: [ { line: 2, column: 3 } ], path: [ 'addPokemon' ] },
    _tag: 'ContextualError'
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX)
    at async Module.run (/some/path/to/run.ts:XX:XX)
    at async sendRequest (/some/path/to/send.ts:XX:XX)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX)
    at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX)
      at applyBody (/some/path/to/runner.ts:XX:XX)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
}
```
<!-- dprint-ignore-end -->

</div>
:::
