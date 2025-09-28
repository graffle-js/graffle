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

export interface QueryBuilder {
  id: <$SelectionSet extends SelectionSets.Query['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Query['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ idNonNull: $SelectionSet }, $$Schema.Schema>,
    ExtractVariables<{ idNonNull: $SelectionSet }>
  >
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
