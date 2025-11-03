import { createStaticRootType } from '#graffle/extensions/document-builder'
import { GraphqlKit } from '#graffle/utilities-for-generated'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type * as SelectionSets from './selection-sets/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'

/**
 * Context for static document type inference.
 *
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
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

export interface MutationBuilder {
  $batch: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<$SelectionSet, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<$SelectionSet, ArgumentsMap.ArgumentsMap>
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.id` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = mutation.id()
   * ```
   */
  id: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<
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
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
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
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<
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
 * Each field method generates a fully typed GraphQL mutation document  with:
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
export const mutation: MutationBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.MUTATION, {
  sddm,
}) as any
