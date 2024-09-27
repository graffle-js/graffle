/* eslint-disable */
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'
import type * as Schema from './SchemaBuildtime.js'

export interface Index {
  name: Data.Name
  RootTypesPresent: ['Mutation']
  RootUnion: Schema.Root.Mutation
  Root: {
    Query: null
    Mutation: Schema.Root.Mutation
    Subscription: null
  }
  allTypes: {
    Mutation: Schema.Root.Mutation
  }
  objects: {}
  unions: {}
  interfaces: {}
  error: {
    objects: {}
    objectsTypename: {}
    rootResultFields: {
      Query: {}

      Subscription: {}
      Mutation: {}
    }
  }
}
