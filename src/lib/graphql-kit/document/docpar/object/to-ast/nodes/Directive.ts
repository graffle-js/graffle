import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import { Ast } from '../../../../ast/_.js'
import type { GraphQLPostOperationMapper } from '../mapper.js'
import { toAstValue } from './Value.js'

export const toAstDirective: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentsOrInputObjectFields,
  Ast.DirectiveNode | null,
  [graffleExpressions: Select.ParsedSelectionDirective]
> = (
  context,
  sddmArguments,
  directive,
) => {
  if (directive.arguments === null) return null

  const arguments_: Ast.ArgumentNode[] = []

  for (const argumentName in directive.arguments.parsed) {
    const argumentValue = directive.arguments.parsed[argumentName]

    const sddmArgument = sddmArguments?.[argumentName]
    let argument: Ast.ArgumentNode

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
      const name = Ast.Name({ value: argumentName })
      const value = toAstValue(
        { ...context, value: { isEnum: false } },
        sddmArgument,
        argumentValue,
      )
      argument = Ast.Argument({ name, value })
    }

    arguments_.push(argument)
  }

  return Ast.Directive({
    name: Ast.Name({ value: directive.name }),
    arguments: arguments_,
  })
}
