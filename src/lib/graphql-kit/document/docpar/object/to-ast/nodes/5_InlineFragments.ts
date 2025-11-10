import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { collectForInlineFragmentLike } from './_collect.js'

export const toAstInlineFragments: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.Ast.InlineFragmentNode[],
  [inlineFragments: Select.ParsedSelectionInlineFragments]
> = (
  context,
  sddm,
  inlineFragments,
) => {
  return inlineFragments.selectionSets.map(selectionSet => {
    return toAstInlineFragment(context, sddm, {
      selectionSet,
      typeCondition: inlineFragments.typeCondition,
    })
  })
}

const toAstInlineFragment: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.Ast.InlineFragmentNode,
  [inlineFragment: InlineFragment]
> = (
  context,
  sddm,
  inlineFragment,
) => {
  const typeCondition = inlineFragment.typeCondition
    ? GraphqlKit.Document.Ast.NamedType({
      name: GraphqlKit.Document.Ast.Name({
        value: inlineFragment.typeCondition,
      }),
    })
    : undefined

  const directives: GraphqlKit.Document.Ast.DirectiveNode[] = []
  const selections: GraphqlKit.Document.Ast.SelectionNode[] = []

  for (const key in inlineFragment.selectionSet) {
    const keyParsed = Select.parseSelectionInlineFragment(key, inlineFragment.selectionSet[key])
    collectForInlineFragmentLike(context, sddm, keyParsed, {
      directives,
      selections,
    })
  }

  return GraphqlKit.Document.Ast.InlineFragment({
    ...(typeCondition !== undefined && { typeCondition }),
    directives,
    selectionSet: GraphqlKit.Document.Ast.SelectionSet({
      selections,
    }),
  })
}

interface InlineFragment {
  typeCondition: Select.ParsedSelectionInlineFragments['typeCondition']
  selectionSet: Select.ParsedSelectionInlineFragments['selectionSets'][number]
}
