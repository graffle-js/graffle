# Implementation Plan: gql-tada Integration

This document outlines the step-by-step implementation plan for integrating gql-tada type inference into Graffle.

## Commit 1: Export static `gql()` function from generator

### What

Generate a static `gql()` function in the generated client that uses gql-tada's type inference but with type-only imports (no runtime).

### Why

This provides the foundation for the static API (`Graffle.gql(...)`). We need to generate a properly typed function that developers can import and use to create typed GraphQL documents. This must be done first because it establishes the type machinery that the instance method will reuse.

### How

**File: `src/generator/generators/Gql.ts`** (new file)

Create a new generator that exports a `gql` function:

```typescript
import { createModuleGenerator } from '../helpers/moduleGenerator.js'

export const ModuleGeneratorGql = createModuleGenerator(
  `gql`,
  ({ config, code }) => {
    // Import type-only gql-tada types
    code`import type { initGraphQLTada } from 'gql.tada'`
    code`import type { introspection } from './tada.js'`
    code`import { parse } from 'graphql'`
    code``

    // Create the graphql function type using gql-tada
    code`type GraphQLTadaAPI = initGraphQLTada<{`
    code`  introspection: introspection`
    code`}>`
    code``

    // Implement the function with graphql-js parse (runtime)
    // Type it with gql-tada types (compile-time)
    code`export const gql: GraphQLTadaAPI = ((query: string) => {`
    code`  return parse(query) as any`
    code`}) as any`
  },
)
```

**File: `src/generator/generators/$$.ts`**

Add the new generator to the list:

```typescript
import { ModuleGeneratorGql } from './Gql.js'

export const generators = {
  // ... existing generators
  Gql: ModuleGeneratorGql,
}
```

**Generated output: `graffle/modules/gql.ts`**

```typescript
import type { initGraphQLTada } from 'gql.tada'
import type { introspection } from './tada.js'
import { parse } from 'graphql'

type GraphQLTadaAPI = initGraphQLTada<{
  introspection: introspection
}>

export const gql: GraphQLTadaAPI = ((query: string) => {
  return parse(query) as any
}) as any
```

**File: `website/graffle/modules/$$.ts` (or wherever the main export index is)**

Export the `gql` function:

```typescript
export { gql } from './gql.js'
```

**Usage:**

```typescript
import { Graffle } from './graffle/_exports.js'

const doc = Graffle.gql(`
  query GetPokemon($name: String!) {
    pokemonByName(name: $name) { id name }
  }
`)
// doc is TadaDocumentNode with full type inference
```

---

## Commit 2: Add `client.send(document, variables)` method

### What

Implement the `client.send()` method that accepts a TadaDocumentNode (or any DocumentNode) and optional variables, executing it via the current transport.

### Why

This provides the execution mechanism for statically defined documents. Developers need a way to take a document created with `Graffle.gql()` and execute it through a client instance with full type safety on variables and results.

### How

**File: `src/client/methods/send.ts`**

The method already exists but may need updates to properly handle TadaDocumentNode types. Current implementation looks correct - it accepts a document and variables.

Ensure the type signature is:

```typescript
export type SendMethod<$Context extends Context> = <
  $Document extends TypedDocumentNode<any, any> | DocumentNode,
>(
  document: $Document,
  variables?: $Document extends TypedDocumentNode<any, infer V> ? V : Record<string, any>,
  operationName?: string
) => Promise<$Document extends TypedDocumentNode<infer R, any> ? R : any>
```

**Runtime implementation (already exists in `src/client/client.ts` lines 513-538):**

```typescript
send: (async (...args: any[]) => {
  if (!context.transports.current) throw new Error(`No transport selected`)

  const { document, operationName, variables } = SendMethod.normalizeArguments(args)

  const request = {
    query: document,
    variables,
    operationName,
  }

  const operationType = getOperationType(request)
  if (!operationType) throw new Error(`Could not get operation type`)

  const analyzedRequest = {
    operation: operationType,
    query: document,
    variables,
    operationName,
  }

  return sendRequest(context, analyzedRequest)
}) as any
```

**File: `src/client/methods/send.ts`**

Update type exports to support TadaDocumentNode:

```typescript
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { DocumentNode } from 'graphql'

export namespace SendMethod {
  export type Arguments = [
    document: TypedDocumentNode<any, any> | DocumentNode | string,
    variables?: Record<string, any>,
    operationName?: string
  ]

  // ... rest of implementation
}
```

**Usage:**

```typescript
import { Graffle } from './graffle/_exports.js'

const doc = Graffle.gql(`query GetPokemon($name: String!) { ... }`)

const client = Graffle.create({ schema: { name: 'Pokemon' } })
const result = await client.send(doc, { name: 'Pikachu' })
// result is typed based on doc's result type
```

