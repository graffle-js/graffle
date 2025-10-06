# Requests

<!--@include: @/_snippets/example-links/gql.md-->

The `gql` method allows you to work directly with GraphQL syntax. It approximates what `graphql-request` was before it turned into `graffle`. Its name is also strategically chosen to leverage automatic GraphQL syntax highlighting that editors generally provide.

## Sending Pre-Built Documents

The `send` method provides a one-shot API for executing pre-built GraphQL documents without chaining from `.gql()`. This is useful when working with:

- Static builders from generated code (`Graffle.document()`, `Graffle.query()`, etc.)
- Typed documents from codegen tools (GraphQL Code Generator, etc.)
- Plain GraphQL strings

```ts
import { Graffle } from './graffle/__.js'

const client = Graffle.create({
  schema: { url: 'https://api.example.com/graphql' },
})

// From static builder
const doc = Graffle.document({
  query: { getUser: { user: { id: true, name: true } } },
})
const result = await client.send(doc, { id: '123' })

// From codegen
import { GetUserDocument } from './graphql/generated.js'
const result = await client.send(GetUserDocument, { id: '123' })

// Plain string
const result = await client.send(`{ user { id name } }`)
```

### Single vs Multiple Operations

For documents with a single operation, the operation name is optional:

```ts
const doc = Graffle.document({
  query: { getUser: { user: { id: true } } },
})
await client.send(doc, { id: '123' }) // Operation name inferred
```

For documents with multiple operations, specify which operation to execute:

```ts
const doc = Graffle.document({
  query: {
    getUser: { user: { id: true } },
    getPosts: { posts: { title: true } },
  },
})
await client.send(doc, 'getUser', { id: '123' })
await client.send(doc, 'getPosts')
```

### Comparison with `.gql()`

```ts
// Chained API - builds document inline
const result = await client.gql(doc).send({ id: '123' })

// One-shot API - uses pre-built document
const result = await client.send(doc, { id: '123' })
```

## Sending Document Nodes

Graffle allows you to send `DocumentNode` instances (created from a class in the `graphql` package) directly.

<!--@include: @/_snippets/examples/gql/gql-document-node.detail.md-->

You can attain type safety by creating your document with type variables. In a typical real project this would be something that a tool like [GraphQL Code Generator automatically](https://the-guild.dev/graphql/codegen) does for you.

<!--@include: @/_snippets/examples/gql/gql-document-node-typed.detail.md-->

## Sending Strings

You can skip creating document nodes if you don't need them, instead just sending a string directly.

<!--@include: @/_snippets/examples/gql/gql-string.detail.md-->

You can still attain type safety even for the string input by casting your string to `TypedDocumentString`.

<!--@include: @/_snippets/examples/gql/gql-string-typed.detail.md-->
