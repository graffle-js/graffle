import type { DocumentBuilderKit } from '#src/extensions/DocumentBuilder/$.js'
import { Select } from '#src/extensions/DocumentBuilder/Select/$.js'
import type { Options } from '#src/extensions/DocumentBuilder/SelectGraphQLMapper/nodes/1_Document.js'
import { toGraphQLDocument } from '#src/extensions/DocumentBuilder/SelectGraphQLMapper/nodes/1_Document.js'
import type { getDocumentNode, parseDocument, schemaOfSetup } from '#src/lib/gql-tada/index.js'
import { type AbstractSetupSchema, type initGraphQLTada } from '#src/lib/gql-tada/index.js'
import type { TypedDocument } from '#src/lib/grafaid/typed-document/$.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import { isSymbol } from '#src/lib/prelude.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import { print } from '@0no-co/graphql.web'
import type { OperationTypeNode } from 'graphql'
import type { Simplify } from 'type-fest'

//
//
//
//
// ==================================================================================================
//                                           GQL-TADA
// ==================================================================================================
//
//
//
//

/**
 * Extract tada introspection and scalars from context to create a gql-tada function type.
 *
 * This utility reads from the GlobalRegistry to get the schema's introspection types
 * and scalar mappings, then creates a gql-tada function type via `initGraphQLTada`.
 */
// dprint-ignore
export type CreateGqlTadaFromContext<$Context> =
  initGraphQLTada<{
    introspection: GlobalRegistry.ForContext<$Context>['tadaIntrospection']
    scalars: {
      [k in keyof GlobalRegistry.ForContext<$Context>['schema']['scalarRegistry']['map']]:
        Schema.Scalar.GetDecoded<GlobalRegistry.ForContext<$Context>['schema']['scalarRegistry']['map'][k]>
    }
  }>

/**
 * Type-level utility that parses a GraphQL string and returns the typed document node.
 *
 * This utility:
 * 1. Parses the GraphQL string into an AST using `parseDocument`
 * 2. Extracts introspection data from the context's GlobalRegistry
 * 3. Uses `schemaOfSetup` to combine introspection with scalar mappings into a `SchemaLike`
 * 4. Passes the combined schema to `getDocumentNode` to produce a fully typed `TadaDocumentNode`
 *
 * @typeParam $Context - The client context containing schema introspection
 * @typeParam $Input - The GraphQL document string to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLString<MyContext, 'query { id }'>
 * // Result: TadaDocumentNode<{ id: string }, {}>
 * ```
 */
export type ParseGraphQLString<
  $Context,
  $Input extends string,
> = getDocumentNode<
  parseDocument<$Input>,
  schemaOfSetup<{
    introspection: GlobalRegistry.ForContext<$Context>['tadaIntrospection']
    scalars: {
      [k in keyof GlobalRegistry.ForContext<$Context>['schema']['scalarRegistry']['map']]: Schema.Scalar.GetDecoded<
        GlobalRegistry.ForContext<$Context>['schema']['scalarRegistry']['map'][k]
      >
    }
  }>,
  {},
  false
>

