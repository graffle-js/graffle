import { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import { Type } from '../../../../../schema/type/_.js'
import { Ast } from '../../../../ast/_.js'
import type { OperationContext } from '../context.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'

export const toAstValue: ValueMapper = (context, sddm, value) => {
  // todo remove? unused.
  // const hookResult = context.hooks?.value?.(context, index, value)
  // if (hookResult) return hookResult

  if (SchemaDrivenDataMap.isScalarLike(sddm?.namedType)) {
    const scalar = SchemaDrivenDataMap.isScalar(sddm.namedType)
      ? sddm.namedType
      : Type.lookupCustomScalarOrFallbackToUnknown(context.scalars, sddm.namedType)
    return applyScalar(context, scalar, value)
  }

  if (SchemaDrivenDataMap.isEnum(sddm?.namedType)) {
    return Ast.EnumValue({ value: String(value) })
  }

  if (value === null) {
    return Ast.NullValue()
  }

  if (Array.isArray(value)) {
    return Ast.ListValue({
      values: value.map(oneValue =>
        toAstValue(
          context,
          sddm,
          oneValue,
        )
      ),
    })
  }

  if (typeof value === `object`) {
    const sddmInputObject = sddm?.namedType
    return Ast.ObjectValue({
      fields: Object.entries(value).map(([fieldName, fieldValue]) => {
        // When processing input object fields, check for the enum prefix ($) that was
        // preserved by parseSelection. This $ prefix is our signal that this field's
        // value should be rendered as a GraphQL enum value (unquoted) rather than a
        // string literal (quoted). This is the second half of the enum handling logic:
        // parseSelection preserves the prefix, and here we detect and act on it.
        const isEnumField = Select.Arguments.isEnumKey(fieldName)
        const actualFieldName = isEnumField ? Select.Arguments.enumKeyPrefixStrip(fieldName) : fieldName

        // Get the field's schema info using the actual field name (without $)
        const fieldSddm = sddmInputObject?.fields?.[actualFieldName]

        // Pass enum context down so string values are rendered as enum values
        const fieldContext = isEnumField ? { ...context, value: { isEnum: true } } : context

        return Ast.ObjectField({
          name: Ast.Name({ value: actualFieldName }),
          value: toAstValue(fieldContext, fieldSddm, fieldValue),
        })
      }),
    })
  }

  if (typeof value === `string`) {
    if (context.value.isEnum) {
      return Ast.EnumValue({ value: String(value) })
    }
    return Ast.StringValue({ value })
  }

  if (typeof value === `boolean`) {
    return Ast.BooleanValue({ value })
  }

  if (typeof value === `number`) {
    return Ast.FloatValue({ value: String(value) })
  }

  throw new Error(`Unsupported value: ${String(value)}`)
}

export type ValueMapper = GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  Ast.ValueNode,
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
  scalar: Type.Scalar,
  value: unknown,
): Ast.ValueNode => {
  if (value === null) return Ast.NullValue()

  if (Array.isArray(value)) {
    return Ast.ListValue({
      values: value.map(oneValue => applyScalar(context, scalar, oneValue)),
    })
  }

  const valueEncoded = scalar.codec.encode(value)

  return toAstValue(context, undefined, valueEncoded)
}
