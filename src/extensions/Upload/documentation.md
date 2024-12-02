# Upload

<!--@include: @/_snippets/example-links/extension_upload.md-->

Adds support for [GraphQL Multipart Request](https://github.com/jaydenseric/graphql-multipart-request-spec) to Graffle.

## Getting Started

`Upload` is a first party extension shipping in the graffle package.

```ts twoslash
import { Graffle } from 'graffle'
import { Upload } from 'graffle/extensions/upload'

const graffle = Graffle.create().use(Upload())
```
