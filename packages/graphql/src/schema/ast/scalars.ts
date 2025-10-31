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
