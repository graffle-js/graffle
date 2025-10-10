# `.send()` Method Implementation Plan

**Date**: 2025-10-05

---

## Architecture Overview

**Key insight**: This feature is about **static builders**, not instance builders.

- `Graffle.document()` - NEW static builder function (like `Graffle.query`, `Graffle.mutation`)
- `client.send()` - NEW instance method to send static builder documents
- `client.document()` - UNCHANGED instance builder (from DocumentBuilder extension)

**No changes needed to instance builder extension.**

---

## Commit 1: Create TypedFullDocument type foundation

### What

Create the new `TypedFullDocument` type and supporting utilities in `/lib/grafaid/typed-full-document`.

### Why

This type represents a full GraphQL document containing multiple operations with complete type information. It's the return type of the new `Graffle.document()` static builder and the input type for `client.send()`.

### How

**New directory structure:**

```
/lib/grafaid/typed-full-document/
├── $.ts                           # Barrel export
├── TypedFullDocument.ts     # Main type definition
└── helpers.ts                     # Type utilities
```

**File: `/lib/grafaid/typed-full-document/TypedFullDocument.ts`**

````typescript
import type { SomeObjectData, Variables } from '../graphql.js'

/**
 * Metadata for a single operation within a full document.
 */
export type OperationMetadata = {
  readonly name: string
  readonly result: SomeObjectData
  readonly variables: Variables
}

/**
 * A typed GraphQL document string containing one or more named operations.
 *
 * Unlike TypedDocumentString which represents a single operation, this type
 * captures complete type information for all operations in a document via
 * the $Operations tuple parameter.
 *
 * Created by static builders like Graffle.document() and consumed by client.send().
 *
 * @example
 * ```typescript
 * type MyDoc = TypedFullDocument<[
 *   { name: 'getUser', result: { user: { id: string } }, variables: { id: string } },
 *   { name: 'updateUser', result: { updateUser: { id: string } }, variables: { id: string, name: string } }
 * ]>
 * ```
 */
export interface TypedFullDocument<
  $Operations extends readonly [OperationMetadata, ...OperationMetadata[]],
> extends String {
  /**
   * Phantom type parameter containing operation metadata.
   * Used purely for type-level computation - never exists at runtime.
   */
  readonly __operations?: $Operations
}
````

**File: `/lib/grafaid/typed-full-document/helpers.ts`**

```typescript
import type {
  OperationMetadata,
  TypedFullDocument,
} from './TypedFullDocument.js'

/**
 * Extract a specific operation's metadata from operations tuple by name.
 */
export type ExtractOperation<
  $Operations extends readonly OperationMetadata[],
  $Name extends string,
> = Extract<$Operations[number], { name: $Name }>

/**
 * Get the result type for a specific operation.
 */
export type ResultOf<
  $Doc extends TypedFullDocument<any>,
  $Name extends $Doc['__operations'][number]['name'],
> = ExtractOperation<$Doc['__operations'], $Name>['result']

/**
 * Get the variables type for a specific operation.
 */
export type VariablesOf<
  $Doc extends TypedFullDocument<any>,
  $Name extends $Doc['__operations'][number]['name'],
> = ExtractOperation<$Doc['__operations'], $Name>['variables']

/**
 * Check if a TypedFullDocument has exactly one operation.
 */
export type IsSingleOperation<$Doc extends TypedFullDocument<any>> =
  $Doc['__operations'] extends readonly [any] ? true : false
```

**File: `/lib/grafaid/typed-full-document/$.ts`**

```typescript
export * from './helpers.js'
export * from './TypedFullDocument.js'
```

---

## Commit 2: Add Graffle.document() static builder function

### What

Create a new static builder function `document()` in the static builder module that accepts a document object with multiple operations and returns a `TypedFullDocument`.

### Why

This is the static counterpart to `Graffle.query()` and `Graffle.mutation()`, but for full documents with potentially multiple operations. It enables users to build typed documents at compile time that can be passed to `client.send()`.

