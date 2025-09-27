---
aside: false
---

# Standard Graphql

This example shows how to configure output to approximate the traditional GraphQL ExecutionResult type.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle, Preset } from 'graffle'

const graffle = Graffle
  .create({ output: Preset.traditionalGraphqlOutput })
  .transport({ url: `http://localhost:3000/graphql` })
  .anyware(async ({ exchange }) => {
    return exchange({ input: { ...exchange.input, request: { ...exchange.input.request, url: `bad` } } })
  })

const result = await graffle.gql(`{ query { thisWillError } }`).send()

console.log(result)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:117
          return new ContextualError(message, { hookName: signal.hookName, source: signal.source }, signal.error)
                 ^


ContextualError: There was an error in the core implementation of hook "exchange".
    at runPipeline (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:117:18)
    at async runPipeline (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:71:14)
    at async runPipeline (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runPipeline.ts:71:14)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runner.ts:38:20)
    at async Module.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/run.ts:18:10)
    at async sendRequest (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/client/send.ts:30:18)
    at async <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/20_output/output_preset__standard-graphql.ts:15:16) {
  cause: TypeError: Failed to parse URL from undefined
      at node:internal/deps/undici/undici:13510:13
      at async Object.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/TransportHttp/TransportHttp.ts:221:28)
      at async runStep (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runStep.ts:263:16) {
    [cause]: TypeError: Invalid URL
        at new URL (node:internal/url:825:25)
        at new Request (node:internal/deps/undici/undici:9586:25)
        at fetch (node:internal/deps/undici/undici:10315:25)
        at fetch (node:internal/deps/undici/undici:13508:10)
        at fetch (node:internal/bootstrap/web/exposed-window-or-worker:75:12)
        at Object.fetch (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/TransportHttp/TransportHttp.ts:218:85)
        at Object.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/extensions/TransportHttp/TransportHttp.ts:221:40)
        at Object.run (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/Pipeline/Pipeline.ts:57:51)
        at runStep (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runStep.ts:263:37)
        at <anonymous> (/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/node_modules/.pnpm/graffle@file+.._@opentelemetry+api@1.9.0_graphql@16.10.0/node_modules/graffle/src/lib/anyware/run/runStep.ts:155:14) {
      code: 'ERR_INVALID_URL',
      input: 'undefined'
    }
  },
  context: { hookName: 'exchange', source: 'implementation' }
}

Node.js v22.20.0
```
<!-- dprint-ignore-end -->
