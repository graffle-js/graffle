import type * as $ from '#graffle/utilities-for-generated'
import * as $$Data from '../data.js'
import * as $$Scalar from '../scalar.js'
import * as $Types from './$$.js'

export * as Schema from './$$.js'

export interface Schema<$Scalars extends $.Schema.Scalar.Registry = $$Scalar.$Registry> {
  name: $$Data.Name
  operationsAvailable: ['mutation']
  RootUnion: $Types.Mutation
  Root: {
    query: null
    mutation: $Types.Mutation
    subscription: null
  }
  allTypes: {
    Mutation: $Types.Mutation
  }
  objects: {}
  unions: {}
  interfaces: {}
  scalarNamesUnion:
    | 'Boolean'
    | 'Float'
    | 'ID'
    | 'Int'
    | 'String'
  scalars: {
    Boolean: $Types.Boolean
    Float: $Types.Float
    ID: $Types.ID
    Int: $Types.Int
    String: $Types.String
  }
  scalarRegistry: $Scalars
  extensions: $.GlobalRegistry.TypeExtensions
}
