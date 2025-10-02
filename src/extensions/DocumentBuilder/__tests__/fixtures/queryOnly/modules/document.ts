import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import type * as $$Schema from './schema/$.js'
import type * as SelectionSets from './selection-sets.js'

/**
 * Context for static document type inference.
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 *   id: true,
 *   name: true,
 *   email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 *   $: { id: $ },
 *   name: true,
 *   posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export interface QueryBuilder {
  id: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { id: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >

  idNonNull: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { idNonNull: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
}

/**
 * Static query document builder instance.
 *
 * @example
 * ```ts
 * import { query } from './generated/document.js'
 *
 * const myQuery = query.user({ id: true, name: true })
 * ```
 */
export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