### How

**File: `/src/extensions/DocumentBuilder/staticBuilder.ts`**

Add a new exported function alongside `createStaticRootType`:

````typescript
import type { TypedFullDocument } from '#/lib/grafaid/typed-full-document/$.js'
import type { OperationTypeNode } from 'graphql'
import { Select } from './Select/$.js'
import { toGraphQLDocument } from './SelectGraphQLMapper/nodes/1_Document.js'
import { defaults } from './staticBuilderDefaults.js'

/**
 * Create a static document containing one or more named operations.
 *
 * Unlike createStaticRootType which creates single operations, this function
 * creates full documents that can contain multiple queries and/or mutations.
 * Returns a TypedFullDocument that captures type information for all operations.
 *
 * @param document - Document object with query and/or mutation operations
 * @returns TypedFullDocument representing the complete document
 *
 * @example
 * ```ts
 * import { document } from './graffle/index.js'
 *
 * const doc = document({
 *   query: {
 *     getUser: { user: { id: true, name: true } },
 *     getPost: { post: { id: true, title: true } }
 *   },
 *   mutation: {
 *     updateUser: { updateUser: { id: true, name: true } }
 *   }
 * })
 * // Returns: TypedFullDocument with 3 operations
 * ```
 */
export const document = (documentObject: Select.Document.DocumentObject) => {
  // Normalize the document object into internal representation
  const documentNormalized = Select.Document.normalizeOrThrow(documentObject)

  // Convert to GraphQL document
  const result = toGraphQLDocument(documentNormalized, {
    ...defaults,
    // Note: SDDM and scalars are not needed for static builder
    // Type safety is provided at compile time via TypedFullDocument
  })

  // Print and return as TypedFullDocument
  // The generator will provide proper operation types in the generated code
  return print(result.document) as any as TypedFullDocument<any>
}
````

**Type-level interface** (for generated code):

The generator will need to create a properly-typed version:

```typescript
// In generated code (e.g., graffle/__.ts)
export const document: {
  <$Doc extends Select.Document.DocumentObject>(
    doc: $Doc,
  ): TypedFullDocument<
    // Generator computes this from $Doc
    InferOperationsTuple<$Doc>
  >
}
```

**Export from static builder module:**

Update `/src/extensions/DocumentBuilder/$$.ts`:

```typescript
export {
  type Config,
  createStaticRootType,
  document, // NEW
  type StaticDocumentBuilder,
} from './staticBuilder.js'
```

---

## Commit 3: Implement client `.send()` method

### What

Add the `.send()` instance method to the Graffle client that accepts various document types and sends them.

### Why

This provides the one-shot API for sending pre-built documents from static builders or codegen without chaining from `.gql()`.

### How

**File: `/src/client/methods/send.ts`** (new file)

````typescript
import type { TypedFullDocument } from '#/lib/grafaid/typed-full-document/$.js'
import type { SimplifyNullable } from '#/lib/prelude.js'
import type { Grafaid } from '#lib/grafaid'
import type { HandleOutput } from '../handle.js'
import type { SendArguments } from './gql/send.js'

// Helper to extract operation from TypedFullDocument
type ExtractOperationMetadata<
  $Ops extends readonly any[],
  $Name extends string,
> = Extract<$Ops[number], { name: $Name }>

/**
 * Send a GraphQL document directly without chaining from `.gql()`.
 *
 * Supports:
 * - TypedDocumentString/TypedDocumentNode (from codegen)
 * - TypedFullDocument (from static builders like Graffle.document())
 * - Plain strings (no type safety)
 *
 * @example
 * ```ts
 * // Typed document from codegen
 * const result = await client.send(GetUserDocument, { id: '123' })
 * ```
 *
 * @example
 * ```ts
 * // Static builder document
 * import { Graffle } from './graffle/__.js'
 * const doc = Graffle.document({
 *   query: { getUser: { user: { id: true } } }
 * })
 * const user = await client.send(doc, { id: '123' })
 * ```
 */
