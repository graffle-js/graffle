import { Document } from '#~/document/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import { Select } from '../../Select/_.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'
import { fromGraffleSelectionObjectLevel } from './4_GraffleSelectionObjectLevel.js'

export const toGraphQLSelectionSetRoot: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  Document.Ast.SelectionSetNode,
  [
    selectionSet: Select.SelectionSet.AnySelectionSet,
  ]
> = (
  context,
  sddm,
  selectionSet,
) => {
  return Document.Ast.SelectionSet({
    selections: Object
      .entries(selectionSet)
      .map(([key, value]) => Select.parseSelectionRoot(key, value))
      .flatMap(keyParsed => fromGraffleSelectionObjectLevel(context, sddm, keyParsed)),
  })
}
