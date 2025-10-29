import type { Grafaid } from '../$$.js'
import type { Select } from '../../object/Select/$.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { fromGraffleSelectionObjectLevel } from './4_GraffleSelectionObjectLevel.js'
import { toGraphQLDirective } from './Directive.js'

export const collectForInlineFragmentLike: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  void,
  [
    keyParsed: Select.ParsedInlineFragmentLevelSelection,
    basket: {
      directives: Grafaid.Document.DirectiveNode[]
      selections: Grafaid.Document.SelectionNode[]
    },
  ]
> = (
  context,
  sddm,
  keyParsed,
  basket,
) => {
  switch (keyParsed.type) {
    case `Directive`: {
      const directive = toGraphQLDirective(context, context.sddm?.directives[keyParsed.name], keyParsed)
      if (directive) basket.directives.push(directive)
      break
    }
    default: {
      basket.selections.push(...fromGraffleSelectionObjectLevel(context, sddm, keyParsed))
    }
  }
}
