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

// This example demonstrates that invalid GraphQL documents are caught by TypeScript type checking.
// The field 'query' doesn't exist on the Query type - this error is caught before runtime.
// @ts-expect-error - intentionally invalid document: field 'query' doesn't exist on Query type
const result = await graffle.gql(`{ query { thisWillError } }`).$send()

console.log(result)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  errors: [
    {
      message: 'Cannot query field "query" on type "Query".',
      locations: [ { line: 1, column: 3 } ],
      extensions: { code: 'GRAPHQL_VALIDATION_FAILED' }
    }
  ],
  response: Response {
    status: 400,
    statusText: 'Bad Request',
    headers: Headers {
      'content-type': 'application/graphql-response+json; charset=utf-8',
      'content-length': '160',
      date: 'Tue, 14 Oct 2025 20:58:18 GMT',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5'
    },
    body: ReadableStream { locked: true, state: 'closed', supportsBYOB: true },
    bodyUsed: true,
    ok: false,
    redirected: false,
    type: 'basic',
    url: 'http://localhost:3000/graphql'
  }
}
```
<!-- dprint-ignore-end -->
