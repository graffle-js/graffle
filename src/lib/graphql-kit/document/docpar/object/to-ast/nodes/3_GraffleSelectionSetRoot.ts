import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'
import { fromGraffleSelectionObjectLevel } from './4_GraffleSelectionObjectLevel.js'

export const toAstSelectionSetRoot: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.Ast.SelectionSetNode,
  [
    selectionSet: Select.SelectionSet.AnySelectionSet,
  ]
> = (
  context,
  sddm,
  selectionSet,
) => {
  return GraphqlKit.Document.Ast.SelectionSet({
    selections: Object
      .entries(selectionSet)
      .map(([key, value]) => Select.parseSelectionRoot(key, value))
      .flatMap(keyParsed => fromGraffleSelectionObjectLevel(context, sddm, keyParsed)),
  })
}
