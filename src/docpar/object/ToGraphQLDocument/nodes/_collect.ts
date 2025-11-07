import type { Select } from '#src/docpar/object/Select/_.js'
import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { SchemaDrivenDataMap } from '../../../../lib/graphql-kit/schema/sddm/_.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { fromGraffleSelectionObjectLevel } from './4_GraffleSelectionObjectLevel.js'
import { toGraphQLDirective } from './Directive.js'

export const collectForInlineFragmentLike: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  void,
  [
    keyParsed: Select.ParsedInlineFragmentLevelSelection,
    basket: {
      directives: GraphqlKit.Document.Ast.DirectiveNode[]
      selections: GraphqlKit.Document.Ast.SelectionNode[]
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
