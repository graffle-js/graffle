import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'
import type { $TypeInputsIndex } from './type-inputs-index.js'

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$var` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 *   $: { input: $var },
 *   id: true,
 *   name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 */
export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { id: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  idNonNull: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['idNonNull'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { idNonNull: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
}

/**
 * Static mutation document builder instance.
 *
 * @example
 * ```ts
 * import { mutation } from './generated/document.js'
 *
 * const myMutation = mutation.createUser({
 *   $: { input: { name: 'Alice', email: 'alice@example.com' } },
 *   id: true
 * })
 * ```
 */
export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
