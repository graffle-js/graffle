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
  .transport({ url: `...` })

const result = await graffle.gql(`{ query { thisWillError } }`).send()

console.log(result)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
/some/path/to/runPipeline.ts:XX:XX
          return new ContextualError(message, { hookName: signal.hookName, source: signal.source }, signal.error)
                 ^


ContextualError: There was an error in the core implementation of hook "exchange".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX:18)
    at async runPipeline (/some/path/to/runPipeline.ts:XX:XX:14)
    at async runPipeline (/some/path/to/runPipeline.ts:XX:XX:14)
    ... 2 lines matching cause stack trace ...
    at async Object.send (/some/path/to/gql.ts:XX:XX:26)
    at async <anonymous> (/some/path/to/output_preset__standard-graphql.ts:XX:XX:16) {
  cause: TypeError: Failed to parse URL from ...
      at new Request (node:internal/deps/undici/undici:XX:XX)
      at Object.run (/some/path/to/TransportHttp.ts:XX:XX:31)
      ... 6 lines matching cause stack trace ...
      at async Module.run (/some/path/to/run.ts:XX:XX:10)
      at async Object.send (/some/path/to/gql.ts:XX:XX:26) {
    [cause]: TypeError: Invalid URL
        at new URL (node:internal/url:XX:XX)
        at new Request (node:internal/deps/undici/undici:XX:XX)
        at Object.run (/some/path/to/TransportHttp.ts:XX:XX:31)
        at Object.run (/some/path/to/Pipeline.ts:XX:XX:51)
        at runStep (/some/path/to/runStep.ts:XX:XX:37)
        at runPipeline (/some/path/to/runPipeline.ts:XX:XX:8)
        at runPipeline (/some/path/to/runPipeline.ts:XX:XX:20)
        at async runPipeline (/some/path/to/runPipeline.ts:XX:XX:14)
        at async <anonymous> (/some/path/to/runner.ts:XX:XX:20)
        at async Module.run (/some/path/to/run.ts:XX:XX:10) {
      code: 'ERR_INVALID_URL',
      input: '...'
    }
  },
  context: { hookName: 'exchange', source: 'implementation' }
}

Node.js vXX.XX.XX
```
<!-- dprint-ignore-end -->
