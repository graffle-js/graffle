import type { ParsedSelectionObjectLevel } from '#src/docpar/object/Select/$parseSelection.js'
import type { GraphqlKit } from '#src/lib/grafaid/_.js'
import { Nodes } from '#src/lib/grafaid/_Nodes.js'
import { Lang, Null } from '@wollybeard/kit'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { toGraphQLField } from './5_Field.js'
import { toGraphQLInlineFragments } from './5_InlineFragments.js'

export const fromGraffleSelectionObjectLevel: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  GraphqlKit.Document.SelectionNode[],
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

      return [Nodes.Field({
        name: Nodes.Name({ value: selection.name }),
      })]
    }
    case `InlineFragment`: {
      return toGraphQLInlineFragments(context, sddm, selection)
    }
    case `Alias`: {
      const sddmOutputField = sddm?.f[selection.name]
      return selection.aliases.map(alias => {
        return toGraphQLField(context, sddmOutputField, {
          name: selection.name,
          alias: alias[0],
          value: alias[1],
        })
      }).filter(Null.isNonNull)
    }
    case `SelectionSet`: {
      const sddmOutputField = sddm?.f[selection.name]
      const outputField = {
        alias: null,
        name: selection.name,
        value: selection.selectionSet,
      }
      return [toGraphQLField(context, sddmOutputField, outputField)].filter(Null.isNonNull)
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
