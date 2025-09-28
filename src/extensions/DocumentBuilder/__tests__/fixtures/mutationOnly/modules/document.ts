import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as SelectionSets from './selection-sets.js'
export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Mutation$Infer<{ id: $SelectionSet }>,
    SelectionSets.Mutation$Variables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Mutation['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Mutation$Infer<{ idNonNull: $SelectionSet }>,
    SelectionSets.Mutation$Variables<{ idNonNull: $SelectionSet }>
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
