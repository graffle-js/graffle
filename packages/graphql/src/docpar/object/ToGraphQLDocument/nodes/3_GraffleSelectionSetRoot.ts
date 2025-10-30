import { Select } from '../../Select/_.js'
import { Nodes } from '#~/_Nodes.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'
import { fromGraffleSelectionObjectLevel } from './4_GraffleSelectionObjectLevel.js'

export const toGraphQLSelectionSetRoot: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  Nodes.SelectionSetNode,
  [
    selectionSet: Select.SelectionSet.AnySelectionSet,
  ]
> = (
  context,
  sddm,
  selectionSet,
) => {
  return Nodes.SelectionSet({
    selections: Object
      .entries(selectionSet)
      .map(([key, value]) => Select.parseSelectionRoot(key, value))
      .flatMap(keyParsed => fromGraffleSelectionObjectLevel(context, sddm, keyParsed)),
  })
}
