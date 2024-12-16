<div class="ExampleSnippet">
<a href="../../examples/transport-http/abort">Abort</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'

const abortController = new AbortController()
//    ^^^^^^^^^^^^^^^

const graffle = Graffle.create().transport({
  url: `http://localhost:3000/graphql`,
})

const resultPromise = graffle
  .transport({ raw: { signal: abortController.signal } })
  //                          ^^^^^^^^^^^^^^^
  .gql`
    {
      pokemon {
        name
      }
    }
  `
  .send()

abortController.abort()
//              ^^^^^

const result = await resultPromise.catch((error: unknown) => (error as Error).message)

console.log(result)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
This operation was aborted
```
<!-- dprint-ignore-end -->

</div>
