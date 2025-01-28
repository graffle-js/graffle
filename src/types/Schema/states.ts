import type { Schema } from './__.js'

export interface Empty extends Schema {
  operationsAvailable: []
  RootUnion: never
  Root: {
    query: null
    mutation: null
    subscription: null
  }
  allTypes: {}
  objects: {}
  unions: {}
  interfaces: {}
  scalars: {}
  scalarNamesUnion: never
  scalarRegistry: {
    map: {}
    typesDecoded: never
    typesEncoded: never
  }
  extensions: {}
}
