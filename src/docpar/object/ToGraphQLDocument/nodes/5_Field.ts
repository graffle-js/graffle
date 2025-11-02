import { Select } from '#src/docpar/object/Select/$.js'
import { Var } from '#src/docpar/object/var/$.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import * as SDDM from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { collectForInlineFragmentLike } from './_collect.js'
import { toGraphQLArgument } from './Argument.js'

export const toGraphQLField: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.OutputField,
  GraphqlKit.Document.Ast.FieldNode | null,
  [field: Field]
> = (
  context,
  sddm,
  field,
) => {
  const fieldSelection = Select.parseSelectionField(field.name, field.value)

  const alias = field.alias
    ? GraphqlKit.Document.Ast.Name({ value: field.alias })
    : undefined

  if (fieldSelection.type === `Indicator`) {
    if (!fieldSelection.select) return null
    return GraphqlKit.Document.Ast.Field({
      name: GraphqlKit.Document.Ast.Name({ value: field.name }),
      ...(alias !== undefined && { alias }),
    })
  }

  const arguments_: GraphqlKit.Document.Ast.ArgumentNode[] = []
  const directives: GraphqlKit.Document.Ast.DirectiveNode[] = []
  const selections: GraphqlKit.Document.Ast.SelectionNode[] = []

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
            // Manual hoisting - user explicitly marked with $ sentinel
            const varInfo = Var.extractVariableInfo(argValue, argNameSchemaStripped)

            const argument = context.variables.capture({
              name: varInfo.name,
              argName: argNameSchemaStripped,
              value: varInfo.defaultValue,
              defaultValue: varInfo.defaultValue, // Include default in GraphQL definition if provided
              isEnum,
              sddmArgument,
              provenance: `manual`,
            })
            arguments_.push(argument)
          } else if (context.variables.enabled) {
            // Automatic hoisting - system extracts all arguments when hoistArguments: true
            // When SDDM is available, use it for precise type inference
            // When SDDM is unavailable, infer types from runtime values
            const argument = context.variables.capture({
              name: argNameSchemaStripped,
              argName: argNameSchemaStripped,
              value: argValue,
              // defaultValue intentionally omitted - not needed when we always pass the value
              isEnum,
              sddmArgument,
              provenance: `automatic`,
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
        if (SDDM.isScalarLike(sddm?.nt) || SDDM.isOutputField(sddm?.nt) || SDDM.isEnum(sddm?.nt)) throw new Error(`schema map scalar on non-scalar graffle selection.`)
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
    : GraphqlKit.Document.Ast.SelectionSet({
      selections,
    })

  return GraphqlKit.Document.Ast.Field({
    name: GraphqlKit.Document.Ast.Name({
      value: field.name,
    }),
    ...(alias !== undefined && { alias }),
    arguments: arguments_,
    directives,
    ...(selectionSet !== undefined && { selectionSet }),
  })
}

export interface Field {
  name: string
  alias: string | null
  value: Select.SelectionSet.Any
}
