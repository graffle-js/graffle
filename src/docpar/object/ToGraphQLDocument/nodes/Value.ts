import { Select } from '#src/docpar/object/Select/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Schema } from '#src/types/Schema/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import * as SDDM from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { OperationContext } from '../context.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'

export const toGraphQLValue: ValueMapper = (context, sddm, value) => {
  // todo remove? unused.
  // const hookResult = context.hooks?.value?.(context, index, value)
  // if (hookResult) return hookResult

  if (SDDM.isScalarLike(sddm?.nt)) {
    const scalar = SDDM.isScalar(sddm.nt)
      ? sddm.nt
      : Schema.lookupCustomScalarOrFallbackToUnknown(context.scalars, sddm.nt)
    return applyScalar(context, scalar, value)
  }

  if (SDDM.isEnum(sddm?.nt)) {
    return GraphqlKit.Document.Ast.EnumValue({ value: String(value) })
  }

  if (value === null) {
    return GraphqlKit.Document.Ast.NullValue()
  }

  if (Array.isArray(value)) {
    return GraphqlKit.Document.Ast.ListValue({
      values: value.map(oneValue =>
        toGraphQLValue(
          context,
          sddm,
          oneValue,
        )
      ),
    })
  }

  if (typeof value === `object`) {
    const sddmInputObject = sddm?.nt
    return GraphqlKit.Document.Ast.ObjectValue({
      fields: Object.entries(value).map(([fieldName, fieldValue]) => {
        // When processing input object fields, check for the enum prefix ($) that was
        // preserved by parseSelection. This $ prefix is our signal that this field's
        // value should be rendered as a GraphQL enum value (unquoted) rather than a
        // string literal (quoted). This is the second half of the enum handling logic:
        // parseSelection preserves the prefix, and here we detect and act on it.
        const isEnumField = Select.Arguments.isEnumKey(fieldName)
        const actualFieldName = isEnumField ? Select.Arguments.enumKeyPrefixStrip(fieldName) : fieldName

        // Get the field's schema info using the actual field name (without $)
        const fieldSddm = sddmInputObject?.f?.[actualFieldName]

        // Pass enum context down so string values are rendered as enum values
        const fieldContext = isEnumField ? { ...context, value: { isEnum: true } } : context

        return GraphqlKit.Document.Ast.ObjectField({
          name: GraphqlKit.Document.Ast.Name({ value: actualFieldName }),
          value: toGraphQLValue(fieldContext, fieldSddm, fieldValue),
        })
      }),
    })
  }

  if (typeof value === `string`) {
    if (context.value.isEnum) {
      return GraphqlKit.Document.Ast.EnumValue({ value: String(value) })
    }
    return GraphqlKit.Document.Ast.StringValue({ value })
  }

  if (typeof value === `boolean`) {
    return GraphqlKit.Document.Ast.BooleanValue({ value })
  }

  if (typeof value === `number`) {
    return GraphqlKit.Document.Ast.FloatValue({ value: String(value) })
  }

  throw new Error(`Unsupported value: ${String(value)}`)
}

export type ValueMapper = GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  GraphqlKit.Document.Ast.ValueNode,
  [value: unknown],
  AdditionalContext
>

interface AdditionalContext {
  value: {
    isEnum: boolean
  }
}

const applyScalar = (
  context: OperationContext & AdditionalContext,
  scalar: Schema.Scalar,
  value: unknown,
): GraphqlKit.Document.Ast.ValueNode => {
  if (value === null) return GraphqlKit.Document.Ast.NullValue()

  if (Array.isArray(value)) {
    return GraphqlKit.Document.Ast.ListValue({
      values: value.map(oneValue => applyScalar(context, scalar, oneValue)),
    })
  }

  const valueEncoded = scalar.codec.encode(value)

  return toGraphQLValue(context, undefined, valueEncoded)
}
