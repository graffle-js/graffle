import type * as $ from '../../../../../../../exports/utilities-for-generated.js'
import * as $$Data from '../data.js'
import * as $$Scalar from '../scalar.js'
import * as $Types from './$$.js'

export * as Schema from './$$.js'

export interface Schema<$Scalars extends $.Schema.Scalar.Registry = $$Scalar.$Registry> extends $.Schema {
  name: $$Data.Name
  operationsAvailable: ['query']
  RootUnion: $Types.Query
  Root: {
    query: $Types.Query
    mutation: null
    subscription: null
  }
  allTypes: {
    Query: $Types.Query
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
