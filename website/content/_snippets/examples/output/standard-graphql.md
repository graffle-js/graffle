<div class="ExampleSnippet">
<a href="../../examples/output/output_preset__standard-graphql">Standard Graphql</a>

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
    return exchange({
      input: {
        ...exchange.input,
        request: {
          ...exchange.input.request,
          url: { _tag: 'url', value: new URL('bad') },
        },
      },
    })
  })

const result = await graffle.gql(`{ query { thisWillError } }`).$send()

console.log(result)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
/some/path/to/runPipeline.ts:XX
          return new ContextualError(message, {
                 ^


ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "exchange".
    at runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at async runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at async runPipeline (/some/path/to/runPipeline.ts:XX:XX)
    at async <anonymous> (/some/path/to/runner.ts:XX:XX)
    at async Module.run (/some/path/to/run.ts:XX:XX)
    at async sendRequest (/some/path/to/send.ts:XX:XX)
    at async <anonymous> (/some/path/to/output_preset__standard-graphql.ts:XX:XX) {
  context: {
    hookName: 'exchange',
    source: 'extension',
    interceptorName: 'anonymous'
  },
  cause: TypeError: Invalid URL
      at new URL (node:internal/url:825:25)
      at <anonymous> (/some/path/to/output_preset__standard-graphql.ts:XX:XX)
      at applyBody (/some/path/to/runner.ts:XX:XX) {
    code: 'ERR_INVALID_URL',
    input: 'bad'
  }
}

Node.js vXX.XX.XX
```
<!-- dprint-ignore-end -->

</div>
