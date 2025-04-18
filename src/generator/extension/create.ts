import type { Extension } from './types.js'

// export interface NamedParameters {
//   name: string
//   onSchema?: (input: SchemaHookParams) => void
//   schemaDrivenDataMap?: {
//     onObjectType?: (input: ObjectTypeHookParams) => void
//     onOutputField?: (input: OutputFieldHookParams) => void
//   }
// }

export const create = (extension: Extension): Extension => {
  return extension
}