export interface SendMethod<$Context> {
  // TypedDocumentString or TypedDocumentNode (existing single-operation types)
  <
    $Doc extends
      | Grafaid.Document.Typed.TypedDocumentString
      | Grafaid.Document.Typed.TypedDocumentNode,
  >(
    doc: $Doc,
    ...args: SendArguments<$Doc>
  ): Promise<
    SimplifyNullable<
      HandleOutput<$Context, Grafaid.Document.Typed.ResultOf<$Doc>>
    >
  >

  // TypedFullDocument with single operation - no operation name needed
  <$Doc extends TypedFullDocument<readonly [infer $Op]>>(
    doc: $Doc,
    variables?: $Op extends { variables: infer $V } ? $V : never,
  ): Promise<
    SimplifyNullable<
      HandleOutput<
        $Context,
        $Op extends { result: infer $R } ? $R : never
      >
    >
  >

  // TypedFullDocument with multiple operations - operation name required
  <
    $Doc extends TypedFullDocument<infer $Ops>,
    $OpName extends $Ops[number]['name'],
    $Op extends ExtractOperationMetadata<$Ops, $OpName> =
      ExtractOperationMetadata<$Ops, $OpName>,
  >(
    doc: $Doc,
    operationName: $OpName,
    variables?: $Op['variables'],
  ): Promise<
    SimplifyNullable<
      HandleOutput<$Context, $Op['result']>
    >
  >

  // Plain string - no type safety
  (
    doc: string,
    operationName?: string,
    variables?: Grafaid.Document.Typed.Variables,
  ): Promise<
    SimplifyNullable<
      HandleOutput<$Context, Grafaid.Document.Typed.SomeObjectData>
    >
  >
}

export namespace SendMethod {
  /**
   * Normalize send() arguments into a consistent shape.
   */
  export const normalizeArguments = (args: any[]) => {
    const doc = args[0] as string

    // Determine if second argument is operation name or variables
    // If it's a string, it's an operation name
    const hasOperationName = typeof args[1] === 'string'

    const operationName = hasOperationName ? args[1] : undefined
    const variables = hasOperationName ? args[2] : args[1]

    return {
      document: doc,
      operationName,
      variables,
    }
  }
}
````

**File: `/src/client/client.ts`**

Import and add to interface:

````typescript
import { SendMethod } from './methods/send.js'

export interface ClientBase<$Context extends Context> {
  // ... existing properties ...

  /**
   * Send a GraphQL document directly.
   *
   * Accepts documents from static builders (Graffle.document()), codegen (TypedDocumentNode),
   * or plain strings. Returns the result directly without chaining.
   *
   * For single-operation documents, operation name is optional.
   * For multi-operation documents, operation name is required.
   *
   * @example
   * ```ts
   * import { Graffle } from './graffle/__.js'
   * const doc = Graffle.document({ query: { getUser: { user: { id: true } } } })
   * const result = await graffle.send(doc, { id: '123' })
   * ```
   */
  send: SendMethod<$Context>
}
````

**Add implementation in factory function:**

```typescript
export const create = <$Context extends Context = ContextEmpty>(
  initialInput?: Context.InitialInput,
): Client<
  Context.from<
    $Context,
    Context.InitialInput.Normalize<$Context, $Context & typeof initialInput>
  >
> => {
  // ... existing setup ...

  const client: ClientBase<typeof context> = {
    // ... existing methods ...

    send: (async (...args: any[]) => {
      if (!context.transports.current) throw new Error(`No transport selected`)

      const { document, operationName, variables } = SendMethod
        .normalizeArguments(args)

      // Build the request
      const request = {
        query: document,
        variables,
        operationName,
      }

      // Get operation type
      const operationType = getOperationType(request)
      if (!operationType) throw new Error(`Could not get operation type`)

      // Build analyzed request
      const analyzedRequest = {
        operation: operationType,
        query: document,
        variables,
        operationName,
      }

      return sendRequest(context, analyzedRequest)
    }) as any,
  }

  // ... rest of factory ...
}
```

