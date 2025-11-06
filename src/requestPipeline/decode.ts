import { Docpar } from '#src/docpar/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Kind } from 'graphql'

type SchemaDrivenDataMap = Docpar.SchemaDrivenDataMap

/**
 * If a document is given then aliases will be decoded as well.
 */
export const decodeResultData = ({ request, data, sddm, scalars }: {
  /**
   * Result data to decode.
   */
  data: GraphqlKit.Request.SomeObjectData | null | undefined
  /**
   * Schema Driven Data Map that contains codecs for custom scalars.
   */
  sddm: SchemaDrivenDataMap
  /**
   * Request is used to traverse aliases if any were used.
   */
  request: GraphqlKit.Request.RequestAnalyzedDocumentNodeInput
  /**
   * Registered custom scalars.
   */
  scalars: GraphqlKit.Schema.Type.Scalars.ScalarMap
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
  value: GraphqlKit.Request.SomeFieldData
  sddmNode: Docpar.SchemaDrivenDataMap.OutputNodes
  documentPart: null | GraphqlKit.Document.Ast.SelectionSetNode
  scalars: GraphqlKit.Schema.Type.Scalars.ScalarMap
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
    if (!Docpar.SchemaDrivenDataMap.isOutputObject(sddmNode)) {
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
      const sddmOutputField = sddmNode.fields[kSchema]
      if (!sddmOutputField?.namedType) continue
      decodeResultValue({
        parentContext: { type: `object`, object, fieldName },
        value,
        sddmNode: sddmOutputField.namedType,
        documentPart: documentField?.selectionSet ?? null,
        scalars,
      })
    }
  } else {
    if (!parentContext) {
      // Should be impossible. Strict mode could error here.
      return
    }
    if (Docpar.SchemaDrivenDataMap.isScalar(sddmNode)) {
      // Registry is populated from SDDM at client init, with overrides from .scalar()
      const scalar = scalars[sddmNode.name]
      if (!scalar) {
        throw new Error(`Scalar "${sddmNode.name}" not found in registry. This should not happen if the client was properly initialized.`)
      }
      const decodedValue = GraphqlKit.Schema.Type.Scalars.applyCodec(scalar.codec.decode, value)
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
  selectionSet: null | GraphqlKit.Document.Ast.SelectionSetNode,
  fieldName: string,
): GraphqlKit.Document.Ast.FieldNode | null => {
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
