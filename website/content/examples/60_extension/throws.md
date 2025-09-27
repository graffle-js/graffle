---
aside: false
---

# Throws

This example shows how to use the Throws extension to throw errors for one-off cases.

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

#### Outputs

<!-- dprint-ignore-start -->
```txt
ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:109:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:38:20)
    at async Module.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/run.ts:18:10)
    at async sendRequest (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/send.ts:30:18)
    at async executeRootField (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/DocumentBuilder/requestMethods/requestMethods.ts:42:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/60_extension/extension_throws__throws.ts:18:17) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/60_extension/extension_throws__throws.ts:15:11)
      at applyBody (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:59:28)
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
UNCAUGHT EXCEPTION:

ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "encode".
    at runPipeline (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:109:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:38:20)
    at async Module.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/run.ts:18:10)
    at async sendRequest (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/send.ts:30:18)
    at async executeRootField (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/DocumentBuilder/requestMethods/requestMethods.ts:42:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/60_extension/extension_throws__throws.ts:21:1) {
  context: {
    hookName: 'encode',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: Error: Something went wrong.
      at <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/60_extension/extension_throws__throws.ts:15:11)
      at applyBody (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:59:28)
}
```
<!-- dprint-ignore-end -->