/**
 * Type-level utility that parses a document builder object and returns the typed document.
 *
 * This utility:
 * 1. Extracts schema and arguments map from the context's GlobalRegistry
 * 2. Extracts scalar registry and type hooks from the context
 * 3. Uses `InferOperations` to infer result and variable types for each operation
 * 4. Wraps the result in `TypedFullDocument.FromObject` for use with document senders
 *
 * @typeParam $Context - The client context containing schema and configuration
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
> = TypedFullDocument.FromObject<
  InferOperations<
    $Document,
    GlobalRegistry.ForContext<$Context>['schema'],
    GlobalRegistry.ForContext<$Context>['argumentsMap'],
    {
      typeHookRequestResultDataTypes: $Context extends { typeHookRequestResultDataTypes: infer $Types }
        ? $Types
        : never
      scalars: $Context extends { scalars: { current: { registry: infer $Registry } } }
        ? $Registry
        : never
    }
  >
>

//
//
//
//
// ==================================================================================================
//                                              Defaults
// ==================================================================================================
//
//
//
//

export const defaults: Partial<Options> = {
  hoistArguments: true,
}

//
//
//
//
// ==================================================================================================
//                                         Static Root Type
// ==================================================================================================
//
//
//
//

//
//
// Type-Level API
//
//

/**
 * Configuration for static document builders.
 *
 * This config is shared across all operation types (query, mutation, subscription)
 * for a given schema.
 *
 * @remarks
 * The configuration determines how documents are typed and branded at compile time.
 * The `sddmEnabled` flag controls whether documents are branded with SDDM requirements,
 * which provides compile-time safety for schema-driven data mapping.
 */
export type Config = {
  /**
   * The GraphQL schema type definition
   */
  schema: Schema

  /**
   * Whether SDDM (Schema-Driven Data Map) is enabled.
   *
   * SDDM is a compile-time feature that ensures documents have access to the full
   * schema type information, including custom scalars and precise type inference.
   *
   * When `true`:
   * - Documents are branded with `RequiresSDDM = true`
   * - Type system ensures documents are only used with SDDM-capable clients
   * - Custom scalar encoding/decoding is type-safe
   * - Full schema knowledge enables precise result type inference
   *
   * When `false`:
   * - Documents work with any client (no SDDM requirement)
   * - Custom scalars may not be properly encoded/decoded
   * - Type inference is less precise
   *
   * @remarks
   * For generated code, this is always `true` since the generator creates complete
   * schema-driven data maps with custom scalar support.
   *
   * For manual usage via `createStaticRootType`, the runtime factory returns untyped
   * documents (cast to `any`), so SDDM branding only applies when using generated types.
   */
  sddmEnabled: boolean
  // Future extensibility:
  // customScalars?: Schema.Scalar.Registry
  // namingConvention?: 'camelCase' | 'snake_case'
  // fragmentsEnabled?: boolean
}

/**
 * Derived type for static document builders.
 *
 * This is the canonical type that defines the interface of a static document builder
 * based on a given configuration and operation type.
 *
 * Generated code pre-computes what this type derives for better IDE performance
 * and field-specific documentation, but extends this type to prove correctness.
 *
 * @example
 * ```ts
 * type MyConfig = {
 *   schema: MySchema.Schema
 *   sddmEnabled: true
 * }
 *
 * type MyQueryBuilder = StaticDocumentBuilder<MyConfig, OperationTypeNode.QUERY>
 * ```
 */
export type StaticDocumentBuilder<
  $Config extends Config,
  $OperationType extends OperationTypeNode,
> = {
  // Note: The actual field mapping and type inference is done by the generator.
  // This type serves as the canonical signature that generated code must conform to.
  // The generator creates explicit field signatures for better IDE performance and JSDoc.
  [field: string]: (selection?: any) => TypedDocument.String<any, any, $Config['sddmEnabled']>
}

//
//
// Runtime API
//
//

