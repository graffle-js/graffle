import { Docpar } from '#src/docpar/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'

type SchemaDrivenDataMap = Docpar.SchemaDrivenDataMap

export interface MapVariablesByTypeNamesInput {
  /**
   * Schema-driven data map containing type information
   */
  sddm: SchemaDrivenDataMap
  /**
   * GraphQL request with operation and variables
   */
  request: GraphqlKit.RequestAnalyzedDocumentNodeInput
  /**
   * GraphQL type names to match (e.g., ['Upload', 'File'])
   */
  typeNames: string[]
  /**
   * Function to transform matched values
   * @param value - The matched value
   * @param path - Path to the value (e.g., 'variables.user.avatar')
   * @param typeName - The GraphQL type name that matched
   * @returns The transformed value
   */
  visitor: (value: unknown, path: string, typeName: string) => unknown
  /**
   * If true, clones variables before applying transformations.
   * If false, mutates variables in place.
   * @defaultValue false
   */
  immutable?: boolean
}

/**
 * Map variables guided by SDDM, visiting only values that match specified GraphQL type names.
 *
 * Uses schema information to efficiently traverse only relevant paths, avoiding unnecessary
 * iteration over unrelated parts of the variable tree.
 *
 * @example
 * ```typescript
 * // Replace Upload types with null (immutable)
 * const modified = mapVariablesByTypeNames({
 *   sddm,
 *   request,
 *   typeNames: ['Upload'],
 *   visitor: (value) => value instanceof Blob ? null : value,
 *   immutable: true
 * })
 * ```
 */
export const mapVariablesByTypeNames = (input: MapVariablesByTypeNamesInput): GraphqlKit.Variables => {
  const { sddm, request, typeNames, visitor, immutable = false } = input

  const variableDefinitions = request.operation.variableDefinitions
  if (!variableDefinitions) return request.variables ?? {}

  const typeNameSet = new Set(typeNames)
  const parametersMap = new Map(variableDefinitions.map(v => [v.variable.name.value, v]))

  const variables = immutable
    ? structuredClone(request.variables ?? {})
    : request.variables ?? {}

  for (const varName in variables) {
    const parameter = parametersMap.get(varName)
    if (!parameter) continue

    const varValue = variables[varName]
    if (varValue === undefined) continue

    const namedType = GraphqlKit.Document.getNamedType(parameter.type)
    const sddmNamedType = sddm.types[namedType.name.value]
    if (!sddmNamedType) continue

    mapValue({
      container: variables,
      key: varName,
      value: varValue,
      sddmNode: sddmNamedType,
      typeNameSet,
      visitor,
      path: `variables.${varName}`,
    })
  }

  return variables
}

const mapValue = (input: {
  container: any
  key: string | number
  value: unknown
  sddmNode: Docpar.InputNodes
  typeNameSet: Set<string>
  visitor: (value: unknown, path: string, typeName: string) => unknown
  path: string
}): void => {
  const { container, key, value, sddmNode, typeNameSet, visitor, path } = input

  if (value === null || value === undefined) {
    return
  }

  // Handle arrays first - recurse with element type
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      mapValue({
        container: value,
        key: index,
        value: item,
        sddmNode,
        typeNameSet,
        visitor,
        path: `${path}.${index}`,
      })
    })
    return
  }

  // Check if this is a type we're looking for
  if (Docpar.isCustomScalarName(sddmNode)) {
    if (typeNameSet.has(sddmNode)) {
      container[key] = visitor(value, path, sddmNode)
    }
    return
  }

  if (Docpar.isScalar(sddmNode)) {
    if (typeNameSet.has(sddmNode.name)) {
      container[key] = visitor(value, path, sddmNode.name)
    }
    return
  }

  // Handle input objects
  if (Docpar.isInputObject(sddmNode)) {
    // Only iterate fields that contain (or are) types we're interested in
    // This uses SDDM's optimization: fcs = fields containing scalars
    for (const fieldName of sddmNode.fcs ?? []) {
      if (!(typeof value === `object` && value !== null)) continue

      const fieldValue = (value as any)[fieldName]
      if (fieldValue === undefined) continue

      const sddmField = sddmNode.f?.[fieldName]
      if (!sddmField?.nt) continue

      mapValue({
        container: value,
        key: fieldName,
        value: fieldValue,
        sddmNode: sddmField.nt,
        typeNameSet,
        visitor,
        path: `${path}.${fieldName}`,
      })
    }
  }
}