---

## Commit 4: Add tests for `.send()` with static builder documents

### What

Create tests verifying that `client.send()` works correctly with documents from the new `Graffle.document()` static builder, including both runtime behavior and type-level correctness.

### Why

We need to verify the integration between static builder and client instance method works correctly for all scenarios, both at runtime and at the type level.

### How

**File: `/src/client/methods/send.test.ts`** (new file)

```typescript
import type { TypedFullDocument } from '#/lib/grafaid/typed-full-document/$.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { expect, test } from 'vitest'
import { db } from '../../../tests/_/fixtures/schemas/possible/db.js'
import { possibleSchema } from '../../../tests/_/fixtures/schemas/possible/schema.js'
import { Graffle } from '../../exports/index.js'
import { Possible } from '../../extensions/DocumentBuilder/__tests__/fixtures/possible/$.js'
import { document } from '../../extensions/DocumentBuilder/staticBuilder.js'
import { TransportMemory } from '../../extensions/TransportMemory/TransportMemory.js'

// Note: In real usage, users would import document from generated code
// For testing, we import directly from static builder

const client = Graffle
  .create({ schema: { name: `possible` } })
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })

// Runtime tests using Test.describe table-driven pattern
// Accepts either document builder objects or plain strings
Test.describe('send() with documents')
  .i<{ doc: Possible.SelectionSets.$Document | string; sendArgs: any[] }>()
  .o<object>()
  .cases([
    // Builder: Single operation - no operation name needed
    [
      {
        doc: { query: { foo: { id: true } } },
        sendArgs: [],
      },
      { id: db.id1 },
    ],
    // Builder: Multiple operations - operation name required
    [
      {
        doc: { query: { foo: { id: true }, bar: { idNonNull: true } } },
        sendArgs: ['foo'],
      },
      { id: db.id1 },
    ],
    [
      {
        doc: { query: { foo: { id: true }, bar: { idNonNull: true } } },
        sendArgs: ['bar'],
      },
      { idNonNull: db.id1 },
    ],
    // Builder: Mixed query and mutation
    [
      {
        doc: { query: { foo: { id: true } }, mutation: { bar: { id: true } } },
        sendArgs: ['foo'],
      },
      { id: db.id1 },
    ],
    [
      {
        doc: { query: { foo: { id: true } }, mutation: { bar: { id: true } } },
        sendArgs: ['bar'],
      },
      { id: db.id1 },
    ],
    // String: Simple query
    [
      { doc: `{ foo { id } }`, sendArgs: [] },
      expect.anything(),
    ],
    // String: Named operation
    [
      { doc: `query GetFoo { foo { id } }`, sendArgs: ['GetFoo'] },
      expect.anything(),
    ],
    // String: With variables
    [
      {
        doc: `query GetFoo($id: ID!) { foo(id: $id) { id } }`,
        sendArgs: ['GetFoo', { id: '123' }],
      },
      expect.anything(),
    ],
  ])
  .test(async ({ doc, sendArgs }, expected) => {
    // Convert builder object to document string if needed
    const docString = typeof doc === 'string' ? doc : document(doc)
    const result = await client.send(docString, ...sendArgs)
    expect(result).toEqual(expected)
  })

// Type-level tests
test('TypedFullDocument with single operation - no operation name parameter', () => {
  declare let _: any

  const doc = document({
    query: { foo: { id: true } },
  }) as any as TypedFullDocument<
    [{ name: 'foo'; result: { id: string }; variables: {} }]
  >

  const result = client.send(doc)
  Ts.assert<Promise<{ id: string }>>()(_ as typeof result)
})

test('TypedFullDocument with multiple operations - operation name required', () => {
  declare let _: any

  const doc = document({
    query: { foo: { id: true }, bar: { idNonNull: true } },
  }) as any as TypedFullDocument<[
    { name: 'foo'; result: { id: string }; variables: {} },
    { name: 'bar'; result: { idNonNull: string }; variables: {} },
  ]>

  const result = client.send(doc, 'foo')
  Ts.assert<Promise<{ id: string }>>()(_ as typeof result)

  const result2 = client.send(doc, 'bar')
  Ts.assert<Promise<{ idNonNull: string }>>()(_ as typeof result2)
})

test('TypedFullDocument - operation name determines result type', () => {
  declare let _: any

  const doc = document({
    query: { foo: { id: true }, bar: { idNonNull: true } },
  }) as any as TypedFullDocument<[
    { name: 'foo'; result: { id: string }; variables: {} },
    {
      name: 'bar'
      result: { idNonNull: string }
      variables: { limit: number }
    },
  ]>

  const fooResult = client.send(doc, 'foo')
  Ts.assert<Promise<{ id: string }>>()(_ as typeof fooResult)

  const barResult = client.send(doc, 'bar', { limit: 10 })
  Ts.assert<Promise<{ idNonNull: string }>>()(_ as typeof barResult)
})

test('plain string - no type safety', () => {
  declare let _: any

  const query = `{ foo { id } }`
  const result = client.send(query)

  Ts.assert<Promise<any>>()(_ as typeof result)
})
```

