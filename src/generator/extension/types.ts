import type { Grafaid } from '#lib/grafaid'
import type { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import type { Config } from '../config/config.js'

export interface Extension {
  name: string
  onSchema?: (input: SchemaHookParams) => void
  schemaDrivenDataMap?: {
    onObjectType?: (input: ObjectTypeHookParams) => void
    onOutputField?: (input: OutputFieldHookParams) => void
  }
}

export interface SchemaHookParams {
  config: Config
  schema: CodeGraphQL.TermObject
}

export interface ObjectTypeHookParams {
  config: Config
  sddmNode: CodeGraphQL.TermObject
  graphqlType: Grafaid.Schema.ObjectType
}

export interface OutputFieldHookParams {
  config: Config
  sddmNode: CodeGraphQL.DirectiveTermObjectLike<CodeGraphQL.TermObject>
  graphqlType: Grafaid.Schema.Field<any, any>
}
