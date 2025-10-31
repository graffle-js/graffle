import type { Graphql } from '@graffle/graphql'
import { Graphql } from '@graffle/graphql'
import { Str } from '@wollybeard/kit'
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
  schema: Str.Code.TS.TermObject.TermObject
}

export interface ObjectTypeHookParams {
  config: Config
  sddmNode: Str.Code.TS.TermObject.TermObject
  graphqlType: Schema.ObjectType
}

export interface OutputFieldHookParams {
  config: Config
  sddmNode: Str.Code.TS.TermObject.DirectiveTermObjectLike<Str.Code.TS.TermObject.TermObject>
  graphqlType: Schema.Field<any, any>
}