---

## Commit 5: Update static builder example

### What

Update the static builder example to demonstrate the new `Graffle.document()` function and `client.send()` method.

### Why

Users should see practical examples of how to build full documents with multiple operations and send them using the new one-shot API.

### How

**File: `/examples/55_document-builder/document-builder_static.ts`**

Add new examples at the end of the file:

```typescript
/*

6. Full Document with Multiple Operations
------------------------------------------------------------------------

Build a complete document with multiple named queries and send them:

*/

const multiOpDoc = Graffle.document({
  query: {
    // First operation: get all pokemons
    allPokemons: {
      pokemons: {
        name: true,
        hp: true,
      },
    },
    // Second operation: get specific pokemon by name
    specificPokemon: {
      pokemonByName: {
        $: { name: $('pokemonName').required() },
        name: true,
        type: true,
        hp: true,
      },
    },
  },
})

show(multiOpDoc)

// Execute specific operations from the document
import { Graffle as GraffleClient } from '../$/graffle/__.js'

const client = GraffleClient.create()

// Execute first operation (no variables needed)
const allPokemonsResult = await client.send(multiOpDoc, 'allPokemons')
show(allPokemonsResult)

// Execute second operation (variables required)
const specificResult = await client.send(multiOpDoc, 'specificPokemon', {
  pokemonName: 'Pikachu',
})
show(specificResult)

/*

7. Single Operation Document (no operation name needed)
------------------------------------------------------------------------

When document has only one operation, no operation name needed:

*/

const singleOpDoc = Graffle.document({
  query: {
    getTrainers: {
      trainers: {
        name: true,
        pokemons: { name: true },
      },
    },
  },
})

show(singleOpDoc)

// Send without operation name since there's only one
const trainers = await client.send(singleOpDoc)
show(trainers)

/*

8. Mixed Query and Mutation Document
------------------------------------------------------------------------

Combine queries and mutations in a single document:

*/

const mixedDoc = Graffle.document({
  query: {
    getPokemon: {
      pokemonByName: {
        $: { name: $('name').required() },
        name: true,
        hp: true,
        attack: true,
      },
    },
  },
  mutation: {
    addNewPokemon: {
      addPokemon: {
        $: {
          name: $.required(),
          type: $.required(),
          hp: $.required(),
          attack: $.required(),
          defense: $.required(),
        },
        name: true,
        type: true,
      },
    },
  },
})

show(mixedDoc)

// Execute query operation
const pokemon = await client.send(mixedDoc, 'getPokemon', { name: 'Charizard' })
show(pokemon)

// Execute mutation operation
const newPokemon = await client.send(mixedDoc, 'addNewPokemon', {
  name: 'Mew',
  type: 'psychic',
  hp: 100,
  attack: 100,
  defense: 100,
})
show(newPokemon)
```