/**
 * Create a static root type builder for generating type-safe GraphQL documents at build time.
 *
 * @remarks
 * The static builder provides compile-time GraphQL document generation with full type safety.
 * Unlike runtime builders, it produces document strings that can be statically analyzed and optimized.
 * This is particularly useful for:
 * - Build-time document generation and validation
 * - Static analysis tools and linters
 * - Reducing runtime overhead
 * - Ensuring all queries are known at build time
 *
 * @param operationType - The GraphQL operation type (Query, Mutation, or Subscription)
 * @returns A proxy object that generates typed GraphQL document strings
 *
 * @example
 * ```ts
 * import { createStaticRootType } from 'graffle'
 * import { OperationTypeNode } from 'graphql'
 *
 * const query = createStaticRootType(OperationTypeNode.QUERY)
 *
 * // Generate a typed document string
 * const userQuery = query.user({
 *   id: true,
 *   name: true,
 *   posts: {
 *     title: true,
 *     content: true
 *   }
 * })
 * // Returns: "{ user { id name posts { title content } } }"
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const createStaticRootType = (operationType: OperationTypeNode, options?: Options) => {
  return new Proxy({}, {
    get: (_, fieldName: string) => {
      if (isSymbol(fieldName)) throw new Error(`Symbols not supported`)
      return createStaticRootField(operationType, fieldName, options)
    },
  })
}

export const createStaticRootField = (
  operationType: OperationTypeNode,
  fieldName: string,
  factoryLevelDefaults?: Options,
) => {
  return (selection?: Select.SelectionSet.AnySelectionSet, options?: Partial<Options>) => {
    // Create root type selection set with the field
    const rootTypeSelectionSet = {
      [fieldName]: selection ?? true,
    }

    // Create normalized document from root type selection
    const documentNormalized = Select.Document.createDocumentNormalizedFromRootTypeSelection(
      operationType,
      rootTypeSelectionSet,
    )

    // Convert to GraphQL document using existing mapper
    // Merge default options (including SDDM) with call-time options
    const result = toGraphQLDocument(documentNormalized, {
      ...defaults,
      ...factoryLevelDefaults,
      ...options,
    })

    // Return the printed document string
    // Type safety is provided at compile time
    return print(result.document) as any
  }
}

//
//
//
//
// ==================================================================================================
//                                           GQL Function
// ==================================================================================================
//
//
//
//

/**
 * Infer operation metadata from a full document selection set.
 *
 * This utility takes a document object (with query/mutation operations) and infers
 * the result types and variable types for each named operation.
 *
 * Used by generated static document builders to provide type-safe operation inference.
 *
 * @example
 * ```ts
 * type Doc = { query: { getUser: { id: true }, getPost: { id: true } } }
 * type Ops = InferOperations<Doc, MySchema, MyArgsMap, MyScalars>
 * // Result: {
 * //   getUser: { result: { id: string }, variables: {} },
 * //   getPost: { result: { id: string }, variables: {} }
 * // }
 * ```
 */
// dprint-ignore
type InferOperationsFromQuery<
  $Query extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithQuery,
  $Context
> = {
  [k_operationName in keyof $Query & string as $Query[k_operationName] extends object ? k_operationName : never]:
    $Query[k_operationName] extends object
      ?
      TypedFullDocument.Operation<
        k_operationName,
        RequestResult.Simplify<$Context, DocumentBuilderKit.InferResult.OperationQuery<$Query[k_operationName], $Schema>>,
        RequestResult.Simplify<$Context, DocumentBuilderKit.Var.InferFromQuery<$Query[k_operationName], $ArgumentsMap>>
      >
      : never
}

// dprint-ignore
type InferOperationsFromMutation<
  $Mutation extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation,
  $Context
> = {
  [k_operationName in keyof $Mutation & string as $Mutation[k_operationName] extends object ? k_operationName : never]:
    $Mutation[k_operationName] extends object
      ?
      TypedFullDocument.Operation<
        k_operationName,
        RequestResult.Simplify<$Context, DocumentBuilderKit.InferResult.OperationMutation<$Mutation[k_operationName], $Schema>>,
        RequestResult.Simplify<$Context, DocumentBuilderKit.Var.InferFromMutation<$Mutation[k_operationName], $ArgumentsMap>>
      >
      : never
}

// dprint-ignore
export type InferOperations<
  $Document,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context
> =
  & ($Document extends { query: infer $Query extends object }
    ? $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithQuery
      ? InferOperationsFromQuery<$Query, $Schema, $ArgumentsMap, $Context>
      : {}
    : {})
  & ($Document extends { mutation: infer $Mutation extends object }
    ? $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation
      ? InferOperationsFromMutation<$Mutation, $Schema, $ArgumentsMap, $Context>
      : {}
    : {})

