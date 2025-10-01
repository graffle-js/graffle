# Document Builder

The document builder extension allows you to build GraphQL documents with a TypeScript native syntax (as opposed to using GraphQL native syntax). And thanks to Graffle's powerful types all inputs (GraphQL arguments) and outputs (execution results) are type safe ✨.

By not hardcoding this feature into core, we keep Graffle lean and bundle sizes smaller for users that are not leveraging it.

## Getting Started

```ts twoslash
import { Graffle } from 'graffle'
import { DocumentBuilder } from 'graffle/extensions/document-builder'

const graffle = Graffle.create().use(DocumentBuilder)
```

In addition to using this extension programmatically you must also run the [generator](../../../website/content/guides/20_topics/30_generation.md). Refer to its docs for details about it. Here's a basic example of usage:

```sh
pnpm graffle --schema ./my-schema.graphql
```

## Static Document Builder

Generate typed GraphQL document strings at compile-time without a client instance. Perfect for passing typed documents to other GraphQL clients (graphql-request, urql, Apollo, etc.) or building tools.

### How it works

After running the generator, import `query`, `mutation`, or `subscription` builders from your generated code. Call methods to generate `TypedDocument.String` objects with the GraphQL string and full TypeScript types.

```ts
import { $var } from 'graffle/extensions/document-builder'
import { query } from './graffle/modules/document.js'

const doc = query.user({
  $: { id: $var }, // Variables automatically extracted
  name: true,
  email: true,
})

// doc.document → GraphQL string
// doc → typed as TypedDocument.String<ResultType, VariablesType>
```

### Key Features

- **Variables**: Use `$var` marker for automatic extraction with proper types
- **Modifiers**: Control nullability (`$var.optional`) and lists (`$var.list`)
- **Aliases**: Request same field multiple times with different arguments
- **Nested Arguments**: Arguments work at any nesting level
- **Type Inference**: Result types automatically inferred from selections
- **Zero Runtime**: Documents generated at compile-time

**Example:**

- [Complete Example](../../../examples/55_document-builder/document-builder_static.ts)

## GraphQL Feature Mapping

### Aliases

### Arguments

### Custom Scalars

### Directives

### Enums

### Inline Fragments

### Field Groups

### Type Conditions

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
