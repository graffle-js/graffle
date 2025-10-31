import { Document } from '#~/document/_.js'
import { Schema } from '#~/schema/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import * as SDDM from '../../../core/sddm/SchemaDrivenDataMap.js'
import { Select } from '../../Select/_.js'
import type { OperationContext } from '../context.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'

export const toGraphQLValue: ValueMapper = (context, sddm, value) => {
  // todo remove? unused.
  // const hookResult = context.hooks?.value?.(context, index, value)
  // if (hookResult) return hookResult

  if (SDDM.isScalarLike(sddm?.nt)) {
    const scalar = SDDM.isScalar(sddm.nt)
      ? sddm.nt
      : Schema.Scalar.lookupCustomScalarOrFallbackToUnknown(context.scalars, sddm.nt)
    return applyScalar(context, scalar, value)
  }

  if (SDDM.isEnum(sddm?.nt)) {
    return Document.Ast.EnumValue({ value: String(value) })
  }

  if (value === null) {
    return Document.Ast.NullValue()
  }

  if (Array.isArray(value)) {
    return Document.Ast.ListValue({
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
    return Document.Ast.ObjectValue({
      fields: Object.entries(value).map(([fieldName, fieldValue]) => {
        // When processing input object fields, check for the enum prefix ($) that was
        // preserved by parseSelection. This $ prefix is our signal that this field's
        // value should be rendered as a GraphQL enum value (unquoted) rather than a
        // string literal (quoted). This is the second half of the enum handling logic:
        // parseSelection preserves the prefix, and here we detect and act on it.
        const isEnumField = Select.Arguments.isEnumKey(fieldName)
        const actualFieldName = isEnumField ? Select.Arguments.enumKeyPrefixStrip(fieldName) : fieldName

        // Get the field's schema info using the actual field name (without $)
        // Only InputObject has the 'f' property for fields
        const fieldSddm = (sddmInputObject && typeof sddmInputObject === 'object' && 'f' in sddmInputObject)
          ? sddmInputObject.f?.[actualFieldName]
          : undefined

        // Pass enum context down so string values are rendered as enum values
        const fieldContext = isEnumField ? { ...context, value: { isEnum: true } } : context

        return Document.Ast.ObjectField({
          name: Document.Ast.Name({ value: actualFieldName }),
          value: toGraphQLValue(fieldContext, fieldSddm, fieldValue),
        })
      }),
    })
  }

  if (typeof value === `string`) {
    if (context.value.isEnum) {
      return Document.Ast.EnumValue({ value: String(value) })
    }
    return Document.Ast.StringValue({ value })
  }

  if (typeof value === `boolean`) {
    return Document.Ast.BooleanValue({ value })
  }

  if (typeof value === `number`) {
    return Document.Ast.FloatValue({ value: String(value) })
  }

  throw new Error(`Unsupported value: ${String(value)}`)
}

export type ValueMapper = GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  Document.Ast.ValueNode,
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
): Document.Ast.ValueNode => {
  if (value === null) return Document.Ast.NullValue()

  if (Array.isArray(value)) {
    return Document.Ast.ListValue({
      values: value.map(oneValue => applyScalar(context, scalar, oneValue)),
    })
  }

  const valueEncoded = scalar.codec.encode(value)

  return toGraphQLValue(context, undefined, valueEncoded)
}
