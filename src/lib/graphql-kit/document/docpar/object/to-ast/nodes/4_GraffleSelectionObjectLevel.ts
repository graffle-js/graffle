import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { ParsedSelectionObjectLevel } from '#src/lib/graphql-kit/document/docpar/object/select/parseSelection.js'
import { Lang, Null } from '@wollybeard/kit'
import type { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { toAstField } from './5_Field.js'
import { toAstInlineFragments } from './5_InlineFragments.js'

export const fromGraffleSelectionObjectLevel: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.Ast.SelectionNode[],
  [
    keyParsed: ParsedSelectionObjectLevel,
  ]
> = (
  context,
  sddm,
  selection,
) => {
  switch (selection.type) {
    case `Indicator`: {
      if (!selection.select) return []

      return [GraphqlKit.Document.Ast.Field({
        name: GraphqlKit.Document.Ast.Name({ value: selection.name }),
      })]
    }
    case `InlineFragment`: {
      return toAstInlineFragments(context, sddm, selection)
    }
    case `Alias`: {
      const sddmOutputField = sddm?.fields[selection.name]
      return selection.aliases.map(alias => {
        return toAstField(context, sddmOutputField, {
          name: selection.name,
          alias: alias[0],
          value: alias[1],
        })
      }).filter(Null.isNonNull)
    }
    case `SelectionSet`: {
      const sddmOutputField = sddm?.fields[selection.name]
      const outputField = {
        alias: null,
        name: selection.name,
        value: selection.selectionSet,
      }
      return [toAstField(context, sddmOutputField, outputField)].filter(Null.isNonNull)
    }
    // todo make this an extension that requires the schema.
    case `ScalarsWildcard`: {
      // todo get scalar fields from the schema
      throw new Error(`todo`)
    }
    // todo
    // case 'FragmentSpread'
    default: {
      throw Lang.neverCase(selection)
    }
  }
}
