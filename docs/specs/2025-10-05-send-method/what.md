# `.send()` Method Specification

**Date**: 2025-10-05

## Overview

Add a new `.send()` instance method to the Graffle client that allows sending GraphQL documents directly without chaining from `.gql()`. This enables one-shot execution of pre-built typed documents from codegen or the static document builder.

---

## User Journeys

### Journey 1: Send Single-Operation Typed Document

User has a typed document (TypedDocumentString or TypedDocumentNode) from codegen with a single operation and wants to send it directly.

```typescript
import { GetUserDocument } from './generated'

const result = await client.send(GetUserDocument, { id: '123' })
```

### Journey 2: Send Multi-Operation Builder Document

User has created a document with multiple operations using the document builder and wants to execute a specific operation.

```typescript
const doc = graffle.document({
  query: {
    getUser: { user: { id: true, name: true } },
  },
  mutation: {
    updateUser: { updateUser: { id: true, name: true } },
  },
})

const userData = await client.send(doc, 'getUser', { id: '123' })
const updateResult = await client.send(doc, 'updateUser', {
  id: '123',
  name: 'Alice',
})
```

### Journey 3: Send Plain String Document

User has a plain GraphQL string and wants to send it (no type safety).

```typescript
const query = `
  query GetUser($id: ID!) {
    user(id: $id) { name }
  }
`

const result = await client.send(query, 'GetUser', { id: '123' })
```

### Journey 4: Send Single-Operation Builder Document

User has created a document with one operation using the document builder.

```typescript
const doc = graffle.document({
  query: {
    getUser: { user: { id: true, name: true } },
  },
})

const result = await client.send(doc, { id: '123' })
// No operation name needed - only one operation
```

---

## Architecture

### Type System Changes

#### New Type: TypedFullDocument

**Location**: `/lib/grafaid/typed-full-document/TypedFullDocument.ts`

Represents a full GraphQL document containing one or more named operations with complete type information.

```typescript
// Constraint for operation metadata
type OperationMetadata = {
  readonly name: string
  readonly result: SomeObjectData
  readonly variables: Variables
}

// The full document type
interface TypedFullDocument<
  $Operations extends readonly [OperationMetadata, ...OperationMetadata[]],
> extends String {
  readonly __operations?: $Operations
}
```

**Key constraints**:

- `$Operations` is a **readonly tuple** (immutable)
- Must contain **at least one operation** (non-empty tuple)
- Each operation has `name` (string), `result` (extends SomeObjectData), and `variables` (extends Variables)

#### Updated Static Builder Return Type

**Location**: `/src/extensions/DocumentBuilder/staticBuilder.ts`

The static document builder currently returns `TypedDocumentString<Result, Variables>` for single operations. It will be updated to return `TypedFullDocument` instead.

**Single operation**:

```typescript
const doc = graffle.document({
  query: {
    getUser: { user: { id: true } },
  },
})
// Returns: TypedFullDocument<[{ name: 'getUser', result: { user: { id: string } }, variables: {} }]>
```

**Multiple operations**:

```typescript
const doc = graffle.document({
  query: {
    getUser: { user: { id: true } },
  },
  mutation: {
    updateUser: { updateUser: { id: true, name: true } },
  },
})
// Returns: TypedFullDocument<[
//   { name: 'getUser', result: { user: { id: string } }, variables: { id: string } },
//   { name: 'updateUser', result: { updateUser: { id: string, name: string } }, variables: { id: string, name: string } }
// ]>
```

### Method Signature

#### Client Method: `.send()`

**Location**: New file in `/src/client/methods/send.ts`

The method has multiple overload signatures based on document type:

```typescript
interface Client {
  // TypedDocumentString or TypedDocumentNode (existing types)
  send<$Doc extends TypedDocumentString | TypedDocumentNode>(
    doc: $Doc,
    ...args: SendArguments<$Doc>
  ): Promise<SimplifyNullable<HandleOutput<Context, ResultOf<$Doc>>>>

  // TypedFullDocument with single operation
  send<$Doc extends TypedFullDocument<[infer Op]>>(
    doc: $Doc,
    variables?: Op['variables'],
  ): Promise<SimplifyNullable<HandleOutput<Context, Op['result']>>>

  // TypedFullDocument with multiple operations
  send<
    $Doc extends TypedFullDocument<infer Ops>,
    $OpName extends Ops[number]['name'],
  >(
    doc: $Doc,
    operationName: $OpName,
    variables?: ExtractOperation<Ops, $OpName>['variables'],
  ): Promise<
    SimplifyNullable<
      HandleOutput<Context, ExtractOperation<Ops, $OpName>['result']>
    >
  >

  // Plain string (no type safety)
  send(
    doc: string,
    operationName?: string,
    variables?: Variables,
  ): Promise<SimplifyNullable<HandleOutput<Context, SomeObjectData>>>
}
```

**Type utilities needed**:

```typescript
type ExtractOperation<
  $Ops extends readonly OperationMetadata[],
  $Name extends string,
> = Extract<$Ops[number], { name: $Name }>
```

#### Variables Parameter Rules

The variables parameter follows the same rules as the existing chained `.send()`:

- **Required** if operation has required variables
- **Optional** if operation has only optional variables or no variables
- **Omitted** if operation has no variables

This is determined by `GetVariablesInputKind` utility from existing code.

### Implementation Orchestration

The new `.send()` method orchestrates existing Graffle internals:

1. Normalize arguments (operation name, variables) using similar logic to `GqlMethodSendMethod.normalizeArguments`
2. Pass document and normalized arguments to existing request execution pipeline
3. Return typed result using existing `HandleOutput` machinery

No new HTTP clients, no new GraphQL execution logic - purely a new entry point into existing machinery.

---

## Failure States

All failures are **type-level only** (no runtime validation in initial implementation).

| Scenario                                                          | Failure Type          | Behavior                                                       |
| ----------------------------------------------------------------- | --------------------- | -------------------------------------------------------------- |
| TypedFullDocument with multiple ops, no operation name provided   | TypeScript error      | Compilation fails - operation name parameter is required       |
| TypedFullDocument with non-existent operation name                | TypeScript error      | Compilation fails - operation name not in union of valid names |
| Required variables missing                                        | TypeScript error      | Compilation fails - variables parameter is required            |
| Wrong variable types provided                                     | TypeScript error      | Compilation fails - type mismatch on variables object          |
| Plain string document with multiple operations, no operation name | Runtime GraphQL error | GraphQL executor returns error (existing behavior)             |
| SDDM-required document sent to client without SDDM support        | TypeScript error      | Compilation fails - `__sddm` brand prevents invalid usage      |
