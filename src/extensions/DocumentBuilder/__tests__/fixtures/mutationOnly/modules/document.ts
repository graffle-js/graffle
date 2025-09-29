import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../../exports/client.js'
import { createStaticRootType } from '../../../../../../exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'
import type { $TypeInputsIndex } from './type-inputs-index.js'

export interface MutationBuilder {
  id: <$SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ id: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { id: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { idNonNull: $SelectionSet },
        ArgumentsMap.ArgumentsMap['mutation'],
        $TypeInputsIndex
      >
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
