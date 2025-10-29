import type { Grafaid } from '../$$.js'
import { Select } from '../../object/Select/$.js'
import { Nodes } from '@graffle/graphql/_Nodes.js'
import { Schema } from '@graffle/graphql/schema-types'
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
      : Schema.Scalar.lookupCustomScalarOrFallbackToUnknown(context.scalars, sddm.nt)
    return applyScalar(context, scalar, value)
  }

  if (SDDM.isEnum(sddm?.nt)) {
    return Nodes.EnumValue({ value: String(value) })
  }

  if (value === null) {
    return Nodes.NullValue()
  }

  if (Array.isArray(value)) {
    return Nodes.ListValue({
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
    return Nodes.ObjectValue({
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

        return Nodes.ObjectField({
          name: Nodes.Name({ value: actualFieldName }),
          value: toGraphQLValue(fieldContext, fieldSddm, fieldValue),
        })
      }),
    })
  }

  if (typeof value === `string`) {
    if (context.value.isEnum) {
      return Nodes.EnumValue({ value: String(value) })
    }
    return Nodes.StringValue({ value })
  }

  if (typeof value === `boolean`) {
    return Nodes.BooleanValue({ value })
  }

  if (typeof value === `number`) {
    return Nodes.FloatValue({ value: String(value) })
  }

  throw new Error(`Unsupported value: ${String(value)}`)
}

export type ValueMapper = GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  Grafaid.Document.ValueNode,
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
): Grafaid.Document.ValueNode => {
  if (value === null) return Nodes.NullValue()

  if (Array.isArray(value)) {
    return Nodes.ListValue({
      values: value.map(oneValue => applyScalar(context, scalar, oneValue)),
    })
  }

  const valueEncoded = scalar.codec.encode(value)

  return toGraphQLValue(context, undefined, valueEncoded)
}
