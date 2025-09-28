import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as SelectionSets from './selection-sets.js'
export interface QueryBuilder {
  id: <$SelectionSet extends SelectionSets.Query['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ id: $SelectionSet }>,
    SelectionSets.Query$Variables<{ id: $SelectionSet }>
  >
  idNonNull: <$SelectionSet extends SelectionSets.Query['idNonNull']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    SelectionSets.Query$Infer<{ idNonNull: $SelectionSet }>,
    SelectionSets.Query$Variables<{ idNonNull: $SelectionSet }>
  >
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
