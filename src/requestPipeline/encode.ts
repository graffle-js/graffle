import { Docpar } from '#src/docpar/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'

type SchemaDrivenDataMap = Docpar.SchemaDrivenDataMap

export const encodeRequestVariables = ({ sddm, request, scalars }: {
  sddm: SchemaDrivenDataMap
  scalars: GraphqlKit.Schema.Type.Scalars.ScalarMap
  request: GraphqlKit.Request.RequestAnalyzedDocumentNodeInput
}): void => {
  const variableDefinitions = request.operation.variableDefinitions
  if (!variableDefinitions) return

  const parametersMap = new Map(variableDefinitions.map(v => [v.variable.name.value, v]))

  const args = request.variables ?? {}

  // todo align the iteration strategy with other func.
  for (const argName in args) {
    const parameter = parametersMap.get(argName)
    if (!parameter) continue // todo in a strict mode could be error.

    const argValue = args[argName]
    if (argValue === undefined) continue

    const namedType = GraphqlKit.Schema.Ast.getNamedType(parameter.type)
    const sddmNamedType = sddm.inputTypes[namedType.name.value]
    if (!sddmNamedType) continue // todo in a strict mode could be error.

    encodeInputFieldLike(args, argName, argValue, sddmNamedType, scalars)
  }
}

const encodeInputFieldLike = (
  args: Record<string, any>,
  argName: any,
  argValue: any,
  sddmNode: Docpar.SchemaDrivenDataMap.InputNodes,
  scalars: GraphqlKit.Schema.Type.Scalars.ScalarMap,
) => {
  /**
   * Scalar encoding strategy:
   *
   * 1. SDDM always contains Scalar objects (both standard and custom) with codecs.
   *
   * 2. At client initialization, all SDDM scalars are merged into the registry.
   *    - Custom scalars with user-provided codecs use those codecs.
   *    - Custom scalars without user codecs get identity codecs (pass-through).
   *    - Standard scalars (String, Int, etc.) use their standard codecs.
   *
   * 3. Runtime `.scalar()` calls override registry entries, allowing users to add or replace codecs dynamically.
   *
   * The registry is the single source of truth for scalar encoding/decoding.
   */

  if (Docpar.SchemaDrivenDataMap.isScalar(sddmNode)) {
    // Registry is populated from SDDM at client init, with overrides from .scalar()
    const scalar = scalars[sddmNode.name]
    if (!scalar) {
      throw new Error(`Scalar "${sddmNode.name}" not found in registry. This should not happen if the client was properly initialized.`)
    }
    args[argName] = GraphqlKit.Schema.Type.Scalars.applyCodec(scalar.codec.encode, argValue)
    return
  }

  if (Docpar.SchemaDrivenDataMap.isInputObject(sddmNode)) {
    // We could iterate here by two strategies:
    // 1. The number of fields in the variables object given to execute against the document operation.
    // 2. The number of custom scalar fields (direct or transient) on this schema object.
    // The optimal choice is about which is smaller.
    // TODO let users supply an algorithm choice.
    for (const nameOfFieldIsOrContainingCustomScalar of sddmNode.fieldsContainingCustomScalars ?? []) {
      if (!(typeof argValue === `object` && argValue !== null)) continue

      const variableValue2 = argValue[nameOfFieldIsOrContainingCustomScalar]
      if (variableValue2 === undefined) continue

      const sddmNode2 = sddmNode.fields?.[nameOfFieldIsOrContainingCustomScalar]
      if (!sddmNode2?.namedType) continue

      encodeInputFieldLike(
        argValue,
        nameOfFieldIsOrContainingCustomScalar,
        variableValue2,
        sddmNode2.namedType,
        scalars,
      )
    }
  }
}
