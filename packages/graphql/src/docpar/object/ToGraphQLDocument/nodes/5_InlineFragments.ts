import { Document } from '#~/document/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import { Select } from '../../Select/_.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { collectForInlineFragmentLike } from './_collect.js'

export const toGraphQLInlineFragments: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  Document.Ast.InlineFragmentNode[],
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
  Document.Ast.InlineFragmentNode,
  [inlineFragment: InlineFragment]
> = (
  context,
  sddm,
  inlineFragment,
) => {
  const typeCondition = inlineFragment.typeCondition
    ? Document.Ast.NamedType({
      name: Document.Ast.Name({
        value: inlineFragment.typeCondition,
      }),
    })
    : undefined

  const directives: Document.Ast.DirectiveNode[] = []
  const selections: Document.Ast.SelectionNode[] = []

  for (const key in inlineFragment.selectionSet) {
    const keyParsed = Select.parseSelectionInlineFragment(key, inlineFragment.selectionSet[key])
    collectForInlineFragmentLike(context, sddm, keyParsed, {
      directives,
      selections,
    })
  }

  return Document.Ast.InlineFragment({
    ...(typeCondition !== undefined && { typeCondition }),
    directives,
    selectionSet: Document.Ast.SelectionSet({
      selections,
    }),
  })
}

interface InlineFragment {
  typeCondition: Select.ParsedSelectionInlineFragments['typeCondition']
  selectionSet: Select.ParsedSelectionInlineFragments['selectionSets'][number]
}
