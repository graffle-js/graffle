import type { TypedDocument } from '#graffle/client'
import { createStaticRootType } from '#graffle/extensions/document-builder'
import type * as $$StaticBuilder from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import type * as SelectionSets from './selection-sets.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'

/**
 * Context for static document type inference.
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Configuration for static document builders.
 * Generated code always has SDDM enabled since the generator creates the schema-driven data map.
 */
type DocumentConfig = {
  schema: $$Schema.Schema
  sddmEnabled: true
}

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
// Note: This interface conforms to StaticDocumentBuilder<DocumentConfig, OperationTypeNode.MUTATION>
export interface MutationBuilder {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.id` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = mutation.id()
   * ```
   */
  id: <
    const $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['id'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { id: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.idNonNull` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = mutation.idNonNull()
   * ```
   */
  idNonNull: <
    const $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { idNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >
}
/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
