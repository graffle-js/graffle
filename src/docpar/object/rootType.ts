import { Docpar } from '#src/docpar/$.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Schema } from '#src/types/Schema/_.js'
import { print } from '@0no-co/graphql.web'
import { Lang } from '@wollybeard/kit'
import type { Options } from './ToGraphQLDocument/nodes/1_Document.js'
import { toGraphQLDocument } from './ToGraphQLDocument/nodes/1_Document.js'

export const defaults: Partial<Options> = {
  hoistArguments: true,
}

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
 * type MyQueryBuilder = StaticDocumentBuilder<MyConfig, GraphqlKit.Document.Ast.OperationType.QUERY>
 * ```
 */
export type StaticDocumentBuilder<
  $Config extends Config,
  $OperationType extends GraphqlKit.Document.Ast.OperationType.OperationType,
> = {
  // Note: The actual field mapping and type inference is done by the generator.
  // This type serves as the canonical signature that generated code must conform to.
  // The generator creates explicit field signatures for better IDE performance and JSDoc.
  [field: string]: (selection?: any) => GraphqlKit.Document.Typed.String<any, any, $Config['sddmEnabled']>
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
 * import { GraphqlKit } from 'graffle'
 *
 * const query = createStaticRootType(GraphqlKit.Document.Ast.OperationType.QUERY)
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
export const createStaticRootType = (
  operationType: GraphqlKit.Document.Ast.OperationType.OperationType,
  options?: Options,
) => {
  return new Proxy({}, {
    get: (_, fieldName: string) => {
      if (Lang.isSymbol(fieldName)) throw new Error(`Symbols not supported`)

      // Special $batch method for multi-field selection
      if (fieldName === '$batch') {
        return (selection: Docpar.Object.Select.SelectionSet.AnySelectionSet, opts?: Partial<Options>) => {
          // Selection already contains multiple fields, no wrapping needed
          const documentNormalized = Docpar.Object.Select.Document.createDocumentNormalizedFromRootTypeSelection(
            operationType,
            selection,
          )

          const result = toGraphQLDocument(documentNormalized, {
            ...defaults,
            ...options,
            ...opts,
          })

          return print(result.document) as any
        }
      }

      return createStaticRootField(operationType, fieldName, options)
    },
  }) as any
}

export const createStaticRootField = (
  operationType: GraphqlKit.Document.Ast.OperationType.OperationType,
  fieldName: string,
  factoryLevelDefaults?: Options,
) => {
  return (selection?: Docpar.Object.Select.SelectionSet.AnySelectionSet, options?: Partial<Options>) => {
    // Create root type selection set with the field
    const rootTypeSelectionSet = {
      [fieldName]: selection ?? true,
    }

    // Create normalized document from root type selection
    const documentNormalized = Docpar.Object.Select.Document.createDocumentNormalizedFromRootTypeSelection(
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
