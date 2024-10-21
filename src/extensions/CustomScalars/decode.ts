import { Kind } from 'graphql'
import { SchemaKit } from '../../entrypoints/schema.js'
import { applyCodec } from '../../layers/1_Schema/Hybrid/types/Scalar/Scalar.js'
import type { RegisteredScalars } from '../../layers/6_client/fluent.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { SchemaDrivenDataMap } from './schemaDrivenDataMap/__.js'

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

  decodeResultData_({
    data,
    sddmOutputObject,
    documentPart: request.operation.selectionSet,
    scalars,
  })
}

const decodeResultData_ = (input: {
  data: Grafaid.SomeObjectData | null | undefined
  sddmOutputObject: SchemaDrivenDataMap.OutputObject
  documentPart: null | Grafaid.Document.SelectionSetNode
  scalars: RegisteredScalars
}): void => {
  const { data, sddmOutputObject, documentPart, scalars } = input
  if (!data) return

  for (const [k, v] of Object.entries(data)) {
    // todo: test case of a custom scalar whose encoded value would be falsy in JS, like 0 or empty string
    if (v === null) continue

    const documentField = findDocumentField(documentPart, k)

    const kSchema = documentField?.name.value ?? k

    const sddmOutputField = sddmOutputObject.f[kSchema]
    if (!sddmOutputField) continue

    const sddmNode = sddmOutputField.nt

    if (SchemaDrivenDataMap.isScalar(sddmNode)) {
      data[k] = applyCodec(sddmNode.codec.decode, v)
    } else if (SchemaDrivenDataMap.isCustomScalarName(sddmNode)) {
      const scalar = SchemaKit.Scalar.lookupCustomScalarOrFallbackToString(scalars, sddmNode)
      data[k] = applyCodec(scalar.codec.decode, v)
    } else if (SchemaDrivenDataMap.isOutputObject(sddmNode)) {
      decodeResultData_({
        data: v,
        sddmOutputObject: sddmNode,
        documentPart: documentField?.selectionSet ?? null,
        scalars,
      })
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
