import type { TypedDocument } from '#src/lib/grafaid/typed-document/$.js'
import { isSymbol } from '#src/lib/prelude.js'
import type { Schema } from '#src/types/Schema/$.js'
import { print } from '@0no-co/graphql.web'
import type { OperationTypeNode } from 'graphql'
import { Select } from './object/Select/$.js'
import type { Options } from './object/SelectGraphQLMapper/nodes/1_Document.js'
import { toGraphQLDocument } from './object/SelectGraphQLMapper/nodes/1_Document.js'
import { defaults as packageLevelDefaults } from './object/staticBuilderDefaults.js'

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
      ...packageLevelDefaults,
      ...factoryLevelDefaults,
      ...options,
    })

    // Return the printed document string
    // Type safety is provided at compile time
    return print(result.document) as any
  }
}