---

## Commit 6: Update website documentation

### What

Add documentation for the new `.send()` method and `Graffle.document()` static builder to the website.

### Why

Users need to discover and understand how to use the new one-shot `.send()` API and the `Graffle.document()` static builder for building full documents.

### How

**File: `/website/content/guides/document-builder.md`** (or similar)

Add a new section documenting the static `document()` builder:

````markdown
## Building Full Documents

The `Graffle.document()` static builder allows you to create documents with multiple named operations:

```ts
import { Graffle } from './graffle/__.js'

// Single operation
const getUserDoc = Graffle.document({
  query: {
    getUser: {
      user: {
        id: true,
        name: true,
      },
    },
  },
})

// Multiple operations
const multiOpDoc = Graffle.document({
  query: {
    getUser: {
      user: { id: true, name: true },
    },
    getPosts: {
      posts: { id: true, title: true },
    },
  },
  mutation: {
    updateUser: {
      updateUser: { id: true, name: true },
    },
  },
})
```

Documents built this way return `TypedFullDocument` with complete type information for all operations.
````

**File: `/website/content/guides/methods.md`** (or similar)

Add documentation for the `.send()` method:

````markdown
## `.send()` - Direct Document Execution

The `.send()` method provides a one-shot API for executing GraphQL documents without chaining from `.gql()`:

```ts
import { Graffle } from './graffle/__.js'

const client = Graffle.create({
  schema: URL(`https://api.example.com/graphql`),
})

// From static builder - single operation
const doc = Graffle.document({
  query: { getUser: { user: { id: true, name: true } } },
})
const user = await client.send(doc, { id: '123' })
//    ^? { user: { id: string, name: string } }

// From static builder - multiple operations (operation name required)
const multiDoc = Graffle.document({
  query: {
    getUser: { user: { id: true } },
    getPosts: { posts: { title: true } },
  },
})
const user = await client.send(multiDoc, 'getUser', { id: '123' })
const posts = await client.send(multiDoc, 'getPosts')

// From codegen (TypedDocumentNode)
import { GetUserDocument } from './graphql/generated.js'
const result = await client.send(GetUserDocument, { id: '123' })

// Plain string (no type safety)
const result = await client.send(`{ user { id } }`)
```

### Comparison with `.gql()`

```ts
// Before: chained API
const result = await client.gql(doc).send({ id: '123' })

// After: one-shot API
const result = await client.send(doc, { id: '123' })
```

Both approaches are supported. Use `.send()` when you have a pre-built document (from static builders or codegen), and use `.gql().send()` when you want to build the document inline.
````

**File: `/website/content/examples/`**

Add example files demonstrating:

1. Building documents with `Graffle.document()`
2. Executing with `.send()`
3. Multiple operations with operation name selection

---

## Notes

### Generator Updates Required

The generator will need to export a properly-typed `document` function in the generated client namespace:

```typescript
// In generated graffle/__.ts or similar
import { document as documentRuntime } from 'graffle'

export const document: <$Doc extends DocumentObject>(
  doc: $Doc,
) => TypedFullDocument<InferOperationsTuple<$Doc>> = documentRuntime
```

The `InferOperationsTuple` type would be generated based on the schema to extract operation names, results, and variables from the document object.

### No Breaking Changes

Unlike my previous plan, this approach makes **zero breaking changes**:

- Instance builder `client.document().run()` continues to work
- We're only ADDING new functionality: `Graffle.document()` static builder and `client.send()`

### Architecture Separation

Clear separation of concerns:

- **Static builders** (`Graffle.document()`, `Graffle.query()`, `Graffle.mutation()`) - Build-time document construction
- **Instance builder** (`client.document()`) - Runtime document construction with `.run()`
- **Send method** (`client.send()`) - Universal document executor
