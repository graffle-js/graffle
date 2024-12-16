::: details Example

<div class="ExampleSnippet">
<a href="../../examples/output/return-error-execution">Return Error Execution</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from './graffle/__.js'

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
ContextualAggregateError: One or more errors in the execution result.
    at handleOutput (/some/path/to/handleOutput.ts:XX:XX:19)
    at executeDocument (/some/path/to/requestMethods.ts:XX:XX:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:XX:XX)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX:18)
    at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX:16) {
  context: {},
  cause: undefined,
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
        at <anonymous> (/some/path/to/handleOutput.ts:XX:XX:16)
        at Array.map (<anonymous>)
        at handleOutput (/some/path/to/handleOutput.ts:XX:XX:27)
        at executeDocument (/some/path/to/requestMethods.ts:XX:XX:10)
        at process.processTicksAndRejections (node:internal/process/task_queues:XX:XX)
        at async executeRootField (/some/path/to/requestMethods.ts:XX:XX:18)
        at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX:16) {
      context: { locations: [ { line: 2, column: 3 } ], path: [ 'addPokemon' ] },
      cause: undefined
    }
  ]
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX:18)
    at process.processTicksAndRejections (node:internal/process/task_queues:XX:XX)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX:20)
    at async Module.run (/some/path/to/run.ts:XX:XX:10)
    at async executeDocument (/some/path/to/requestMethods.ts:XX:XX:18)
    at async executeRootField (/some/path/to/requestMethods.ts:XX:XX:18)
    at async <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX:3) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/some/path/to/output_return-error_return-error-execution__return-error-execution.ts:XX:XX:13)
      at applyBody (/some/path/to/runner.ts:XX:XX:28)
      at process.processTicksAndRejections (node:internal/process/task_queues:XX:XX)
}
```
<!-- dprint-ignore-end -->

</div>
:::
