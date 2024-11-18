<div class="ExampleSnippet">
<a href="../../examples/output/standard-graphql">Standard Graphql</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle, Preset } from 'graffle'

const graffle = Graffle.create({
  schema: `...`,
  output: Preset.traditionalGraphqlOutput,
})

const result = await graffle.gql(`{ query { thisWillError } }`).send()

console.log(result)
```
<!-- dprint-ignore-end -->

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
  context: { hookName: 'exchange', source: 'implementation' },
  [cause]: TypeError: Failed to parse URL from ...
      at new Request (node:internal/deps/undici/undici:XX:XX)
      at Object.run (/some/path/to/httpTransport.ts:XX:XX:27)
      ... 6 lines matching cause stack trace ...
      at async Module.run (/some/path/to/run.ts:XX:XX:10)
      at async Object.send (/some/path/to/gql.ts:XX:XX:26) {
    [cause]: TypeError: Invalid URL
        at new URL (node:internal/url:XX:XX)
        at new Request (node:internal/deps/undici/undici:XX:XX)
        at Object.run (/some/path/to/httpTransport.ts:XX:XX:27)
        at Object.run (/some/path/to/builder.ts:XX:XX:53)
        at runStep (/some/path/to/runStep.ts:XX:XX:37)
        at runPipeline (/some/path/to/runPipeline.ts:XX:XX:8)
        at runPipeline (/some/path/to/runPipeline.ts:XX:XX:20)
        at async runPipeline (/some/path/to/runPipeline.ts:XX:XX:14)
        at async <anonymous> (/some/path/to/runner.ts:XX:XX:20)
        at async Module.run (/some/path/to/run.ts:XX:XX:10) {
      code: 'ERR_INVALID_URL',
      input: '...'
    }
  }
}

Node.js vXX.XX.XX
```
<!-- dprint-ignore-end -->

</div>
