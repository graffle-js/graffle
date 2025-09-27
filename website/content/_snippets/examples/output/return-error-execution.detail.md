::: details Example

<div class="ExampleSnippet">
<a href="../../examples/output/return-error-execution">Return Error Execution</a>

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
    at handleOutput (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/handle.ts:70:19)
    at sendRequest (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/send.ts:36:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async executeRootField (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/DocumentBuilder/requestMethods/requestMethods.ts:42:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/20_output/output_return-error_return-error-execution__return-error-execution.ts:22:16) {
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
        at <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/handle.ts:76:16)
        at Array.map (<anonymous>)
        at handleOutput (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/handle.ts:73:27)
        at sendRequest (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/send.ts:36:10)
        at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
        at async executeRootField (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/DocumentBuilder/requestMethods/requestMethods.ts:42:18)
        at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/20_output/output_return-error_return-error-execution__return-error-execution.ts:22:16) {
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
    at runPipeline (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:109:18)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:38:20)
    at async Module.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/run.ts:18:10)
    at async sendRequest (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/send.ts:30:18)
    at async executeRootField (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/DocumentBuilder/requestMethods/requestMethods.ts:42:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/20_output/output_return-error_return-error-execution__return-error-execution.ts:32:3) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/20_output/output_return-error_return-error-execution__return-error-execution.ts:34:13)
      at applyBody (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:59:28)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
}
```
<!-- dprint-ignore-end -->

</div>
:::
