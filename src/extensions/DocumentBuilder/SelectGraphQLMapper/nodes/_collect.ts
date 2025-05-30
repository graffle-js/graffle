import type { Grafaid } from '../../../../lib/grafaid/_namespace.js'
import type { SchemaDrivenDataMap } from '../../../../types/SchemaDrivenDataMap/_namespace.js'
import type { Select } from '../../Select/__.js'
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
