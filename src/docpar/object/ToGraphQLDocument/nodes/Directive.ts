import type { Select } from '#src/docpar/object/Select/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { toGraphQLValue } from './Value.js'

export const toGraphQLDirective: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentsOrInputObjectFields,
  GraphqlKit.Document.Ast.DirectiveNode | null,
  [graffleExpressions: Select.ParsedSelectionDirective]
> = (
  context,
  sddmArguments,
  directive,
) => {
  if (directive.arguments === null) return null

  const arguments_: GraphqlKit.Document.Ast.ArgumentNode[] = []

  for (const argumentName in directive.arguments.parsed) {
    const argumentValue = directive.arguments.parsed[argumentName]

    const sddmArgument = sddmArguments?.[argumentName]
    let argument: GraphqlKit.Document.Ast.ArgumentNode

    if (context.variables.enabled && sddmArgument) {
      // Automatic hoisting for directive arguments
      argument = context.variables.capture({
        name: argumentName,
        value: argumentValue,
        isEnum: false,
        sddmArgument,
        provenance: `automatic`,
      })
    } else {
      const name = GraphqlKit.Document.Ast.Name({ value: argumentName })
      const value = toGraphQLValue(
        { ...context, value: { isEnum: false } },
        sddmArgument,
        argumentValue,
      )
      argument = GraphqlKit.Document.Ast.Argument({ name, value })
    }

    arguments_.push(argument)
  }

  return GraphqlKit.Document.Ast.Directive({
    name: GraphqlKit.Document.Ast.Name({ value: directive.name }),
    arguments: arguments_,
  })
}
