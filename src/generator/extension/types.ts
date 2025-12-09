import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Str, type Syn } from '@wollybeard/kit'
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
  schema: Syn.TS.TermObject.TermObject
}

export interface ObjectTypeHookParams {
  config: Config
  sddmNode: Syn.TS.TermObject.TermObject
  graphqlType: GraphqlKit.Schema.Runtime.Nodes.ObjectType
}

export interface OutputFieldHookParams {
  config: Config
  sddmNode: Syn.TS.TermObject.DirectiveTermObjectLike<Syn.TS.TermObject.TermObject>
  graphqlType: GraphqlKit.Schema.Runtime.Nodes.Field<any, any>
}
