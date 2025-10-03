# Document Builder

The document builder extension allows you to build GraphQL documents with a TypeScript native syntax (as opposed to using GraphQL native syntax). And thanks to Graffle's powerful types all inputs (GraphQL arguments) and outputs (execution results) are type safe ✨.

By not hardcoding this feature into core, we keep Graffle lean and bundle sizes smaller for users that are not leveraging it.

## Getting Started

```ts twoslash
import { Graffle } from 'graffle'
import { DocumentBuilder } from 'graffle/extensions/document-builder'

const graffle = Graffle.create().use(DocumentBuilder)
```

In addition to using this extension programmatically you must also run the [generator](../../../website/content/guides/25_generation/10_generation.md). Refer to its docs for details about it. Here's a basic example of usage:

```sh
pnpm graffle --schema ./my-schema.graphql
```

:::tip Generated Document Builder
The generator also produces a standalone document builder that works without a client instance. This is useful for generating typed GraphQL documents to use with other GraphQL clients. See the [Document Builder guide](../../../website/content/guides/25_generation/20_document-builder.md) for details.
:::

## Selection Set Syntax

For a comprehensive guide to Graffle's selection set syntax including:

- Arguments and nested arguments
- Variables and type inference
- Aliases
- Directives (`@skip`, `@include`, field groups)
- Inline fragments (unions and interfaces)
- Enums
- Mutations
- Custom scalars

See the **[Document Builder Selection Set Syntax guide](../../../website/content/guides/25_generation/20_document-builder.md#selection-set-syntax)**.

## Methods

### Document

<!-- @include: @/_snippets/example-links/document.md -->

The `document` method is used to create whole GraphQL documents.

There are other more targeted ways of sending GraphQL requests when you don't need to author the entire document.

- If you only need to work with a _single operation type_ then use [`$batch`](./batch.md).
- If you only need to work with a _single root field_ then use [root field methods](./root-fields.md).

### Example

<!-- @include: @/_snippets/examples/generated/document.md -->

### Batch

### Root Fields

## Select