/**
 * Unified `gql` function that accepts either:
 * - A template string for gql-tada (type-only, runtime uses graphql parse)
 * - A document object for document builder
 *
 * @example Template string (gql-tada)
 * ```ts
 * const doc = gql(`query { user { id } }`)
 * // Returns: TadaDocumentNode<{ user: { id: string } }, {}>
 * ```
 *
 * @example Document object (document builder)
 * ```ts
 * const doc = gql({
 *   query: {
 *     getUser: { user: { id: true, name: true } }
 *   }
 * })
 * // Returns: TypedFullDocument with operation metadata
 * ```
 */
/**
 * Factory for creating an overloaded gql function that handles both:
 * - String inputs (gql-tada)
 * - Document object inputs (document builder)
 */
export interface gql<
  $Introspection extends AbstractSetupSchema['introspection'],
  $Schema extends Schema,
  $DocumentObjectConstraint,
  $ArgumentsMap extends SchemaDrivenDataMap,
> extends
  initGraphQLTada<{
    introspection: $Introspection
    scalars: {
      [K in keyof $Schema['scalarRegistry']['map']]: Schema.Scalar.GetDecoded<$Schema['scalarRegistry']['map'][K]>
    }
  }>
{
  <$Document extends $DocumentObjectConstraint>(
    documentObject: $Document,
    options?: Options,
  ): TypedFullDocument.FromObject<
    Simplify<
      InferOperations<
        $Document,
        $Schema,
        $ArgumentsMap,
        {
          // TODO: Extensions should be able to extend typeHookRequestResultDataTypes
          // For now, hardcoded to never since static documents have no runtime extensions
          typeHookRequestResultDataTypes: never
          scalars: $Schema['scalarRegistry']
        }
      >
    >
  >
}

/**
 * Namespace for static gql function types and utilities.
 *
 * Provides the canonical input type definition for static document building.
 * For instance gql (which accepts pre-built typed documents), see GqlMethod.Arguments.
 */
export namespace Gql {
  /**
   * Arguments accepted by the static gql function.
   *
   * Can be either:
   * - A GraphQL document string (for gql-tada template literals)
   * - A document builder object with optional configuration
   */
  export type Arguments =
    | [graphqlDocument: string]
    | [objectDocument: Select.Document.DocumentObject, options?: Options]

  export const normalizeArguments = (args: Arguments) => {
    const [first, second] = args

    // String GraphQL document (gql-tada)
    if (typeof first === 'string') {
      return {
        type: 'graphql' as const,
        document: first as string,
        options: undefined,
      }
    }

    // Document builder object
    return {
      type: 'object' as const,
      document: first as Select.Document.DocumentObject,
      options: second,
    }
  }
}

export const createGql = <
  $Introspection extends AbstractSetupSchema['introspection'],
  $Schema extends Schema,
  $DocumentObjectConstraint,
  $ArgumentsMap extends SchemaDrivenDataMap,
>(config: {
  sddm: $ArgumentsMap
}): gql<$Introspection, $Schema, $DocumentObjectConstraint, $ArgumentsMap> => {
  return ((...args: Gql.Arguments) => {
    const normalized = Gql.normalizeArguments(args)

    if (normalized.type === 'graphql') {
      // For string inputs (gql-tada template literals), return as-is
      // Type inference is handled by gql-tada types at compile time
      return normalized.document as any
    }

    // Normalize the document object into internal representation
    const documentNormalized = Select.Document.normalizeOrThrow(normalized.document)

    // Convert to GraphQL document
    const result = toGraphQLDocument(documentNormalized, {
      ...defaults,
      ...normalized.options,
      sddm: config.sddm,
    })

    // Print and return as TypedFullDocument
    return print(result.document) as any
  }) as any
}