---

## Commit 3: Add minimal introspection generator for raw client

### What

Generate a minimal introspection type that provides basic structure inference without full schema knowledge. This allows raw clients (without generated schema) to use `client.gql()` with basic type checking.

### Why

Raw clients don't have schema information but can still benefit from structure validation (top-level field names). This improves the developer experience for clients without generated types, providing a graceful degradation path.

### How

**File: `src/client/gql-minimal-introspection.ts`** (new file)

```typescript
/**
 * Minimal gql-tada introspection for raw clients without generated schema.
 *
 * Provides basic structure inference:
 * - Top-level field names are preserved
 * - Field values are typed as `unknown`
 * - Better than no types, worse than full schema
 */
export type MinimalIntrospection = {
  name: never
  query: 'Query'
  mutation: 'Mutation'
  subscription: 'Subscription'
  types: {
    Query: {
      kind: 'OBJECT'
      name: 'Query'
      fields: {} // Unknown fields
    }
    Mutation: {
      kind: 'OBJECT'
      name: 'Mutation'
      fields: {}
    }
    Subscription: {
      kind: 'OBJECT'
      name: 'Subscription'
      fields: {}
    }
    String: { name: 'String' }
    Int: { name: 'Int' }
    Float: { name: 'Float' }
    Boolean: { name: 'Boolean' }
    ID: { name: 'ID' }
  }
}
```

---

## Commit 4: Implement `client.gql()` instance method with `.send()`

### What

Add the `client.gql()` method that returns an object with a `.send()` method. For generated clients, use full schema introspection. For raw clients, use minimal introspection.

### Why

This provides the chainable instance API (`client.gql(...).send()`). This is the primary API developers will use for ad-hoc queries with full type safety when schema is available, or basic structure validation when it's not.

### How

**File: `src/client/methods/gql/gql.ts`**

Update to support both generated and raw clients:

```typescript
import type { initGraphQLTada } from 'gql.tada'
import { parse } from 'graphql'
import type { Context } from '#src/context/context.js'
import type { MinimalIntrospection } from '../gql-minimal-introspection.js'

export namespace GqlMethod {
  export type Arguments = [query: string]

  export const normalizeArguments = (args: Arguments) => {
    return { document: args[0] }
  }
}

// Type for generated clients with full schema
type GqlMethodWithSchema<$Introspection> = (
  query: string
) => {
  send: <$Query extends string>(
    this: ReturnType<initGraphQLTada<{ introspection: $Introspection }>>,
    variables?: any
  ) => Promise<any>
}

// Type for raw clients with minimal schema
type GqlMethodMinimal = (
  query: string
) => {
  send: (variables?: Record<string, any>) => Promise<any>
}

// Conditional type based on whether schema is available
export type GqlMethod<$Context extends Context> =
  undefined extends $Context['configuration']['schema']['current']['map']
    ? GqlMethodMinimal
    : $Context['configuration']['schema']['current']['map'] extends { introspection: infer $Introspection }
      ? GqlMethodWithSchema<$Introspection>
      : GqlMethodMinimal
```

**File: `src/client/client.ts`** (update the gql implementation around line 486)

```typescript
gql: ((...args: GqlMethod.Arguments) => {
  const { document: query } = GqlMethod.normalizeArguments(args)

  // Parse the document using graphql-js
  const parsedDocument = parse(query)

  return {
    send: async (...args: GqlMethodSendMethod.Arguments) => {
      if (!context.transports.current) throw new Error(`No transport selected`)

      const { operationName, variables } = GqlMethodSendMethod.normalizeArguments(args)

      const request = {
        query,
        variables,
        operationName,
      }

      const operationType = getOperationType(request)
      if (!operationType) throw new Error(`Could not get operation type`)

      const analyzedRequest = {
        operation: operationType,
        query,
        variables,
        operationName,
      }

      return sendRequest(context, analyzedRequest)
    },
  }
}) as any
```

**Usage with generated client:**

```typescript
const client = Graffle.create({ schema: { name: 'Pokemon' } })

const result = await client
  .gql(`query GetPokemon($name: String!) { ... }`)
  .send({ name: 'Pikachu' })
// result has full type inference
```

**Usage with raw client:**

```typescript
const client = Graffle.create({ url: 'https://api.example.com/graphql' })

const result = await client
  .gql(`query { pokemons { id name } }`)
  .send()
// result type: { pokemons: unknown }
```

---

## Commit 5: Update documentation with usage examples and limitations

### What

