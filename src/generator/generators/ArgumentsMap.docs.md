ArgumentsMap is a type-level structure that mirrors your GraphQL schema's argument structure for type-safe variable inference.

# Description

ArgumentsMap provides a complete type-level representation of all arguments in your GraphQL schema. It enables the Static Document Builder to infer variable types and requirements from your selection sets when you use `$var` placeholders.

This module is generated from your GraphQL schema and creates TypeScript interfaces that encode:

- Which fields accept arguments
- The types and nullability of those arguments
- Nested argument structures in complex queries
- Input object types used in arguments

The ArgumentsMap works in conjunction with the variable inference system to provide compile-time validation of your GraphQL variables without requiring manual type annotations.

# Remarks

ArgumentsMap follows the Schema-Driven Data Map (SDDM) pattern used throughout Graffle's generated code. This pattern uses descriptive property names with precise meanings:

- `operations`: Root types (query, mutation, subscription) that can be directly queried
- `directives`: Directive definitions with their arguments
- `inputTypes`: All input types in the schema (InputObjects, Scalars, Enums)
- `outputTypes`: All output types in the schema that have fields with arguments
- `_tag`: Type discriminator (e.g., 'outputObject', 'outputField', 'argumentOrInputField')
- `fields`: Fields map - contains all fields for a given type
- `arguments`: Direct arguments on a specific field
- `argumentsDescendant`: Reference to a type that has fields with arguments
- `namedType`: The GraphQL type name as a string literal
- `inlineType`: Tuple encoding nullability: `[0]` for nullable, `[1]` for required, `[0, [1]]` for list types
- `$type`: The fully resolved TypeScript type for the argument
- `extensions`: Extension-specific properties (augmentable via global namespace)

The `argumentsDescendant` property is particularly important: it enables type traversal through fields that don't have direct arguments but return types that do have fields with arguments. This allows the type system to properly track argument requirements across nested selections.

# Example

## Basic Field Arguments

A simple field with optional scalar arguments:

```typescript
export interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly userById: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly id: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'ID'
          readonly inlineType: readonly [0]
          readonly $type: string | undefined
        }
      }
    }
  }
}
```

## Required Arguments

A field with a required argument (non-null in GraphQL schema):

```typescript
readonly stringWithRequiredArg: {
  readonly _tag: 'outputField'
  readonly arguments: {
    readonly string: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'String'
      readonly inlineType: readonly [1]
      readonly $type: string
    }
  }
}
```

## List Arguments

Arguments that accept arrays:

```typescript
readonly stringWithListArgRequired: {
  readonly _tag: 'outputField'
  readonly arguments: {
    readonly ints: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'Int'
      readonly inlineType: readonly [1, [1]]
      readonly $type: readonly number[]
    }
  }
}
```

## Nested Arguments with Descendant

A field that doesn't have direct arguments but returns a type with fields that do:

```typescript
readonly objectNestedWithArgs: {
  readonly _tag: 'outputField'
  readonly argumentsDescendant: ObjectNestedWithArgs
}
```

Where `ObjectNestedWithArgs` is defined elsewhere:

```typescript
export interface ObjectNestedWithArgs
  extends $$Utilities.SchemaDrivenDataMap.OutputObject
{
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly object: {
      readonly _tag: 'outputField'
      readonly arguments: {
        readonly int: {
          readonly _tag: 'argumentOrInputField'
          readonly namedType: 'Int'
          readonly inlineType: readonly [0]
          readonly $type: number | undefined
        }
      }
    }
  }
}
```

## Input Object Arguments

Arguments that accept input objects:

```typescript
readonly stringWithArgInputObjectRequired: {
  readonly _tag: 'outputField'
  readonly arguments: {
    readonly input: {
      readonly _tag: 'argumentOrInputField'
      readonly namedType: 'InputObject'
      readonly inlineType: readonly [1]
      readonly $type: TypeInputsIndex.InputObject
    }
  }
}
```

# See Also

- [Graffle Documentation](https://graffle.js.org)
- [Static Document Builder Guide](https://graffle.js.org/guides/document-builder)
