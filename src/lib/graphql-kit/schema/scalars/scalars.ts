export const standardScalarTypeNames = {
  String: `String`,
  ID: `ID`,
  Int: `Int`,
  Float: `Float`,
  Boolean: `Boolean`,
}

export interface StandardScalarRuntimeTypeMap {
  String: string
  ID: string
  Int: number
  Float: number
  Boolean: boolean
}

export type StandardScalarRuntimeTypes = StandardScalarRuntimeTypeMap[keyof StandardScalarRuntimeTypeMap]

// export const StandardScalarTypeNames = {
//   String: `String`,
//   ID: `ID`,
//   Int: `Int`,
//   Float: `Float`,
//   Boolean: `Boolean`,
// }

// export type StandardScalarTypeNames = keyof typeof StandardScalarTypeNames

// const TypeScriptPrimitiveTypeNames = {
//   string: `string`,
//   number: `number`,
//   boolean: `boolean`,
// }
// type TypeScriptPrimitiveTypeNames = keyof typeof TypeScriptPrimitiveTypeNames

// export const StandardScalarTypeTypeScriptMapping = {
//   String: `string`,
//   ID: `string`,
//   Int: `number`,
//   Float: `number`,
//   Boolean: `boolean`,
// } satisfies Record<
//   StandardScalarTypeNames,
//   TypeScriptPrimitiveTypeNames
// >

// export const isStandardScalarType = (type: GraphQLScalarType) => {
//   return type.name in StandardScalarTypeNames
// }
