import { SchemaKit } from '../../entrypoints/schema.js'
import { applyCodec } from '../../layers/1_Schema/Hybrid/types/Scalar/Scalar.js'
import type { RegisteredScalars } from '../../layers/6_client/fluent.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { SchemaDrivenDataMap } from './schemaDrivenDataMap/__.js'

export const encodeRequestVariables = ({ sddm, request, scalars }: {
  sddm: SchemaDrivenDataMap
  scalars: RegisteredScalars
  request: Grafaid.RequestAnalyzedDocumentNodeInput
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

    const namedType = Grafaid.Document.getNamedType(parameter.type)
    const sddmNamedType = sddm.types[namedType.name.value]
    if (!sddmNamedType) continue // todo in a strict mode could be error.

    encodeInputFieldLike(args, argName, argValue, sddmNamedType, scalars)
  }
}

const encodeInputFieldLike = (
  args: Record<string, any>,
  argName: any,
  argValue: any,
  sddmNode: SchemaDrivenDataMap.InputLike,
  scalars: RegisteredScalars,
) => {
  /**
   * The SDDM for custom scalars can take two forms:
   *
   * 1. It can have references to runtime custom scalar codecs if the user has supplied such references at gentime.
   *
   * 2. If the user has not done said gentime configuration, then the SDDM will only carry the names of custom scalars.
   *
   * In case (2), the runtime scalars can have been supplied by the user in the runtime configuration (e.g. `graffle.scalar(...)`).
   * If they have not, then the String scalar will be used.
   *
   * Case (1) has the disadvantage of more verbose configuration for the user (because it forces the gentime configuration),
   * but the assumed benefit of better performing type generation because they types are simpler, making no use of
   * type-functions. Also, it reduces the runtime configuration needed, which could be DRY if the user has multiple schemas
   * repeating use of the same custom scalar.
   */

  if (SchemaDrivenDataMap.isCustomScalarName(sddmNode)) {
    const scalar = SchemaKit.Scalar.lookupCustomScalarOrFallbackToString(scalars, sddmNode)
    args[argName] = applyCodec(scalar.codec.encode, argValue)
    return
  }

  if (SchemaDrivenDataMap.isScalar(sddmNode)) {
    args[argName] = applyCodec(sddmNode.codec.encode, argValue)
    return
  }

  if (SchemaDrivenDataMap.isInputObject(sddmNode)) {
    // We could iterate here by two strategies:
    // 1. The number of fields in the variables object given to execute against the document operation.
    // 2. The number of custom scalar fields (direct or transient) on this schema object.
    // The optimal choice is about which is smaller.
    // TODO let users supply an algorithm choice.
    for (const nameOfFieldIsOrContainingCustomScalar of sddmNode.fcs ?? []) {
      if (!(typeof argValue === `object` && argValue !== null)) continue

      const variableValue2 = argValue[nameOfFieldIsOrContainingCustomScalar]
      if (variableValue2 === undefined) continue

      const sddmNode2 = sddmNode.f?.[nameOfFieldIsOrContainingCustomScalar]
      if (!sddmNode2?.nt) continue

      encodeInputFieldLike(argValue, nameOfFieldIsOrContainingCustomScalar, variableValue2, sddmNode2.nt, scalars)
    }
  }
}
