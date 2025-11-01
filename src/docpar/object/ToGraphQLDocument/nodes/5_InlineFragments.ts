import { Select } from '#src/docpar/object/Select/$.js'
import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Nodes } from '#src/lib/graphql-kit/_Nodes.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { collectForInlineFragmentLike } from './_collect.js'

export const toGraphQLInlineFragments: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.InlineFragmentNode[],
  [inlineFragments: Select.ParsedSelectionInlineFragments]
> = (
  context,
  sddm,
  inlineFragments,
) => {
  return inlineFragments.selectionSets.map(selectionSet => {
    return toGraphQLInlineFragment(context, sddm, {
      selectionSet,
      typeCondition: inlineFragments.typeCondition,
    })
  })
}

const toGraphQLInlineFragment: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.InlineFragmentNode,
  [inlineFragment: InlineFragment]
> = (
  context,
  sddm,
  inlineFragment,
) => {
  const typeCondition = inlineFragment.typeCondition
    ? Nodes.NamedType({
      name: Nodes.Name({
        value: inlineFragment.typeCondition,
      }),
    })
    : undefined

  const directives: Nodes.DirectiveNode[] = []
  const selections: Nodes.SelectionNode[] = []

  for (const key in inlineFragment.selectionSet) {
    const keyParsed = Select.parseSelectionInlineFragment(key, inlineFragment.selectionSet[key])
    collectForInlineFragmentLike(context, sddm, keyParsed, {
      directives,
      selections,
    })
  }

  return Nodes.InlineFragment({
    ...(typeCondition !== undefined && { typeCondition }),
    directives,
    selectionSet: Nodes.SelectionSet({
      selections,
    }),
  })
}

interface InlineFragment {
  typeCondition: Select.ParsedSelectionInlineFragments['typeCondition']
  selectionSet: Select.ParsedSelectionInlineFragments['selectionSets'][number]
}
