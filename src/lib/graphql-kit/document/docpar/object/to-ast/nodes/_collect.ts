import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import type { Ast } from '../../../../ast/_.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { fromGraffleSelectionObjectLevel } from './4_GraffleSelectionObjectLevel.js'
import { toAstDirective } from './Directive.js'

export const collectForInlineFragmentLike: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  void,
  [
    keyParsed: Select.ParsedInlineFragmentLevelSelection,
    basket: {
      directives: Ast.DirectiveNode[]
      selections: Ast.SelectionNode[]
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
      const directive = toAstDirective(context, context.sddm?.directives[keyParsed.name], keyParsed)
      if (directive) basket.directives.push(directive)
      break
    }
    default: {
      basket.selections.push(...fromGraffleSelectionObjectLevel(context, sddm, keyParsed))
    }
  }
}