Update the website documentation to explain the gql-tada integration, show usage examples, and clearly document the limitations (no tagged templates, single operations only).

### Why

Developers need to understand when and how to use `.gql()` vs `.document()`, what the limitations are, and how to configure their TypeScript environment for optimal IDE support.

### How

**File: `website/content/guides/25_generation/30_tada.md`**

This file already exists and has been updated. Ensure it covers:

1. Basic usage examples for both APIs
2. Limitations section (already present)
3. TypeScript configuration for GraphQLSP
4. When to use `.gql()` vs `.document()`

**File: `website/content/guides/10_client/XX_gql-method.md`** (new file)

Create documentation for the `.gql()` method:

```markdown
# Raw GraphQL Queries with `.gql()`

Execute GraphQL queries written as strings with compile-time type safety.

## Static API

Define documents separately from execution:

\`\`\`typescript
import { Graffle } from './graffle/_exports.js'

const doc = Graffle.gql(\`
  query GetPokemon($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      hp
    }
  }
\`)

const client = Graffle.create({ schema: { name: 'Pokemon' } })
const result = await client.send(doc, { name: 'Pikachu' })
\`\`\`

## Instance API

Chain `.send()` directly:

\`\`\`typescript
const client = Graffle.create({ schema: { name: 'Pokemon' } })

const result = await client
  .gql(\`
    query GetPokemon($name: String!) {
      pokemonByName(name: $name) { id name hp }
    }
  \`)
  .send({ name: 'Pikachu' })
\`\`\`

## When to Use

Use `.gql()` when:
- You prefer writing GraphQL syntax directly
- You're migrating from another GraphQL client
- You want to copy-paste queries from GraphQL Playground

Use `.document()` when:
- You need multi-operation documents
- You want maximum type safety with TypeScript's object literals
- You prefer a builder-style API

## Limitations

- **Call expression syntax only**: Must use \`gql("...")\` not \`gql\`...\`\`
- **Single operation per document**: Use \`.document()\` for multi-operation documents
- See [gql-tada integration guide](/guides/generation/tada) for details
```

---

## Commit 6: Add integration tests

### What

Add tests that verify the `.gql()` method works correctly with both generated and raw clients, handling variables, operation names, and transport execution.

### Why

We need to ensure the implementation works correctly across different scenarios: single operations, operations with variables, generated vs raw clients, and proper integration with the transport layer.

### How

**File: `src/client/methods/gql/gql.test.ts`** (new file)

```typescript
import { Graffle } from '#graffle'
import { db } from '#test/schema/possible/db.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { describe, expect, test } from 'vitest'
import { TransportMemory } from '../../../extensions/TransportMemory/TransportMemory.js'

const graffle = Graffle
  .create({ schema: { name: `possible` } })
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })

describe('client.gql() instance method', () => {
  test('simple query without variables', async () => {
    const result = await graffle
      .gql(`query { foo { id } }`)
      .send()

    expect(result).toEqual({ foo: { id: db.id1 } })
  })

  test('query with variables', async () => {
    const result = await graffle
      .gql(`
        query GetById($id: ID!) {
          fooById(id: $id) { id }
        }
      `)
      .send({ id: db.id1 })

    expect(result).toEqual({ fooById: { id: db.id1 } })
  })

  test('mutation', async () => {
    const result = await graffle
      .gql(`mutation { foo { id } }`)
      .send()

    expect(result).toEqual({ foo: { id: db.id1 } })
  })

  test('error: no transport', async () => {
    const client = Graffle.create({ schema: { name: 'possible' } })

    await expect(
      client.gql(`query { foo { id } }`).send()
    ).rejects.toThrow('No transport selected')
  })
})

describe('client.send(document) static API', () => {
  test('send static document with variables', async () => {
    // This would use the generated Graffle.gql() function
    // For now, we'll test with a plain DocumentNode
    const doc = parse(`
      query GetById($id: ID!) {
        fooById(id: $id) { id }
      }
    `)

    const result = await graffle.send(doc, { id: db.id1 })
    expect(result).toEqual({ fooById: { id: db.id1 } })
  })
})
```

---

## Summary

This implementation plan delivers the gql-tada integration in 6 logical commits:

1. **Generate static `gql()` function** - Type-only gql-tada integration in generated code
2. **Add `client.send()`** - Execute pre-built documents with full type safety
3. **Minimal introspection** - Basic types for raw clients without schema
4. **Instance `client.gql().send()`** - Chainable API for both generated and raw clients
5. **Documentation** - Usage examples, limitations, and best practices
6. **Tests** - Verify functionality across different scenarios

Each commit stands on its own and brings incremental value, building toward the complete feature.
