import { Kind } from 'graphql'
import { Schema } from '../../entrypoints/schema.js'
import type { RegisteredScalars } from '../../layers/6_client/fluent.js'
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
  scalars: RegisteredScalars
}) => {
  const sddmOutputObject = sddm.roots[request.rootType]
  if (!sddmOutputObject) return
  if (!data) return

  for (const [key, value] of Object.entries(data)) {
    const documentField = findDocumentField(request.operation.selectionSet, key)
    const kSchema = documentField?.name.value ?? key
    const sddmOutputField = sddmOutputObject.f[kSchema]
    if (!sddmOutputField?.nt) continue

    decodeResultValue({
      parentContext: { type: `object`, object: data, key },
      value,
      sddmNode: sddmOutputField.nt,
      documentPart: documentField?.selectionSet ?? null,
      scalars,
    })
  }
}

const decodeResultValue = (input: {
  parentContext: { type: `object`; object: Record<string, any>; key: string } | {
    type: `list`
    object: any[]
    key: number
  }
  value: Value
  sddmNode: SchemaDrivenDataMap.OutputNodes
  documentPart: null | Grafaid.Document.SelectionSetNode
  scalars: RegisteredScalars
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
        parentContext: { type: `list`, object: value, key: index },
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
    for (const [key, value] of Object.entries(object)) {
      const documentField = findDocumentField(documentPart, key)
      const kSchema = documentField?.name.value ?? key
      const sddmOutputField = sddmNode.f[kSchema]
      if (!sddmOutputField?.nt) continue
      decodeResultValue({
        parentContext: { type: `object`, object, key },
        value,
        sddmNode: sddmOutputField.nt,
        documentPart: documentField?.selectionSet ?? null,
        scalars,
      })
    }
  } else {
    if (SchemaDrivenDataMap.isScalar(sddmNode)) {
      const decodedValue = Schema.Scalar.applyCodec(sddmNode.codec.decode, value)
      if (parentContext.type === `object`) {
        parentContext.object[parentContext.key] = decodedValue
      } else {
        parentContext.object[parentContext.key] = decodedValue
      }
    } else if (SchemaDrivenDataMap.isCustomScalarName(sddmNode)) {
      const scalar = Schema.Scalar.lookupCustomScalarOrFallbackToString(scalars, sddmNode)
      const decodedValue = Schema.Scalar.applyCodec(scalar.codec.decode, value)
      if (parentContext.type === `object`) {
        parentContext.object[parentContext.key] = decodedValue
      } else {
        parentContext.object[parentContext.key] = decodedValue
      }
    } else {
      // enums not decoded.
    }
  }
}

const findDocumentField = (
  selectionSet: null | Grafaid.Document.SelectionSetNode,
  k: string,
): Grafaid.Document.FieldNode | null => {
  if (!selectionSet) return null

  for (const selection of selectionSet.selections) {
    if (selection.kind === Kind.FIELD && (selection.alias?.value ?? selection.name.value) === k) {
      return selection
    }
    if (selection.kind === Kind.INLINE_FRAGMENT) {
      const result = findDocumentField(selection.selectionSet, k)
      if (result !== null) return result
    }
  }

  return null
}

type Value = Grafaid.Schema.StandardScalarRuntimeTypes[] | Grafaid.Schema.StandardScalarRuntimeTypes | null | {
  [k: string]: Value
}
