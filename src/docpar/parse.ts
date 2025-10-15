import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { Simplify } from 'type-fest'
import * as Doc from './core/doc.js'
import type { InferOperationsInDocument } from './gql.js'
import type { String } from './string/$.js'

/**
 * Unified GraphQL document parser that dispatches based on input type.
 *
 * - String inputs are parsed via the string parser (uses only $Schema)
 * - Object inputs are parsed via the object parser (uses all 4 parameters)
 *
 * Both produce equivalent TypedFullDocument types.
 *
 * Supports both schema-driven and schema-less modes (pass `undefined` for $Schema).
 *
 * @example
 * ```ts
 * // String syntax with schema
 * type Doc1 = Parse<'{ id }', MySchema, MyArgsMap, MyContext>
 *
 * // Object syntax with schema
 * type Doc2 = Parse<{ query: { default: { id: true } } }, MySchema, MyArgsMap, MyContext>
 *
 * // Schema-less mode
 * type Doc3 = Parse<'{ id }', undefined, any, any>
 * ```
 */
// dprint-ignore
export type Parse<
  $Input,
  $Schema,
  $ArgumentsMap = any,
  $Context = any,
> =
  $Input extends string
    ? String.Parse<$Input, $Schema>
    : $Input extends object
      ? $Schema extends Schema
        ? $ArgumentsMap extends SchemaDrivenDataMap
          ? $Context extends object
            ? Doc.FromObject<Simplify<InferOperationsInDocument<$Input, $Schema, $ArgumentsMap, $Context>>>
            : never
          : never
        : never
      : never

/**
 * Type-level utility that parses GraphQL string documents and returns a typed document with all operations.
 *
 * Extracts schema information from the context's GlobalRegistry and parses the GraphQL string accordingly.
 * If no GlobalRegistry is available, uses schema-less mode.
 *
 * @typeParam $Context - The client context containing schema introspection via GlobalRegistry
 * @typeParam $Input - The GraphQL document string to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLString<MyContext, 'query MyQuery { id }'>
 * // Result: TypedFullDocument.SingleOperation<Operation<'MyQuery', { id: string }, {}>>
 * ```
 */
// dprint-ignore
export type ParseGraphQLString<
  $Context,
  $Input extends string,
> = GlobalRegistry.ForContext<$Context> extends never
  ? Parse<$Input, undefined>
  : Parse<$Input, GlobalRegistry.ForContext<$Context>['schema']>

/**
 * Type-level utility that parses a document builder object and returns the typed document.
 *
 * Extracts schema and arguments map from the context's GlobalRegistry and infers operation types.
 *
 * @typeParam $Context - The client context containing schema and configuration via GlobalRegistry
 * @typeParam $Document - The document builder object to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLObject<MyContext, { query: { myQuery: { id: true } } }>
 * // Result: TypedFullDocument with operation metadata
 * ```
 */
// dprint-ignore
export type ParseGraphQLObject<
  $Context,
  $Document,
> = Parse<
  $Document,
  GlobalRegistry.ForContext<$Context>['schema'],
  GlobalRegistry.ForContext<$Context>['argumentsMap'],
  $Context
>
