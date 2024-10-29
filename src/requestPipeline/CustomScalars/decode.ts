import { Kind } from 'graphql'
import { Schema } from '../../entrypoints/schema.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'

/**
 * If a document is given then aliases will be decoded as well.
 */
export const decodeResultData = ({ request, data, sddm, scalars }: {
  /**
   * Result data to decode.
   */
  data: Grafaid.SomeObjectData | null | undefined
  /**
   * Schema Driven Data Map that contains codecs for custom scalars.
   */
  sddm: SchemaDrivenDataMap
  /**
   * Request is used to traverse aliases if any were used.
   */
  request: Grafaid.RequestAnalyzedDocumentNodeInput
  /**
   * Registered custom scalars.
   */
  scalars: Schema.Scalar.ScalarMap
}) => {
  const sddmOutputObject = sddm.operations[request.operation.operation]
  if (!sddmOutputObject) return
  if (!data) return

  decodeResultValue({
    parentContext: null,
    value: data,
    sddmNode: sddmOutputObject,
    documentPart: request.operation.selectionSet,
    scalars,
  })
}

const decodeResultValue = (input: {
  parentContext:
    | null
    | {
      type: `object`
      object: Record<string, any>
      fieldName: string
    }
    | {
      type: `list`
      object: any[]
      index: number
    }
  value: Grafaid.SomeFieldData
  sddmNode: SchemaDrivenDataMap.OutputNodes
  documentPart: null | Grafaid.Document.SelectionSetNode
  scalars: Schema.Scalar.ScalarMap
}): void => {
  const { parentContext, value, sddmNode, documentPart, scalars } = input

  if (value === null) {
    // todo: test case of a custom scalar whose encoded value would be falsy in JS, like 0 or empty string
    return // do nothing
  } else if (Array.isArray(value)) {
    // todo test case of array data of objects
    // todo test case of array data of scalars
    value.forEach((item, index) => {
      decodeResultValue({
        parentContext: { type: `list`, object: value, index },
        value: item,
        sddmNode,
        documentPart,
        scalars,
      })
    })
  } else if (typeof value === `object`) {
    if (!SchemaDrivenDataMap.isOutputObject(sddmNode)) {
      return
      // something went wrong
      // todo in strict mode throw error that sddmNode is inconsistent with data shape.
    }
    const object = value
    for (const [fieldName, value] of Object.entries(object)) {
      // TODO optimize field lookup
      // We need a smart algorithm that considers:
      // key space of schema vs key space of data
      const documentField = findDocumentField(documentPart, fieldName)
      const kSchema = documentField?.name.value ?? fieldName
      const sddmOutputField = sddmNode.f[kSchema]
      if (!sddmOutputField?.nt) continue
      decodeResultValue({
        parentContext: { type: `object`, object, fieldName },
        value,
        sddmNode: sddmOutputField.nt,
        documentPart: documentField?.selectionSet ?? null,
        scalars,
      })
    }
  } else {
    if (!parentContext) {
      // Should be impossible. Strict mode could error here.
      return
    }
    if (SchemaDrivenDataMap.isScalar(sddmNode)) {
      const decodedValue = Schema.Scalar.applyCodec(sddmNode.codec.decode, value)
      if (parentContext.type === `object`) {
        parentContext.object[parentContext.fieldName] = decodedValue
      } else {
        parentContext.object[parentContext.index] = decodedValue
      }
    } else if (SchemaDrivenDataMap.isCustomScalarName(sddmNode)) {
      const scalar = Schema.Scalar.lookupCustomScalarOrFallbackToString(scalars, sddmNode)
      const decodedValue = Schema.Scalar.applyCodec(scalar.codec.decode, value)
      if (parentContext.type === `object`) {
        parentContext.object[parentContext.fieldName] = decodedValue
      } else {
        parentContext.object[parentContext.index] = decodedValue
      }
    } else {
      // enums not decoded.
    }
  }
}

const findDocumentField = (
  selectionSet: null | Grafaid.Document.SelectionSetNode,
  fieldName: string,
): Grafaid.Document.FieldNode | null => {
  if (!selectionSet) return null

  for (const selection of selectionSet.selections) {
    if (selection.kind === Kind.FIELD && (selection.alias?.value ?? selection.name.value) === fieldName) {
      return selection
    }
    if (selection.kind === Kind.INLINE_FRAGMENT) {
      const result = findDocumentField(selection.selectionSet, fieldName)
      if (result !== null) return result
    }
  }

  return null
}
