import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'

// Helper to extract variables from selection set
type ExtractVariables<$SelectionSet> = $SelectionSet extends Record<string, any>
  ? $SelectionSet extends { $: infer Args } ? ExtractVariablesFromArgs<Args>
  : UnionToIntersection<{ [K in keyof $SelectionSet]: ExtractVariables<$SelectionSet[K]> }[keyof $SelectionSet]>
  : {}

type ExtractVariablesFromArgs<Args> = Args extends Record<string, any>
  ? { [K in keyof Args as Args[K] extends $$Utilities.DocumentBuilderKit.VariableMarker ? K : never]: boolean }
  : {}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Mutation['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ idNonNull: $SelectionSet }>
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
