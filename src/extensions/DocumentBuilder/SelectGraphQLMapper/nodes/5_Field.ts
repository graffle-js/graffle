import { Nodes } from '#src/lib/grafaid/_Nodes.js'
import { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import { Select } from '../../Select/$.js'
import { Var } from '#src/docpar/object/var/$.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { collectForInlineFragmentLike } from './_collect.js'
import { toGraphQLArgument } from './Argument.js'

export const toGraphQLField: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputField,
  Nodes.FieldNode | null,
  [field: Field]
> = (
  context,
  sddm,
  field,
) => {
  const fieldSelection = Select.parseSelectionField(field.name, field.value)

  const alias = field.alias
    ? Nodes.Name({ value: field.alias })
    : undefined

  if (fieldSelection.type === `Indicator`) {
    if (!fieldSelection.select) return null
    return Nodes.Field({
      name: Nodes.Name({ value: field.name }),
      alias,
    })
  }

  const arguments_: Nodes.ArgumentNode[] = []
  const directives: Nodes.DirectiveNode[] = []
  const selections: Nodes.SelectionNode[] = []

  for (const key in fieldSelection.selectionSet) {
    const keyParsed = Select.parseSelection(key, fieldSelection.selectionSet[key])
    switch (keyParsed.type) {
      case `Arguments`: {
        const sddmArguments = sddm?.a
        for (const argName in keyParsed.arguments) {
          const argNameSchema = argName
          const argValue = keyParsed.arguments[argName]

          // Detect if this is an enum argument (has $ prefix) BEFORE stripping
          const isEnum = Select.Arguments.isEnumKey(argNameSchema)

          // Strip enum prefix for schema argument name
          const argNameSchemaStripped = argNameSchema.replace(Select.Arguments.enumKeyPrefixPattern, ``)
          const sddmArgument = sddmArguments?.[argNameSchemaStripped]

          // Check if this is a $var marker
          const isVarMarker = Var.isVariableMarker(argValue)

          if (isVarMarker) {
            // Extract variable from $var marker (explicit user marking)
            const varInfo = Var.extractVariableInfo(argValue, argNameSchemaStripped)

            const argument = context.variables.capture({
              name: varInfo.name,
              argName: argNameSchemaStripped,
              value: varInfo.defaultValue,
              defaultValue: varInfo.defaultValue, // Include default in GraphQL definition if provided
              isEnum,
              sddmArgument,
            })
            arguments_.push(argument)
          } else if (context.variables.enabled) {
            // Extract all arguments as variables when hoistArguments: true
            // When SDDM is available, use it for precise type inference
            // When SDDM is unavailable, infer types from runtime values
            const argument = context.variables.capture({
              name: argNameSchemaStripped,
              argName: argNameSchemaStripped,
              value: argValue,
              // defaultValue intentionally omitted - not needed when we always pass the value
              isEnum,
              sddmArgument,
            })
            arguments_.push(argument)
          } else {
            // Inline the value
            const argument = toGraphQLArgument(context, sddmArgument, { name: argName, value: argValue })
            arguments_.push(argument)
          }
        }
        continue
      }
      default: {
        // dprint-ignore
        if (SchemaDrivenDataMap.isScalarLike(sddm?.nt) || SchemaDrivenDataMap.isOutputField(sddm?.nt) || SchemaDrivenDataMap.isEnum(sddm?.nt)) throw new Error(`schema map scalar on non-scalar graffle selection.`)
        collectForInlineFragmentLike(context, sddm?.nt, keyParsed, {
          directives,
          selections,
        })
      }
    }
  }

  // Empty array does not work with graphql.web
  // @see https://github.com/0no-co/graphql.web/issues/45
  const selectionSet = selections.length === 0
    ? undefined
    : Nodes.SelectionSet({
      selections,
    })

  return Nodes.Field({
    name: Nodes.Name({
      value: field.name,
    }),
    alias,
    arguments: arguments_,
    directives,
    selectionSet,
  })
}

export interface Field {
  name: string
  alias: string | null
  value: Select.SelectionSet.Any
}
